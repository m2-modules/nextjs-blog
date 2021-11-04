(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3968:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r,i,a,o,s=n(7294),l=n(5386),c=n(9163),d=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},u=c.ZP.div.withConfig({displayName:"CardIndicator__IndicatorContainer",componentId:"sc-mx5nkz-0"})(r||(r=d(["\n  position: absolute;\n  display: inline-flex;\n  gap: 5px;\n  bottom: 10px;\n\n  &.horizontal {\n    flex-direction: row;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  &.vertical {\n    flex-direction: column;\n    right: 10px;\n  }\n"],["\n  position: absolute;\n  display: inline-flex;\n  gap: 5px;\n  bottom: 10px;\n\n  &.horizontal {\n    flex-direction: row;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  &.vertical {\n    flex-direction: column;\n    right: 10px;\n  }\n"]))),p=c.ZP.span.withConfig({displayName:"CardIndicator__Circle",componentId:"sc-mx5nkz-1"})(i||(i=d(["\n  border: 3px solid ",";\n  background-color: ",";\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 2px #333;\n"],["\n  border: 3px solid ",";\n  background-color: ",";\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 2px #333;\n"])),(function(t){return t.indicatorColor}),(function(t){return t.active?t.indicatorColor:"transparent"})),h=function(t){var e=t.cardCount,n=t.currentCardIndex,r=t.indicatorColor||"white",i=t.direction;return s.createElement(u,{className:i},Array(e).fill("").map((function(t,e){return s.createElement(p,{key:e,active:e===n,indicatorColor:r})})))},m=function(t,e,n){var r;void 0===n&&(n=100),t.onscroll=function(){r&&clearTimeout(r),r=setTimeout((function(){e()}),n)}},f=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},g=c.ZP.div.withConfig({displayName:"SlideCard__Wrapper",componentId:"sc-1bmytx5-0"})(a||(a=f(["\n  position: relative;\n  width: ",";\n  height: ",";\n"],["\n  position: relative;\n  width: ",";\n  height: ",";\n"])),(function(t){return t.width||"100vw"}),(function(t){return t.height||"100vh"})),x=c.ZP.div.withConfig({displayName:"SlideCard__ViewPart",componentId:"sc-1bmytx5-1"})(o||(o=f(["\n  position: relative;\n  flex: 1;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr;\n  grid-auto-flow: ",";\n  overflow-x: auto;\n  width: ",";\n  height: ",";\n  scroll-snap-type: ","\n    mandatory;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  & > .card-item {\n    width: inherit;\n    height: inherit;\n    scroll-snap-align: start;\n    scroll-snap-stop: ",";\n  }\n"],["\n  position: relative;\n  flex: 1;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr;\n  grid-auto-flow: ",";\n  overflow-x: auto;\n  width: ",";\n  height: ",";\n  scroll-snap-type: ","\n    mandatory;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  & > .card-item {\n    width: inherit;\n    height: inherit;\n    scroll-snap-align: start;\n    scroll-snap-stop: ",";\n  }\n"])),(function(t){return"horizontal"===t.direction?"column":"row"}),(function(t){return t.width||"100vw"}),(function(t){return t.height||"100vh"}),(function(t){return"horizontal"===t.direction?"x":"y"}),(function(t){return t.fastSeeking?"normal":"always"})),y=function(t){var e,n=t.width,r=t.height,i=t.direction||"horizontal",a=t.fastSeeking||!1,o=null===(e=t.indicator)||void 0===e||e,l=t.indicatorColor,c=t.children,d=(0,s.createRef)(),u=(0,s.useState)(!1),p=u[0],f=u[1],y=(0,s.useState)(0),w=y[0],v=y[1];return(0,s.useEffect)((function(){var t=d.current;if(!t)throw new Error("Failed to find container");m(t,(function(){var e;e="horizontal"===i?t.scrollLeft<=0?0:Math.round(t.scrollLeft/t.clientWidth):t.scrollTop<=0?0:Math.round(t.scrollTop/t.clientHeight),v(e)}))}),[i,d,v]),(0,s.useEffect)((function(){var t=d.current;if(!t)throw new Error("Failed to find container");f("horizontal"===i?t.scrollWidth>t.clientWidth:t.scrollHeight>t.clientHeight)}),[i,d,f]),s.createElement(g,{width:n,height:r},s.createElement(x,{ref:d,width:n,height:r,direction:i,fastSeeking:a},c.map((function(t,e){return s.createElement("div",{key:"card-item-"+e,className:"card-item"},t)}))),o&&p?s.createElement(h,{cardCount:c.length,currentCardIndex:w,indicatorColor:l,direction:i}):"")},w=n(1285),v=n(828),b=n(5893),j=c.ZP.nav.withConfig({displayName:"CategoryIndexer__StyledNav",componentId:"sc-1llal27-0"})(["border-top:1px solid #eee;flex:1;& ul{margin:0px;}"]),_=c.ZP.li.withConfig({displayName:"CategoryIndexer__StyledList",componentId:"sc-1llal27-1"})(["padding:10px;margin:0px 10px;text-transform:capitalize;list-style:none;border-bottom:1px solid #eee;& a{display:flex;gap:5px;}& .new{border-radius:50px;background-color:#fd454a;padding:5px 10px;border-radius:50px;color:white;font-weight:600;font-style:italic;font-size:0.7rem;margin:auto 0px;}& .category{margin:auto 0px;}& .count{padding:5px 10px;border-radius:50px;background-color:#666;font-size:0.9rem;color:#eee;}"]),C=function(t){var e=v.G.categoriesWithStatus();function n(t){var e=["new"];return t.hasNew||e.push("hidden"),e.join(" ")}return(0,b.jsx)(j,{children:(0,b.jsx)("ul",{children:Object.keys(e).map((function(t){return(0,b.jsx)(_,{children:(0,b.jsxs)("a",{href:v.R.absolutePath("categories/".concat(t)),children:[(0,b.jsx)("span",{className:n(e[t]),children:"New"}),(0,b.jsx)("span",{className:"category flex-1",children:t}),(0,b.jsx)("span",{className:"count",children:e[t].count})]})},t)}))})})},N=n(2078),P=n(8405),Z=n(318),k=c.ZP.nav.withConfig({displayName:"TagIndexer__StyledNav",componentId:"sc-6nbasc-0"})(["border-top:1px solid #eee;flex:1;"]),S=c.ZP.ul.withConfig({displayName:"TagIndexer__StyledUl",componentId:"sc-6nbasc-1"})(["display:block;list-style:none;margin:10px;& .item{display:inline-block;background-color:#38bc8a;border-radius:50px;padding:5px 10px;margin:5px;}& .item span:before{content:'#';}& .item span{font-size:0.8rem;color:white;}"]);function I(t){var e=Object.keys(t).map((function(e){return[e,t[e]]}));return e.sort((function(t,e){var n=(0,Z.Z)(t,2),r=(n[0],n[1]),i=(0,Z.Z)(e,2),a=(i[0],i[1]);return r>a?-1:r<a?1:0})),(e=e.slice(0,10)).reduce((function(t,e){var n=(0,Z.Z)(e,2),r=n[0],i=n[1];return t[r]=i,t}),{})}var T=function(t){var e=(t.sortHandler||I)(v.G.tagsWithCount());return(0,b.jsx)(k,{children:(0,b.jsx)(S,{children:Object.keys(e).map((function(t){return(0,b.jsx)("li",{className:"item",children:(0,b.jsx)("a",{className:"v-flex",href:v.R.absolutePath("posts?query=".concat(t)),children:(0,b.jsxs)("span",{children:[t," ",e[t]]})})},t)}))})})},z=(0,c.ZP)(N.Z).withConfig({displayName:"Home__StyledSection",componentId:"sc-wnuvtx-0"})(["flex:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:auto 1fr;grid-template-areas:'recent recent' 'category tag';grid-gap:10px;overflow:auto;& #recent-posts{grid-area:recent;width:60vw;& > h2{font-size:1rem;margin:10px 20px;}}& #category-indexer{grid-area:category;& > h2{font-size:1rem;margin:10px 20px;}}& #tag-indexer{grid-area:tag;& > h2{font-size:1rem;margin:10px 20px;}& .more-tags{float:right;color:#666;font-size:0.8rem;font-weight:lighter;}}@media only screen and (max-width:800px){grid-template-columns:1fr;grid-template-areas:'recent' 'category' 'tag';& #recent-posts{width:100vw;}}"]),E=function(){var t=(0,s.useRef)(null);(0,w.Z)(t);var e=v.G.getPosts(1,5);return(0,b.jsxs)(z,{ref:t,children:[(0,b.jsxs)("article",{id:"recent-posts",children:[(0,b.jsx)("h2",{children:"Recent posts"}),(0,b.jsx)(y,{width:"inherit",height:"inherit",indicator:!1,children:e.map((function(t){return(0,b.jsx)(P.Z,{post:t},t.title)}))})]}),(0,b.jsxs)("article",{id:"category-indexer",className:"v-flex flex-1",children:[(0,b.jsx)("h2",{children:"Categories"}),(0,b.jsx)(C,{})]}),(0,b.jsxs)("article",{id:"tag-indexer",className:"v-flex flex-1",children:[(0,b.jsxs)("h2",{children:["Tags",(0,b.jsx)("a",{className:"more-tags",href:v.R.absolutePath("/tags"),children:"See more"})]}),(0,b.jsx)(T,{})]})]})},L=n(711),R=n(8711),O=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{}),(0,b.jsxs)("article",{className:"v-flex flex-1 non-overflow",children:[(0,b.jsx)(L.Z,{id:"title",title:R.f.title}),(0,b.jsx)(E,{})]})]})}},5386:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(8711),i=n(1163),a=n(8275),o=n(9008),s=(n(7294),{}),l=n(828),c=n(5893);var d=function(t){var e=(0,i.useRouter)(),n=a.Z.find((function(t){return t.path===e.route})),d=function(t,e,n){return(t.title?[t.title,e.title]:null!==n&&void 0!==n&&n.title?[n.title,e.title]:[e.title]).join(" ".concat(e.titleDelimiter||"|"," "))}(t,r.f,n),u=t.imageURL,p=t.description||(null===n||void 0===n?void 0:n.description),h=t.keywords,m=r.f.author||r.f.email,f=s.id;return(0,c.jsxs)(o.default,{children:[f?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(f)}),(0,c.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n              \n                gtag('config', '".concat(f,"');\n              ")}})]}):"",(0,c.jsx)("title",{children:d}),(0,c.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,c.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n          if ('serviceWorker' in navigator) {\n            navigator.serviceWorker.register('/service-worker.js')\n          }\n        "}}),(0,c.jsx)("link",{rel:"canonical",href:l.R.absolutePath(e.asPath)}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:title",content:d}),(0,c.jsx)("meta",{property:"og:site_name",content:r.f.title}),(0,c.jsx)("meta",{property:"og:url",content:l.R.absolutePath(e.asPath)}),u?(0,c.jsx)("meta",{property:"og:image",content:u}):"",p?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("meta",{property:"og:description",content:p}),(0,c.jsx)("meta",{name:"description",content:p})]}):"",null!==h&&void 0!==h&&h.length?(0,c.jsx)("meta",{name:"keyword",content:h.join(", ")}):"",m?(0,c.jsx)("meta",{name:"author",content:m}):"",t.customMeta?t.customMeta:(0,c.jsx)(c.Fragment,{})]})}},2078:function(t,e,n){"use strict";var r=n(9163).ZP.section.withConfig({displayName:"ContentSection",componentId:"sc-8yvxe4-0"})(["display:flex;flex:1;flex-direction:column;max-width:60vw;overflow:auto;@media only screen and (max-width:800px){&{max-width:none;}}"]);e.Z=r},711:function(t,e,n){"use strict";var r=n(9163),i=n(5893),a=r.ZP.h1.withConfig({displayName:"PageHeading__StyledHeading",componentId:"sc-1hixder-0"})(["font-size:1rem;margin:20px;& > .sub-message{font-size:0.8rem;color:#666;}"]);e.Z=function(t){return(0,i.jsxs)(a,{children:[(0,i.jsx)("span",{className:"title",children:t.title}),t.subMessage?(0,i.jsx)("span",{className:"sub-message",children:t.subMessage}):""]})}},8405:function(t,e,n){"use strict";n(7294);var r=n(9163),i=n(828),a=n(4258),o=n(5035),s=n(5893),l=r.ZP.a.withConfig({displayName:"PostPreviewCard__StyledAnchor",componentId:"sc-oa1ja9-0"})(["flex:1;display:grid;grid-gap:10px;grid-template-columns:auto 1fr auto auto;grid-template-rows:auto 1fr auto;grid-template-areas:",";& #title{grid-area:title;margin:auto 0px;}& #date{color:#666;font-size:0.8rem;grid-area:date;margin:auto;}& #thumbnail{grid-area:thumbnail;}& #description{grid-area:description;}@media only screen and (max-width:800px){&{grid-template-columns:1fr auto;grid-template-areas:",";}& #date{grid-area:date;margin:auto 0px auto auto;}}"],(function(t){return t.hasThumbnail?"\n        'thumbnail title title date'\n        'thumbnail description description description'\n      ":"\n        'title title title date'\n        'description description description description'\n      "}),(function(t){return t.hasThumbnail?"\n            '. date'\n            'thumbnail thumbnail'\n            'title title'\n            'description description'\n          ":"\n            'title date'\n            'description description'\n          "})),c=r.ZP.article.withConfig({displayName:"PostPreviewCard__StyledArticle",componentId:"sc-oa1ja9-1"})(["border-bottom:1px solid #eee;padding:20px;min-height:240px;display:flex;flex-direction:column;"]),d=r.ZP.img.withConfig({displayName:"PostPreviewCard__StyledImg",componentId:"sc-oa1ja9-2"})(["width:-webkit-fill-available;margin:auto;border-radius:10px;max-width:20vw;@media only screen and (max-width:800px){&{max-width:none;}}"]);e.Z=function(t){var e=t.post;return(0,s.jsxs)(c,{children:[(0,s.jsxs)(l,{hasThumbnail:Boolean(e.thumbnailName),href:i.R.absolutePath("/posts/".concat(i.G.dashedTitle(e))),children:[(0,s.jsx)("h2",{id:"title",children:e.title}),(0,s.jsx)("p",{id:"date",children:a.E.formatReadable(e.publishedAt)}),e.thumbnailName?(0,s.jsx)(d,{id:"thumbnail",src:i.G.getThumbnailPath(e),alt:e.title}):"",(0,s.jsx)("p",{style:{margin:0},id:"description",children:e.description})]}),(0,s.jsx)(o.Z,{tags:e.tags})]})}},2031:function(t,e,n){"use strict";var r=n(9163),i=n(828),a=n(5893),o=r.ZP.li.withConfig({displayName:"TagMark__StyledList",componentId:"sc-1it4pc-0"})(["display:inline-block;border-radius:10px;background-color:#333;padding:5px 10px;margin:5px;white-space:nowrap;& > a{display:flex;}& span.tag:before{content:'#';}& span.tag{margin:auto;content:'#';color:white;font-size:0.8rem;margin:auto;}& span.count{color:#eee;font-style:italic;font-size:0.5rem;margin:auto 0px auto 5px;}"]);e.Z=function(t){var e=t.tag,n=t.count;return(0,a.jsx)(o,{children:(0,a.jsxs)("a",{href:function(t){var e=new URLSearchParams;return e.append("query",t),i.R.absolutePath("posts?".concat(e.toString()))}(e),children:[(0,a.jsx)("span",{className:"tag",children:e}),"undefined"!==typeof n?(0,a.jsxs)("span",{className:"count",children:["(",n,")"]}):""]})})}},5035:function(t,e,n){"use strict";n(7294);var r=n(9163),i=n(2031),a=n(5893),o=r.ZP.ul.withConfig({displayName:"TagSpreader__StyledTagSpreaderList",componentId:"sc-d99vwa-0"})(["display:block;gap:10px;list-style:none;margin:0px;"]);e.Z=function(t){var e=t.tags;return(0,a.jsx)(o,{children:e.map((function(t){return(0,a.jsx)(i.Z,{tag:t},t)}))})}},1285:function(t,e,n){"use strict";var r=n(7294);function i(t){var e=document.querySelector("#__next");e&&t.currentTarget&&(t.currentTarget.scrollTop>0?e.classList.add("shrink-headroom"):e.classList.remove("shrink-headroom"))}e.Z=function(t){(0,r.useEffect)((function(){var e=t.current;if(e)return e.addEventListener("scroll",i),function(){return e.removeEventListener("scroll",i)}}),[t])}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3968)}])},9008:function(t,e,n){t.exports=n(639)},1163:function(t,e,n){t.exports=n(4651)},6586:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},318:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(6988);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6988:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(6586);function i(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);