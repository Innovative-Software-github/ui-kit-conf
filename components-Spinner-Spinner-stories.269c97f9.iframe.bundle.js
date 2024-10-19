"use strict";(self.webpackChunkui_kit_conf=self.webpackChunkui_kit_conf||[]).push([[879],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Spinner/Spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".m6c6ivJb2__bh6ILoZTM {\n  --PI: 3.14159265358979;\n  --circumference: calc(var(--PI) * var(--conf-spinner-radius) * 2px);\n\n  display: inline-block;\n  color: var(--conf-color-black);\n}\n\n.m6c6ivJb2__bh6ILoZTM svg {\n  display: block;\n  animation: Ln8wJhujuwsqzL9WKlkr 2s linear infinite;\n}\n\n.m6c6ivJb2__bh6ILoZTM circle {\n  transform-origin: center;\n  stroke-dasharray: calc(var(--circumference));\n  animation: m6c6ivJb2__bh6ILoZTM 2s ease-out infinite;\n}\n\n@keyframes m6c6ivJb2__bh6ILoZTM {\n  0% {\n    stroke-dashoffset: calc(var(--circumference) * 1);\n  }\n  50% {\n    stroke-dashoffset: calc(var(--circumference) * 0.25);\n    transform:rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: calc(var(--circumference) * 1);\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes Ln8wJhujuwsqzL9WKlkr {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n","",{version:3,sources:["webpack://./src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,mEAAmE;;EAEnE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,kDAAsC;AACxC;;AAEA;EACE,wBAAwB;EACxB,4CAA4C;EAC5C,oDAAuC;AACzC;;AAEA;EACE;IACE,iDAAiD;EACnD;EACA;IACE,oDAAoD;IACpD,wBAAwB;EAC1B;EACA;IACE,iDAAiD;IACjD,wBAAwB;EAC1B;AACF;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC",sourcesContent:[".spinner {\n  --PI: 3.14159265358979;\n  --circumference: calc(var(--PI) * var(--conf-spinner-radius) * 2px);\n\n  display: inline-block;\n  color: var(--conf-color-black);\n}\n\n.spinner svg {\n  display: block;\n  animation: rotation 2s linear infinite;\n}\n\n.spinner circle {\n  transform-origin: center;\n  stroke-dasharray: calc(var(--circumference));\n  animation: spinner 2s ease-out infinite;\n}\n\n@keyframes spinner {\n  0% {\n    stroke-dashoffset: calc(var(--circumference) * 1);\n  }\n  50% {\n    stroke-dashoffset: calc(var(--circumference) * 0.25);\n    transform:rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: calc(var(--circumference) * 1);\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes rotation {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"m6c6ivJb2__bh6ILoZTM",rotation:"Ln8wJhujuwsqzL9WKlkr"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Spinner/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpinnerStory:()=>SpinnerStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Spinner/Spinner.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/utils.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_Spinner__WEBPACK_IMPORTED_MODULE_1__.y},SpinnerStory={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",gap:"30px",alignItems:"flex-end",padding:"50px",borderRadius:"10px",background:"#DADADA"}},"XXL",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"xxl"}),"XL",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"xl"}),"L",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"l"}),"M",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"m"}),"S",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"s"}),"XS",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_1__.y,{size:"xs"}))),argTypes:{size:{type:"string",className:"filed",options:[...Object.values(_utils__WEBPACK_IMPORTED_MODULE_2__.Jl)],control:{type:"select"}}}},__namedExportsOrder=["SpinnerStory"];SpinnerStory.parameters={...SpinnerStory.parameters,docs:{...SpinnerStory.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100vh'\n  }}>\n      <div style={{\n      display: 'flex',\n      gap: '30px',\n      alignItems: 'flex-end',\n      padding: '50px',\n      borderRadius: '10px',\n      background: '#DADADA'\n    }}>\n        XXL\n        <Spinner size=\"xxl\" />\n        XL\n        <Spinner size=\"xl\" />\n        L\n        <Spinner size=\"l\" />\n        M\n        <Spinner size=\"m\" />\n        S\n        <Spinner size=\"s\" />\n        XS\n        <Spinner size=\"xs\" />\n      </div>\n    </div>,\n  argTypes: {\n    size: {\n      type: 'string',\n      className: 'filed',\n      options: [...Object.values(spinnerSize)],\n      control: {\n        type: 'select'\n      }\n    }\n  }\n}",...SpinnerStory.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),utils=__webpack_require__("./src/components/Spinner/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Spinner_module=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Spinner/Spinner.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Spinner_module.A,options);const Spinner_Spinner_module=Spinner_module.A&&Spinner_module.A.locals?Spinner_module.A.locals:void 0,Spinner=props=>{const{className,size="m"}=props,dimension=utils.dN[size],radius=utils.jw[size],width=utils.V3[size],position=dimension/2,style={"--conf-spinner-radius":radius};return react.createElement("span",{className:(0,clsx.A)(Spinner_Spinner_module.spinner,className),style},react.createElement("svg",{width:dimension,height:dimension,viewBox:`0 0 ${dimension} ${dimension}`,stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("circle",{cx:position,cy:position,r:radius,strokeWidth:width,stroke:"inherit",strokeLinecap:"round"})))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"spinnerSize[union]",raw:"typeof spinnerSize[keyof typeof spinnerSize]"},description:""}}}},"./src/components/Spinner/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jl:()=>spinnerSize,V3:()=>widthBySize,dN:()=>dimensionBySize,jw:()=>radiusBySize});const spinnerSize={XS:"xs",S:"s",M:"m",L:"l",XL:"xl",XXL:"xxl"},dimensionBySize={xs:12,s:16,m:20,l:24,xl:32,xxl:64},radiusBySize={xs:3.5,s:5,m:6,l:7,xl:10,xxl:20},widthBySize={xs:1.8,s:2.2,m:3.1,l:3.6,xl:4,xxl:4.8}}}]);