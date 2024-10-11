// eslint-disable-next-line @typescript-eslint/no-require-imports
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      preserve: true,
      stage: 3,
      features: {
        'nesting-rules': true,
        'color-function': {
          unresolved: 'warn',
        },
      },
      autoprefixer: {
        grid: true,
      },
    }),
  ],
};
