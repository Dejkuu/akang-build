"use strict";(self["webpackChunkakang"]=self["webpackChunkakang"]||[]).push([[362],{348:function(t,a,i){i.d(a,{Z:function(){return v}});var n=i(6252);const s=t=>((0,n.dD)("data-v-19900eb5"),t=t(),(0,n.Cn)(),t),o={id:"navigation"},e=s((()=>(0,n._)("hr",null,null,-1))),c=s((()=>(0,n._)("hr",null,null,-1))),l=s((()=>(0,n._)("hr",null,null,-1))),d=s((()=>(0,n._)("hr",null,null,-1)));function r(t,a,i,s,r,u){const k=(0,n.up)("svg-icon"),h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",o,[(0,n.Wm)(h,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{type:"mdi",path:s.iconsStore.mdiHomeOutline},null,8,["path"])])),_:1}),e,(0,n.Wm)(h,{to:"/dashboard"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{type:"mdi",path:s.iconsStore.mdiViewDashboardOutline},null,8,["path"])])),_:1}),c,(0,n.Wm)(h,{to:"/dashboard/uzytkownicy"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{type:"mdi",path:s.iconsStore.mdiAccountMultipleOutline},null,8,["path"])])),_:1}),l,(0,n.Wm)(h,{to:"/dashboard/linki"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{type:"mdi",path:s.iconsStore.mdiLinkVariant},null,8,["path"])])),_:1}),d,(0,n.Wm)(h,{to:"/dashboard/zadania"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{type:"mdi",path:s.iconsStore.mdiCalendarMonthOutline},null,8,["path"])])),_:1})])}var u=i(2273),k=i(4409),h={name:"MainNavigation",components:{svgIcon:u.Z},setup(){const t=(0,k.Q)();return{iconsStore:t}}},p=i(3744);const _=(0,p.Z)(h,[["render",r],["__scopeId","data-v-19900eb5"]]);var v=_},2364:function(t,a,i){i.d(a,{Z:function(){return p}});var n=i(6252),s=i(3577);const o={class:"block"},e={class:"blockText"};function c(t,a,i,c,l,d){const r=(0,n.up)("svg-icon"),u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(r,{class:"blockIcon",type:"mdi",path:l.blockIcon},null,8,["path"]),(0,n._)("div",e,[(0,n._)("h1",null,(0,s.zw)(l.blockTitle),1),(0,n._)("span",null,(0,s.zw)(l.blockDesc),1)]),i.hasLink?((0,n.wg)(),(0,n.j4)(u,{key:0,to:"/dashboard/".concat(l.blockLink)},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{type:"mdi",path:c.iconsStore.mdiOpenInNew},null,8,["path"])])),_:1},8,["to"])):(0,n.kq)("",!0)])}i(8674);var l=i(2273),d=i(4409),r=i(5454),u={name:"StatisticsBlock",props:["type","hasLink"],components:{svgIcon:l.Z},setup(){const t=(0,d.Q)(),a=(0,r.F)();return{generalStore:a,iconsStore:t}},data(){return{blockIcon:"",blockTitle:"",blockDesc:"",blockLink:""}},async beforeMount(){await this.generalStore.getStatistics(),"users"===this.type?(this.blockIcon=this.iconsStore.mdiAccountMultipleOutline,this.blockTitle="Użytkownicy",this.blockDesc=this.generalStore.statistics.users,this.blockLink="uzytkownicy"):"videos"===this.type?(this.blockIcon=this.iconsStore.mdiMovieOutline,this.blockTitle="Odebrane filmy",this.blockDesc=this.generalStore.statistics.links,this.blockLink="linki"):"tasks"===this.type?(this.blockIcon=this.iconsStore.mdiCalendarMonthOutline,this.blockTitle="Do zrobienia",this.blockDesc=this.generalStore.statistics.tasks,this.blockLink="zadania"):(this.blockIcon=this.iconsStore.alertOctagonIcon,this.blockTitle="Nieznany typ",this.blockDesc=NaN,this.blockLink="NotFound")}},k=i(3744);const h=(0,k.Z)(u,[["render",c],["__scopeId","data-v-fb2d4022"]]);var p=h},3027:function(t,a,i){i.r(a),i.d(a,{default:function(){return $}});var n=i(6252),s=i(3577);const o=t=>((0,n.dD)("data-v-0a995202"),t=t(),(0,n.Cn)(),t),e=o((()=>(0,n._)("div",{id:"backgroundTriangle"},null,-1))),c={id:"headerLeft"},l={id:"mainDashboardSection"},d={id:"dashboardSection"},r={id:"dashboardSectionContent"},u=o((()=>(0,n._)("h1",{class:"titles"},"Dashboard",-1))),k={id:"dashboardSectionBlocks"},h={id:"tasksSection"},p=o((()=>(0,n._)("h1",{class:"titles"},"To-Do List",-1))),_={id:"tasksSectionContent",class:"sectionContent"},v={key:0,class:"emptyValuesMessage"},b=o((()=>(0,n._)("h1",null,"Brak zadań do wyświetlenia",-1))),w=[b],m={class:"taskDetails"},f={class:"taskID"},g={class:"taskTitleWithImportant"},S={class:"taskTitle"},y={key:0,class:"taskImportant"},D={id:"notificationsSection"},W=o((()=>(0,n._)("h1",{class:"titles"},"Powiadomienia",-1))),z={id:"notificationsSectionContent",class:"sectionContent"},I=(0,n.uE)('<li id="notificationsHeader" data-v-0a995202><h1 class="notificationTitle" data-v-0a995202>Log</h1><div class="notificationStatusContainer" data-v-0a995202><h1 class="notificationStatus" data-v-0a995202>Status</h1></div><h1 class="notificationDate" data-v-0a995202>Data</h1></li>',1),C={key:0,class:"emptyValuesMessage"},L=o((()=>(0,n._)("h1",null,"Brak powiadomień",-1))),T=[L],Z={class:"notificationTitle"},M={class:"notificationStatusContainer"},B={class:"notificationDate"};function N(t,a,i,o,b,L){const N=(0,n.up)("HeaderLogo"),O=(0,n.up)("Notification"),j=(0,n.up)("Navigation"),H=(0,n.up)("UserCard"),A=(0,n.up)("StatisticBlock"),U=(0,n.up)("StatisticBlockSkeleton"),q=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("body",null,[e,(0,n.Wm)(N),(0,n.Wm)(O),(0,n._)("header",c,[(0,n.Wm)(j),(0,n.Wm)(H)]),(0,n._)("main",l,[(0,n._)("section",d,[(0,n._)("div",r,[u,(0,n._)("div",k,[((0,n.wg)(),(0,n.j4)(n.n4,null,{default:(0,n.w5)((()=>[(0,n.Wm)(A,{type:"users",hasLink:!0})])),fallback:(0,n.w5)((()=>[(0,n.Wm)(U)])),_:1})),((0,n.wg)(),(0,n.j4)(n.n4,null,{default:(0,n.w5)((()=>[(0,n.Wm)(A,{type:"videos",hasLink:!0})])),fallback:(0,n.w5)((()=>[(0,n.Wm)(U)])),_:1})),((0,n.wg)(),(0,n.j4)(n.n4,null,{default:(0,n.w5)((()=>[(0,n.Wm)(A,{type:"tasks",hasLink:!0})])),fallback:(0,n.w5)((()=>[(0,n.Wm)(U)])),_:1}))])])]),(0,n._)("section",h,[p,(0,n._)("ul",_,[0===b.tasks.length?((0,n.wg)(),(0,n.iD)("div",v,w)):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.tasks.slice(0,6),(t=>((0,n.wg)(),(0,n.j4)(q,{class:"task pointer",key:t._id,to:"/dashboard/zadania/".concat(t._id)},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n._)("span",f,(0,s.zw)("#".concat(t._id)),1),(0,n._)("div",g,[(0,n._)("h1",S,(0,s.zw)(t.title),1),t.important?((0,n.wg)(),(0,n.iD)("span",y,"★")):(0,n.kq)("",!0)])]),(0,n._)("div",{class:(0,s.C_)(["statusBadge",t.status])},[(0,n._)("div",null,[(0,n._)("p",null,(0,s.zw)("finished"===t.status?"Ukończone":"cancelled"===t.status?"Anulowane":"inProgress"===t.status?"W trakcie":"Dostępne"),1)])],2)])),_:2},1032,["to"])))),128)),(0,n._)("footer",null,[b.tasks.length>6?((0,n.wg)(),(0,n.j4)(q,{key:0,to:"/dashboard/zadania",class:"pointer"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)("+".concat(b.tasks.length-6," więcej")),1)])),_:1})):(0,n.kq)("",!0)])])]),(0,n._)("section",D,[W,(0,n._)("ul",z,[I,0===b.notifications.length?((0,n.wg)(),(0,n.iD)("div",C,T)):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.notifications.slice(0,5),(t=>((0,n.wg)(),(0,n.j4)(q,{class:"notification pointer",key:t.id,to:"/dashboard/".concat(t.routerLink)},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n._)("h1",null,[(0,n.Uk)((0,s.zw)("".concat(t.title))+" ",1),(0,n._)("span",null,(0,s.zw)("".concat(t.desc)),1)])]),(0,n._)("div",M,[(0,n._)("div",{class:(0,s.C_)(["notificationStatus",t.status])},[(0,n._)("div",null,[(0,n._)("p",null,(0,s.zw)("added"===t.status?"Dodane":"error"===t.status?"Błąd":void 0),1)])],2)]),(0,n._)("div",B,(0,s.zw)(L.convertDate(t.createdAt)),1)])),_:2},1032,["to"])))),128))])])])])}i(8674);var O=i(8332),j=i(3556),H=i(1434),A=i(3148),U=i(348),q=i(2364);const V=t=>((0,n.dD)("data-v-79c6fe12"),t=t(),(0,n.Cn)(),t),F={class:"block"},Y=V((()=>(0,n._)("div",{class:"blockIcon"},[(0,n._)("div")],-1))),x=V((()=>(0,n._)("div",{class:"blockText"},[(0,n._)("h1"),(0,n._)("span")],-1))),K=[Y,x];function P(t,a,i,s,o,e){return(0,n.wg)(),(0,n.iD)("div",F,K)}var Q={name:"StatisticsBlock"},E=i(3744);const G=(0,E.Z)(Q,[["render",P],["__scopeId","data-v-79c6fe12"]]);var J=G,R={name:"DashboardView",components:{HeaderLogo:j.Z,Notification:H.Z,UserCard:A.Z,Navigation:U.Z,StatisticBlock:q.Z,StatisticBlockSkeleton:J},data(){return{tasks:[],notifications:[]}},methods:{convertDate(t){const a=new Date(t);let i=a.getHours();i<10&&(i="0".concat(i));let n=a.getMinutes();n<10&&(n="0".concat(n));let s=a.getDate();s<10&&(s="0".concat(s));let o=a.getMonth()+1;o<10&&(o="0".concat(o));const e=a.getFullYear();return"".concat(i,":").concat(n," | ").concat(s,".").concat(o,".").concat(e)}},async beforeMount(){this.tasks=await O.Z.getAllTasks(),this.notifications=await O.Z.getAllNotifications()}};const X=(0,E.Z)(R,[["render",N],["__scopeId","data-v-0a995202"]]);var $=X}}]);
//# sourceMappingURL=Dashboard.4fe4798e.js.map