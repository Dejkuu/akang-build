(self["webpackChunkakang"]=self["webpackChunkakang"]||[]).push([[351],{7066:function(t,e,a){"use strict";var s=a(9670);t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,a){var s=a(6916),n=a(2597),i=a(7976),o=a(7066),r=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in r||n(t,"flags")||!i(r,t)?e:s(o,t)}},9714:function(t,e,a){"use strict";var s=a(6530).PROPER,n=a(8052),i=a(9670),o=a(1340),r=a(7293),l=a(4706),c="toString",d=RegExp.prototype,u=d[c],h=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=s&&u.name!=c;(h||p)&&n(RegExp.prototype,c,(function(){var t=i(this),e=o(t.source),a=o(l(t));return"/"+e+"/"+a}),{unsafe:!0})},8149:function(t,e,a){"use strict";a.d(e,{Z:function(){return v}});var s=a(6252),n=a(3577),i=a(6859);const o=t=>((0,s.dD)("data-v-2b9d194c"),t=t(),(0,s.Cn)(),t),r=o((()=>(0,s._)("div",{id:"authorImage"},[(0,s._)("img",{class:"staticImg",src:i,alt:"User Avatar"})],-1))),l={id:"authorDetails"},c={id:"authorInfo"},d={id:"authorNickname"},u={id:"authorRole"};function h(t,e,a,i,o,h){return(0,s.wg)(),(0,s.iD)("div",{id:"authorCard",class:(0,n.C_)(a.isFlipped?"left":"right"),title:"Autor"},[r,(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("span",d,(0,n.zw)(o.author.nick),1),(0,s._)("span",u,(0,n.zw)(o.author.role),1)])])],2)}a(8674),a(9714);var p=a(8332),m={name:"AuthorCard",props:{authorID:{type:String},authorObject:{nick:String,role:String},isFlipped:{type:Boolean,default:!1}},data(){return{author:[{nick:"Nieznany",role:"Nieznany"}]}},beforeMount(){void 0==this.authorObject||(this.author=this.authorObject)},async updated(){const t=await p.Z.getUserNV({user:this.authorID});if(null!==t.content)return this.author.nick=t.content.nick,void(this.author.role=t.content.roles[0].toString());this.author.nick="Nieznany",this.author.role="Nieznany"}},k=a(3744);const _=(0,k.Z)(m,[["render",h],["__scopeId","data-v-2b9d194c"]]);var v=_},348:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var s=a(6252);const n=t=>((0,s.dD)("data-v-19900eb5"),t=t(),(0,s.Cn)(),t),i={id:"navigation"},o=n((()=>(0,s._)("hr",null,null,-1))),r=n((()=>(0,s._)("hr",null,null,-1))),l=n((()=>(0,s._)("hr",null,null,-1))),c=n((()=>(0,s._)("hr",null,null,-1)));function d(t,e,a,n,d,u){const h=(0,s.up)("svg-icon"),p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",i,[(0,s.Wm)(p,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:n.iconsStore.mdiHomeOutline},null,8,["path"])])),_:1}),o,(0,s.Wm)(p,{to:"/dashboard"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:n.iconsStore.mdiViewDashboardOutline},null,8,["path"])])),_:1}),r,(0,s.Wm)(p,{to:"/dashboard/uzytkownicy"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:n.iconsStore.mdiAccountMultipleOutline},null,8,["path"])])),_:1}),l,(0,s.Wm)(p,{to:"/dashboard/linki"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:n.iconsStore.mdiLinkVariant},null,8,["path"])])),_:1}),c,(0,s.Wm)(p,{to:"/dashboard/zadania"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:n.iconsStore.mdiCalendarMonthOutline},null,8,["path"])])),_:1})])}var u=a(2273),h=a(4409),p={name:"MainNavigation",components:{svgIcon:u.Z},setup(){const t=(0,h.Q)();return{iconsStore:t}}},m=a(3744);const k=(0,m.Z)(p,[["render",d],["__scopeId","data-v-19900eb5"]]);var _=k},4152:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return Zt}});var s=a(6252),n=a(3577);const i=t=>((0,s.dD)("data-v-0571f112"),t=t(),(0,s.Cn)(),t),o=i((()=>(0,s._)("div",{id:"backgroundTriangle"},null,-1))),r={id:"headerLeft"},l={id:"mainTasksSection"},c={id:"mainTasksContainer"},d=i((()=>(0,s._)("h1",{class:"titles"},"Do zrobienia",-1))),u={id:"tasksSection"},h={id:"tasksHeader"},p=i((()=>(0,s._)("span",null,"Statystyki",-1))),m=i((()=>(0,s._)("span",null,"Dodaj zadanie",-1))),k={id:"tasksList"},_={id:"tasksListScroll"},v=i((()=>(0,s._)("div",{id:"tasksListHeader"},[(0,s._)("span",null,"To Do"),(0,s._)("hr")],-1))),g={key:0,class:"emptyValuesMessage"},S=i((()=>(0,s._)("h1",null,"Brak zadań do wyświetlenia",-1))),w=[S],f={class:"taskListElementDetails"},b={class:"taskListElementID"},I={class:"taskListElementTitle"},y={id:"taskDetailsSection"};function D(t,e,a,i,S,D){const T=(0,s.up)("HeaderLogo"),C=(0,s.up)("Notification"),E=(0,s.up)("Navigation"),z=(0,s.up)("UserCard"),W=(0,s.up)("svg-icon"),L=(0,s.up)("router-link"),O=(0,s.up)("TaskDashboard"),x=(0,s.up)("AddTask");return(0,s.wg)(),(0,s.iD)("body",null,[o,(0,s.Wm)(T),(0,s.Wm)(C),(0,s._)("header",r,[(0,s.Wm)(E),(0,s.Wm)(z)]),(0,s._)("main",l,[(0,s._)("div",c,[d,(0,s._)("section",u,[(0,s._)("div",h,[(0,s._)("div",{onClick:e[0]||(e[0]=t=>i.generalStore.activeTaskElement="home"),class:(0,n.C_)([{active:"home"===i.generalStore.activeTaskElement},"tasksHeaderElement pointer"])},[(0,s.Wm)(W,{type:"mdi",path:i.iconsStore.mdiHomeOutline},null,8,["path"]),p],2),(0,s._)("div",{onClick:e[1]||(e[1]=t=>i.generalStore.activeTaskElement="addTask"),class:(0,n.C_)([{active:"addTask"===i.generalStore.activeTaskElement},"tasksHeaderElement pointer"])},[(0,s.Wm)(W,{type:"mdi",path:i.iconsStore.mdiPlusCircleOutline},null,8,["path"]),m],2)]),(0,s._)("div",k,[(0,s._)("ul",_,[v,0===S.tasks.length?((0,s.wg)(),(0,s.iD)("div",g,w)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(S.tasks,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:"taskListElement"},[(0,s.Wm)(L,{to:"/dashboard/zadania/".concat(t._id)},{default:(0,s.w5)((()=>["cancelled"===t.status?((0,s.wg)(),(0,s.j4)(W,{key:0,class:"taskListElementStatus cancelled",type:"mdi",path:i.iconsStore.mdiCloseCircleOutline},null,8,["path"])):"finished"===t.status?((0,s.wg)(),(0,s.j4)(W,{key:1,class:"taskListElementStatus finished",type:"mdi",path:i.iconsStore.successIcon},null,8,["path"])):"inProgress"===t.status?((0,s.wg)(),(0,s.j4)(W,{key:2,class:"taskListElementStatus inProgress",type:"mdi",path:i.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"])):((0,s.wg)(),(0,s.j4)(W,{key:3,class:"taskListElementStatus saved",type:"mdi",path:i.iconsStore.mdiRecordCircleOutline},null,8,["path"])),(0,s._)("div",f,[(0,s._)("span",b,(0,n.zw)("#".concat(t._id)),1),(0,s._)("h1",I,(0,n.zw)(t.title),1)]),t.important?((0,s.wg)(),(0,s.j4)(W,{key:4,class:"taskListElementStar",type:"mdi",path:i.iconsStore.mdiStar},null,8,["path"])):(0,s.kq)("",!0)])),_:2},1032,["to"])])))),128))])]),(0,s._)("section",y,["home"===i.generalStore.activeTaskElement?((0,s.wg)(),(0,s.j4)(O,{key:0})):(0,s.kq)("",!0),"addTask"===i.generalStore.activeTaskElement?((0,s.wg)(),(0,s.j4)(x,{key:1})):(0,s.kq)("",!0)])])])])])}a(8674);var T=a(8332),C=a(2273),E=a(5454),z=a(4409),W=a(3556),L=a(1434),O=a(3148),x=a(348);const Z=t=>((0,s.dD)("data-v-8a994b76"),t=t(),(0,s.Cn)(),t),A={id:"taskDashboard"},j={class:"taskDashboardElement"},N={class:"taskDashboardElementText"},B=Z((()=>(0,s._)("h1",null,"Wszystkich",-1))),H={class:"taskDashboardElement"},M={class:"taskDashboardElementText"},V=Z((()=>(0,s._)("h1",null,"Dostępnych",-1))),R={class:"taskDashboardElement"},U={class:"taskDashboardElementText"},P=Z((()=>(0,s._)("h1",null,"W trakcie",-1))),q={class:"taskDashboardElement"},F={class:"taskDashboardElementText"},Q=Z((()=>(0,s._)("h1",null,"Ukończonych",-1))),J={class:"taskDashboardElement"},K={class:"taskDashboardElementText"},Y=Z((()=>(0,s._)("h1",null,"Ważne",-1))),$={class:"taskDashboardElement"},G={class:"taskDashboardElementText"},X=Z((()=>(0,s._)("h1",null,"Anulowane",-1)));function tt(t,e,a,i,o,r){const l=(0,s.up)("svg-icon");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",j,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.mdiCalendarMonthOutline},null,8,["path"]),(0,s._)("div",N,[B,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.general),1)])]),(0,s._)("div",H,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.mdiRecordCircleOutline},null,8,["path"]),(0,s._)("div",M,[V,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.available),1)])]),(0,s._)("div",R,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"]),(0,s._)("div",U,[P,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.inProgress),1)])]),(0,s._)("div",q,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.successIcon},null,8,["path"]),(0,s._)("div",F,[Q,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.finished),1)])]),(0,s._)("div",J,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.mdiStar},null,8,["path"]),(0,s._)("div",K,[Y,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.important),1)])]),(0,s._)("div",$,[(0,s.Wm)(l,{class:"taskDashboardElementIcon",type:"mdi",path:i.iconsStore.mdiCloseCircleOutline},null,8,["path"]),(0,s._)("div",G,[X,(0,s._)("span",null,(0,n.zw)(i.generalStore.statistics.tasksStatistics.cancelled),1)])])])}var et={name:"AddTasksDetails",components:{svgIcon:C.Z},setup(){const t=(0,E.F)(),e=(0,z.Q)();return{generalStore:t,iconsStore:e}},async beforeMount(){await this.generalStore.getTasksStatistics()}},at=a(3744);const st=(0,at.Z)(et,[["render",tt],["__scopeId","data-v-8a994b76"]]);var nt=st,it=a(9963);const ot=t=>((0,s.dD)("data-v-59a245aa"),t=t(),(0,s.Cn)(),t),rt={id:"newTaskDetails"},lt={id:"newTaskHeader"},ct={id:"newTaskTitle",class:"formInput formItem newTaskItem"},dt={for:"titleInput"},ut={class:"formError"},ht={class:"helpBox",title:"Wpisz tytuł"},pt={id:"newTaskButtonsContainer"},mt={id:"newTaskDesc",class:"formInput formItem newTaskItem"},kt=ot((()=>(0,s._)("label",{for:"descInput"},"Opis",-1))),_t={class:"border"},vt={class:"letterCount"},gt={id:"newTaskFooter"},St={class:"newTaskTile"},wt=ot((()=>(0,s._)("h1",null,"Stworzone przez",-1))),ft={id:"newTaskAuthor"},bt=ot((()=>(0,s._)("div",{class:"newTaskTile"},[(0,s._)("h1",null,"Status"),(0,s._)("div",{id:"newTaskStatus",class:"statusBadge available"},[(0,s._)("div",null,[(0,s._)("p",null,"Dostępne")])])],-1)));function It(t,e,a,i,o,r){const l=(0,s.up)("svg-icon"),c=(0,s.up)("AuthorCard");return(0,s.wg)(),(0,s.iD)("div",rt,[(0,s._)("div",lt,[(0,s._)("div",ct,[(0,s._)("label",dt,[(0,s.Uk)(" Tytuł "),(0,s._)("span",ut,(0,n.zw)(o.errors.titleError),1)]),(0,s._)("div",{class:(0,n.C_)([o.titleClass,"border"])},[(0,s.wy)((0,s._)("input",{name:"titleInput",list:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.titleInput=t),maxlength:"20",autocomplete:"off"},null,512),[[it.nr,o.titleInput]]),(0,s._)("div",ht,[(0,s.Wm)(l,{class:(0,n.C_)(o.titleClass),type:"mdi",path:o.titleIcon},null,8,["class","path"])])],2)]),(0,s._)("div",pt,[(0,s._)("div",{title:"Ustaw ważność zadania",class:(0,n.C_)(["newTaskButton toggleStar pointer",{disabled:!o.isImportant}]),onClick:e[1]||(e[1]=t=>o.isImportant=!o.isImportant)},[(0,s.Wm)(l,{type:"mdi",path:i.iconsStore.mdiStar},null,8,["path"])],2),(0,s._)("div",{title:"Dodaj nowe zadanie",class:(0,n.C_)(["newTaskButton newTask pointer",{disabled:o.isButtonDisabled}]),onClick:e[2]||(e[2]=t=>r.addTask())},[(0,s.Wm)(l,{type:"mdi",path:i.iconsStore.mdiNotePlusOutline},null,8,["path"])],2)])]),(0,s._)("div",mt,[kt,(0,s._)("div",_t,[(0,s.wy)((0,s._)("textarea",{rows:"5",maxlength:"250","onUpdate:modelValue":e[3]||(e[3]=t=>o.descInput=t)},null,512),[[it.nr,o.descInput]]),(0,s._)("span",vt,(0,n.zw)("".concat(o.lettersCount.descLetters,"/").concat(o.lettersCount.maxDescLetters)),1)])]),(0,s._)("div",gt,[(0,s._)("div",St,[wt,(0,s._)("div",ft,[(0,s.Wm)(c,{authorObject:o.author},null,8,["authorObject"])])]),bt])])}var yt=a(7600),Dt=a(5229),Tt=a(845),Ct=a(9735),Et=a(8149),zt={name:"AddTask",components:{svgIcon:C.Z,AuthorCard:Et.Z},setup(){const t=(0,Tt.c)(),e=(0,Dt.x)(),a=(0,Ct.J)(),s=(0,z.Q)(),n=(0,E.F)();return{accountStore:t,alertsStore:e,iconsStore:s,preferenceStore:a,generalStore:n}},data(){return{author:{nick:this.accountStore.userNickname,role:this.accountStore.userRoles[0]},titleIcon:this.iconsStore.questionMarkIcon,descIcon:this.iconsStore.questionMarkIcon,titleInput:"",descInput:"",titleClass:"",isButtonDisabled:!0,isImportant:!1,errors:{titleError:""},lettersCount:{descLetters:0,maxDescLetters:250}}},methods:{async addTask(){if(this.titleInput.length<3)return;const t={title:this.titleInput,desc:this.descInput,status:"available",important:this.isImportant,createdBy:this.accountStore.userID};if(await this.generalStore.addTask(t).then((async t=>{await this.alertsStore.showNotification(t.duration,t.status,t.message),"success"===t.status&&(this.titleInput="",this.descInput="",this.important=!1,this.isButtonDisabled=!0,await this.$router.push("/dashboard/zadania/".concat(t.content)),this.generalStore.activeTaskElement="home")})).catch((t=>console.log(t))),this.preferenceStore.preferences[0].state){const t=new Audio(yt);t.volume=.5,t.play()}},formVerification(t){return t.length>=3?{icon:this.iconsStore.successIcon,status:"success",error:""}:t.length>0&&t.length<3?{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Minimum 3 znaki!"}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}},buttonVerification(){this.titleInput.length<3?this.isButtonDisabled=!0:this.isButtonDisabled=!1}},watch:{titleInput(){this.buttonVerification();const t=this.formVerification(this.titleInput);this.titleIcon=t.icon,this.titleClass=t.status,this.errors.titleError=t.error},descInput(){this.lettersCount.descLetters=this.descInput.length}}};const Wt=(0,at.Z)(zt,[["render",It],["__scopeId","data-v-59a245aa"]]);var Lt=Wt,Ot={name:"TasksView",components:{svgIcon:C.Z,HeaderLogo:W.Z,Notification:L.Z,UserCard:O.Z,Navigation:x.Z,TaskDashboard:nt,AddTask:Lt},setup(){const t=(0,E.F)(),e=(0,z.Q)();return{generalStore:t,iconsStore:e}},data(){return{tasks:[]}},async beforeMount(){this.tasks=await T.Z.getAllTasks()}};const xt=(0,at.Z)(Ot,[["render",D],["__scopeId","data-v-0571f112"]]);var Zt=xt}}]);
//# sourceMappingURL=Tasks.74eb8bff.js.map