import path from 'path';
import customResolveOptions from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import genericNames from 'generic-names';
import pkg from './package.json';

process.env.NODE_ENV = 'production';

const extensions = ['.ts', '.tsx', '.js'];
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

const distDir = 'dist';
const cjsDistDir = `${distDir}/cjs`;
const esmDistDir = `${distDir}/es`;
const cjsIndexCssPath = `${cjsDistDir}/index.css`;
const esmIndexCssPath = `${esmDistDir}/index.css`;

const classNameGenerator = genericNames(
  'conf_[name]_[local]_[hash:base64:6]',
  {
    context: process.cwd(),
  },
);

export default {
  input: path.resolve('src/index.ts'),
  output: [
    {
      dir: cjsDistDir,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      dir: esmDistDir,
      format: 'esm',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  external,
  plugins: [
    customResolveOptions({
      extensions,
    }),
    babel({
      presets: [
        ['react-app', { flow: false, typescript: true, absoluteRuntime: false }],
      ],
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules',
    }),
    commonjs({
      include: /node_modules/,
    }),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ['**/*.svg'],
      emitFiles: true,
    }),
    terser(),
    postcss({
      minimize: true,
      extract: true,
      modules: {
        generateScopedName: classNameGenerator,
      },
      namedExports: true,
      autoModules: false,
      plugins: [autoprefixer(), postcssPresetEnv()],
    }),
    copy({
      targets: [
        { src: ['etc/index.css.d.ts', esmIndexCssPath], dest: distDir },
        { src: ['src/theme/variables.css', 'src/theme/variables.css.d.ts'], dest: distDir },
        { src: 'package.json', dest: distDir },
      ],
      hook: 'writeBundle',
    }),
    del({
      targets: [cjsIndexCssPath, esmIndexCssPath],
      hook: 'closeBundle',
    }),
  ],
};
