(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{100:function(e,t,a){e.exports=a(182)},163:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),l=a.n(r),o=a(24),c=a(53),s=a(7),u=a(28),d=a(55),v=Object(d.createActions)({setAllMovies:["allMovies"],getAllMovies:["lang"],getSingleMovie:["id"],setSingleMovie:["singleMovie"]}),m=(v.Types,v.Creators),f=Object(d.createReducer)({allMovies:[],singleMovie:{}},{SET_ALL_MOVIES:function(e,t){var a=t.allMovies;return Object(u.a)(Object(u.a)({},e),{},{allMovies:a})},SET_SINGLE_MOVIE:function(e,t){var a=t.singleMovie;return Object(u.a)(Object(u.a)({},e),{},{singleMovie:a})}}),g=(a(52),function(e){var t,a,n,r,l=e.item,o=e.timing;return i.a.createElement("div",{onClick:function(){var e;window.location.hash="singleMovie/".concat(null===l||void 0===l||null===(e=l.show)||void 0===e?void 0:e.id)},className:"home--movie__item animated fadeIn",style:{animationDuration:"".concat(o,"s")}},i.a.createElement("img",{src:null===l||void 0===l||null===(t=l.show)||void 0===t||null===(a=t.image)||void 0===a?void 0:a.medium,alt:""}),i.a.createElement("div",{className:"title"},null===l||void 0===l||null===(n=l.show)||void 0===n?void 0:n.name),i.a.createElement("div",{className:"infos"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:null===l||void 0===l||null===(r=l.show)||void 0===r?void 0:r.summary}})))}),E=Object(o.b)((function(e){return{allMovies:e.auth.allMovies}}),m)((function(e){var t=e.allMovies,a=e.getAllMovies;return Object(n.useEffect)((function(){t.length<=0&&a("US")}),[]),console.log("allMovies",t),i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home--nav"},"TOP TV SHOWS"),i.a.createElement("div",{className:"home--movie"},t.map((function(e,t){var a;return i.a.createElement(g,{timing:"".concat(t/10),key:null===e||void 0===e||null===(a=e.show)||void 0===a?void 0:a.id,item:e})}))))})),p=a(62),O=a(63),h=Object(s.f)(Object(o.b)((function(e){return{singleMovie:e.auth.singleMovie}}),m)((function(e){var t,a,r,l,o,c=e.singleMovie,s=e.getSingleMovie,u=e.match,d=Object(n.useState)(JSON.parse(localStorage.getItem("favList")||"[]")),v=Object(O.a)(d,2),m=v[0],f=v[1],g=Object(n.useState)(1),E=Object(O.a)(g,2),h=E[0],b=E[1];Object(n.useEffect)((function(){var e=u.params.id;s(e)}),[]);var M=m.includes(c.id);return console.log("singleMovie",c),i.a.createElement("div",{className:"singleMovie"},i.a.createElement("div",{className:"singleMovie--left "},i.a.createElement("div",{className:"underlay",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.image)||void 0===t?void 0:t.original,")")}}),i.a.createElement("img",{className:"animated slideInLeft",src:null===c||void 0===c||null===(a=c.image)||void 0===a?void 0:a.original,alt:""})),i.a.createElement("div",{className:"singleMovie--right"},i.a.createElement("div",{className:"options"},i.a.createElement("span",{onClick:function(){window.location.hash="/"}},i.a.createElement("i",{className:"fal fa-backward","aria-hidden":"true"}),"Go BACK"),i.a.createElement("span",{onClick:function(){var e=m;if(e.includes(c.id)){var t=e.indexOf(c.id);e.splice(t,1),localStorage.setItem("favList",JSON.stringify(e)),f(e),b(h+1)}else localStorage.setItem("favList",JSON.stringify([].concat(Object(p.a)(m),[c.id]))),f([].concat(Object(p.a)(m),[c.id])),b(h+1)},className:M?"active":""},i.a.createElement("i",{className:"fal fa-star","aria-hidden":"true"}),M?"Favorited":"Add Favorites")),i.a.createElement("div",{className:"title"},c.name),i.a.createElement("div",{className:"rating"},"Rating : ",null===(r=c.rating)||void 0===r?void 0:r.average),i.a.createElement("div",{className:"type"},"Type : ",c.type),i.a.createElement("div",{className:"lang"},"Language : ",c.language),i.a.createElement("div",{className:"prem"},"Premiered : ",c.premiered),i.a.createElement("div",{className:"schedule"},"schedule : ",null===(l=c.schedule)||void 0===l?void 0:l.time),i.a.createElement("div",{className:"schedule days"},"Every :"," ",((null===(o=c.schedule)||void 0===o?void 0:o.days)||[]).map((function(e){return i.a.createElement("span",{key:e},e)}))),i.a.createElement("div",{className:"desc",dangerouslySetInnerHTML:{__html:c.summary}})))}))),b=(a(163),a(164),Object(o.b)(null,{})((function(){return Object(n.useEffect)((function(){}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",exact:!0,render:function(){return i.a.createElement(E,null)}}),i.a.createElement(s.a,{path:"/singleMovie/:id?/",render:function(){return i.a.createElement(h,null)}}))))}))),M=a(20),w=a(98),j=a(27),N=a.n(j),S=a(21),_=a(84),y=a.n(_),I=a(185),k=function(e,t){var a,n,i,r;return(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)===parseInt(t)||(null===(n=e.error)||void 0===n||null===(i=n.response)||void 0===i?void 0:i.status)===parseInt(t)||(null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)===parseInt(t)},L=y.a.create({baseURL:"https://api.tvmaze.com"});L.interceptors.response.use((function(e){return e}),(function(e){return function(e){if(k(e,401));else if("Network Error"===(null===e||void 0===e?void 0:e.message));else if(k(e,445));else if(k(e,440));else if(k(e,429));else if(k(e,403));else{var t,a,n,i;I.a.error({message:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"error Message",description:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.errors)&&Object.values(e.response.data.errors)||"error Desc",placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4})}return Promise.reject(e)}(e)}));var T=function(e){return L.get("/schedule?country=".concat(e)).catch((function(e){return{error:e}}))},x=function(e){return L.get("/shows/".concat(e)).catch((function(e){return{error:e}}))},A=N.a.mark(R),C=N.a.mark(V);function R(e){var t,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.lang,n.next=3,Object(S.b)(T,t);case 3:if(!(a=n.sent)){n.next=7;break}return n.next=7,Object(S.c)(m.setAllMovies(a.data));case 7:case"end":return n.stop()}}),A)}function V(e){var t,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,Object(S.b)(x,t);case 3:if(!(a=n.sent)){n.next=7;break}return n.next=7,Object(S.c)(m.setSingleMovie(a.data));case 7:case"end":return n.stop()}}),C)}var D=N.a.mark(G);function G(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([Object(S.d)("GET_ALL_MOVIES",R),Object(S.d)("GET_SINGLE_MOVIE",V)].concat());case 2:case"end":return e.stop()}}),D)}var J=Object(M.c)({auth:f});var P=function(){var e=Object(w.a)(),t=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):M.d)(Object(M.a)(e));return Object(u.a)(Object(u.a)({},Object(M.e)(J,t)),{},{runSaga:e.run})}();P.runSaga(G),window.store=P;var U=function(){return i.a.createElement(o.a,{store:P},i.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.e0fd5cac.chunk.js.map