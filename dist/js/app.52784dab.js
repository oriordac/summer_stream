(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4df8ee98"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/summer_stream/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},n=[],r=(a("5c0b"),a("2877")),o={},c=Object(r["a"])(o,i,n,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"movie"}},[a("section",{staticClass:"section hero is-dark is-bold is-fullheight"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-quarter-desktop"}),a("div",{staticClass:"column is-full-mobile is-three-quarters-tablet is-half-desktop"},[a("div",{staticClass:"box"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-full has-text-centered"},[a("h1",{staticClass:"title is-1 has-text-dark"},[t._v("Movie Search")]),a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{id:"movie-search",type:"text",placeholder:"Enter a Movie Title"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-dark is-outlined",on:{click:t.fetchMovie}},[t._v(" Search ")])])]),t.movie.Message?a("p",{staticClass:"is-3 content"},[t._v(t._s(t.movie.Message))]):t._e()])]),t.movie.TitleData?a("section",{staticClass:"section notification"},[a("div",{staticClass:"columns has-text-centered container"},[a("div",{staticClass:"column is-half"},[a("img",{staticClass:"image",staticStyle:{margin:"auto"},attrs:{src:t.movie.PosterData,alt:t.movie.TitleData}})]),a("div",{staticClass:"column is-half"},[a("h2",{staticClass:"title has-text-dark"},[t._v(t._s(t.movie.TitleData))]),a("hr",{staticStyle:{"background-color":"hsl(0, 0%, 21%)"}}),a("h3",{staticClass:"subtitle has-text-dark"},[t._v("Available on these online, subscription platforms")]),a("div",{staticClass:"tags are-large container",staticStyle:{"justify-content":"center"}},t._l(t.movie.ServicesData,(function(e){return a("p",{key:e,staticClass:"tag is-dark"},[t._v(" "+t._s(e)+" ")])})),0)])])]):a("section",{staticClass:"section notification"},[a("div",{staticClass:"columns has-text-centered container"},[a("div",{staticClass:"column is-half"},[a("img",{staticClass:"image",staticStyle:{margin:"auto"},attrs:{src:t.example.PosterData,alt:t.example.TitleData}})]),a("div",{staticClass:"column is-half"},[a("h2",{staticClass:"title has-text-dark"},[t._v(t._s(t.example.TitleData))]),a("hr",{staticStyle:{"background-color":"hsl(0, 0%, 21%)"}}),a("h3",{staticClass:"subtitle has-text-dark"},[t._v("Available on these online, subscription platforms")]),a("div",{staticClass:"tags are-large container",staticStyle:{"justify-content":"center"}},t._l(t.example.ServicesData,(function(e){return a("p",{key:e,staticClass:"tag is-dark"},[t._v(" "+t._s(e)+" ")])})),0)])])])])]),a("div",{staticClass:"column is-one-quarter-desktop"})])])])},v=[],p=(a("99af"),{name:"Home",data:function(){return{query:"",movie:{},example:{TitleData:"SAMPLE MOVIE SEARCH",PosterData:"https://resizing.flixster.com/4MrL62heb7yBgBt8zllSeqNZxg4=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",ServicesData:["Amazon Prime Video"]}}},methods:{fetchMovie:function(){var t=this;fetch("".concat("https://73mj0phrya.execute-api.us-east-2.amazonaws.com/dev/movie","?title=").concat(this.query.toUpperCase())).then((function(t){return t.json()})).then((function(e){return t.movie=e}))}}}),m=p,f=Object(r["a"])(m,d,v,!1,null,null,null),h=f.exports;s["a"].use(u["a"]);var b=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],g=new u["a"]({mode:"history",base:"/summer_stream/",routes:b}),y=g;a("6597");s["a"].config.productionTip=!1,new s["a"]({router:y,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.52784dab.js.map