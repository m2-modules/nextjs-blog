(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{9497:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return i}});r(7294);var n=r(1163),s=r(5386),a=r(711),c=r(9983),u=r(828),o=r(5893),i=!0;t.default=function(e){var t=e.category,r=(0,n.useRouter)(),i="",h="",g=new URL(u.R.absolutePath(r.asPath)),f=new URLSearchParams(g.search),_=f.get("query"),l=Number(f.get("page")||1);u.G.hasPosts(l,20,_,t)||r.replace("/404"),l>1&&(f.set("page",String(l-1)),g.search=f.toString(),i=g.href),u.G.hasPosts(l+1,20,_,t)&&(f.set("page",String(l+1)),g.search=f.toString(),h=g.href);var p=u.G.getCountByCategory(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{description:"'".concat(t,"' \uce74\ud14c\uace0\ub9ac\uc758 \ud3ec\uc2a4\ud305 \ubaa9\ub85d"),customMeta:(0,o.jsxs)(o.Fragment,{children:[i?(0,o.jsx)("link",{rel:"prev",href:i}):"",h?(0,o.jsx)("link",{rel:"next",href:h}):""]})}),(0,o.jsx)(a.Z,{title:t,subMessage:" (".concat(p,")")}),(0,o.jsx)(c.Z,{fetchLimit:20,query:_||"",category:t})]})}},7161:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[category]",function(){return r(9497)}])}},function(e){e.O(0,[624,774,888,179],(function(){return t=7161,e(e.s=t);var t}));var t=e.O();_N_E=t}]);