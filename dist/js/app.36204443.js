(function(e){function n(n){for(var o,i,l=n[0],u=n[1],c=n[2],s=0,p=[];s<l.length;s++)i=l[s],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},a=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"83402e7d"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e),a=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var d=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"3acd":function(e,n,t){"use strict";var o=t("e928"),r=t.n(o);r.a},b26d:function(e,n,t){e.exports=t.p+"img/burger-flat.0b7942f4.png"},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"container"},[o("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top"},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"d-inline-block align-top",attrs:{src:t("b26d"),width:"30px",height:"30px",alt:""}})]),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav mr-auto"},[o("li",{staticClass:"nav-item dropdown"},[o("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Menu\n          ")]),o("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[o("router-link",{staticClass:"dropdown-item",attrs:{to:"/menu"}},[e._v("Voir le menu")]),o("div",{staticClass:"dropdown-divider"}),o("router-link",{staticClass:"dropdown-item",attrs:{to:"/changeMenu"}},[e._v("Modifier le Menu")])],1)]),o("li",{staticClass:"nav-item dropdown"},[o("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Service\n          ")]),o("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[o("router-link",{staticClass:"dropdown-item",attrs:{to:"/order-1"}},[e._v("Voir les commandes")]),o("router-link",{staticClass:"dropdown-item",attrs:{to:"/takeOrder"}},[e._v("Prendre une commande")]),o("div",{staticClass:"dropdown-divider"}),o("router-link",{staticClass:"dropdown-item",attrs:{to:"/searchOrder"}},[e._v("Recherche une commande")])],1)]),o("li",{staticClass:"nav-item dropdown"},[o("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Cuisine\n          ")]),o("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[o("router-link",{staticClass:"dropdown-item",attrs:{to:"/rolesCookers"}},[e._v("Accéder aux rôles")]),o("router-link",{staticClass:"dropdown-item",attrs:{to:"/unavailableDish"}},[e._v("Plat indisponible")]),o("div",{staticClass:"dropdown-divider"}),o("router-link",{staticClass:"dropdown-item",attrs:{to:"/changeRolesCookers"}},[e._v("Modifier les rôles")])],1)])])]),e._m(0)],1),o("br"),o("br"),o("br"),o("router-view")],1)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],i=t("2877"),l={},u=Object(i["a"])(l,r,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,s=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},p=[],m=t("d4ec"),b=t("99de"),f=t("7e84"),h=t("262e"),v=t("9ab4"),g=t("60a3"),w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("form",[t("h1",[e._v("Connexion")]),e._m(0),e._m(1),e._m(2),t("router-link",{attrs:{to:"/accueil"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])],1)},C=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),t("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),t("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"form-group form-check"},[t("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),t("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("Check me out")])])}],k=function(e){function n(){return Object(m["a"])(this,n),Object(b["a"])(this,Object(f["a"])(n).apply(this,arguments))}return Object(h["a"])(n,e),n}(g["c"]);v["a"]([Object(g["b"])()],k.prototype,"msg",void 0),k=v["a"]([g["a"]],k);var _=k,O=_,y=(t("3acd"),Object(i["a"])(O,w,C,!1,null,"74cfd559",null));y.options.__file="Connexion.vue";var x=y.exports,j=function(e){function n(){return Object(m["a"])(this,n),Object(b["a"])(this,Object(f["a"])(n).apply(this,arguments))}return Object(h["a"])(n,e),n}(g["c"]);j=v["a"]([Object(g["a"])({components:{HelloWorld:x}})],j);var T=j,P=T,E=Object(i["a"])(P,d,p,!1,null,null,null);E.options.__file="Home.vue";var D=E.exports;o["default"].use(s["a"]);var A=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D},{path:"/patron",name:"patron",component:D},{path:"/cuisine",name:"cuisine",component:D},{path:"/service",name:"service",component:D},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/accueil",name:"accueil",component:function(){return t.e("about").then(t.bind(null,"ab87"))}},{path:"/takeOrder",name:"takeOrder",component:function(){return t.e("about").then(t.bind(null,"dc9a"))}},{path:"/cookerOrder",name:"cookerOrder",component:function(){return t.e("about").then(t.bind(null,"ed30"))}},{path:"/changeMenu",name:"changeMenu",component:function(){return t.e("about").then(t.bind(null,"4ac9"))}},{path:"/rolesCookers",name:"rolesCookers",component:function(){return t.e("about").then(t.bind(null,"b158"))}},{path:"/order-1",name:"order-1",component:function(){return t.e("about").then(t.bind(null,"74bc"))}},{path:"/order-2",name:"order-2",component:function(){return t.e("about").then(t.bind(null,"5ad1"))}},{path:"/order-3",name:"order-3",component:function(){return t.e("about").then(t.bind(null,"53da"))}},{path:"/navBarAdmin",name:"navBarAdmin",component:function(){return t.e("about").then(t.bind(null,"3ad2"))}},{path:"/menu",name:"menu",component:function(){return t.e("about").then(t.bind(null,"9a0b"))}},{path:"/takeOrder",name:"takeOrder",component:function(){return t.e("about").then(t.bind(null,"dc9a"))}},{path:"/unavailableDish",name:"unavailableDish",component:function(){return t.e("about").then(t.bind(null,"950d"))}},{path:"/searchOrder",name:"searchOrder",component:function(){return t.e("about").then(t.bind(null,"362e"))}},{path:"/order",name:"order",component:function(){return t.e("about").then(t.bind(null,"cf2a"))}},{path:"/new-menu",name:"new-menu",component:function(){return t.e("about").then(t.bind(null,"4187"))}},{path:"/cookerToDoNothing",name:"cookerToDoNothing",component:function(){return t.e("about").then(t.bind(null,"abae"))}},{path:"/cook",name:"cook",component:function(){return t.e("about").then(t.bind(null,"cf9b"))}},{path:"/newCook",name:"newCook",component:function(){return t.e("about").then(t.bind(null,"4b14"))}},{path:"/newCookerToDoNothing",name:"newCookerToDoNothing",component:function(){return t.e("about").then(t.bind(null,"80d4"))}},{path:"/newRolesCookers",name:"newRolesCookers",component:function(){return t.e("about").then(t.bind(null,"eb4c"))}},{path:"/newCookerOrder",name:"newCookerOrder",component:function(){return t.e("about").then(t.bind(null,"19cb"))}},{path:"/order",name:"order",component:function(){return t.e("about").then(t.bind(null,"cf2a"))}},{path:"/changeRolesCookers",name:"changeRolesCookers",component:function(){return t.e("about").then(t.bind(null,"b9f3"))}},{path:"/changeProfil",name:"changeProfil",component:function(){return t.e("about").then(t.bind(null,"84e6"))}},{path:"/addToOrder",name:"addToOrder",component:function(){return t.e("about").then(t.bind(null,"ac09"))}},{path:"/formAddToOrder",name:"formAddToOrder",component:function(){return t.e("about").then(t.bind(null,"6f88"))}},{path:"/formRemoveToOrder",name:"formRemoveToOrder",component:function(){return t.e("about").then(t.bind(null,"9f0e"))}},{path:"/removeToOrder",name:"removeToOrder",component:function(){return t.e("about").then(t.bind(null,"ac4f"))}}]}),M=t("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].config.productionTip=!1,new o["default"]({router:A,render:function(e){return e(c)}}).$mount("#app")},e928:function(e,n,t){}});
//# sourceMappingURL=app.36204443.js.map