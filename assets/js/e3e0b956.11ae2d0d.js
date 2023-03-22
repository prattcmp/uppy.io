"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>c});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||n;return r?o.createElement(c,i(i({ref:t},l),{},{components:r})):o.createElement(c,i({ref:t},l))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={title:"Image Editor \ud83c\udf08",date:new Date("2020-07-21T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.18-image-editor/image-editor-dashboard.jpg",published:!0,slug:"2020/07/1.18/image/editor"},i=void 0,p={permalink:"/blog/2020/07/1.18/image/editor",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-07-1.18-image-editor.md",source:"@site/blog/2020-07-1.18-image-editor.md",title:"Image Editor \ud83c\udf08",description:"One of the most-requested Uppy features, the",date:"2020-07-21T00:00:00.000Z",formattedDate:"July 21, 2020",tags:[],readingTime:1.23,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Image Editor \ud83c\udf08",date:"2020-07-21T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.18-image-editor/image-editor-dashboard.jpg",published:!0,slug:"2020/07/1.18/image/editor"},prevItem:{title:"Companion 2.0 is here",permalink:"/blog/2020/09/companion/2.0"},nextItem:{title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",permalink:"/blog/2020/03/custom/providers"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the most-requested Uppy features, the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/image-editor/"},"Image Editor"),", has landed (as beta) in 1.18."),(0,a.kt)("video",{alt:"Demo video showing Uppy with Image Editor plugin \u2014 cropping, rotating and resizing images",poster:"https://uppy.io/img/blog/1.18-image-editor/image-editor-dashboard.jpg",muted:!0,autoplay:!0,loop:!0},(0,a.kt)("source",{src:"/img/blog/1.18-image-editor/image-editor-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/1.18-image-editor/image-editor-demo.mp4"),(0,a.kt)("p",null,"The editor currently supports cropping, resizing, rotating, flipping and zooming\nyour images in and out. You can try it out on\n",(0,a.kt)("a",{parentName:"p",href:"/examples/dashboard/"},"the Dashboard example page"),"."),(0,a.kt)("p",null,"Under the hood we are using the excellent open source (just like Uppy itself)\n",(0,a.kt)("a",{parentName:"p",href:"https://fengyuanchen.github.io/cropperjs/"},"Cropper.js")," library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @uppy/image-editor\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Uppy = require('@uppy/core');\nconst Dashboard = require('@uppy/dashboard');\nconst ImageEditor = require('@uppy/image-editor');\n\nconst uppy = new Uppy();\nuppy.use(Dashboard);\nuppy.use(ImageEditor, {\n    target: Dashboard,\n    quality: 0.8, // for the resulting image, 0.8 is a sensible default\n});\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://uppy.io/img/blog/1.18-image-editor/image-editor-dashboard.jpg",alt:"Uppy with Image Editor plugin screenshot \u2014 cropping, rotating and resizing images"})),(0,a.kt)("p",null,"The Image Editor plugin is meant to be used with the Dashboard UI, but in theory\nit can work without it, rendered somewhere else. This has not been tested, try\nat your own risk ;-)"),(0,a.kt)("p",null,"You can\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/docs/image-editor/#cropperOptions"},"override the options from Cropper.js"),",\ntoo. Check out\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/docs/image-editor"},"the docs for up to date options and events"),"."),(0,a.kt)("p",null,"Please leave your feedback\n",(0,a.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/uppy_io/status/1285532376249110528"},"on Twitter"),"."),(0,a.kt)("blockquote",{class:"twitter-tweet"},(0,a.kt)("p",{lang:"en",dir:"ltr"},"\ud83d\uddbc One of the most-requested Uppy features, the Image Editor, for cropping, resizing, rotating, flipping and zooming your images is live now! ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Check it out: ",(0,a.kt)("a",{href:"https://t.co/dDXRoW0HGj"},"https://t.co/dDXRoW0HGj")," ",(0,a.kt)("a",{href:"https://t.co/IhYo0gwtvP"},"pic.twitter.com/IhYo0gwtvP")),"\u2014 Uppy (@uppy_io) ",(0,a.kt)("a",{href:"https://twitter.com/uppy_io/status/1285532376249110528?ref_src=twsrc%5Etfw"},"July 21, 2020"))," ",(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))}d.isMDXComponent=!0}}]);