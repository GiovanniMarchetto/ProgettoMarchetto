(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Administrator_page~Uploader_page"],{"137e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-pagination",{attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill","first-number":"","last-number":"","prev-text":"Prev","next-text":"Next"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),n("b-col",{staticClass:"my-1",attrs:{sm:"4"}},[n("b-form-group",{attrs:{label:"Per page:","label-for":"per-page-select","label-cols-sm":"3"}},[n("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)],1),n("b-table",{attrs:{striped:"",stacked:"sm","head-variant":"dark","table-variant":"secondary","sticky-header":"600px",responsive:"","current-page":e.currentPage,"per-page":e.perPage,items:e.items,fields:e.fields,"tbody-tr-class":e.highlightNew,busy:e.caricamentoDati},scopedSlots:e._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-primary my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[e._v("Caricamento...")])],1)]},proxy:!0},{key:"cell(logo)",fn:function(t){return[n("b-img",e._b({attrs:{src:""+t.item.logo,alt:"Logo uploader"}},"b-img",e.logoProps,!1))]}},{key:"cell(details)",fn:function(t){return[n("b-button",{on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"cell(files)",fn:function(t){return[n("b-button",{attrs:{variant:"info"},on:{click:function(n){return e.$emit("mostraFiles",t.item.username)}}},[e._v("Mostra File")])]}},{key:"cell(scarica)",fn:function(t){return[n("b-button",{on:{click:function(n){return e.$emit("download-file",t.item.id)}}},[e._v(" Download ")])]}},{key:"row-details",fn:function(t){return[n("b-card",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("b",[e._v("Username:")])]),n("b-col",[e._v(e._s(t.item.username))])],1),n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("b",[e._v("Email:")])]),n("b-col",[e._v(e._s(t.item.email))])],1)],1)]}}])}),0==e.items.length?n("div",[n("p",[e._v("Nessun elemento")])]):e._e()],1)},a=[],o={name:"Table",props:["items","fields","caricamentoDati"],data:function(){return{currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Troppi"}],logoProps:{rounded:"circle"}}},methods:{highlightNew:function(e,t){if(e&&"row"===t)return""===e.dataVisualizzazione?"table-warning":void 0}},computed:{totalRows:function(){return this.items.length}}},i=o,s=(n("ee64"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"2a56b4c7",null);t["a"]=c.exports},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),o=n("17c2"),i=n("9112");for(var s in a){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),i=n("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&r(RegExp.prototype,s,(function(){var e=a(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?i.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},4559:function(e,t,n){},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,o=n("1dde"),i=o("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,n){var r=n("861d"),a=n("e8b5"),o=n("b622"),i=o("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("c04e"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),m=n("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=m>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=d("concat"),_=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},w=!g||!h;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,a,o,i=s(this),d=u(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],_(o)){if(a=c(o.length),f+a>v)throw TypeError(b);for(n=0;n<a;n++,f++)n in o&&l(d,f,o[n])}else{if(f>=v)throw TypeError(b);l(d,f++,o)}return d.length=f,d}})},a11b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Eliminazione")]),n("b-container",{attrs:{fluid:""}},[n("h3",[e._v("Elimina attore")]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.deleteActor(t)}}},[n("label",{attrs:{for:"username"}},[e._v("Username attore da eliminare")]),n("b-form-input",{attrs:{list:"attori-list",id:"username",type:"text",name:"username",placeholder:"username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("b-form-datalist",{attrs:{id:"attori-list",options:e.attoriOptions}}),n("b-button",{attrs:{type:"submit",variant:"danger"}},[e._v("Elimina utente")])],1),n("p",[e._v(" NB: non puoi cancellare il tuo account ")])],1),"uploader"===e.potere?n("b-container",{attrs:{fluid:""}},[n("h3",[e._v("Elimina file")]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.deleteFile(t)}}},[n("label",{attrs:{for:"fileId"}},[e._v("Identificativo file da eliminare")]),n("b-form-input",{attrs:{list:"fileId-list",id:"fileId",type:"text",name:"fileId",placeholder:"id file",required:""},model:{value:e.fileId,callback:function(t){e.fileId=t},expression:"fileId"}}),n("b-form-datalist",{attrs:{id:"fileId-list",options:e.fileOptions}}),n("b-button",{attrs:{type:"submit",variant:"danger"}},[e._v("Elimina file")])],1),n("p",[e._v(" NB: puoi cancellare solo i file da te caricati ")])],1):e._e(),n("Spinner",{attrs:{attesa:e.attesa}})],1)},a=[],o=(n("d3b7"),n("99af"),n("6067")),i=n("62c3"),s=n.n(i);s.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken"));var c={name:"Delete",components:{Spinner:o["a"]},props:["potere","attoriOptions","fileOptions"],data:function(){return{username:"",fileId:"",attesa:!1}},methods:{deleteActor:function(){var e=this;this.attesa=!0,s.a.delete("".concat("/api","/attori/delete/").concat(this.username)).then((function(t){e.$emit("delete_username",e.username),e.username="",e.$emit("delete",t.data)})).catch((function(t){e.$emit("delete",t.response.data)})).finally((function(){e.attesa=!1}))},deleteFile:function(){var e=this;this.attesa=!0,s.a.delete("".concat("/api","/files/delete/").concat(this.fileId)).then((function(t){e.$emit("delete_file",e.fileId),e.fileId="",e.$emit("delete",t.data)})).catch((function(t){e.$emit("delete",t.err.response.data)})).finally((function(){e.attesa=!1}))}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,a,!1,null,null,null);t["a"]=d.exports},a37d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{on:{click:function(t){return e.$emit("mostraSezione","")}}},[e._v(e._s(e.potere)+" page")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","")}}},[e._v(e._s(e.nomePrimaLista))]),n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","secondaLista")}}},[e._v(e._s(e.nomeSecondaLista))]),"administrator"===e.potere?n("b-nav-item-dropdown",{attrs:{text:"Registra utente"}},[n("b-dropdown-item",{on:{click:function(t){e.$emit("mostraSezione","registration"),e.$emit("ruoloForm","administrator")}}},[e._v("Administrator")]),n("b-dropdown-item",{on:{click:function(t){e.$emit("mostraSezione","registration"),e.$emit("ruoloForm","uploader")}}},[e._v("Uploader")])],1):e._e(),"uploader"===e.potere?n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","registration")}}},[e._v("Creare Consumer")]):e._e(),"consumer"===e.potere?n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","modInfo")}}},[e._v("Modifica informazioni")]):n("b-nav-item-dropdown",{attrs:{text:"Modifica utente"}},["administrator"===e.potere?n("b-dropdown-item",{on:{click:function(t){e.$emit("mostraSezione","modInfo"),e.$emit("ruoloForm","administrator")}}},[e._v("Administrator")]):e._e(),n("b-dropdown-item",{on:{click:function(t){e.$emit("mostraSezione","modInfo"),e.$emit("ruoloForm","uploader")}}},[e._v("Uploader")]),"uploader"===e.potere?n("b-dropdown-item",{on:{click:function(t){e.$emit("mostraSezione","modInfo"),e.$emit("ruoloForm","consumer")}}},[e._v("Consumer")]):e._e()],1),"uploader"===e.potere?n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","upload")}}},[e._v("Upload file")]):e._e(),"consumer"!==e.potere?n("b-nav-item",{on:{click:function(t){return e.$emit("mostraSezione","delete")}}},[e._v("Elimina")]):e._e()],1)],1)],1)},a=[],o={name:"Navbar",props:["potere","nomePrimaLista","nomeSecondaLista"]},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);t["a"]=c.exports},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},afcd:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Modifica informazioni")]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.modInfo(t)},reset:e.reset}},[n("Credenziali",{directives:[{name:"show",rawName:"v-show",value:"consumer"!=e.potere,expression:"potere != 'consumer'"}],attrs:{required:!1,username:e.username,password:e.password},on:{"update:username":function(t){e.username=t},"update:password":function(t){e.password=t}}}),n("UserInfo",{attrs:{required:!1,name:e.name,email:e.email},on:{"update:name":function(t){e.name=t},"update:email":function(t){e.email=t}}}),"uploader"===e.role?n("Logo",{attrs:{required:!1,logo:e.logo},on:{"update:logo":function(t){e.logo=t}}}):e._e(),n("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Modifica informazioni")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1),n("section",[n("h3",[e._v("Istruzioni per la modifica")]),n("p",[e._v("Inserire i dati da modificare (non si può modificare l'username).")]),n("p",{directives:[{name:"show",rawName:"v-show",value:"consumer"!=e.potere,expression:"potere != 'consumer'"}]},[e._v(" Se si vuole modificare le informazioni di un altro utente immettere l'username. ")])]),n("Spinner",{attrs:{attesa:e.attesa}})],1)},a=[],o=(n("d3b7"),n("b0c0"),n("6067")),i=n("a4e7"),s=n("66e6"),c=n("278f"),l=n("fa7d"),u=n("62c3"),d=n.n(u);d.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken"));var f={name:"ModInfo",mixins:[l["a"]],props:["potere","role"],components:{Credenziali:i["a"],UserInfo:s["a"],Logo:c["a"],Spinner:o["a"]},data:function(){return{attesa:!1}},methods:{modInfo:function(){var e=this;this.attesa=!0,d.a.patch("".concat("/api","/attori/modInfo"),{username:this.username,password:this.password,name:this.name,email:this.email,role:this.role,logo:this.logo}).then((function(t){var n={utente:t.data,role:e.role};e.$emit("modInfo_utente",n),""!==e.username?e.$emit("modInfo","Modifica attore eseguita - "+e.username):e.$emit("modInfo","Modifica delle proprie informazioni eseguita"),e.reset()})).catch((function(t){e.$emit("modInfo",t.response.data)})).finally((function(){e.attesa=!1}))}}},m=f,p=n("2877"),v=Object(p["a"])(m,r,a,!1,null,"1545eef1",null);t["a"]=v.exports},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),o=n("7b0b"),i=n("50c4"),s=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,f=7==e,m=5==e||d;return function(p,v,b,g){for(var h,_,w=o(p),y=a(w),x=r(v,b,3),k=i(y.length),I=0,$=g||s,S=t?$(p,k):n||f?$(p,0):void 0;k>I;I++)if((m||I in y)&&(h=y[I],_=x(h,I,w),e))if(t)S[I]=_;else if(_)switch(e){case 3:return!0;case 5:return h;case 6:return I;case 2:c.call(S,h)}else switch(e){case 4:return!1;case 7:c.call(S,h)}return d?-1:l||u?u:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c740:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,o=n("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ee64:function(e,t,n){"use strict";n("4559")}}]);
//# sourceMappingURL=Administrator_page~Uploader_page.79ba84d5.js.map