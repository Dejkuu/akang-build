(self["webpackChunkakang"]=self["webpackChunkakang"]||[]).push([[351],{7066:function(t,e,s){"use strict";var a=s(9670);t.exports=function(){var t=a(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,s){var a=s(6916),i=s(2597),n=s(7976),l=s(7066),r=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in r||i(t,"flags")||!n(r,t)?e:a(l,t)}},9714:function(t,e,s){"use strict";var a=s(6530).PROPER,i=s(8052),n=s(9670),l=s(1340),r=s(7293),o=s(4706),c="toString",d=RegExp.prototype,u=d[c],h=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=a&&u.name!=c;(h||p)&&i(RegExp.prototype,c,(function(){var t=n(this),e=l(t.source),s=l(o(t));return"/"+e+"/"+s}),{unsafe:!0})},8149:function(t,e,s){"use strict";s.d(e,{Z:function(){return v}});var a=s(6252),i=s(3577),n=s(6859);const l=t=>((0,a.dD)("data-v-2b9d194c"),t=t(),(0,a.Cn)(),t),r=l((()=>(0,a._)("div",{id:"authorImage"},[(0,a._)("img",{class:"staticImg",src:n,alt:"User Avatar"})],-1))),o={id:"authorDetails"},c={id:"authorInfo"},d={id:"authorNickname"},u={id:"authorRole"};function h(t,e,s,n,l,h){return(0,a.wg)(),(0,a.iD)("div",{id:"authorCard",class:(0,i.C_)(s.isFlipped?"left":"right"),title:"Autor"},[r,(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("span",d,(0,i.zw)(l.author.nick),1),(0,a._)("span",u,(0,i.zw)(l.author.role),1)])])],2)}s(8674),s(9714);var p=s(8332),m={name:"AuthorCard",props:{authorID:{type:String},authorObject:{nick:String,role:String},isFlipped:{type:Boolean,default:!1}},data(){return{author:[{nick:"Nieznany",role:"Nieznany"}]}},beforeMount(){void 0==this.authorObject||(this.author=this.authorObject)},async updated(){const t=await p.Z.getUserNV({user:this.authorID});if(null!==t.content)return this.author.nick=t.content.nick,void(this.author.role=t.content.roles[0].toString());this.author.nick="Nieznany",this.author.role="Nieznany"}},k=s(3744);const _=(0,k.Z)(m,[["render",h],["__scopeId","data-v-2b9d194c"]]);var v=_},348:function(t,e,s){"use strict";s.d(e,{Z:function(){return _}});var a=s(6252);const i=t=>((0,a.dD)("data-v-19900eb5"),t=t(),(0,a.Cn)(),t),n={id:"navigation"},l=i((()=>(0,a._)("hr",null,null,-1))),r=i((()=>(0,a._)("hr",null,null,-1))),o=i((()=>(0,a._)("hr",null,null,-1))),c=i((()=>(0,a._)("hr",null,null,-1)));function d(t,e,s,i,d,u){const h=(0,a.up)("svg-icon"),p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",n,[(0,a.Wm)(p,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{type:"mdi",path:i.iconsStore.mdiHomeOutline},null,8,["path"])])),_:1}),l,(0,a.Wm)(p,{to:"/dashboard"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{type:"mdi",path:i.iconsStore.mdiViewDashboardOutline},null,8,["path"])])),_:1}),r,(0,a.Wm)(p,{to:"/dashboard/uzytkownicy"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{type:"mdi",path:i.iconsStore.mdiAccountMultipleOutline},null,8,["path"])])),_:1}),o,(0,a.Wm)(p,{to:"/dashboard/linki"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{type:"mdi",path:i.iconsStore.mdiLinkVariant},null,8,["path"])])),_:1}),c,(0,a.Wm)(p,{to:"/dashboard/zadania"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{type:"mdi",path:i.iconsStore.mdiCalendarMonthOutline},null,8,["path"])])),_:1})])}var u=s(2273),h=s(4409),p={name:"MainNavigation",components:{svgIcon:u.Z},setup(){const t=(0,h.Q)();return{iconsStore:t}}},m=s(3744);const k=(0,m.Z)(p,[["render",d],["__scopeId","data-v-19900eb5"]]);var _=k},5983:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return qt}});var a=s(6252),i=s(3577);const n=t=>((0,a.dD)("data-v-effe5918"),t=t(),(0,a.Cn)(),t),l=n((()=>(0,a._)("div",{id:"backgroundTriangle"},null,-1))),r={id:"headerLeft"},o={id:"mainTasksSection"},c={id:"mainTasksContainer"},d=n((()=>(0,a._)("h1",{class:"titles"},"Do zrobienia",-1))),u={id:"tasksSection"},h={id:"tasksHeader"},p=n((()=>(0,a._)("span",null,"Statystyki",-1))),m=n((()=>(0,a._)("span",null,"Dodaj zadanie",-1))),k={id:"tasksList"},_={id:"tasksListScroll"},v={id:"tasksListHeader"},g=n((()=>(0,a._)("span",null,"To Do",-1))),f=n((()=>(0,a._)("hr",null,null,-1))),S={key:0,id:"tasksListHeaderFilterMenu"},w=n((()=>(0,a._)("h1",null,"Wybierz status zadania",-1))),b=n((()=>(0,a._)("div",null,[(0,a._)("p",null,"Dostępne")],-1))),y=[b],I=n((()=>(0,a._)("div",null,[(0,a._)("p",null,"W trakcie")],-1))),D=[I],C=n((()=>(0,a._)("div",null,[(0,a._)("p",null,"Ukończone")],-1))),T=[C],E=n((()=>(0,a._)("div",null,[(0,a._)("p",null,"Anulowane")],-1))),z=[E],W={key:0,class:"emptyValuesMessage"},O=n((()=>(0,a._)("h1",null,"Brak zadań do wyświetlenia",-1))),F=[O],L={class:"taskListElementDetails"},A={class:"taskListElementID"},x={class:"taskListElementTitle"},Z={id:"taskDetailsSection"};function B(t,e,s,n,b,I){const C=(0,a.up)("HeaderLogo"),E=(0,a.up)("Notification"),O=(0,a.up)("Navigation"),B=(0,a.up)("UserCard"),M=(0,a.up)("svg-icon"),j=(0,a.up)("router-link"),N=(0,a.up)("TaskDashboard"),H=(0,a.up)("AddTask");return(0,a.wg)(),(0,a.iD)("body",null,[l,(0,a.Wm)(C),(0,a.Wm)(E),(0,a._)("header",r,[(0,a.Wm)(O),(0,a.Wm)(B)]),(0,a._)("main",o,[(0,a._)("div",c,[d,(0,a._)("section",u,[(0,a._)("div",h,[(0,a._)("div",{onClick:e[0]||(e[0]=t=>n.generalStore.activeTaskElement="home"),class:(0,i.C_)([{active:"home"===n.generalStore.activeTaskElement},"tasksHeaderElement pointer"])},[(0,a.Wm)(M,{type:"mdi",path:n.iconsStore.mdiHomeOutline},null,8,["path"]),p],2),(0,a._)("div",{onClick:e[1]||(e[1]=t=>n.generalStore.activeTaskElement="addTask"),class:(0,i.C_)([{active:"addTask"===n.generalStore.activeTaskElement},"tasksHeaderElement pointer"])},[(0,a.Wm)(M,{type:"mdi",path:n.iconsStore.mdiPlusCircleOutline},null,8,["path"]),m],2)]),(0,a._)("div",k,[(0,a._)("ul",_,[(0,a._)("div",v,[g,f,(0,a.Wm)(M,{onClick:e[2]||(e[2]=t=>this.isFilterMenuOpen=!this.isFilterMenuOpen),class:"taskFilter pointer",type:"mdi",path:b.filterIcon,style:{"--sx":"1.25","--sy":"1.25"}},null,8,["path"]),b.isFilterMenuOpen?((0,a.wg)(),(0,a.iD)("div",S,[w,(0,a._)("div",{onClick:e[3]||(e[3]=t=>I.changeFilter("available",b.filteredStatus)),class:(0,i.C_)(["statusBadge filterElement available pointer",{disabled:"available"!==b.filteredStatus}])},y,2),(0,a._)("div",{onClick:e[4]||(e[4]=t=>I.changeFilter("inProgress",b.filteredStatus)),class:(0,i.C_)(["statusBadge filterElement inProgress pointer",{disabled:"inProgress"!==b.filteredStatus}])},D,2),(0,a._)("div",{onClick:e[5]||(e[5]=t=>I.changeFilter("finished",b.filteredStatus)),class:(0,i.C_)(["statusBadge filterElement finished pointer",{disabled:"finished"!==b.filteredStatus}])},T,2),(0,a._)("div",{onClick:e[6]||(e[6]=t=>I.changeFilter("cancelled",b.filteredStatus)),class:(0,i.C_)(["statusBadge filterElement cancelled pointer",{disabled:"cancelled"!==b.filteredStatus}])},z,2)])):(0,a.kq)("",!0)]),0===b.tasks.length?((0,a.wg)(),(0,a.iD)("div",W,F)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(I.filteredTasks,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.id,class:"taskListElement"},[(0,a.Wm)(j,{to:"/dashboard/zadania/".concat(t._id)},{default:(0,a.w5)((()=>["cancelled"===t.status?((0,a.wg)(),(0,a.j4)(M,{key:0,class:"taskListElementStatus cancelled",type:"mdi",path:n.iconsStore.mdiCloseCircleOutline},null,8,["path"])):"finished"===t.status?((0,a.wg)(),(0,a.j4)(M,{key:1,class:"taskListElementStatus finished",type:"mdi",path:n.iconsStore.successIcon},null,8,["path"])):"inProgress"===t.status?((0,a.wg)(),(0,a.j4)(M,{key:2,class:"taskListElementStatus inProgress",type:"mdi",path:n.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"])):((0,a.wg)(),(0,a.j4)(M,{key:3,class:"taskListElementStatus saved",type:"mdi",path:n.iconsStore.mdiRecordCircleOutline},null,8,["path"])),(0,a._)("div",L,[(0,a._)("span",A,(0,i.zw)("#".concat(t._id)),1),(0,a._)("h1",x,(0,i.zw)(t.title),1)]),t.important?((0,a.wg)(),(0,a.j4)(M,{key:4,class:"taskListElementStar",type:"mdi",path:n.iconsStore.mdiStar},null,8,["path"])):(0,a.kq)("",!0)])),_:2},1032,["to"])])))),128))])]),(0,a._)("section",Z,["home"===n.generalStore.activeTaskElement?((0,a.wg)(),(0,a.j4)(N,{key:0})):(0,a.kq)("",!0),"addTask"===n.generalStore.activeTaskElement?((0,a.wg)(),(0,a.j4)(H,{key:1})):(0,a.kq)("",!0)])])])])])}s(6699),s(2023),s(8674);var M=s(8332),j=s(2273),N=s(5454),H=s(4409),P=s(3556),V=s(1434),U=s(3148),R=s(348);const q=t=>((0,a.dD)("data-v-9bf38a12"),t=t(),(0,a.Cn)(),t),Q={id:"taskDashboard"},J={class:"taskDashboardElement"},K={class:"taskDashboardElementText"},Y=q((()=>(0,a._)("h1",null,"Wszystkich",-1))),$={class:"taskDashboardElement"},G={class:"taskDashboardElementText"},X=q((()=>(0,a._)("h1",null,"Dostępnych",-1))),tt={class:"taskDashboardElement"},et={class:"taskDashboardElementText"},st=q((()=>(0,a._)("h1",null,"W trakcie",-1))),at={class:"taskDashboardElement"},it={class:"taskDashboardElementText"},nt=q((()=>(0,a._)("h1",null,"Ukończonych",-1))),lt={class:"taskDashboardElement"},rt={class:"taskDashboardElementText"},ot=q((()=>(0,a._)("h1",null,"Ważnych",-1))),ct={class:"taskDashboardElement"},dt={class:"taskDashboardElementText"},ut=q((()=>(0,a._)("h1",null,"Anulowanych",-1)));function ht(t,e,s,n,l,r){const o=(0,a.up)("svg-icon");return(0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("div",J,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.mdiCalendarMonthOutline},null,8,["path"]),(0,a._)("div",K,[Y,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.general),1)])]),(0,a._)("div",$,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.mdiRecordCircleOutline},null,8,["path"]),(0,a._)("div",G,[X,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.available),1)])]),(0,a._)("div",tt,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"]),(0,a._)("div",et,[st,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.inProgress),1)])]),(0,a._)("div",at,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.successIcon},null,8,["path"]),(0,a._)("div",it,[nt,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.finished),1)])]),(0,a._)("div",lt,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.mdiStar},null,8,["path"]),(0,a._)("div",rt,[ot,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.important),1)])]),(0,a._)("div",ct,[(0,a.Wm)(o,{class:"taskDashboardElementIcon",type:"mdi",path:n.iconsStore.mdiCloseCircleOutline},null,8,["path"]),(0,a._)("div",dt,[ut,(0,a._)("span",null,(0,i.zw)(n.generalStore.statistics.tasksStatistics.cancelled),1)])])])}var pt={name:"AddTasksDetails",components:{svgIcon:j.Z},setup(){const t=(0,N.F)(),e=(0,H.Q)();return{generalStore:t,iconsStore:e}},async beforeMount(){await this.generalStore.getTasksStatistics()}},mt=s(3744);const kt=(0,mt.Z)(pt,[["render",ht],["__scopeId","data-v-9bf38a12"]]);var _t=kt,vt=s(9963);const gt=t=>((0,a.dD)("data-v-59a245aa"),t=t(),(0,a.Cn)(),t),ft={id:"newTaskDetails"},St={id:"newTaskHeader"},wt={id:"newTaskTitle",class:"formInput formItem newTaskItem"},bt={for:"titleInput"},yt={class:"formError"},It={class:"helpBox",title:"Wpisz tytuł"},Dt={id:"newTaskButtonsContainer"},Ct={id:"newTaskDesc",class:"formInput formItem newTaskItem"},Tt=gt((()=>(0,a._)("label",{for:"descInput"},"Opis",-1))),Et={class:"border"},zt={class:"letterCount"},Wt={id:"newTaskFooter"},Ot={class:"newTaskTile"},Ft=gt((()=>(0,a._)("h1",null,"Stworzone przez",-1))),Lt={id:"newTaskAuthor"},At=gt((()=>(0,a._)("div",{class:"newTaskTile"},[(0,a._)("h1",null,"Status"),(0,a._)("div",{id:"newTaskStatus",class:"statusBadge available"},[(0,a._)("div",null,[(0,a._)("p",null,"Dostępne")])])],-1)));function xt(t,e,s,n,l,r){const o=(0,a.up)("svg-icon"),c=(0,a.up)("AuthorCard");return(0,a.wg)(),(0,a.iD)("div",ft,[(0,a._)("div",St,[(0,a._)("div",wt,[(0,a._)("label",bt,[(0,a.Uk)(" Tytuł "),(0,a._)("span",yt,(0,i.zw)(l.errors.titleError),1)]),(0,a._)("div",{class:(0,i.C_)([l.titleClass,"border"])},[(0,a.wy)((0,a._)("input",{name:"titleInput",list:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.titleInput=t),maxlength:"20",autocomplete:"off"},null,512),[[vt.nr,l.titleInput]]),(0,a._)("div",It,[(0,a.Wm)(o,{class:(0,i.C_)(l.titleClass),type:"mdi",path:l.titleIcon},null,8,["class","path"])])],2)]),(0,a._)("div",Dt,[(0,a._)("div",{title:"Ustaw ważność zadania",class:(0,i.C_)(["newTaskButton toggleStar pointer",{disabled:!l.isImportant}]),onClick:e[1]||(e[1]=t=>l.isImportant=!l.isImportant)},[(0,a.Wm)(o,{type:"mdi",path:n.iconsStore.mdiStar},null,8,["path"])],2),(0,a._)("div",{title:"Dodaj nowe zadanie",class:(0,i.C_)(["newTaskButton newTask pointer",{disabled:l.isButtonDisabled}]),onClick:e[2]||(e[2]=t=>r.addTask())},[(0,a.Wm)(o,{type:"mdi",path:n.iconsStore.mdiNotePlusOutline},null,8,["path"])],2)])]),(0,a._)("div",Ct,[Tt,(0,a._)("div",Et,[(0,a.wy)((0,a._)("textarea",{rows:"5",maxlength:"250","onUpdate:modelValue":e[3]||(e[3]=t=>l.descInput=t)},null,512),[[vt.nr,l.descInput]]),(0,a._)("span",zt,(0,i.zw)("".concat(l.lettersCount.descLetters,"/").concat(l.lettersCount.maxDescLetters)),1)])]),(0,a._)("div",Wt,[(0,a._)("div",Ot,[Ft,(0,a._)("div",Lt,[(0,a.Wm)(c,{authorObject:l.author},null,8,["authorObject"])])]),At])])}var Zt=s(7600),Bt=s(5229),Mt=s(845),jt=s(9735),Nt=s(8149),Ht={name:"AddTask",components:{svgIcon:j.Z,AuthorCard:Nt.Z},setup(){const t=(0,Mt.c)(),e=(0,Bt.x)(),s=(0,jt.J)(),a=(0,H.Q)(),i=(0,N.F)();return{accountStore:t,alertsStore:e,iconsStore:a,preferenceStore:s,generalStore:i}},data(){return{author:{nick:this.accountStore.userNickname,role:this.accountStore.userRoles[0]},titleIcon:this.iconsStore.questionMarkIcon,descIcon:this.iconsStore.questionMarkIcon,titleInput:"",descInput:"",titleClass:"",isButtonDisabled:!0,isImportant:!1,errors:{titleError:""},lettersCount:{descLetters:0,maxDescLetters:250}}},methods:{async addTask(){if(this.titleInput.length<3)return;const t={title:this.titleInput,desc:this.descInput,status:"available",important:this.isImportant,createdBy:this.accountStore.userID};if(await this.generalStore.addTask(t).then((async t=>{await this.alertsStore.showNotification(t.duration,t.status,t.message),"success"===t.status&&(this.titleInput="",this.descInput="",this.important=!1,this.isButtonDisabled=!0,await this.$router.push("/dashboard/zadania/".concat(t.content)),this.generalStore.activeTaskElement="home")})).catch((t=>console.log(t))),this.preferenceStore.preferences[0].state){const t=new Audio(Zt);t.volume=.5,t.play()}},formVerification(t){return t.length>=3?{icon:this.iconsStore.successIcon,status:"success",error:""}:t.length>0&&t.length<3?{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Minimum 3 znaki!"}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}},buttonVerification(){this.titleInput.length<3?this.isButtonDisabled=!0:this.isButtonDisabled=!1}},watch:{titleInput(){this.buttonVerification();const t=this.formVerification(this.titleInput);this.titleIcon=t.icon,this.titleClass=t.status,this.errors.titleError=t.error},descInput(){this.lettersCount.descLetters=this.descInput.length}}};const Pt=(0,mt.Z)(Ht,[["render",xt],["__scopeId","data-v-59a245aa"]]);var Vt=Pt,Ut={name:"TasksView",components:{svgIcon:j.Z,HeaderLogo:P.Z,Notification:V.Z,UserCard:U.Z,Navigation:R.Z,TaskDashboard:_t,AddTask:Vt},setup(){const t=(0,N.F)(),e=(0,H.Q)();return{generalStore:t,iconsStore:e}},data(){return{tasks:[],isFilterMenuOpen:!1,isFilterActive:!1,filterIcon:this.iconsStore.mdiFilterOffOutline,filteredStatus:""}},methods:{changeFilter(t,e){t===e?(this.isFilterActive=!1,this.filteredStatus=""):(this.isFilterActive=!0,this.filteredStatus=t)}},computed:{filteredTasks(){return this.tasks.filter((t=>t.status.includes(this.filteredStatus)))}},watch:{isFilterActive(){this.isFilterActive?this.filterIcon=this.iconsStore.mdiFilterOutline:this.filterIcon=this.iconsStore.mdiFilterOffOutline}},async beforeMount(){this.tasks=await M.Z.getAllTasks()}};const Rt=(0,mt.Z)(Ut,[["render",B],["__scopeId","data-v-effe5918"]]);var qt=Rt}}]);
//# sourceMappingURL=Tasks.69fa40b1.js.map