"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),o=n(6010),l=n(5281),r=n(5999);const i="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",d="admonitionContent_S0QG";const p={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var t;const{mdxAdmonitionTitle:n,rest:o}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:o}}function h(e){const{children:t,type:n,title:r,icon:h}=m(e),f=function(e){var t;const n=null!=(t=c[e])?t:e;return p[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),p.info)}(n),b=null!=r?r:f.label,{iconComponent:y}=f,v=null!=h?h:a.createElement(y,null);return a.createElement("div",{className:(0,o.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert","alert--"+f.infimaClassName,i)},a.createElement("div",{className:s},a.createElement("span",{className:u},v),b),a.createElement("div",{className:d},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),l=n(6010),r=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:r,block:c,defaultValue:m,values:h,groupId:f,className:b}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,o.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==C&&v.some((t=>t.value===e))&&T(e)}const B=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==C&&(x(t),T(a),null!=f&&w(f,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var o;const t=E.indexOf(e.currentTarget)-1;n=null!=(o=E[t])?o:E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:B,onClick:B},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},1589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),l=n(5488),r=n(5162),i=n(3612);const s={sidebar_position:4},u="Status bar",d={unversionedId:"user-interfaces/elements/status-bar",id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time, pre- and post-processing information,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/status-bar",permalink:"/uppy.io/pr-preview/pr-25/docs/user-interfaces/elements/status-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-25/docs/user-interfaces/elements/informer"},next:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-25/docs/user-interfaces/elements/progress-bar"}},p={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"status-bar"},"Status bar"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/status-bar")," plugin shows upload progress and speed, estimated time, pre- and post-processing information,\nand allows users to control (pause/resume/cancel) the upload."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Try it out together with ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop")),"\nin ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"))),(0,o.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard.\nYou can still use it without it but it may need some (CSS) tweaking for your use case."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/status-bar\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/status-bar\n"))),(0,o.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(i.Z,{type:"caution",mdxType:"Admonition"},(0,o.kt)("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- 1. Add CSS to `<head>` --\x3e\n  <link href="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.css" rel="stylesheet">\n\n  \x3c!-- 2. Add JS before the closing `</body>` --\x3e\n  <script src="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.js"><\/script>\n\n  \x3c!-- 3. Initialize --\x3e\n  <div id="uppy"></div>\n  <script>\n    var uppy = new Uppy.Core()\n    uppy.use(Uppy.StatusBar, { target: \'#status-bar\' })\n  <\/script>\n')))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport StatusBar from '@uppy/status-bar'\n\n// The `@uppy/status-bar` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/status-bar/dist/style.min.css'\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `StatusBar` is therefor the same as the example below.\nnew Uppy().use(StatusBar, {\n  id: 'StatusBar',\n  target: null,\n})\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(StatusBar, {\n  id: 'StatusBar',\n  target: 'body',\n  hideAfterFinish: true,\n  showProgressDetails: false,\n  hideUploadButton: false,\n  hideRetryButton: false,\n  hidePauseResumeButton: false,\n  hideCancelButton: false,\n  doneButtonHandler: null,\n  locale: {},\n})\n")),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this Status Bar (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'StatusBar'"),"). "),(0,o.kt)("p",null,"Use this if you need to add several StatusBar instances."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'body'"),")."),(0,o.kt)("h4",{id:"hideafterfinish"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,o.kt)("p",null,"Hide the Status Bar after the upload is complete (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)("h4",{id:"showprogressdetails"},(0,o.kt)("inlineCode",{parentName:"h4"},"showProgressDetails")),(0,o.kt)("p",null,"Display remaining upload size and estimated time (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"false"),": Uploading: 45%"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"true"),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left")),(0,o.kt)("h4",{id:"hideuploadbutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideUploadButton")),(0,o.kt)("p",null,"Hide the upload button (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom upload button somewhere, and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," API."),(0,o.kt)("h4",{id:"hideretrybutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideRetryButton")),(0,o.kt)("p",null,"Hide the retry button (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.retryAll()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.retryUpload(fileID)")," API."),(0,o.kt)("h4",{id:"hidepauseresumebutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hidePauseResumeButton")),(0,o.kt)("p",null,"Hide pause/resume buttons (for resumable uploads, via ",(0,o.kt)("a",{parentName:"p",href:"http://tus.io"},"tus"),", for example) (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing custom cancel or pause/resume buttons somewhere, and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.pauseResume(fileID)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.removeFile(fileID)")," API."),(0,o.kt)("h4",{id:"hidecancelbutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideCancelButton")),(0,o.kt)("p",null,"Hide the cancel button (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.cancelAll()")," API."),(0,o.kt)("h4",{id:"donebuttonhandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"doneButtonHandler")),(0,o.kt)("p",null,"Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons, once the upload/encoding is done (",(0,o.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("p",null,"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be used to close file picker modals or clear the upload state.\nThis is what the Dashboard plugin, which uses Status Bar internally, sets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const doneButtonHandler = () => {\n  this.uppy.reset()\n  this.requestCloseModal()\n}\n")),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    // Shown in the status bar while files are being uploaded.\n    uploading: 'Uploading',\n    // Shown in the status bar once all files have been uploaded.\n    complete: 'Complete',\n    // Shown in the status bar if an upload failed.\n    uploadFailed: 'Upload failed',\n    // Shown in the status bar while the upload is paused.\n    paused: 'Paused',\n    // Used as the label for the button that retries an upload.\n    retry: 'Retry',\n    // Used as the label for the button that cancels an upload.\n    cancel: 'Cancel',\n    // Used as the label for the button that pauses an upload.\n    pause: 'Pause',\n    // Used as the label for the button that resumes an upload.\n    resume: 'Resume',\n    // Used as the label for the button that resets the upload state after an upload\n    done: 'Done',\n    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n    filesUploadedOfTotal: {\n      0: '%{complete} of %{smart_count} file uploaded',\n      1: '%{complete} of %{smart_count} files uploaded',\n    },\n    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n    dataUploadedOfTotal: '%{complete} of %{total}',\n    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n    xTimeLeft: '%{time} left',\n    // Used as the label for the button that starts an upload.\n    uploadXFiles: {\n      0: 'Upload %{smart_count} file',\n      1: 'Upload %{smart_count} files',\n    },\n    // Used as the label for the button that starts an upload, if another upload has been started in the past\n    // and new files were added later.\n    uploadXNewFiles: {\n      0: 'Upload +%{smart_count} file',\n      1: 'Upload +%{smart_count} files',\n    },\n    upload: 'Upload',\n    retryUpload: 'Retry upload',\n    xMoreFilesAdded: {\n      0: '%{smart_count} more file added',\n      1: '%{smart_count} more files added',\n    },\n    showErrorDetails: 'Show error details',\n  },\n}\n")))}h.isMDXComponent=!0}}]);