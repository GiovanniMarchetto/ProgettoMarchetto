(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Uploader-page"],{baa5:function(e,n,a){var t=a("23e7"),o=a("e58c");t({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c78d:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{on:{click:function(n){return e.showSezione("")}}},[e._v("Uploader page")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{on:{click:function(n){return e.showSezione("")}}},[e._v("Lista consumer/file")]),a("b-nav-item",{on:{click:function(n){e.showSezione("registration"),e.roleRegistrazione="consumer"}}},[e._v("Creare Consumer")]),a("b-nav-item-dropdown",{attrs:{text:"Modifica Attore"}},[a("b-dropdown-item",{on:{click:function(n){e.showSezione("modInfo"),e.roleRegistrazione="consumer"}}},[e._v("Consumer")]),a("b-dropdown-item",{on:{click:function(n){e.showSezione("modInfo"),e.roleRegistrazione="uploader"}}},[e._v("Uploader")])],1),a("b-nav-item",{on:{click:function(n){return e.showSezione("upload")}}},[e._v("Carica nuovo file")])],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:""==e.sezione,expression:"sezione == ''"}]},[a("h2",[e._v("Lista Consumer")]),a("Consumers",{attrs:{consumers:e.consumers},on:{"cons-files":e.showFiles,"del-cons":e.deleteAct}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"files"==e.sezione,expression:"sezione == 'files'"}]},[a("h2",[e._v("Lista Files di "+e._s(e.consumerScelto))]),a("b-button",{on:{click:function(n){return e.showSezione("")}}},[e._v("Lista file")]),a("Files",{attrs:{files:e.filesConsumer,ruolo:e.ruolo},on:{"del-file":e.deleteAct}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"registration"==e.sezione,expression:"sezione == 'registration'"}]},[a("Registration",{attrs:{potere:e.ruolo,role:e.roleRegistrazione},on:{registrazione:e.registration_home}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"modInfo"==e.sezione,expression:"sezione == 'modInfo'"}]},[a("ModInfo",{attrs:{potere:e.ruolo,role:e.roleRegistrazione},on:{modInfo:e.modInfo_home}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"upload"==e.sezione,expression:"sezione == 'upload'"}]},[a("Upload",{on:{upload_consumer:e.upload_consumer_home,upload_file:e.upload_file_home,upload:e.upload_home}})],1),a("Messages",{attrs:{msg_success:e.msg_success,msg_error:e.msg_error,msg_warning:e.msg_warning}})],1)},o=[],s=(a("99af"),a("4de4"),a("c740"),function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("b-table",{attrs:{striped:"","head-variant":"dark","table-variant":"secondary","sticky-header":"600px",responsive:"",items:e.consumers,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(n){return[a("b-button",{on:{click:n.toggleDetails}},[e._v(" "+e._s(n.detailsShowing?"Hide":"Show")+" Details ")]),a("b-button",{attrs:{variant:"info"},on:{click:function(a){return e.$emit("cons-files",n.item.username)}}},[e._v("Mostra File")]),a("b-button",{staticClass:"del",on:{click:function(a){return e.$emit("del-cons",n.item.username)}}},[e._v("Elimina consumer")])]}},{key:"row-details",fn:function(n){return[a("b-card",[a("b-row",{staticClass:"mb-2"},[a("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[a("b",[e._v("Name:")])]),a("b-col",[e._v(e._s(n.item.name))])],1),a("b-row",{staticClass:"mb-2"},[a("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[a("b",[e._v("Email:")])]),a("b-col",[e._v(e._s(n.item.email))])],1)],1)]}}])}),0===e.consumers.length?a("p",[e._v("Non ha caricato file ad alcun consumer")]):e._e()],1)}),i=[],r={name:"Consumers",components:{},props:["consumers"],data:function(){return{fields:["username","actions"]}}},l=r,u=a("2877"),c=Object(u["a"])(l,s,i,!1,null,"3f49c4bd",null),m=c.exports,f=a("0d13"),h=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("h2",[e._v("Caricamento file")]),a("b-form",{on:{submit:function(n){return n.preventDefault(),e.upload(n)},reset:function(n){return n.preventDefault(),e.reset(n)}}},[a("FileInput",{attrs:{file:e.file,nameFile:e.nameFile,hashtag:e.hashtag},on:{"change-info":e.change_home}}),a("legend",[e._v("Dati Consumer")]),a("b-container",[a("b-form-group",{attrs:{id:"usernameCons-group",label:"Username consumer:","label-for":"usernameCons"}},[a("b-form-input",{attrs:{id:"usernameCons",type:"text",name:"usernameCons",placeholder:"username consume"},model:{value:e.usernameCons,callback:function(n){e.usernameCons=n},expression:"usernameCons"}})],1)],1),a("UserInfo",{attrs:{required:!1,name:e.nameCons,email:e.emailCons},on:{"change-info":e.change_home}}),a("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Upload")]),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)},d=[],p=(a("2ca0"),function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-container",[a("b-form-group",{attrs:{id:"file-group",label:"File:","label-for":"file"}},[a("b-form-file",{attrs:{id:"file",type:"file",name:"file",required:""},nativeOn:{change:function(n){return e.trasf64(n)}},model:{value:e.file,callback:function(n){e.file=n},expression:"file"}})],1),a("b-form-group",{attrs:{id:"nameFile-group",label:"Nome del file:","label-for":"nameFile"}},[a("b-form-input",{attrs:{id:"nameFile",type:"text",name:"nameFile",placeholder:"name of file",required:""},nativeOn:{change:function(n){return e.change_info(n)}},model:{value:e.nameFile,callback:function(n){e.nameFile=n},expression:"nameFile"}})],1),a("b-form-group",{attrs:{id:"hashtag-group",label:"Hashtag:","label-for":"hashtag"}},[a("b-form-input",{attrs:{id:"hashtag",type:"text",name:"hashtag",placeholder:"hashtag"},nativeOn:{change:function(n){return e.change_info(n)}},model:{value:e.hashtag,callback:function(n){e.hashtag=n},expression:"hashtag"}})],1)],1)}),g=[],v=(a("baa5"),a("b0c0"),a("ac1f"),a("5319"),a("fa7d")),b={name:"FileInput",props:["file","nameFile","hashtag"],mixins:[v["a"]],watch:{file:function(){var e={nameProp:"file",valueProp:this.file};this.$emit("change-info",e)}},methods:{trasf64:function(e){var n=this,a=new FileReader;a.onload=function(e){n.file=e.target.result.replace(/^data:.+;base64,/,"")},a.onerror=function(e){console.log("Error: ",e)},a.readAsDataURL(e.target.files[0]);var t=e.target.files[0].name,o=t.lastIndexOf("."),s={nameProp:"extension",valueProp:t.substring(o)};this.$emit("change-info",s)}}},_=b,w=Object(u["a"])(_,p,g,!1,null,null,null),C=w.exports,x=a("66e6"),z=a("62c3"),k=a.n(z);null!=localStorage.getItem("jwtToken")&&(k.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken")));var F={name:"Upload",components:{FileInput:C,UserInfo:x["a"]},data:function(){return{file:"",nameFile:"",hashtag:"",extension:"",usernameCons:"",nameCons:"",emailCons:""}},methods:{change_home:function(e){var n=e.nameProp,a=e.valueProp;switch(n){case"file":this.file=a;break;case"nameFile":this.nameFile=a;break;case"hashtag":this.hashtag=a;break;case"extension":this.extension=a;break;case"name":this.nameCons=a;break;case"email":this.emailCons=a;break;default:console.log("switch concluso a vuoto");break}},reset:function(){this.file="",this.extension="",this.nameFile="",this.hashtag="",this.usernameCons="",this.nameCons="",this.emailCons=""},upload:function(){var e=this;k.a.post("".concat("/api","/files/upload"),{file:this.file,nameFile:this.nameFile+this.extension,hashtag:this.hashtag,usernameCons:this.usernameCons,nameCons:this.nameCons,emailCons:this.emailCons}).then((function(n){if(!n.data.startsWith("ERR")){var a={username:e.usernameCons,name:e.nameCons,email:e.emailCons,logo:""};e.$emit("upload_consumer",a);var t=new Date,o={id:"TODO",usernameUpl:localStorage.getItem("nomeUtente"),usernameCons:e.usernameCons,name:e.nameFile,dataCaricamento:t.toISOString().substring(0,10),dataVisualizzazione:"",indirizzoIP:"",hashtag:e.hashtag};e.$emit("upload_file",o),e.reset()}e.$emit("upload",n.data)})).catch((function(n){e.$emit("upload","ERR - "+n)}))}}},I=F,S=Object(u["a"])(I,h,d,!1,null,null,null),U=S.exports,O=a("be26"),R=a("afcd"),M=a("fb85");k.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken"));var y={name:"Uploader-page",components:{Consumers:m,Files:f["a"],Upload:U,Registration:O["a"],ModInfo:R["a"],Messages:M["a"]},mixins:[v["c"],v["d"]],data:function(){return{ruolo:"uploader",roleRegistrazione:"",consumerScelto:null,consumers:[],filesUploader:[],filesConsumer:[]}},methods:{showFiles:function(e){this.filesConsumer=null,this.filesConsumer=this.filesUploader.filter((function(n){return n.usernameCons===e})),this.consumerScelto=e,this.sezione="files"},deleteAct:function(e){var n,a=this;n=null===this.consumerScelto?"attori":"files",k.a.delete("".concat("/api","/").concat(n,"/delete/").concat(e)).then((function(t){a.showMsg(t.data),"attori"==n?a.consumers=a.consumers.filter((function(n){return n.username!==e})):(a.filesUploader=a.filesUploader.filter((function(n){return n.id!==e})),a.filesConsumer=a.filesUploader.filter((function(e){return e.usernameCons===a.consumerScelto})))})).catch((function(e){a.showMsg(e)}))},registration_home:function(e){this.showMsg(e)},modInfo_home:function(e){this.showMsg(e)},upload_consumer_home:function(e){var n=e.usernameCons;-1===this.consumers.findIndex((function(e){return e.username===n}))&&this.consumers.push(e)},upload_file_home:function(e){this.filesUploader.push(e),this.showFiles(this.consumerScelto),this.sezione="upload"},upload_home:function(e){this.showMsg(e)}},created:function(){var e=this;k.a.get("".concat("/api","/list/consumers")).then((function(n){return e.consumers=n.data})).catch((function(n){return e.showMsg(n)})),k.a.get("".concat("/api","/list/filesUploader")).then((function(n){return e.filesUploader=n.data})).catch((function(n){return e.showMsg(n)}))}},$=y,E=Object(u["a"])($,t,o,!1,null,null,null);n["default"]=E.exports},e58c:function(e,n,a){"use strict";var t=a("fc6a"),o=a("a691"),s=a("50c4"),i=a("a640"),r=a("ae40"),l=Math.min,u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0,m=i("lastIndexOf"),f=r("indexOf",{ACCESSORS:!0,1:0}),h=c||!m||!f;e.exports=h?function(e){if(c)return u.apply(this,arguments)||0;var n=t(this),a=s(n.length),i=a-1;for(arguments.length>1&&(i=l(i,o(arguments[1]))),i<0&&(i=a+i);i>=0;i--)if(i in n&&n[i]===e)return i||0;return-1}:u}}]);
//# sourceMappingURL=Uploader-page.dd059cdd.js.map