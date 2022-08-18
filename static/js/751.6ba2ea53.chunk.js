"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[751],{4608:function(n,e,t){t.d(e,{r:function(){return m},Z:function(){return x}});var r,i,a,c,o=t(6871),u=t(7651),s=t(168),p=t(1993),l=t(501),f=p.Z.h3(r||(r=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.5;\n  text-align: center;\n"]))),d=p.Z.img(i||(i=(0,s.Z)(["\n  display: block;\n  max-width: 100%;\n  object-fit: cover;\n"]))),h=(0,p.Z)(l.rU)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: inherit;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),g=t(184),v=function(n){var e=n.title,t=n.posterPath,r=n.movieId,i=(0,o.TH)();return(0,g.jsx)("li",{children:(0,g.jsx)(h,{to:"/movies/".concat(r),state:{from:i},children:(0,g.jsxs)("article",{children:[t?(0,g.jsx)(d,{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(t),alt:"".concat(e," poster")}):(0,g.jsx)(u.D,{children:"Sorry, no poster available :("}),(0,g.jsx)(f,{children:e})]})})})},x=function(n){var e=n.movies;return(0,g.jsx)(m,{children:e.map((function(n){return(0,g.jsx)(v,{movieId:n.id,title:n.title,posterPath:n.poster_path},n.id)}))})},m=p.Z.ul(c||(c=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100% - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 16px 0;\n  padding-right: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},9496:function(n,e,t){t.d(e,{ZP:function(){return p}});var r,i,a=t(168),c=t(1993),o=c.Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 50%;\n  min-height: calc(100vh / 4);\n  padding: 12px;\n"]))),u=c.Z.p(i||(i=(0,a.Z)(["\n  color: gray;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n"]))),s=t(184),p=function(n){var e=n.message;return(0,s.jsx)(o,{children:(0,s.jsx)(u,{children:e})})}},1214:function(n,e,t){t.d(e,{W2:function(){return s},Dx:function(){return p},ZP:function(){return c}});var r,i,a=t(184),c=function(n){var e=n.sectionTitle,t=n.children;return(0,a.jsxs)(s,{children:[e&&(0,a.jsx)(p,{children:e}),t]})},o=t(168),u=t(1993),s=u.Z.section(r||(r=(0,o.Z)(["\n  width: calc(100% - 24px);\n  margin: 0 auto;\n"]))),p=u.Z.h2(i||(i=(0,o.Z)(["\n  font-size: 16px;\n\n  &.visuallyHidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n"])))},2751:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r=t(885),i=t(2791),a=t(1207),c=t(2461),o=t(1214);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l,f,d,h=t(6871),g=t(168),v=t(1993),x=v.Z.form(l||(l=(0,g.Z)(["\n  padding: 12px;\n  margin-left: 12px;\n  display: flex;\n  align-items: center;\n"]))),m=v.Z.input(f||(f=(0,g.Z)(["\n  height: 20px;\n  margin-right: 4px;\n"]))),y=v.Z.button(d||(d=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 2px;\n\n  font-size: 16px;\n"]))),b=t(184),Z=function(n){var e=n.value,t=(0,i.useState)(e),a=(0,r.Z)(t,2),c=a[0],o=a[1],u=(0,h.s0)(),s=(0,h.TH)();return(0,b.jsxs)(x,{onSubmit:function(n){if(n.preventDefault(),!c.trim())return alert("Please enter at least one symbol."),void o("");u(p(p({},s),{},{search:"query=".concat(c)}))},children:[(0,b.jsx)(m,{type:"text",value:c,onChange:function(n){o(n.target.value)},placeholder:"Search movies"}),(0,b.jsx)(y,{children:"Search"})]})},w=t(4608),j=t(9044),E=t(9496),O=t(501),D=function(){var n,e=(0,O.lr)(),t=null!==(n=(0,r.Z)(e,1)[0].get("query"))&&void 0!==n?n:"",u=function(n){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),o=t[0],u=t[1],s=(0,i.useState)(c.Q.IDLE),p=(0,r.Z)(s,2),l=p[0],f=p[1];return(0,i.useEffect)((function(){n&&(f(c.Q.PENDING),a.FE({query:n}).then((function(n){u(n.results),f(c.Q.RESOLVED)})).catch((function(n){var e=n.message;console.log(e),f(c.Q.REJECTED)})))}),[n]),{status:l,movies:o}}(t),s=u.movies,p=u.status;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{value:t}),p===c.Q.PENDING&&(0,b.jsx)(j.Z,{}),p===c.Q.RESOLVED&&(0,b.jsx)(o.ZP,{children:(0,b.jsx)(w.Z,{movies:s})}),p===c.Q.REJECTED&&(0,b.jsx)(E.ZP,{message:"Ooops! Something went wrong :(... please reload the page."})]})}},1207:function(n,e,t){t.d(e,{FE:function(){return p},Hx:function(){return d},Mc:function(){return l},Tg:function(){return s},xc:function(){return f}});var r=t(5861),i=t(4687),a=t.n(i),c=t(4569),o="704d5b04a49684ea4810e36d12ae79df";c.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.path,r=void 0===t?"":t,n.next=3,c.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u({path:"trending/movie/day?api_key=".concat(o,"&include_adult=false")});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,r=e.page,i=void 0===r?1:r,n.next=3,u({path:"search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=").concat(i,"&include_adult=false")});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,u({path:"movie/".concat(t,"?api_key=").concat(o)});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,u({path:"movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US")});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,r=e.page,i=void 0===r?1:r,n.next=3,u({path:"movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(i)});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7651:function(n,e,t){t.d(e,{D:function(){return a}});var r,i=t(168),a=t(1993).Z.p(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 12px 4px;\n\n  color: #808080;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n\n  border: 1px solid #808080;\n"])))},2461:function(n,e,t){t.d(e,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=751.6ba2ea53.chunk.js.map