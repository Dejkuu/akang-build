(self["webpackChunkakang"]=self["webpackChunkakang"]||[]).push([[403],{7066:function(t,e,i){"use strict";var s=i(9670);t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,i){var s=i(6916),a=i(2597),n=i(7976),l=i(7066),d=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in d||a(t,"flags")||!n(d,t)?e:s(l,t)}},9714:function(t,e,i){"use strict";var s=i(6530).PROPER,a=i(8052),n=i(9670),l=i(1340),d=i(7293),o=i(4706),r="toString",u=RegExp.prototype,c=u[r],h=d((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=s&&c.name!=r;(h||p)&&a(RegExp.prototype,r,(function(){var t=n(this),e=l(t.source),i=l(o(t));return"/"+e+"/"+i}),{unsafe:!0})},8149:function(t,e,i){"use strict";i.d(e,{Z:function(){return g}});var s=i(6252),a=i(3577),n=i(6859);const l=t=>((0,s.dD)("data-v-2b9d194c"),t=t(),(0,s.Cn)(),t),d=l((()=>(0,s._)("div",{id:"authorImage"},[(0,s._)("img",{class:"staticImg",src:n,alt:"User Avatar"})],-1))),o={id:"authorDetails"},r={id:"authorInfo"},u={id:"authorNickname"},c={id:"authorRole"};function h(t,e,i,n,l,h){return(0,s.wg)(),(0,s.iD)("div",{id:"authorCard",class:(0,a.C_)(i.isFlipped?"left":"right"),title:"Autor"},[d,(0,s._)("div",o,[(0,s._)("div",r,[(0,s._)("span",u,(0,a.zw)(l.author.nick),1),(0,s._)("span",c,(0,a.zw)(l.author.role),1)])])],2)}i(8674),i(9714);var p=i(8332),k={name:"AuthorCard",props:{authorID:{type:String},authorObject:{nick:String,role:String},isFlipped:{type:Boolean,default:!1}},data(){return{author:[{nick:"Nieznany",role:"Nieznany"}]}},beforeMount(){void 0==this.authorObject||(this.author=this.authorObject)},async updated(){const t=await p.Z.getUserNV({user:this.authorID});if(null!==t.content)return this.author.nick=t.content.nick,void(this.author.role=t.content.roles[0].toString());this.author.nick="Nieznany",this.author.role="Nieznany"}},v=i(3744);const m=(0,v.Z)(k,[["render",h],["__scopeId","data-v-2b9d194c"]]);var g=m},348:function(t,e,i){"use strict";i.d(e,{Z:function(){return m}});var s=i(6252);const a=t=>((0,s.dD)("data-v-19900eb5"),t=t(),(0,s.Cn)(),t),n={id:"navigation"},l=a((()=>(0,s._)("hr",null,null,-1))),d=a((()=>(0,s._)("hr",null,null,-1))),o=a((()=>(0,s._)("hr",null,null,-1))),r=a((()=>(0,s._)("hr",null,null,-1)));function u(t,e,i,a,u,c){const h=(0,s.up)("svg-icon"),p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",n,[(0,s.Wm)(p,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:a.iconsStore.mdiHomeOutline},null,8,["path"])])),_:1}),l,(0,s.Wm)(p,{to:"/dashboard"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:a.iconsStore.mdiViewDashboardOutline},null,8,["path"])])),_:1}),d,(0,s.Wm)(p,{to:"/dashboard/uzytkownicy"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:a.iconsStore.mdiAccountMultipleOutline},null,8,["path"])])),_:1}),o,(0,s.Wm)(p,{to:"/dashboard/linki"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:a.iconsStore.mdiLinkVariant},null,8,["path"])])),_:1}),r,(0,s.Wm)(p,{to:"/dashboard/zadania"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{type:"mdi",path:a.iconsStore.mdiCalendarMonthOutline},null,8,["path"])])),_:1})])}var c=i(2273),h=i(4409),p={name:"MainNavigation",components:{svgIcon:c.Z},setup(){const t=(0,h.Q)();return{iconsStore:t}}},k=i(3744);const v=(0,k.Z)(p,[["render",u],["__scopeId","data-v-19900eb5"]]);var m=v},1217:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Tt}});var s=i(6252),a=i(3577),n=i(9963);const l=t=>((0,s.dD)("data-v-5211084a"),t=t(),(0,s.Cn)(),t),d=l((()=>(0,s._)("div",{id:"backgroundTriangle"},null,-1))),o={id:"headerLeft"},r={id:"mainTasksSection"},u={id:"mainTasksContainer"},c=l((()=>(0,s._)("h1",{class:"titles"},"Do zrobienia",-1))),h={id:"tasksSection"},p={id:"tasksHeader"},k=l((()=>(0,s._)("span",null,"Statystyki",-1))),v=l((()=>(0,s._)("span",null,"Dodaj zadanie",-1))),m={id:"tasksList"},g={id:"tasksListScroll"},_={id:"tasksListHeader"},w=l((()=>(0,s._)("span",null,"To Do",-1))),f=l((()=>(0,s._)("hr",null,null,-1))),y={key:0,id:"tasksListHeaderFilterMenu"},C=l((()=>(0,s._)("h1",null,"Wybierz status zadania",-1))),S=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Dostępne")],-1))),b=[S],T=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"W trakcie")],-1))),A=[T],D=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Ukończone")],-1))),E=[D],I=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Anulowane")],-1))),z=[I],W={key:0,class:"emptyValuesMessage"},O=l((()=>(0,s._)("h1",null,"Brak zadań do wyświetlenia",-1))),B=[O],x=["onClick"],F={class:"taskListElementDetails"},L={class:"taskListElementID"},j={class:"taskListElementTitle"},H={id:"taskDetailsSection"},Z={id:"taskDetails"},M={id:"taskDetailsHeader"},P=["placeholder","disabled"],N={id:"taskDetailsButtonsContainer"},U={id:"taskDetailsDesc",class:"formTextArea formItem"},R=l((()=>(0,s._)("label",{for:"descInput"},"Opis",-1))),q={class:"border"},V=["placeholder","disabled"],$={class:"letterCount"},Q={id:"taskDetailsFooter"},J={id:"taskDetailsTags"},K=l((()=>(0,s._)("h1",null,"Tagi:",-1))),Y={id:"taskDetailsTagsContainer"},G=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Ważne")],-1))),X=[G],tt=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Dostępne")],-1))),et=[tt],it=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"W trakcie")],-1))),st=[it],at=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Ukończone")],-1))),nt=[at],lt=l((()=>(0,s._)("div",null,[(0,s._)("p",null,"Anulowane")],-1))),dt=[lt],ot={id:"taskDetailsAuthor"};function rt(t,e,i,l,S,T){const D=(0,s.up)("HeaderLogo"),I=(0,s.up)("Notification"),O=(0,s.up)("Navigation"),G=(0,s.up)("UserCard"),tt=(0,s.up)("svg-icon"),it=(0,s.up)("router-link"),at=(0,s.up)("AuthorCard");return(0,s.wg)(),(0,s.iD)("body",null,[d,(0,s.Wm)(D),(0,s.Wm)(I),(0,s._)("header",o,[(0,s.Wm)(O),(0,s.Wm)(G)]),(0,s._)("main",r,[(0,s._)("div",u,[c,(0,s._)("section",h,[(0,s._)("div",p,[(0,s._)("div",{onClick:e[0]||(e[0]=t=>l.generalStore.activeTaskElement="home"),class:"tasksHeaderElement"},[(0,s.Wm)(it,{to:"/dashboard/zadania"},{default:(0,s.w5)((()=>[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiHomeOutline},null,8,["path"]),k])),_:1})]),(0,s._)("div",{onClick:e[1]||(e[1]=t=>l.generalStore.activeTaskElement="addTask"),class:"tasksHeaderElement"},[(0,s.Wm)(it,{to:"/dashboard/zadania"},{default:(0,s.w5)((()=>[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiPlusCircleOutline},null,8,["path"]),v])),_:1})])]),(0,s._)("div",m,[(0,s._)("ul",g,[(0,s._)("div",_,[w,f,(0,s.Wm)(tt,{onClick:e[2]||(e[2]=t=>this.isFilterMenuOpen=!this.isFilterMenuOpen),class:"taskFilter pointer",type:"mdi",path:S.filterIcon,style:{"--sx":"1.25","--sy":"1.25"}},null,8,["path"]),S.isFilterMenuOpen?((0,s.wg)(),(0,s.iD)("div",y,[C,(0,s._)("div",{onClick:e[3]||(e[3]=t=>T.changeFilter("available",S.filteredStatus)),class:(0,a.C_)(["statusBadge filterElement available pointer",{disabled:"available"!==S.filteredStatus}])},b,2),(0,s._)("div",{onClick:e[4]||(e[4]=t=>T.changeFilter("inProgress",S.filteredStatus)),class:(0,a.C_)(["statusBadge filterElement inProgress pointer",{disabled:"inProgress"!==S.filteredStatus}])},A,2),(0,s._)("div",{onClick:e[5]||(e[5]=t=>T.changeFilter("finished",S.filteredStatus)),class:(0,a.C_)(["statusBadge filterElement finished pointer",{disabled:"finished"!==S.filteredStatus}])},E,2),(0,s._)("div",{onClick:e[6]||(e[6]=t=>T.changeFilter("cancelled",S.filteredStatus)),class:(0,a.C_)(["statusBadge filterElement cancelled pointer",{disabled:"cancelled"!==S.filteredStatus}])},z,2)])):(0,s.kq)("",!0)]),0===S.tasks.length?((0,s.wg)(),(0,s.iD)("div",W,B)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(T.filteredTasks,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:"taskListElement pointer"},[(0,s._)("div",{onClick:e=>T.changeTask(t._id)},["cancelled"===t.status?((0,s.wg)(),(0,s.j4)(tt,{key:0,class:"taskListElementStatus cancelled",type:"mdi",path:l.iconsStore.mdiCloseCircleOutline},null,8,["path"])):"finished"===t.status?((0,s.wg)(),(0,s.j4)(tt,{key:1,class:"taskListElementStatus finished",type:"mdi",path:l.iconsStore.successIcon},null,8,["path"])):"inProgress"===t.status?((0,s.wg)(),(0,s.j4)(tt,{key:2,class:"taskListElementStatus inProgress",type:"mdi",path:l.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"])):((0,s.wg)(),(0,s.j4)(tt,{key:3,class:"taskListElementStatus available",type:"mdi",path:l.iconsStore.mdiRecordCircleOutline},null,8,["path"])),(0,s._)("div",F,[(0,s._)("span",L,(0,a.zw)("#".concat(t._id)),1),(0,s._)("h1",j,(0,a.zw)(t.title),1)]),t.important?((0,s.wg)(),(0,s.j4)(tt,{key:4,class:"taskListElementStar",type:"mdi",path:l.iconsStore.mdiStar},null,8,["path"])):(0,s.kq)("",!0)],8,x)])))),128))])]),(0,s._)("section",H,[(0,s._)("div",Z,[(0,s._)("div",{id:"taskDetailsEditMessage",style:(0,a.j5)(S.styles.editMsg)}," Tryb edycji włączony ",4),(0,s._)("div",M,["cancelled"===S.newTask.status?((0,s.wg)(),(0,s.j4)(tt,{key:0,class:"taskDetailsHeaderStatusIcon cancelled",type:"mdi",path:l.iconsStore.mdiCloseCircleOutline},null,8,["path"])):"finished"===S.newTask.status?((0,s.wg)(),(0,s.j4)(tt,{key:1,class:"taskDetailsHeaderStatusIcon finished",type:"mdi",path:l.iconsStore.successIcon},null,8,["path"])):"inProgress"===S.newTask.status?((0,s.wg)(),(0,s.j4)(tt,{key:2,class:"taskDetailsHeaderStatusIcon inProgress",type:"mdi",path:l.iconsStore.mdiDotsHorizontalCircleOutline},null,8,["path"])):((0,s.wg)(),(0,s.j4)(tt,{key:3,class:"taskDetailsHeaderStatusIcon available",type:"mdi",path:l.iconsStore.mdiRecordCircleOutline},null,8,["path"])),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{placeholder:S.task.title,"onUpdate:modelValue":e[7]||(e[7]=t=>S.newTask.titleInput=t),maxlength:"20",disabled:!S.isEditActive},null,8,P),[[n.nr,S.newTask.titleInput]]),(0,s._)("span",{onClick:e[8]||(e[8]=t=>T.copyLink()),id:"taskDetailsID",class:"pointer",title:"Skopiuj link do zadania"},(0,a.zw)("#".concat(S.task._id)),1)]),(0,s._)("div",N,[(0,s._)("div",{style:(0,a.j5)(S.styles.deleteButton),class:"taskDetailsButton Delete pointer"},[(0,s._)("div",{onClick:e[9]||(e[9]=t=>T.buttonClicked("delete")),title:"Usuń"},[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiTrashCanOutline},null,8,["path"])]),(0,s._)("div",{onClick:e[10]||(e[10]=t=>T.hideButtons("delete")),title:"Anuluj"},[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiClose},null,8,["path"])])],4),(0,s._)("div",{style:(0,a.j5)(S.styles.editButton),class:"taskDetailsButton Edit pointer"},[(0,s._)("div",{onClick:e[11]||(e[11]=t=>T.buttonClicked("edit")),title:"Wprowadź zmiany"},[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiPencilOutline},null,8,["path"])]),(0,s._)("div",{onClick:e[12]||(e[12]=t=>T.hideButtons("edit")),title:"Anuluj zmiany"},[(0,s.Wm)(tt,{type:"mdi",path:l.iconsStore.mdiClose},null,8,["path"])])],4)])]),(0,s._)("div",U,[R,(0,s._)("div",q,[(0,s.wy)((0,s._)("textarea",{placeholder:S.task.desc,rows:"5",maxlength:"300","onUpdate:modelValue":e[13]||(e[13]=t=>S.newTask.descInput=t),disabled:!S.isEditActive},null,8,V),[[n.nr,S.newTask.descInput]]),(0,s._)("span",$,(0,a.zw)("".concat(S.lettersCount.descLetters,"/").concat(S.lettersCount.maxDescLetters)),1)])]),(0,s._)("div",Q,[(0,s._)("div",J,[K,(0,s._)("div",Y,[(0,s._)("div",{onClick:e[14]||(e[14]=t=>T.toggleImportant()),class:(0,a.C_)(["statusBadge taskStatus important",{disabled:!S.newTask.important,pointer:S.isEditActive,editActived:S.isEditActive}])},X,2),S.isEditActive||"available"===S.newTask.status?((0,s.wg)(),(0,s.iD)("div",{key:0,onClick:e[15]||(e[15]=t=>T.changeStatus("available",S.newTask.status)),class:(0,a.C_)(["statusBadge taskStatus available",{disabled:"available"!==S.newTask.status,pointer:S.isEditActive,editActived:S.isEditActive}])},et,2)):(0,s.kq)("",!0),S.isEditActive||"inProgress"===S.newTask.status?((0,s.wg)(),(0,s.iD)("div",{key:1,onClick:e[16]||(e[16]=t=>T.changeStatus("inProgress",S.newTask.status)),class:(0,a.C_)(["statusBadge taskStatus inProgress",{disabled:"inProgress"!==S.newTask.status,pointer:S.isEditActive,editActived:S.isEditActive}])},st,2)):(0,s.kq)("",!0),S.isEditActive||"finished"===S.newTask.status?((0,s.wg)(),(0,s.iD)("div",{key:2,onClick:e[17]||(e[17]=t=>T.changeStatus("finished",S.newTask.status)),class:(0,a.C_)(["statusBadge taskStatus finished",{disabled:"finished"!==S.newTask.status,pointer:S.isEditActive,editActived:S.isEditActive}])},nt,2)):(0,s.kq)("",!0),S.isEditActive||"cancelled"===S.newTask.status?((0,s.wg)(),(0,s.iD)("div",{key:3,onClick:e[18]||(e[18]=t=>T.changeStatus("cancelled",S.newTask.status)),class:(0,a.C_)(["statusBadge taskStatus cancelled",{disabled:"cancelled"!==S.newTask.status,pointer:S.isEditActive,editActived:S.isEditActive}])},dt,2)):(0,s.kq)("",!0)])]),(0,s._)("div",ot,[(0,s.Wm)(at,{authorID:S.task.createdBy,isFlipped:!0},null,8,["authorID"])])])])])])])])])}i(8674),i(6699),i(2023);var ut=i(8332),ct=i(2273),ht=i(7600),pt=i(5229),kt=i(9735),vt=i(4409),mt=i(5454),gt=i(3556),_t=i(1434),wt=i(3148),ft=i(348),yt=i(8149),Ct={name:"TaskDetails",components:{svgIcon:ct.Z,HeaderLogo:gt.Z,Notification:_t.Z,UserCard:wt.Z,Navigation:ft.Z,AuthorCard:yt.Z},setup(){const t=(0,pt.x)(),e=(0,vt.Q)(),i=(0,mt.F)(),s=(0,kt.J)();return{alertsStore:t,iconsStore:e,generalStore:i,preferenceStore:s}},data(){return{newTask:[{titleInput:"Tytuł",descInput:"Szczegóły zadania nie zostały wczytane. Spróbuj zresetować stronę.",status:"available",important:!1}],isEditActive:!1,buttonClickedCount:{delete:0,edit:0},styles:{editMsg:{top:"-50px"},deleteButton:{width:"30px"},editButton:{width:"30px"}},lettersCount:{descLetters:0,maxDescLetters:300},task:[],tasks:[],isFilterMenuOpen:!1,isFilterActive:!1,filterIcon:this.iconsStore.mdiFilterOffOutline,filteredStatus:""}},methods:{async buttonClicked(t){if("delete"===t?(this.styles.deleteButton.width="65px",this.isEditActive=!1):"edit"===t&&(this.isEditActive=!0,this.styles.deleteButton.width="30px"),"delete"===t&&(this.buttonClickedCount.delete++,this.buttonClickedCount.edit=0,2===this.buttonClickedCount.delete)){const t=await ut.Z.deleteTask(this.task);if(await this.alertsStore.showNotification(t.duration,t.status,t.message),this.preferenceStore.preferences[0].state){const t=new Audio(ht);t.volume=.5,t.play()}"success"===t.status&&this.$router.push("/dashboard/zadania"),this.buttonClickedCount.delete=0}if("edit"===t&&(this.buttonClickedCount.edit++,this.buttonClickedCount.delete=0,2===this.buttonClickedCount.edit)){const t={_id:this.task._id,title:this.newTask.titleInput,desc:this.newTask.descInput,status:this.newTask.status,important:this.newTask.important},e=await ut.Z.updateTask(t);if(await this.alertsStore.showNotification(e.duration,e.status,e.message),this.preferenceStore.preferences[0].state){const t=new Audio(ht);t.volume=.5,t.play()}"success"===e.status&&(this.tasks=await ut.Z.getAllTasks()),this.buttonClickedCount.edit=0,this.isEditActive=!1}},hideButtons(t){"delete"===t?this.styles.deleteButton.width="30px":"edit"===t&&(this.isEditActive=!1),this.buttonClickedCount.delete=0,this.buttonClickedCount.edit=0},toggleImportant(){this.isEditActive&&(this.newTask.important=!this.newTask.important)},changeStatus(t,e){this.isEditActive&&t!==e&&(this.newTask.status=t)},changeTask(t){this.$router.push("/dashboard/zadania/".concat(t)),this.isEditActive=!1,this.buttonClickedCount.delete=0,this.buttonClickedCount.edit=0},changeFilter(t,e){t===e?(this.isFilterActive=!1,this.filteredStatus=""):(this.isFilterActive=!0,this.filteredStatus=t)},copyLink(){const t="".concat(window.location.origin,"/#/dashboard/zadania/").concat(this.task._id);if(navigator.clipboard.writeText(t),this.alertsStore.showNotification(4,"info","Skopiowano link"),this.preferenceStore.preferences[0].state){const t=new Audio(ht);t.volume=.5,t.play()}}},computed:{filteredTasks(){return this.tasks.filter((t=>t.status.includes(this.filteredStatus)))}},watch:{isEditActive(){this.isEditActive?(this.styles.editMsg.top="10px",this.styles.editButton.width="65px"):(this.styles.editMsg.top="-50px",this.styles.editButton.width="30px")},isFilterActive(){this.isFilterActive?this.filterIcon=this.iconsStore.mdiFilterOutline:this.filterIcon=this.iconsStore.mdiFilterOffOutline}},async beforeMount(){this.tasks=await ut.Z.getAllTasks()},async updated(){this.isEditActive||(this.task=await this.tasks.find((t=>t._id===this.$route.params.id)),void 0===this.task&&this.$router.push("/".concat(this.$route.params.id)),this.newTask.titleInput=this.task.title,this.newTask.descInput=this.task.desc,this.newTask.status=this.task.status,this.newTask.important=this.task.important),this.lettersCount.descLetters=this.newTask.descInput.length}},St=i(3744);const bt=(0,St.Z)(Ct,[["render",rt],["__scopeId","data-v-5211084a"]]);var Tt=bt}}]);
//# sourceMappingURL=TaskDetails.72531a1c.js.map