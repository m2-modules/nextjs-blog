(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{8360:function(n,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return C},default:function(){return P}});var r,e,a=o(1508),i=o(7294),l=o(1163),_=o(5386),d=o(2732),m=o(2078),s=o(9163),p=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},c=s.ZP.div.withConfig({displayName:"DrawPanel__StyledModal",componentId:"sc-1sqr6fm-0"})(r||(r=p(["\n  visibility: hidden;\n  opacity: 0%;\n  display: flex;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 9;\n  background-color: ",";\n  transition: all 0.5s;\n  &[open] {\n    visibility: visible;\n    opacity: 100%;\n  }\n"],["\n  visibility: hidden;\n  opacity: 0%;\n  display: flex;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 9;\n  background-color: ",";\n  transition: all 0.5s;\n  &[open] {\n    visibility: visible;\n    opacity: 100%;\n  }\n"])),(function(n){return n.backgroundColor})),u=s.ZP.div.withConfig({displayName:"DrawPanel__StyledDrawPanelContainer",componentId:"sc-1sqr6fm-1"})(e||(e=p(["\n  position: fixed;\n  background-color: ",";\n  transition: transform 0.5s;\n  z-index: 10;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  &.left {\n    right: auto;\n    transform: translateX(-100%);\n  }\n  &.right {\n    left: auto;\n    transform: translateX(100%);\n  }\n  &.top {\n    bottom: auto;\n    transform: translateY(-100%);\n  }\n  &.bottom {\n    top: auto;\n    transform: translateY(100%);\n  }\n  &[open] {\n    transform: translate(0%, 0%);\n  }\n"],["\n  position: fixed;\n  background-color: ",";\n  transition: transform 0.5s;\n  z-index: 10;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  &.left {\n    right: auto;\n    transform: translateX(-100%);\n  }\n  &.right {\n    left: auto;\n    transform: translateX(100%);\n  }\n  &.top {\n    bottom: auto;\n    transform: translateY(-100%);\n  }\n  &.bottom {\n    top: auto;\n    transform: translateY(100%);\n  }\n  &[open] {\n    transform: translate(0%, 0%);\n  }\n"])),(function(n){return n.backgroundColor})),w=function(n){var t,o=n.position||"left",r=n.modalColor||"rgba(0, 0, 0, 0.3)",e=n.panelColor||"white",a=null!==(t=n.open)&&void 0!==t&&t,l=n.closeHandler,_=n.children;return i.createElement(i.Fragment,null,i.createElement(c,{backgroundColor:r,open:a,onClick:l}),i.createElement(u,{className:o,backgroundColor:e,open:a},_))},k=(0,o(2237).Z)(i.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),"FormatListNumbered"),f=o(8103),b=o.n(f),h=o(4855),g=o(5893),y=s.ZP.button.withConfig({displayName:"PostDetail__StyledButton",componentId:"sc-1coas7c-0"})(["margin:auto 0px auto auto;visibility:hidden;@media only screen and (max-width:800px){visibility:visible;}"]),x=s.ZP.div.withConfig({displayName:"PostDetail__ContentContainer",componentId:"sc-1coas7c-1"})(["padding:20px;"]),v=s.ZP.img.withConfig({displayName:"PostDetail__StyledImg",componentId:"sc-1coas7c-2"})(["width:-webkit-fill-available;height:300px;object-fit:cover;@media only screen and (max-width:800px){height:200px;}"]),j=function(n){var t=n.post,o=(0,i.useState)(!1),r=o[0],e=o[1],a=(0,i.useState)(null),l=a[0],_=a[1],s=(0,i.useCallback)((function(){e(!r)}),[r]),p=(0,i.useCallback)((function(){e(!1)}),[]);return(0,i.useEffect)((function(){h.G.getContent(t).then(_)}),[t]),t?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{style:{marginLeft:"auto"},className:"transparent",onClick:s,children:(0,g.jsx)(k,{})}),(0,g.jsxs)(m.Z,{children:[t.thumbnailName?(0,g.jsx)(v,{src:h.G.getThumbnailSrc(t),alt:"".concat(t.title)}):"",l?(0,g.jsx)(w,{position:"right",open:r,closeHandler:p,children:(0,g.jsx)(d.Z,{content:l})}):"",(0,g.jsx)(x,{className:b().markdown,dangerouslySetInnerHTML:{__html:l||""}})]})]}):(0,g.jsx)(g.Fragment,{})},C=!0,P=function(){var n=(0,l.useRouter)().query.title;if(!n||Array.isArray(n))return(0,g.jsx)("h1",{children:"No post found"});var t=h.G.getPostByTitle(n);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_.Z,{title:t.title,description:t.description,keywords:[t.category].concat((0,a.Z)(t.tags))}),(0,g.jsx)(j,{post:t})]})}},5386:function(n,t,o){"use strict";o.d(t,{Z:function(){return d}});o(7294);var r=o(9008),e=o(1163),a=o(8711),i={},l=o(8275),_=o(5893);var d=function(n){var t=(0,e.useRouter)(),o=l.Z.find((function(n){return n.path===t.route})),d=function(n,t,o){return(n.title?[n.title,t.title]:null!==o&&void 0!==o&&o.title?[o.title,t.title]:[t.title]).join(" ".concat(t.titleDelimiter||"|"," "))}(n,a.f,o),m=a.f.siteURL,s=n.imageURL,p=n.description||(null===o||void 0===o?void 0:o.description),c=n.keywords,u=a.f.author||a.f.email,w=i.id;return(0,_.jsxs)(r.default,{children:[w?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(w)}),(0,_.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n              \n                gtag('config', '".concat(w,"');\n              ")}})]}):"",(0,_.jsx)("title",{children:d}),(0,_.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,_.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n          if ('serviceWorker' in navigator) {\n            navigator.serviceWorker.register('service-worker.js')\n          }\n        "}}),(0,_.jsx)("link",{rel:"canonical",href:m}),(0,_.jsx)("meta",{property:"og:title",content:d}),s?(0,_.jsx)("meta",{property:"og:image",content:s}):"",p?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("meta",{property:"og:description",content:p}),(0,_.jsx)("meta",{name:"description",content:p})]}):"",null!==c&&void 0!==c&&c.length?(0,_.jsx)("meta",{name:"keyword",content:c.join(", ")}):"",u?(0,_.jsx)("meta",{name:"author",content:u}):"",n.customMeta?n.customMeta:(0,_.jsx)(_.Fragment,{})]})}},2078:function(n,t,o){"use strict";var r=o(9163).ZP.section.withConfig({displayName:"ContentSection",componentId:"sc-8yvxe4-0"})(["display:flex;flex:1;flex-direction:column;max-width:60vw;overflow:hidden;overflow:auto;@media only screen and (max-width:800px){&{max-width:none;}}"]);t.Z=r},487:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[title]",function(){return o(8360)}])},8103:function(n){n.exports={markdown:"markdown_markdown__2Z3FF",octicon:"markdown_octicon__3Pa1D",anchor:"markdown_anchor__GEj8X","octicon-link":"markdown_octicon-link__3UyyU","radio-label":"markdown_radio-label__2UwGI",border:"markdown_border__1GKPJ","border-0":"markdown_border-0__3eUMK","border-bottom":"markdown_border-bottom__mjnGj","rounded-1":"markdown_rounded-1__yLWib","bg-white":"markdown_bg-white__bMt7Y","bg-gray-light":"markdown_bg-gray-light__5q2Bb","text-gray-light":"markdown_text-gray-light__15LFs","mb-0":"markdown_mb-0__2imii","my-2":"markdown_my-2__2wd0u","pl-0":"markdown_pl-0__3O0Sa","py-0":"markdown_py-0__1Uo47","pl-1":"markdown_pl-1__tmkz2","pl-2":"markdown_pl-2__3M6T0","py-2":"markdown_py-2__314rM","pl-3":"markdown_pl-3__2d1Af","px-3":"markdown_px-3__1VIu_","pl-4":"markdown_pl-4__3L5uH","pl-5":"markdown_pl-5__1fwWv","pl-6":"markdown_pl-6__2ml6l",f6:"markdown_f6__1ITEP","lh-condensed":"markdown_lh-condensed__2Chgh","text-bold":"markdown_text-bold__1jQRg","pl-c":"markdown_pl-c__3fzPD","pl-c1":"markdown_pl-c1__3Ry3R","pl-s":"markdown_pl-s__OV2rR","pl-v":"markdown_pl-v__2HJnz","pl-e":"markdown_pl-e__T_M15","pl-en":"markdown_pl-en__1s1Jh","pl-s1":"markdown_pl-s1__tvTaX","pl-smi":"markdown_pl-smi__LGCyx","pl-ent":"markdown_pl-ent__W9_cJ","pl-k":"markdown_pl-k__3rNaX","pl-pds":"markdown_pl-pds__2kHd9","pl-pse":"markdown_pl-pse__2GXhW","pl-sr":"markdown_pl-sr__1L1ol","pl-cce":"markdown_pl-cce__3gVQD","pl-sra":"markdown_pl-sra__24d7i","pl-sre":"markdown_pl-sre__3Qy74","pl-smw":"markdown_pl-smw__4P53F","pl-bu":"markdown_pl-bu__1bgD-","pl-ii":"markdown_pl-ii__1p3yR","pl-c2":"markdown_pl-c2__3RxJu","pl-ml":"markdown_pl-ml__3fR9H","pl-mh":"markdown_pl-mh__9sJyt","pl-ms":"markdown_pl-ms__2EAAN","pl-mi":"markdown_pl-mi__29u8v","pl-mb":"markdown_pl-mb__1iXGb","pl-md":"markdown_pl-md__eF8MW","pl-mi1":"markdown_pl-mi1__tVEbc","pl-mc":"markdown_pl-mc__3Lngp","pl-mi2":"markdown_pl-mi2__1pZ20","pl-mdr":"markdown_pl-mdr__1TipS","pl-ba":"markdown_pl-ba__23Cer","pl-sg":"markdown_pl-sg__3NwDK","pl-corl":"markdown_pl-corl__15qK8","pl-7":"markdown_pl-7__2oLcc","pl-8":"markdown_pl-8__3vJbE","pl-9":"markdown_pl-9__3EAO1","pl-10":"markdown_pl-10__36lP0","pl-11":"markdown_pl-11__2wJUH","pl-12":"markdown_pl-12__19Ptu","markdown-body":"markdown_markdown-body__369Qt",highlight:"markdown_highlight__2w_IR","commit-tease-sha":"markdown_commit-tease-sha__2Bw_r","full-commit":"markdown_full-commit__3kxuh","btn-outline":"markdown_btn-outline__2mRhX","blob-wrapper":"markdown_blob-wrapper__3BIfO","blob-wrapper-embedded":"markdown_blob-wrapper-embedded__1b72j","blob-num":"markdown_blob-num__3iIc_","blob-code":"markdown_blob-code__2lVs3","blob-code-inner":"markdown_blob-code-inner__233xW","pl-token":"markdown_pl-token__1m4Vk",active:"markdown_active__1Dq78","tab-size":"markdown_tab-size__36sIi","task-list-item":"markdown_task-list-item__2lmzU"}},9008:function(n,t,o){n.exports=o(639)},1163:function(n,t,o){n.exports=o(4651)},1508:function(n,t,o){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}function e(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o.d(t,{Z:function(){return e}})}},function(n){n.O(0,[774,888,179],(function(){return t=487,n(n.s=t);var t}));var t=n.O();_N_E=t}]);