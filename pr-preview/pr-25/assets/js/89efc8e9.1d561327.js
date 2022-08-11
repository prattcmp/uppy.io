"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},s="Building plugins",i={unversionedId:"guides/building-plugins",id:"guides/building-plugins",title:"Building plugins",description:"You can find already a few useful Uppy plugins out there,",source:"@site/docs/guides/building-plugins.md",sourceDirName:"guides",slug:"/guides/building-plugins",permalink:"/uppy.io/pr-preview/pr-25/docs/guides/building-plugins",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/building-plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using locales",permalink:"/uppy.io/pr-preview/pr-25/docs/guides/using-locales"},next:{title:"Building your own UI with Uppy",permalink:"/uppy.io/pr-preview/pr-25/docs/guides/building-your-own-ui-with-uppy"}},l={},p=[{value:"Creating A Plugin",id:"creating-a-plugin",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>BasePlugin</code>",id:"baseplugin",level:3},{value:"<code>install()</code>",id:"install",level:4},{value:"<code>uninstall()</code>",id:"uninstall",level:4},{value:"<code>afterUpdate()</code>",id:"afterupdate",level:4},{value:"<code>addTarget()</code>",id:"addtarget",level:4},{value:"<code>UIPlugin</code>",id:"uiplugin",level:3},{value:"<code>mount(target)</code>",id:"mounttarget",level:4},{value:"<code>render()</code>",id:"render",level:4},{value:"<code>onMount()</code>",id:"onmount",level:4},{value:"<code>update(state)</code>",id:"updatestate",level:4},{value:"<code>onUnmount()</code>",id:"onunmount",level:4},{value:"Upload Hooks",id:"upload-hooks",level:2},{value:"Progress events",id:"progress-events",level:2},{value:"JSX",id:"jsx",level:2},{value:"Locales",id:"locales",level:2},{value:"Example of a custom plugin",id:"example-of-a-custom-plugin",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-plugins"},"Building plugins"),(0,o.kt)("p",null,"You can find already a few useful Uppy plugins out there,\nbut there might come a time when you will want to build your own.\nPlugins can hook into the upload process or render a custom UI, typically to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Render some custom UI element, such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/statusbar"},"StatusBar")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/dashboard"},"Dashboard"),"."),(0,o.kt)("li",{parentName:"ul"},"Do the actual uploading, such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/xhrupload"},"XHRUpload")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/tus"},"Tus"),"."),(0,o.kt)("li",{parentName:"ul"},"Do work before the upload, like compressing an image or calling external API."),(0,o.kt)("li",{parentName:"ul"},"Interact with a third-party service to process uploads correctly,\nsuch as ",(0,o.kt)("a",{parentName:"li",href:"/docs/transloadit"},"Transloadit")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws-s3"},"AwsS3"),".")),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"#Example-of-a-custom-plugin"},"full example of a plugin")," below."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating A Plugin"),(0,o.kt)("p",null,"Uppy has two classes to create plugins with. ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," for plugins that don\u2019t need a user interface,\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," for onces that do. Each plugin has an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"s are used to uniquely identify plugins.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," can be anything\u2014some plugins use ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"s to decide whether to do something to some other plugin.\nFor example, when targeting plugins at the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," plugin,\nthe Dashboard uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," to figure out where to mount different UI elements.\n",(0,o.kt)("inlineCode",{parentName:"p"},"'acquirer'"),"-type plugins are mounted into the tab bar,\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"'progressindicator'"),"-type plugins are mounted into the progress bar area."),(0,o.kt)("p",null,"The plugin constructor receives the Uppy instance in the first parameter,\nand any options passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.use()")," in the second parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import BasePlugin from '@uppy/core/lib/BasePlugin.js'\n\nexport default class MyPlugin extends BasePlugin {\n  constructor (uppy, opts) {\n    super(uppy, opts)\n    this.id = opts.id || 'MyPlugin'\n    this.type = 'example'\n  }\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"Plugins can define methods to execute certain tasks.\nThe most important method is ",(0,o.kt)("inlineCode",{parentName:"p"},"install()"),", which is called when a plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},".use"),"d."),(0,o.kt)("p",null,"All the below methods are optional! Only define the methods you need."),(0,o.kt)("h3",{id:"baseplugin"},(0,o.kt)("inlineCode",{parentName:"h3"},"BasePlugin")),(0,o.kt)("h4",{id:"install"},(0,o.kt)("inlineCode",{parentName:"h4"},"install()")),(0,o.kt)("p",null,"Called when the plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},".use"),"d. Do any setup work here,\nlike attaching events or adding ",(0,o.kt)("a",{parentName:"p",href:"#Upload-Hooks"},"upload hooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class MyPlugin extends UIPlugin {\n  // ...\n  install () {\n    this.uppy.on('upload-progress', this.onProgress)\n    this.uppy.addPostProcessor(this.afterUpload)\n  }\n}\n")),(0,o.kt)("h4",{id:"uninstall"},(0,o.kt)("inlineCode",{parentName:"h4"},"uninstall()")),(0,o.kt)("p",null,"Called when the plugin is removed, or the Uppy instance is closed.\nThis should undo all the work done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"install()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class MyPlugin extends UIPlugin {\n  // ...\n  uninstall () {\n    this.uppy.off('upload-progress', this.onProgress)\n    this.uppy.removePostProcessor(this.afterUpload)\n  }\n}\n")),(0,o.kt)("h4",{id:"afterupdate"},(0,o.kt)("inlineCode",{parentName:"h4"},"afterUpdate()")),(0,o.kt)("p",null,"Called after every state update with a debounce, after everything has mounted."),(0,o.kt)("h4",{id:"addtarget"},(0,o.kt)("inlineCode",{parentName:"h4"},"addTarget()")),(0,o.kt)("p",null,"Use this to add your plugin to another plugin\u2019s target.\nThis is what ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard")," uses to add other plugins to its UI."),(0,o.kt)("h3",{id:"uiplugin"},(0,o.kt)("inlineCode",{parentName:"h3"},"UIPlugin")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," class so it will also contain all the above methods."),(0,o.kt)("h4",{id:"mounttarget"},(0,o.kt)("inlineCode",{parentName:"h4"},"mount(target)")),(0,o.kt)("p",null,"Mount this plugin to the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," element. ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," can be a CSS query selector, a DOM element, or another Plugin.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," is a Plugin, the source (current) plugin will register with the target plugin,\nand the latter can decide how and where to render the source plugin."),(0,o.kt)("p",null,"This method can be overridden to support for different render engines."),(0,o.kt)("h4",{id:"render"},(0,o.kt)("inlineCode",{parentName:"h4"},"render()")),(0,o.kt)("p",null,"Render this plugin\u2019s UI. Uppy uses ",(0,o.kt)("a",{parentName:"p",href:"https://preactjs.com"},"Preact")," as its view engine,\nso ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," should return a Preact element. ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," is automatically called by Uppy on each state change."),(0,o.kt)("h4",{id:"onmount"},(0,o.kt)("inlineCode",{parentName:"h4"},"onMount()")),(0,o.kt)("p",null,"Called after Preact has rendered the components of the plugin."),(0,o.kt)("h4",{id:"updatestate"},(0,o.kt)("inlineCode",{parentName:"h4"},"update(state)")),(0,o.kt)("p",null,"Called on each state update.\nYou will rarely need to use this, unless if you want to build a UI plugin using something other than Preact."),(0,o.kt)("h4",{id:"onunmount"},(0,o.kt)("inlineCode",{parentName:"h4"},"onUnmount()")),(0,o.kt)("p",null,"Called after the elements have been removed from the DOM. Can be used to do some clean up or other side-effects."),(0,o.kt)("h2",{id:"upload-hooks"},"Upload Hooks"),(0,o.kt)("p",null,"When creating an upload, Uppy runs files through an upload pipeline.\nThe pipeline consists of three parts, each of which can be hooked into: Preprocessing, Uploading, and Postprocessing.\nPreprocessors can be used to configure uploader plugins, encrypt files, resize images, etc., before uploading them.\nUploaders do the actual uploading work, such as creating an XMLHttpRequest object and sending the file.\nPostprocessors do their work after files have been uploaded completely.\nThis could be anything from waiting for a file to propagate across a CDN,\nto sending another request to relate some metadata to the file."),(0,o.kt)("p",null,"Each hook is a function that receives an array containing the file IDs that are being uploaded,\nand returns a Promise to signal completion.\nHooks are added and removed through ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," methods: ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#addpreprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addPreProcessor")),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#adduploaderfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addUploader")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#addpostprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addPostProcessor")),",\nand their ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#removepreprocessorremoveuploaderremovepostprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"remove*"))," counterparts.\nNormally, hooks should be added during the plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"install()")," method, and removed during the ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall()")," method."),(0,o.kt)("p",null,"Additionally, upload hooks can fire events to signal progress."),(0,o.kt)("p",null,"When adding hooks, make sure to bind the hook ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," beforehand!\nOtherwise, it will be impossible to remove. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class MyPlugin extends BasePlugin {\n  constructor (uppy, opts) {\n    super(uppy, opts)\n    this.id = opts.id || 'MyPlugin'\n    this.type = 'example'\n    this.prepareUpload = this.prepareUpload.bind(this) // \u2190 this!\n  }\n\n  prepareUpload (fileIDs) {\n    console.log(this) // `this` refers to the `MyPlugin` instance.\n    return Promise.resolve()\n  }\n\n  install () {\n    this.uppy.addPreProcessor(this.prepareUpload)\n  }\n\n  uninstall () {\n    this.uppy.removePreProcessor(this.prepareUpload)\n  }\n}\n")),(0,o.kt)("p",null,"Or you can define the method as a class field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class MyPlugin extends UIPlugin {\n  constructor (uppy, opts) {\n    super(uppy, opts)\n    this.id = opts.id || 'MyPlugin'\n    this.type = 'example'\n  }\n\n  prepareUpload = (fileIDs) => { // \u2190 this!\n    console.log(this) // `this` refers to the `MyPlugin` instance.\n    return Promise.resolve()\n  }\n\n  install () {\n    this.uppy.addPreProcessor(this.prepareUpload)\n  }\n\n  uninstall () {\n    this.uppy.removePreProcessor(this.prepareUpload)\n  }\n}\n")),(0,o.kt)("h2",{id:"progress-events"},"Progress events"),(0,o.kt)("p",null,"Progress events can be fired for individual files to show feedback to the user.\nFor upload progress events, only emitting how many bytes are expected and how many have been uploaded is enough.\nUppy will handle calculating progress percentages, upload speed, etc."),(0,o.kt)("p",null,"Preprocessing and postprocessing progress events are plugin-dependent and can refer to anything,\nso Uppy doesn\u2019t try to be smart about them.\nProcessing progress events can be of two types: determinate or indeterminate.\nSome processing does not have meaningful progress beyond \u201cnot done\u201d and \u201cdone\u201d.\nFor example, sending a request to initialize a server-side resource that will serve as the upload destination.\nIn those situations, indeterminate progress is suitable.\nOther processing does have meaningful progress.\nFor example, encrypting a large file.\nIn those situations, determinate progress is suitable."),(0,o.kt)("p",null,"Here are the relevant events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#preprocess-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"preprocess-progress"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#upload-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"upload-progress"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#postprocess-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"postprocess-progress")))),(0,o.kt)("h2",{id:"jsx"},"JSX"),(0,o.kt)("p",null,"Since Uppy uses Preact and not React, the default Babel configuration for JSX elements does not work.\nYou have to import the Preact ",(0,o.kt)("inlineCode",{parentName:"p"},"h")," function and tell Babel to use it by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"/** @jsx h */")," comment at the top of the file."),(0,o.kt)("p",null,"See the Preact ",(0,o.kt)("a",{parentName:"p",href:"https://preactjs.com/guide/getting-started"},"Getting Started Guide")," for more on Babel and JSX."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @jsx h */\nimport { UIPlugin } from '@uppy/core'\nimport { h } from 'preact'\n\nclass NumFiles extends UIPlugin {\n  render () {\n    const numFiles = Object.keys(this.uppy.state.files).length\n\n    return (\n      <div>\n        Number of files:\n        {' '}\n        {numFiles}\n      </div>\n    )\n  }\n}\n")),(0,o.kt)("h2",{id:"locales"},"Locales"),(0,o.kt)("p",null,"For any user facing language that you use while writing your Plugin,\nplease provide them as strings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultLocale")," property like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.defaultLocale = {\n  strings: {\n    youCanOnlyUploadFileTypes: 'You can only upload: %{types}',\n    youCanOnlyUploadX: {\n      0: 'You can only upload %{smart_count} file',\n      1: 'You can only upload %{smart_count} files',\n      2: 'You can only upload %{smart_count} files',\n    },\n  },\n}\n")),(0,o.kt)("p",null,"This allows them to be overridden by Locale Packs,\nor directly when users pass ",(0,o.kt)("inlineCode",{parentName:"p"},"locale: { strings: youCanOnlyUploadFileTypes: 'Something else completely about %{types}'} }"),". For this to work, it\u2019s also required that you call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.i18nInit()")," in the plugin constructor."),(0,o.kt)("h2",{id:"example-of-a-custom-plugin"},"Example of a custom plugin"),(0,o.kt)("p",null,"Below is a full example of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arturi/uppy-plugin-image-compressor"},"small plugin")," that compresses images before uploading them. You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"compressorjs")," method with any other work you need to do. This works especially well for async stuff, like calling an external API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { UIPlugin } from '@uppy/core'\nimport Translator from '@uppy/utils/lib/Translator'\nimport Compressor from 'compressorjs/dist/compressor.esm.js'\n\nclass UppyImageCompressor extends UIPlugin {\n  constructor (uppy, opts) {\n    const defaultOptions = {\n      quality: 0.6,\n    }\n    super(uppy, { ...defaultOptions, ...opts })\n\n    this.id = this.opts.id || 'ImageCompressor'\n    this.type = 'modifier'\n\n    this.defaultLocale = {\n      strings: {\n        compressingImages: 'Compressing images...',\n      },\n    }\n\n    // we use those internally in `this.compress`, so they\n    // should not be overriden\n    delete this.opts.success\n    delete this.opts.error\n\n    this.i18nInit()\n  }\n\n  compress (blob) {\n    return new Promise((resolve, reject) => new Compressor(blob, ({\n      ...this.opts,\n      success (result) {\n        return resolve(result)\n      },\n      error (err) {\n        return reject(err)\n      },\n    })))\n  }\n\n  prepareUpload = (fileIDs) => {\n    const promises = fileIDs.map((fileID) => {\n      const file = this.uppy.getFile(fileID)\n      this.uppy.emit('preprocess-progress', file, {\n        mode: 'indeterminate',\n        message: this.i18n('compressingImages'),\n      })\n\n      if (!file.type.startsWith('image/')) {\n        return\n      }\n\n      return this.compress(file.data).then((compressedBlob) => {\n        this.uppy.log(`[Image Compressor] Image ${file.id} size before/after compression: ${file.data.size} / ${compressedBlob.size}`)\n        this.uppy.setFileState(fileID, { data: compressedBlob })\n      }).catch((err) => {\n        this.uppy.log(`[Image Compressor] Failed to compress ${file.id}:`, 'warning')\n        this.uppy.log(err, 'warning')\n      })\n    })\n\n    const emitPreprocessCompleteForAll = () => {\n      fileIDs.forEach((fileID) => {\n        const file = this.uppy.getFile(fileID)\n        this.uppy.emit('preprocess-complete', file)\n      })\n    }\n\n    // Why emit `preprocess-complete` for all files at once, instead of\n    // above when each is processed?\n    // Because it leads to StatusBar showing a weird \u201cupload 6 files\u201d button,\n    // while waiting for all the files to complete pre-processing.\n    return Promise.all(promises)\n      .then(emitPreprocessCompleteForAll)\n  }\n\n  install () {\n    this.uppy.addPreProcessor(this.prepareUpload)\n  }\n\n  uninstall () {\n    this.uppy.removePreProcessor(this.prepareUpload)\n  }\n}\n\nexport default UppyImageCompressor\n")))}d.isMDXComponent=!0}}]);