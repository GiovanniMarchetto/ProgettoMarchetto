(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],c=0,m=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({"Administrator_page~Uploader_page":"Administrator_page~Uploader_page",Administrator_page:"Administrator_page",Uploader_page:"Uploader_page",Consumer_page:"Consumer_page"}[e]||e)+"."+{"Administrator_page~Uploader_page":"b71f3574",Administrator_page:"d5413ba2",Uploader_page:"48946306",Consumer_page:"9a087db4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"Administrator_page~Uploader_page":1,Consumer_page:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"Administrator_page~Uploader_page":"Administrator_page~Uploader_page",Administrator_page:"Administrator_page",Uploader_page:"Uploader_page",Consumer_page:"Consumer_page"}[e]||e)+"."+{"Administrator_page~Uploader_page":"407802d6",Administrator_page:"31d6cfe0",Uploader_page:"31d6cfe0",Consumer_page:"407802d6"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var m=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"278f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form-group",{attrs:{label:"Logo:","label-for":e.id}},[n("b-form-file",{attrs:{id:e.id,type:"file",name:"logoInput",placeholder:"Scegli un immagine o trascinala qui...",accept:"image/*",required:""},nativeOn:{change:function(t){return e.trasf64(t)}},model:{value:e.logoInput,callback:function(t){e.logoInput=t},expression:"logoInput"}}),n("figure",{directives:[{name:"show",rawName:"v-show",value:e.logoStringInput,expression:"logoStringInput"}]},[n("b-img",{attrs:{center:"",rounded:"circle",src:""+e.logoStringInput,alt:"Anteprima Logo"}})],1)],1)],1)},a=[],o=n("ec26"),s={name:"Logo",props:["required","logo"],data:function(){return{logoInput:null,id:""}},watch:{logoStringInput:function(){""===this.logoStringInput&&(this.logoInput=null)}},methods:{trasf64:function(e){var t=this,n=new FileReader;n.onload=function(e){t.logoStringInput=e.target.result},n.onerror=function(e){console.log("Error: ",e)},n.readAsDataURL(e.target.files[0])}},computed:{logoStringInput:{get:function(){return this.logo},set:function(e){this.$emit("update:logo",e)}}},mounted:function(){1!=this.required&&document.getElementById(this.id).removeAttribute("required")},created:function(){this.id=Object(o["a"])()}},i=s,u=(n("ec62"),n("2877")),l=Object(u["a"])(i,r,a,!1,null,"2b928a40",null);t["a"]=l.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view"),n("Footer")],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("img",{attrs:{id:"logoPagina",src:n("cf05"),alt:"Logo sito"}}),r("h1",[e._v("Progetto Marchetto")])])}],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v(" I sorgenti del progetto sono disponibili su GtHub: "),n("a",{attrs:{href:"https://github.com/GiovanniMarchetto/ProgettoMarchetto"}},[e._v("back-end")]),e._v(" e "),n("a",{attrs:{href:"https://github.com/GiovanniMarchetto/prog_marchetto_vue"}},[e._v("front-end")]),e._v(". ")])])}],u={name:"Footer"},l=u,c=(n("9f71"),n("2877")),m=Object(c["a"])(l,s,i,!1,null,"79c0a8e8",null),p=m.exports,d={name:"App",components:{Footer:p}},g=d,f=(n("034f"),Object(c["a"])(g,a,o,!1,null,null,null)),h=f.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[e._m(0),n("section",{directives:[{name:"show",rawName:"v-show",value:""===e.sezione,expression:"sezione === ''"}]},[n("Login",{on:{login:e.showMsg,login_username:e.login_username_home}}),n("b-button",{on:{click:function(t){e.sezione="registration"}}},[e._v("Non hai ancora un account")])],1),n("section",{directives:[{name:"show",rawName:"v-show",value:"registration"===e.sezione,expression:"sezione === 'registration'"}]},[n("Registration",{attrs:{potere:"consumer",role:"consumer"},on:{registrazione:e.registrazione_home}}),n("b-button",{on:{click:function(t){e.sezione=""}}},[e._v("Ho già un account!")])],1),n("Messages",{attrs:{msg_success:e.msg_success,msg_error:e.msg_error,msg_warning:e.msg_warning}})],1)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",[e._v("Pagina d'accesso")])])}],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("Credenziali",{attrs:{required:!0,username:e.username,password:e.password},on:{"update:username":function(t){e.username=t},"update:password":function(t){e.password=t}}}),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Login")])],1),n("Spinner",{attrs:{attesa:e.attesa}})],1)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h3",[e._v("Login")])])}],y=n("a4e7"),x=n("6067"),A=n("62c3"),E=n.n(A),$={name:"Login",components:{Credenziali:y["a"],Spinner:x["a"]},data:function(){return{username:"",password:"",attesa:!1}},methods:{login:function(){var e=this;this.attesa=!0,E.a.post("".concat("/api","/login"),{username:this.username,password:this.password}).then((function(t){localStorage.setItem("jwtToken",t.data),localStorage.setItem("nomeUtente",e.username),e.$emit("login","Login eseguito - "+e.username),e.$emit("login_username",e.username)})).catch((function(t){e.$emit("login",t.response.data)})).finally((function(){e.attesa=!1}))}}},S=$,j=Object(c["a"])(S,w,I,!1,null,null,null),q=j.exports,O=n("be26"),U=n("fb85"),z=n("fa7d"),C={name:"Login_page",components:{Login:q,Registration:O["a"],Messages:U["a"]},mixins:[z["b"],z["c"]],methods:{login_username_home:function(e){var t=this;setTimeout((function(){4===e.length?t.$router.push("/uploader_page"):e.includes("@")?t.$router.push("/administrator_page"):16===e.length?t.$router.push("/consumer_page"):t.showMsg("Error: Username non riscontrato...")}),1e3)},registrazione_home:function(e){this.showMsg(e),this.sezione=""}},created:function(){console.log("/api")}},k=C,L=Object(c["a"])(k,v,b,!1,null,null,null),P=L.exports,M=void 0;r["default"].use(_["a"]);var N=[{path:"/",name:"Login_page",component:P},{path:"/consumer_page",name:"Consumer_page",meta:{requiresAuth:!0},component:function(){return n.e("Consumer_page").then(n.bind(null,"b86e"))}},{path:"/uploader_page",name:"Uploader_page",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("Administrator_page~Uploader_page"),n.e("Uploader_page")]).then(n.bind(null,"cdf3"))}},{path:"/administrator_page",name:"Administrator_page",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("Administrator_page~Uploader_page"),n.e("Administrator_page")]).then(n.bind(null,"147f"))}},{path:"*",redirect:"/"}],R=new _["a"]({routes:N});R.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.getItem("jwtToken")?t.matched.some((function(e){return e.meta.requiresAuth}))?4===localStorage.getItem("nomeUtente").length?M.$router.push("/uploader_page"):localStorage.getItem("nomeUtente").includes("@")?M.$router.push("/administrator_page"):16===localStorage.getItem("nomeUtente").length?M.$router.push("/consumer_page"):M.showMsg("ERR- Username non riscontrato..."):n():n({path:"/",query:{redirect:e.fullPath}}):n()}));var T=R,B=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(B["a"]),r["default"].config.productionTip=!1,new r["default"]({router:T,render:function(e){return e(h)}}).$mount("#app")},6067:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.attesa,expression:"attesa === true"}]},[n("b-button",{attrs:{block:"",variant:"light",disabled:""}},[n("b-spinner",{attrs:{small:""}}),e._v(" Caricamento... ")],1)],1)},a=[],o={name:"Spinner",props:["attesa"]},s=o,i=n("2877"),u=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=u.exports},"66e6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form-group",{attrs:{label:"Name:","label-for":e.nameInputId}},[n("b-form-input",{attrs:{id:e.nameInputId,type:"text",name:"nameInput",placeholder:"name",required:""},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}})],1),n("b-form-group",{attrs:{label:"Email:","label-for":e.emailInputId}},[n("b-form-input",{attrs:{id:e.emailInputId,type:"email",name:"emailInput",placeholder:"email",required:""},model:{value:e.emailInput,callback:function(t){e.emailInput=t},expression:"emailInput"}})],1)],1)},a=[],o=(n("b0c0"),n("ec26")),s={name:"UserInfo",props:["required","name","email"],data:function(){return{nameInputId:"",emailInputId:""}},computed:{nameInput:{get:function(){return this.name},set:function(e){this.$emit("update:name",e)}},emailInput:{get:function(){return this.email},set:function(e){this.$emit("update:email",e)}}},mounted:function(){1!=this.required&&(document.getElementById(this.nameInputId).removeAttribute("required"),document.getElementById(this.emailInputId).removeAttribute("required"))},created:function(){this.nameInputId=Object(o["a"])(),this.emailInputId=Object(o["a"])()}},i=s,u=n("2877"),l=Object(u["a"])(i,r,a,!1,null,null,null);t["a"]=l.exports},"7c14":function(e,t,n){},"85ec":function(e,t,n){},9502:function(e,t,n){},"9f71":function(e,t,n){"use strict";n("7c14")},a4e7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form-group",{attrs:{label:"Username:","label-for":e.usernameInputId}},[n("b-form-input",{attrs:{id:e.usernameInputId,type:"text",name:"usernameInput",placeholder:"username",required:""},model:{value:e.usernameInput,callback:function(t){e.usernameInput=t},expression:"usernameInput"}}),n("b-form-text",{directives:[{name:"show",rawName:"v-show",value:"consumer"===e.ruolo,expression:"ruolo === 'consumer'"}]},[e._v(" Codice fiscale di 16 cifre ")]),n("b-form-text",{directives:[{name:"show",rawName:"v-show",value:"uploader"===e.ruolo,expression:"ruolo === 'uploader'"}]},[e._v(" Codice alfa-numerico di 4 caratteri ")]),n("b-form-text",{directives:[{name:"show",rawName:"v-show",value:"administrator"===e.ruolo,expression:"ruolo === 'administrator'"}]},[e._v(" Dev'essere una email ")]),n("b-form-text",{directives:[{name:"show",rawName:"v-show",value:"modifica"===e.ruolo,expression:"ruolo === 'modifica'"}]},[e._v(" Immettere l'username dell'utente da modificare (se omesso verrà considerato l'username dell'utente loggato). ")])],1),n("b-form-group",{attrs:{label:"Password:","label-for":e.passwordInputId}},[n("b-form-input",{attrs:{id:e.passwordInputId,type:"password",name:"passwordInput",placeholder:"password",required:""},model:{value:e.passwordInput,callback:function(t){e.passwordInput=t},expression:"passwordInput"}})],1)],1)},a=[],o=n("ec26"),s={name:"Credenziali",props:["required","ruolo","username","password"],data:function(){return{usernameInputId:"",passwordInputId:""}},computed:{usernameInput:{get:function(){return this.username},set:function(e){this.$emit("update:username",e)}},passwordInput:{get:function(){return this.password},set:function(e){this.$emit("update:password",e)}}},mounted:function(){!0!==this.required&&(document.getElementById(this.usernameInputId).removeAttribute("required"),document.getElementById(this.passwordInputId).removeAttribute("required"))},created:function(){this.usernameInputId=Object(o["a"])(),this.passwordInputId=Object(o["a"])()}},i=s,u=n("2877"),l=Object(u["a"])(i,r,a,!1,null,null,null);t["a"]=l.exports},be26:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("header",[n("h3",[e._v("Registrazione "+e._s(e.role))])]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.registration(t)},reset:e.reset}},[n("Credenziali",{attrs:{required:!0,ruolo:e.role,username:e.username,password:e.password},on:{"update:username":function(t){e.username=t},"update:password":function(t){e.password=t}}}),n("UserInfo",{attrs:{required:!0,name:e.name,email:e.email},on:{"update:name":function(t){e.name=t},"update:email":function(t){e.email=t}}}),"uploader"===e.role?n("Logo",{attrs:{required:!0,logo:e.logo},on:{"update:logo":function(t){e.logo=t}}}):e._e(),n("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Registrazione")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1),n("Spinner",{attrs:{attesa:e.attesa}})],1)},a=[],o=(n("d3b7"),n("b0c0"),n("6067")),s=n("a4e7"),i=n("66e6"),u=n("278f"),l=n("fa7d"),c=n("62c3"),m=n.n(c);null!=localStorage.getItem("jwtToken")&&(m.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken")));var p={name:"Registration",mixins:[l["a"]],props:["potere","role"],components:{Credenziali:s["a"],UserInfo:i["a"],Logo:u["a"],Spinner:o["a"]},data:function(){return{attesa:!1}},methods:{registration:function(){var e=this;this.attesa=!0,m.a.post("".concat("/api","/attori/registration"),{username:this.username,password:this.password,name:this.name,email:this.email,role:this.role,logo:this.logo}).then((function(t){var n={username:e.username,password:e.password,name:e.name,email:e.email,role:e.role,logo:e.logo};e.$emit("registrazione_utente",n),e.$emit("registrazione",t.data),e.reset()})).catch((function(t){e.$emit("registrazione",t.response.data)})).finally((function(){e.attesa=!1}))}}},d=p,g=n("2877"),f=Object(g["a"])(d,r,a,!1,null,null,null);t["a"]=f.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.cd1e7995.png"},ec62:function(e,t,n){"use strict";n("9502")},fa7d:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));n("2ca0"),n("b0c0");var r={data:function(){return{msg_success:"",msg_error:"",msg_warning:""}},methods:{showMsg:function(e){e.startsWith("ERR")||e.startsWith("Err")?(this.msg_error=e,this.$bvToast.show("msg_e")):e.startsWith("WARN")?(this.msg_warning=e,this.$bvToast.show("msg_w")):(this.msg_success=e,this.$bvToast.show("msg_s"))}}},a={data:function(){return{sezione:""}},methods:{showSezione:function(e){this.sezione=e}}},o={data:function(){return{username:"",password:"",name:"",email:"",logo:""}},methods:{reset:function(){this.username="",this.password="",this.name="",this.email="",this.logo=""}}}},fb85:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-toast",{attrs:{id:"msg_e",title:"ERROR",autoHideDelay:"5000",variant:"danger"}},[e._v(" "+e._s(e.msg_error)+" ")]),n("b-toast",{attrs:{id:"msg_s",title:"Success",autoHideDelay:"5000",variant:"success"}},[e._v(" "+e._s(e.msg_success)+" ")]),n("b-toast",{attrs:{id:"msg_w",title:"Warning!",autoHideDelay:"5000",variant:"warning"}},[e._v(" "+e._s(e.msg_warning)+" ")])],1)},a=[],o={name:"Messages",props:["msg_error","msg_success","msg_warning"]},s=o,i=n("2877"),u=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=u.exports}});
//# sourceMappingURL=app.547b5b67.js.map