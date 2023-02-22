"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2891],{3675:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var t=o(7462),a=(o(7294),o(3905)),i=o(5488),s=o(5162),r=o(3068);const p={sidebar_position:1},l="Remote sources",u={unversionedId:"presets/remote-sources",id:"presets/remote-sources",title:"Remote sources",description:"@uppy/remote-sources is a preset plugin (meaning it bundles and sets up other",source:"@site/docs/presets/remote-sources.mdx",sourceDirName:"presets",slug:"/presets/remote-sources",permalink:"/uppy.io/pr-preview/pr-68/docs/presets/remote-sources",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/presets/remote-sources.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/uppy.io/pr-preview/pr-68/docs/framework-integrations/vue"},next:{title:"Golden Retriever",permalink:"/uppy.io/pr-preview/pr-68/docs/golden-retriever"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Options",id:"options",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>sources</code>",id:"sources",level:3},{value:"<code>companionUrl</code>",id:"companionurl",level:3},{value:"<code>companionHeaders</code>",id:"companionheaders",level:3},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:3},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:3},{value:"<code>target</code>",id:"target",level:3}],c={toc:m};function h(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-sources"},"Remote sources"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/remote-sources")," is a preset plugin (meaning it bundles and sets up other\nplugins) to add all the available remote sources, such Instagram, Google Drive,\nDropbox, and others to Uppy Dashboard in one package."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remote Sources requires Dashboard and automatically installs all its plugins to\nit.")),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/remote-sources")," aims to simplify the setup for adding Companion plugins,\nwhen you want to share the configuration between plugins. If you want your users\nto upload files from any of the remote sources that Uppy offers, this plugin is\nrecommended."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Remote Sources\nplugin to work. Companion handles authentication with the remote services (such\nas Facebook, Dropbox, etc.), downloads the files, and uploads them to the\ndestination. This saves the user bandwidth, especially helpful if they are on a\nmobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/remote-sources\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/remote-sources\n"))),(0,a.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(r.Z,{mdxType:"UppyCdnExample"},'\n        import { RemoteSources } from "{{UPPY_JS_URL}}"\n        const RemoteSources = new Uppy().use(RemoteSources)\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport RemoteSources from '@uppy/remote-sources';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy();\nuppy.use(Dashboard);\nuppy.use(RemoteSources, {\n    companionUrl: 'https://your-companion-url',\n});\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteSources"),")."),(0,a.kt)("h3",{id:"sources"},(0,a.kt)("inlineCode",{parentName:"h3"},"sources")),(0,a.kt)("p",null,"List of remote sources that will be enabled (",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"['Box', 'Dropbox', 'Facebook', 'GoogleDrive','Instagram', 'OneDrive', 'Unsplash', 'Url', 'Zoom']"),")."),(0,a.kt)("p",null,"You don\u2019t need to specify them manually or change them, but if you want to alter\nthe order in which they appear in the Dashboard, or disable some sources, this\noption is for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(RemoteSources, {\n    companionUrl: 'https://your-companion-url',\n    sources: ['Instagram', 'GoogleDrive', 'Unsplash', 'Url'],\n});\n")),(0,a.kt)("h3",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h3",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h3"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,a.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h3",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h3"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorized URL(s)/URL pattern(s) from which OAuth responses should\nbe accepted (",(0,a.kt)("inlineCode",{parentName:"p"},"string | RegExp | Array<string | RegExp>"),", Default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," object, or an array of both."),(0,a.kt)("p",null,"This is useful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on\nseveral hosts. Otherwise, the default value, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),", should do\nfine."),(0,a.kt)("h3",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h3"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},(0,a.kt)("inlineCode",{parentName:"a"},"Request.credentials")," value"),", which tells the\nplugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),",\ndefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"same-origin"),")."),(0,a.kt)("h3",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),")."))}h.isMDXComponent=!0}}]);