"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[457],{4608:function(n,t,e){e.d(t,{r:function(){return m},Z:function(){return x}});var r,i,a,o,c=e(6871),u=e(7651),s=e(168),p=e(1993),d=e(501),f=p.Z.h3(r||(r=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.5;\n  text-align: center;\n"]))),l=p.Z.img(i||(i=(0,s.Z)(["\n  display: block;\n  max-width: 100%;\n  object-fit: cover;\n"]))),h=(0,p.Z)(d.rU)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: inherit;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),g=e(184),v=function(n){var t=n.title,e=n.posterPath,r=n.movieId,i=(0,c.TH)();return(0,g.jsx)("li",{children:(0,g.jsx)(h,{to:"/movies/".concat(r),state:{from:i},children:(0,g.jsxs)("article",{children:[e?(0,g.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(e),alt:"".concat(t," poster")}):(0,g.jsx)(u.D,{children:"Sorry, no poster available :("}),(0,g.jsx)(f,{children:t})]})})})},x=function(n){var t=n.movies;return(0,g.jsx)(m,{children:t.map((function(n){return(0,g.jsx)(v,{movieId:n.id,title:n.title,posterPath:n.poster_path},n.id)}))})},m=p.Z.ul(o||(o=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100% - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 16px 0;\n  padding-right: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},9496:function(n,t,e){e.d(t,{ZP:function(){return p}});var r,i,a=e(168),o=e(1993),c=o.Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 50%;\n  min-height: calc(100vh / 4);\n  padding: 12px;\n"]))),u=o.Z.p(i||(i=(0,a.Z)(["\n  color: gray;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n"]))),s=e(184),p=function(n){var t=n.message;return(0,s.jsx)(c,{children:(0,s.jsx)(u,{children:t})})}},3287:function(n,t,e){e.d(t,{Z:function(){return c}});var r,i=e(168),a=e(1993).Z.h1(r||(r=(0,i.Z)(["\n  padding: 12px;\n  padding-left: ",";\n  font-size: 24px;\n  font-weight: bold;\n"])),(function(n){return n.noIndent?"0":"12px"})),o=e(184),c=function(n){var t=n.pageTitle,e=n.noIndent,r=void 0!==e&&e;return(0,o.jsx)(a,{noIndent:r,children:t})}},1214:function(n,t,e){e.d(t,{W2:function(){return s},Dx:function(){return p},ZP:function(){return o}});var r,i,a=e(184),o=function(n){var t=n.sectionTitle,e=n.children;return(0,a.jsxs)(s,{children:[t&&(0,a.jsx)(p,{children:t}),e]})},c=e(168),u=e(1993),s=u.Z.section(r||(r=(0,c.Z)(["\n  width: calc(100% - 24px);\n  margin: 0 auto;\n"]))),p=u.Z.h2(i||(i=(0,c.Z)(["\n  font-size: 16px;\n\n  &.visuallyHidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n"])))},457:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(3287),i=e(4608),a=e(1214),o=e(9496),c=e(2461),u=e(885),s=e(2791),p=e(1207),d=e(184),f=function(){var n=function(){var n=(0,s.useState)(c.Q.IDLE),t=(0,u.Z)(n,2),e=t[0],r=t[1],i=(0,s.useState)(null),a=(0,u.Z)(i,2),o=a[0],d=a[1];return(0,s.useEffect)((function(){r(c.Q.PENDING),p.Tg().then((function(n){var t=n.results;d(t),r(c.Q.RESOLVED)})).catch((function(n){var t=n.message;console.log(t),r(c.Q.REJECTED)}))}),[]),{movies:o,status:e}}(),t=n.movies,e=n.status;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{pageTitle:"Tranding Today"}),e===c.Q.RESOLVED&&(0,d.jsx)(a.ZP,{children:(0,d.jsx)(i.Z,{movies:t})}),e===c.Q.REJECTED&&(0,d.jsx)(o.ZP,{message:"Ooops! Something went wrong :(... please reload the page."})]})}},1207:function(n,t,e){e.d(t,{FE:function(){return p},Hx:function(){return l},Mc:function(){return d},Tg:function(){return s},xc:function(){return f}});var r=e(5861),i=e(4687),a=e.n(i),o=e(4569),c="704d5b04a49684ea4810e36d12ae79df";o.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.path,r=void 0===e?"":e,n.next=3,o.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u({path:"trending/movie/day?api_key=".concat(c,"&include_adult=false")});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,r=t.page,i=void 0===r?1:r,n.next=3,u({path:"search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=").concat(i,"&include_adult=false")});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,u({path:"movie/".concat(e,"?api_key=").concat(c)});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,u({path:"movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US")});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,r=t.page,i=void 0===r?1:r,n.next=3,u({path:"movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=").concat(i)});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7651:function(n,t,e){e.d(t,{D:function(){return a}});var r,i=e(168),a=e(1993).Z.p(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 12px 4px;\n\n  color: #808080;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n\n  border: 1px solid #808080;\n"])))},2461:function(n,t,e){e.d(t,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=457.65df402f.chunk.js.map