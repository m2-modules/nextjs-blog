(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{6806:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var i=n(5386),a=n(7294),r=n(2078),o=n(1664),s=n(9163),l=n(4855),d=n(5893),c=s.ZP.ul.withConfig({displayName:"TagSpreader__StyledTagSpreaderList",componentId:"sc-1n80qc7-0"})(["display:inline-flex;gap:10px;list-style:none;margin:0px;overflow:auto;& > li{border-radius:10px;background-color:#333;color:white;padding:7px;font-size:9pt;margin:auto 0px;white-space:nowrap;}& > li:before{content:'#';}"]),u=function(t){var e=t.tags;return(0,d.jsx)(c,{children:e.map((function(t){return(0,d.jsx)("li",{children:t},t)}))})},p=s.ZP.article.withConfig({displayName:"PostPreviewCard__StyledArticle",componentId:"sc-3ocuj-0"})(["box-shadow:2px 2px 2px #aaa;border-radius:5px;border:1px solid #eee;margin:20px;padding:20px;cursor:pointer;display:grid;grid-gap:10px;grid-template-columns:auto 1fr auto auto;grid-template-rows:auto 1fr auto;grid-template-areas:",";& > #title{grid-area:title;margin:auto 0px;}& > #date{grid-area:date;margin:auto;}& > ul{grid-area:tags;}& > #thumbnail{grid-area:thumbnail;}& > #description{grid-area:description;}@media only screen and (max-width:800px){&{grid-template-columns:1fr auto;grid-template-rows:auto auto auto 1fr auto;grid-template-areas:",";}& > #date{grid-area:date;margin:auto 0px auto auto;}}"],(function(t){return t.hasThumbnail?"\n      'thumbnail title title date'\n      'thumbnail description description description'\n      'thumbnail tags tags tags'\n    ":"\n      'title title title date'\n      'description description description description'\n      'tags tags tags tags'\n    "}),(function(t){return t.hasThumbnail?"\n        'thumbnail thumbnail'\n        'title date'\n        'description description'\n        'tags tags'\n      ":"\n        'title title'\n        'date date'\n        'tags tags'\n        'description description'\n        'description description'\n      "})),g=s.ZP.img.withConfig({displayName:"PostPreviewCard__StyledImg",componentId:"sc-3ocuj-1"})(["width:-webkit-fill-available;margin:auto;border-radius:10px;max-width:20vw;@media only screen and (max-width:800px){&{max-width:none;}}"]),m=function(t){var e=t.post;return(0,d.jsx)(o.default,{href:l.R.absolutePath("/posts/".concat(l.G.dashedTitle(e))),passHref:!0,children:(0,d.jsxs)(p,{hasThumbnail:Boolean(e.thumbnailName),children:[(0,d.jsx)("h2",{id:"title",children:e.title}),(0,d.jsx)("p",{id:"date",children:new Date(e.publishedAt).toLocaleDateString()}),(0,d.jsx)(u,{tags:e.tags}),e.thumbnailName?(0,d.jsx)(g,{id:"thumbnail",src:l.G.getThumbnailSrc(e),alt:e.title}):"",(0,d.jsx)("p",{style:{margin:0},id:"description",children:e.description})]})})},x=(0,n(2237).Z)(a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),h=s.ZP.label.withConfig({displayName:"PostList__StyledLabel",componentId:"sc-lwut8-0"})(["display:inline-flex;max-width:200px;border-bottom:1px solid #aaa;margin:0px 20px;grid-gap:10px;transition:all 0.5s ease-in-out;& > *{margin:auto 0px;}& > input{flex:1;padding:10px 0px;border:none;outline:none;}@media only screen and (max-width:800px){max-width:none;}"]),f=function(t){var e=(0,a.createRef)(),n=(0,a.useState)(!1),i=(n[0],n[1],(0,a.useState)([])),o=i[0],s=i[1],c=(0,a.useCallback)((function(t){var e=t.currentTarget.value.toLowerCase(),n=l.G.getPostAll();s(e?n.filter((function(t){return l.G.getMeta(t).indexOf(e)>=0})):n)}),[]);return(0,a.useEffect)((function(){s(l.G.getPostAll())}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{}),(0,d.jsx)("input",{ref:e,type:"search",placeholder:"Search...",onChange:c})]}),(0,d.jsx)(r.Z,{children:o.map((function(t){return(0,d.jsx)(m,{post:t},t.title)}))})]})},w=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)(f,{})]})}},5386:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});n(7294);var i=n(9008),a=n(1163),r=n(8711),o="G-1V105VZWBB",s=n(8275),l=n(5893);var d=function(t){var e=(0,a.useRouter)(),n=s.Z.find((function(t){return t.path===e.route})),d=function(t,e,n){return(t.title?[t.title,e.title]:null!==n&&void 0!==n&&n.title?[n.title,e.title]:[e.title]).join(" ".concat(e.titleDelimiter||"|"," "))}(t,r.f,n),c=r.f.siteURL,u=t.imageURL,p=t.description||(null===n||void 0===n?void 0:n.description),g=t.keywords,m=r.f.author||r.f.email,x=o;return(0,l.jsxs)(i.default,{children:[x?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(x)}),(0,l.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n              \n                gtag('config', '".concat(x,"');\n              ")}})]}):"",(0,l.jsx)("title",{children:d}),(0,l.jsx)("link",{rel:"canonical",href:c}),(0,l.jsx)("meta",{property:"og:title",content:d}),u?(0,l.jsx)("meta",{property:"og:image",content:u}):"",p?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{property:"og:description",content:p}),(0,l.jsx)("meta",{name:"description",content:p})]}):"",null!==g&&void 0!==g&&g.length?(0,l.jsx)("meta",{name:"keyword",content:g.join(", ")}):"",m?(0,l.jsx)("meta",{name:"author",content:m}):""]})}},2078:function(t,e,n){"use strict";var i=n(9163).ZP.section.withConfig({displayName:"ContentSection",componentId:"sc-1j19ia0-0"})(["display:flex;flex:1;flex-direction:column;max-width:60vw;overflow:hidden;overflow:auto;@media only screen and (max-width:800px){&{max-width:none;}}"]);e.Z=i},1834:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(6806)}])},9008:function(t,e,n){t.exports=n(639)},1163:function(t,e,n){t.exports=n(4651)}},function(t){t.O(0,[774,888,179],(function(){return e=1834,t(t.s=e);var e}));var e=t.O();_N_E=e}]);