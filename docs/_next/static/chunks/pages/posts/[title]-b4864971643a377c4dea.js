(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{8360:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return N},default:function(){return P}});var o,i,r=e(1508),a=e(1163),s=e(649),l=e(266),c=e(809),u=e.n(c),d=e(7294),p=e(2732),f=e(2078),m=e(9163),h=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},v=m.ZP.div.withConfig({displayName:"DrawPanel__StyledModal",componentId:"sc-1sqr6fm-0"})(o||(o=h(["\n  visibility: hidden;\n  opacity: 0%;\n  display: flex;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 9;\n  background-color: ",";\n  transition: all 0.5s;\n  &[open] {\n    visibility: visible;\n    opacity: 100%;\n  }\n"],["\n  visibility: hidden;\n  opacity: 0%;\n  display: flex;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 9;\n  background-color: ",";\n  transition: all 0.5s;\n  &[open] {\n    visibility: visible;\n    opacity: 100%;\n  }\n"])),(function(n){return n.backgroundColor})),x=m.ZP.div.withConfig({displayName:"DrawPanel__StyledDrawPanelContainer",componentId:"sc-1sqr6fm-1"})(i||(i=h(["\n  position: fixed;\n  background-color: ",";\n  transition: transform 0.5s;\n  z-index: 10;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  &.left {\n    right: auto;\n    transform: translateX(-100%);\n  }\n  &.right {\n    left: auto;\n    transform: translateX(100%);\n  }\n  &.top {\n    bottom: auto;\n    transform: translateY(-100%);\n  }\n  &.bottom {\n    top: auto;\n    transform: translateY(100%);\n  }\n  &[open] {\n    transform: translate(0%, 0%);\n  }\n"],["\n  position: fixed;\n  background-color: ",";\n  transition: transform 0.5s;\n  z-index: 10;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  &.left {\n    right: auto;\n    transform: translateX(-100%);\n  }\n  &.right {\n    left: auto;\n    transform: translateX(100%);\n  }\n  &.top {\n    bottom: auto;\n    transform: translateY(-100%);\n  }\n  &.bottom {\n    top: auto;\n    transform: translateY(100%);\n  }\n  &[open] {\n    transform: translate(0%, 0%);\n  }\n"])),(function(n){return n.backgroundColor})),b=function(n){var t,e=n.position||"left",o=n.modalColor||"rgba(0, 0, 0, 0.3)",i=n.panelColor||"white",r=null!==(t=n.open)&&void 0!==t&&t,a=n.closeHandler,s=n.children;return d.createElement(d.Fragment,null,d.createElement(v,{backgroundColor:o,open:r,onClick:a}),d.createElement(x,{className:e,backgroundColor:i,open:r},s))},g=(0,e(2237).Z)(d.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),"FormatListNumbered"),y=e(5675),w=e(8565),C=e(5893),_=m.ZP.div.withConfig({displayName:"PostDetail__TitleContainer",componentId:"sc-1coas7c-0"})(["display:flex;padding:20px;& > button{margin:auto 0px auto auto;visibility:hidden;}@media only screen and (max-width:600px){& > button{visibility:visible;}}"]),j=m.ZP.div.withConfig({displayName:"PostDetail__ContentContainer",componentId:"sc-1coas7c-1"})(["padding:20px;overflow:auto;"]),k=function(n){var t=n.post,e=(0,d.useState)(!1),o=e[0],i=e[1],r=(0,d.useState)(null),a=r[0],s=r[1],c=(0,d.createRef)(),m=(0,d.useCallback)((function(){i(!o)}),[o]),h=(0,d.useCallback)((function(){i(!1)}),[]);return(0,d.useEffect)((function(){function n(){return(n=(0,l.Z)(u().mark((function n(){var e,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((e=c.current)&&t){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,w.G.getContent(t);case 5:o=n.sent,s(o),e.innerHTML=o;case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[c,t]),t?(0,C.jsxs)(f.Z,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)("h1",{children:t.title}),(0,C.jsx)("button",{className:"transparent",onClick:m,children:(0,C.jsx)(g,{})})]}),t.thumbnailName?(0,C.jsx)(y.default,{src:w.G.getThumbnailSrc(t),alt:"".concat(t.title)}):"",a?(0,C.jsx)(b,{position:"right",open:o,closeHandler:h,children:(0,C.jsx)(p.Z,{content:a})}):"",(0,C.jsx)(j,{ref:c})]}):(0,C.jsx)(C.Fragment,{})},N=!0,P=function(){var n=(0,a.useRouter)().query.title;if(!n||Array.isArray(n))return(0,C.jsx)("h1",{children:"No post found"});var t=w.G.getPostByTitle(n);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s.Z,{title:t.title,descriptions:[t.category,t.description].concat((0,r.Z)(t.tags))}),(0,C.jsx)(k,{post:t})]})}},649:function(n,t,e){"use strict";var o=e(1508),i=e(1163),r=e(8275),a=e(9008),s=e(8711),l=e(5893);t.Z=function(n){var t,e=(0,i.useRouter)(),c=r.Z.find((function(n){return n.path===e.route})),u=(n.title?[s.f.title,n.title]:null!==c&&void 0!==c&&c.title?[s.f.title,c.title]:[s.f.title]).join(" ".concat(s.f.titleDelimiter||"|"," ")),d=[];return null!==c&&void 0!==c&&c.description&&d.push(c.description),null!==(t=n.descriptions)&&void 0!==t&&t.length&&d.push.apply(d,(0,o.Z)(n.descriptions)),(0,l.jsxs)(a.default,{children:[(0,l.jsx)("title",{children:u}),null!==d&&void 0!==d&&d.length?(0,l.jsx)("meta",{name:"description",content:d.join(",")}):""]})}},2078:function(n,t,e){"use strict";var o=e(9163).ZP.section.withConfig({displayName:"ContentSection",componentId:"sc-8yvxe4-0"})(["display:flex;flex:1;flex-direction:column;max-width:60vw;overflow:hidden;overflow:auto;@media only screen and (max-width:800px){&{max-width:none;}}"]);t.Z=o},487:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[title]",function(){return e(8360)}])}},function(n){n.O(0,[666,774,888,179],(function(){return t=487,n(n.s=t);var t}));var t=n.O();_N_E=t}]);