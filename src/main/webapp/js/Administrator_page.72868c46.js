(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Administrator_page"],{"147f":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Navbar",{attrs:{potere:e.ruolo,nomePrimaLista:"Resoconto",nomeSecondaLista:"Amministratori"},on:{mostraSezione:e.showSezione,ruoloForm:e.modificaRuoloForm}}),o("div",{directives:[{name:"show",rawName:"v-show",value:""==e.sezione,expression:"sezione == ''"}]},[o("h2",[e._v("Resoconto uploader")]),o("h3",[e._v(" Resoconto dal "+e._s(e.dateFromSelected.substring(8,10))+"-"+e._s(e.dateFromSelected.substring(5,7))+"-"+e._s(e.dateFromSelected.substring(0,4))+" al "+e._s(e.dateToSelected.substring(8,10))+"-"+e._s(e.dateToSelected.substring(5,7))+"-"+e._s(e.dateToSelected.substring(0,4))+" ")]),o("Table",{attrs:{items:e.resume,fields:e.fieldsResume,caricamentoDati:e.caricamentoDati}}),o("b-form",{staticStyle:{"margin-bottom":"10px"},on:{submit:function(t){return t.preventDefault(),e.dataFilter(t)},reset:function(t){return t.preventDefault(),e.datesForLastMonth(t)}}},[o("DatesResume",{attrs:{dateFrom:e.dateFrom,dateTo:e.dateTo},on:{"update:dateFrom":function(t){e.dateFrom=t},"update:date-from":function(t){e.dateFrom=t},"update:dateTo":function(t){e.dateTo=t},"update:date-to":function(t){e.dateTo=t}}}),o("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Resoconto")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"secondaLista"==e.sezione,expression:"sezione == 'secondaLista'"}]},[o("h2",[e._v("Lista degli Amministratori")]),o("Table",{attrs:{items:e.administrators,fields:e.fieldsListAdministrators,caricamentoDati:e.caricamentoDati}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"registration"==e.sezione,expression:"sezione == 'registration'"}]},[o("Registration",{attrs:{potere:e.ruolo,role:e.ruoloForm},on:{registrazione_utente:e.registrazione_utente_home,registrazione:e.showMsg}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"modInfo"==e.sezione,expression:"sezione == 'modInfo'"}]},[o("ModInfo",{attrs:{potere:e.ruolo,role:e.ruoloForm},on:{modInfo_utente:e.modInfo_utente_home,modInfo:e.showMsg}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"delete"==e.sezione,expression:"sezione == 'delete'"}]},[o("Delete",{attrs:{potere:e.ruolo,attoriOptions:e.attoriOptions},on:{delete_username:e.delete_username_home,delete:e.showMsg}})],1),o("Messages",{attrs:{msg_success:e.msg_success,msg_error:e.msg_error,msg_warning:e.msg_warning}})],1)},r=[],i=(o("159b"),o("b0c0"),o("c740"),o("4de4"),o("d3b7"),o("25f0"),o("a37d")),n=o("137e"),s=o("be26"),m=o("afcd"),u=o("a11b"),d=o("fb85"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-form-group",{attrs:{description:"I file caricati il giorno d'inizio del periodo sono inclusi,\n      quelli caricati il giorno di conclusione del periodo sono esclusi."}},[o("legend",[e._v("Filtro per periodo:")]),o("b-form-datepicker",{attrs:{id:"dateFromInput",name:"dateFromInput",type:"date",required:""},model:{value:e.dateFromInput,callback:function(t){e.dateFromInput=t},expression:"dateFromInput"}}),o("b-form-datepicker",{attrs:{id:"dateToInput",name:"dateToInput",type:"date",required:""},model:{value:e.dateToInput,callback:function(t){e.dateToInput=t},expression:"dateToInput"}})],1)],1)},l=[],f={name:"DatesResume",props:["dateFrom","dateTo"],computed:{dateFromInput:{get:function(){return this.dateFrom},set:function(e){this.$emit("update:dateFrom",e)}},dateToInput:{get:function(){return this.dateTo},set:function(e){this.$emit("update:dateTo",e)}}}},h=f,p=o("2877"),g=Object(p["a"])(h,c,l,!1,null,null,null),v=g.exports,F=o("fa7d"),b=o("62c3"),_=o.n(b);_.a.defaults.headers["Authorization"]="Bearer ".concat(localStorage.getItem("jwtToken"));var w={name:"Administrator_page",components:{Navbar:i["a"],Table:n["a"],Registration:s["a"],ModInfo:m["a"],Delete:u["a"],DatesResume:v,Messages:d["a"]},mixins:[F["b"],F["c"]],data:function(){return{ruolo:"administrator",resume:[],administrators:[],dateFrom:"",dateTo:"",dateFromSelected:"",dateToSelected:"",ruoloForm:"",fieldsResume:["name",{key:"numDocCaricati",label:"#doc",sortable:!0},{key:"numConsDiversi",label:"#cons",sortable:!0},"details"],fieldsListAdministrators:["name","details"],caricamentoDati:!1}},computed:{attoriOptions:function(){var e=[];return this.resume.forEach((function(t){e.push(t.username)})),this.administrators.forEach((function(t){e.push(t.username)})),e}},methods:{modificaRuoloForm:function(e){this.ruoloForm=e},registrazione_utente_home:function(e){var t=e.username,o=e.name,a=e.email,r=e.role,i=e.logo;if("administrator"===r){var n={username:t,name:o,email:a,logo:i};this.administrators.push(n)}else{var s={username:t,name:o,email:a,numDocCaricati:0,numConsDiversi:0};this.resume.push(s)}this.attoriOptions.push(t)},modInfo_utente_home:function(e){var t=e.utente,o=e.role;if("administrator"===o){var a=this.resume.findIndex((function(e){return e.username===t.username}));-1!==a&&(this.administrators[a].name=t.name,this.administrators[a].email=t.email)}else{var r=this.resume.findIndex((function(e){return e.username===t.username}));this.resume[r].name=t.name,this.resume[r].email=t.email}},delete_username_home:function(e){this.resume=this.resume.filter((function(t){return t.username!==e})),this.attoriOptions=this.attoriOptions.filter((function(t){return t!==e}))},dataFilter:function(){var e=this;this.caricamentoDati=!0,_.a.post("".concat("/api","/list/resumeForAdmin"),{from:this.dateFrom,to:this.dateTo}).then((function(t){e.resume=t.data,e.dateFromSelected=e.dateFrom,e.dateToSelected=e.dateTo,e.showMsg("Resoconto fornito")})).catch((function(t){return e.showMsg(t.toString())})).finally((function(){e.caricamentoDati=!1}))},datesForLastMonth:function(){var e=new Date;0==e.getMonth()?this.dateFrom=e.getFullYear()-1+"-12-01":e.getMonth()>9?this.dateFrom=e.getFullYear()+"-"+e.getMonth()+"-01":this.dateFrom=e.getFullYear()+"-0"+e.getMonth()+"-01",this.dateTo=e.toISOString().substring(0,8)+"01"}},created:function(){var e=this;this.datesForLastMonth(),this.dataFilter(),this.caricamentoDati=!0,_.a.get("".concat("/api","/list/administrators")).then((function(t){return e.administrators=t.data})).catch((function(t){return e.showMsg(t.toString())})).finally((function(){e.caricamentoDati=!1}))}},T=w,I=Object(p["a"])(T,a,r,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=Administrator_page.72868c46.js.map