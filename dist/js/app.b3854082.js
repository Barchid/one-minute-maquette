(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"551db129"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var o,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,a[1](s)}n[t]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},3286:function(t,e,a){},a14c:function(t,e,a){"use strict";var r=a("3286"),n=a.n(r);n.a},b26d:function(t,e,a){t.exports=a.p+"img/burger-flat.0b7942f4.png"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:a("b26d"),width:"30px",height:"30px",alt:""}})]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item dropdown"},[r("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:"/"}},[t._v("Menu")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[r("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:"/"}},[t._v("Voir le menu")]),r("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:"/"}},[t._v("Modifier le menu")]),r("div",{staticClass:"dropdown-divider"})],1)],1),t._m(1),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cuisine\n          ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[r("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[t._v("Voir les commandes")]),r("div",{staticClass:"dropdown-divider"}),r("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[t._v("Accéder aux rôles")]),r("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[t._v("Modifier les rôles")])],1)])])])],1),r("br"),r("br"),r("br"),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Service\n          ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item disabled",attrs:{href:"pages/service/nouvelle-commande.html"}},[t._v("Prendre une commande")]),a("a",{staticClass:"dropdown-item disabled",attrs:{href:"pages/service/commandes-1.html"}},[t._v("Voir les commandes")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item disabled",attrs:{href:"pages/service/addition.html"}},[t._v("Régler l'addition")])])])}],s=a("2877"),i={},l=Object(s["a"])(i,n,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},p=[],f=a("d4ec"),v=a("99de"),m=a("7e84"),b=a("262e"),h=a("9ab4"),g=a("60a3"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("h1",[t._v("Connexion")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})]),a("div",{staticClass:"form-group form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Check me out")])]),a("a",{attrs:{href:"index.html"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],_=function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(g["c"]);h["a"]([Object(g["b"])()],_.prototype,"msg",void 0),_=h["a"]([g["a"]],_);var y=_,k=y,x=(a("a14c"),Object(s["a"])(k,w,C,!1,null,"2a048bb6",null));x.options.__file="HelloWorld.vue";var j=x.exports,O=function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(g["c"]);O=h["a"]([Object(g["a"])({components:{HelloWorld:j}})],O);var E=O,P=E,S=Object(s["a"])(P,u,p,!1,null,null,null);S.options.__file="Home.vue";var T=S.exports;r["default"].use(d["a"]);var A=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),M=a("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].config.productionTip=!1,new r["default"]({router:A,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.b3854082.js.map