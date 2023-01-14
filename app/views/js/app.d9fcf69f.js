(function(){"use strict";var t={8332:function(t,e,s){s.d(e,{Z:function(){return h}});s(8674);var n=s(594);n.Z.defaults.baseURL="/api";const i="/users",o="/user",r="/newUser",a="/getUserNV",c="/links",l="/link",u="/tasks",d="/task",p="/notifications";class h{static async getAllUsers(){const t=await n.Z.get(i);return t.data}static async getUser(t){const e=await n.Z.post(o,t);return e.data}static async newUser(t){const e=await n.Z.post(r,t);return e.data}static async getUserNV(t){const e=await n.Z.post(a,t);return e.data}static async changePassword(t){const e=await n.Z.patch(o,{data:t});return e.data}static async getAllLinks(){const t=await n.Z.get(c);return t.data}static async postLink(t){const e=await n.Z.post(l,t);return e.data}static async deleteLink(t){const e=await n.Z["delete"](l,{data:t});return e.data}static async getAllTasks(){const t=await n.Z.get(u);return t.data}static async postTask(t){const e=await n.Z.post(d,t);return e.data}static async deleteTask(t){const e=await n.Z["delete"](d,{data:t});return e.data}static async updateTask(t){const e=await n.Z.patch(d,{data:t});return e.data}static async getAllNotifications(){const t=await n.Z.get(p);return t.data}}},5637:function(t,e,s){var n=s(9963),i=s(6252);function o(t,e){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var r=s(3744);const a={},c=(0,r.Z)(a,[["render",o]]);var l=c,u=(s(8674),s(3948),s(2201)),d=s(1955),p=s(845),h=s(9735);const m=t=>((0,i.dD)("data-v-cb591b56"),t=t(),(0,i.Cn)(),t),f=m((()=>(0,i._)("div",{id:"backgroundArch"},null,-1))),g={id:"headerLeft"};function v(t,e,s,n,o,r){const a=(0,i.up)("HeaderLogo"),c=(0,i.up)("HomeButtons"),l=(0,i.up)("MainSection"),u=(0,i.up)("Notification"),d=(0,i.up)("UserCard"),p=(0,i.up)("OverlayForm");return(0,i.wg)(),(0,i.iD)("body",null,[f,(0,i.Wm)(a),(0,i.Wm)(c),(0,i.Wm)(l),(0,i.Wm)(u),(0,i._)("header",g,[(0,i.Wm)(d)]),(0,i.Wm)(p)])}var w=s(3556),k=s(3577);const I=t=>((0,i.dD)("data-v-f46ff99e"),t=t(),(0,i.Cn)(),t),y={id:"homeButtonsContainer"},S=["href"],b=I((()=>(0,i._)("span",null,"Youtube",-1)));function _(t,e,s,n,o,r){const a=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("nav",y,[(0,i._)("a",{href:"https://www.youtube.com/@Dejku",target:"_blank",rel:"noopener noreferrer",class:"homeButton"},[(0,i.Wm)(a,{type:"mdi",path:n.iconsStore.mdiYoutube},null,8,["path"]),b],8,S),(0,i._)("button",{onClick:e[0]||(e[0]=t=>r.homeButton()),class:"homeButton"},[(0,i.Wm)(a,{class:"login",type:"mdi",path:n.iconsStore.mdiLogin},null,8,["path"]),(0,i._)("span",null,(0,k.zw)(n.accountStore.isLogged?"Dashboard":"Logowanie"),1)])])}var C=s(2273),x=s(4409),D=s(9876);const T=(0,D.Q_)("loginStore",{state:()=>({isShow:!1,activeForm:1,formText:"Zaloguj się",isButtonDisabled:!0}),actions:{setActiveForm(t){this.isButtonDisabled=!0,"add"===t?this.activeForm++:"subtract"===t&&this.activeForm--,this.activeForm>2?this.activeForm=1:this.activeForm<1&&(this.activeForm=2),1===this.activeForm?this.formText="Zaloguj się":2===this.activeForm&&(this.formText="Stwórz konto")}}});var A={name:"HomeButtons",components:{svgIcon:C.Z},setup(){const t=(0,x.Q)(),e=T(),s=(0,p.c)();return{iconsStore:t,loginStore:e,accountStore:s}},methods:{homeButton(){this.accountStore.isLogged?this.$router.push("/dashboard"):this.loginStore.isShow=!0}}};const Z=(0,r.Z)(A,[["render",_],["__scopeId","data-v-f46ff99e"]]);var L=Z;const O=t=>((0,i.dD)("data-v-067256fc"),t=t(),(0,i.Cn)(),t),F={id:"carouselHeader"},B={key:0},E={key:1},W=O((()=>(0,i._)("hr",{id:"afterTitle"},null,-1))),V={key:2},U={key:3},j=O((()=>(0,i._)("hr",{id:"underTitle"},null,-1))),M={id:"carouselSection"},z={id:"carouselArrow"},N={id:"carouselButtons"};function q(t,e,s,n,o,r){const a=(0,i.up)("svg-icon"),c=(0,i.up)("CarouselContent");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("header",F,[1===o.activeSection?((0,i.wg)(),(0,i.iD)("h1",B,"Youtube")):((0,i.wg)(),(0,i.iD)("h1",E,"Formularz")),W,1===o.activeSection?((0,i.wg)(),(0,i.iD)("span",V,"Najlepszy kanał na YT :)")):((0,i.wg)(),(0,i.iD)("span",U,"Udostępnij swoje filmy")),j]),(0,i._)("section",M,[(0,i._)("div",z,[(0,i._)("div",{onClick:e[0]||(e[0]=t=>o.activeSection--),class:"arrowLeft pointer"},[(0,i.Wm)(a,{width:"50px",height:"50px",type:"mdi",path:n.iconsStore.mdiChevronLeft},null,8,["path"])]),(0,i._)("div",{onClick:e[1]||(e[1]=t=>o.activeSection++),class:"arrowRight pointer"},[(0,i.Wm)(a,{width:"50px",height:"50px",type:"mdi",path:n.iconsStore.mdiChevronRight},null,8,["path"])])]),(0,i.Wm)(c,{whichSection:o.activeSection},null,8,["whichSection"])]),(0,i._)("div",N,[(0,i._)("button",{onClick:e[2]||(e[2]=t=>o.activeSection=1),class:(0,k.C_)(["carouselButton",{active:1===o.activeSection}])},null,2),(0,i._)("button",{onClick:e[3]||(e[3]=t=>o.activeSection=2),class:(0,k.C_)(["carouselButton",{active:2===o.activeSection}])},null,2)])])}const P={id:"videoContainer"},R={class:"spinner"},Q={key:0,id:"videoSection"},H=(0,i._)("iframe",{src:"https://www.youtube.com/embed?listType=playlist&list=UULFyFOX7xqRs9RctjQplv5nYw",width:"100%",height:"100%",frameborder:"0",allowfullscreen:""},"\r\n      ",-1),Y=[H],J={key:1,id:"videoForm"},G={class:"formInput formItem"},K={for:"nickInput"},$={class:"formError"},X={class:"helpBox",title:"Wpisz swój nick"},tt={class:"formInput formItem"},et={for:"gameInput"},st={class:"formError"},nt={class:"helpBox",title:"Wpisz grę"},it={class:"formInput formItem"},ot={for:"linkInput"},rt={class:"formError"},at={class:"helpBox",title:"Wpisz link do filmów"},ct={id:"formHint"},lt=(0,i._)("div",{id:"formText"},[(0,i._)("h4",null,"JAK WYSYŁAĆ FILMY?"),(0,i._)("p",null,[(0,i.Uk)(" Filmy należy wrzucić w JEDNYM FOLDERZE najlepiej na "),(0,i._)("a",{href:"https://drive.google.com"},"DYSK GOOGLE"),(0,i.Uk)(' (może być też na innej platformie), następnie folder klikamy PPM oraz "Pobierz link do udostępnienia". ')])],-1),ut={id:"formSubmit"},dt=["disabled"],pt={class:"formTextArea formItem"},ht=(0,i._)("label",{for:"descInput"},[(0,i.Uk)(" Dodatkowa wiadomość "),(0,i._)("span",{id:"descSpan"},"(opcjonalne)")],-1),mt={class:"border"},ft={class:"helpBox",title:"Twoja dodatkowa wiadomość"},gt={class:"letterCount"};function vt(t,e,s,o,r,a){const c=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("div",P,[(0,i.wy)((0,i._)("div",R,null,512),[[n.F8,1===s.whichSection]]),1===s.whichSection?((0,i.wg)(),(0,i.iD)("div",Q,Y)):((0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",G,[(0,i._)("label",K,[(0,i.Uk)(" Nickname "),(0,i._)("span",$,(0,k.zw)(r.errors.nickError),1)]),(0,i._)("div",{class:(0,k.C_)([r.nickClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"nickInput",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.nickInput=t),maxlength:"20",autocomplete:"off"},null,512),[[n.nr,r.nickInput]]),(0,i._)("div",X,[(0,i.Wm)(c,{class:(0,k.C_)(r.nickClass),type:"mdi",path:r.nickIcon},null,8,["class","path"])])],2)]),(0,i._)("div",tt,[(0,i._)("label",et,[(0,i.Uk)(" Gra "),(0,i._)("span",st,(0,k.zw)(r.errors.gameError),1)]),(0,i._)("div",{class:(0,k.C_)([r.gameClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"gameInput",list:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.gameInput=t),maxlength:"20",autocomplete:"off"},null,512),[[n.nr,r.gameInput]]),(0,i._)("div",nt,[(0,i.Wm)(c,{class:(0,k.C_)(r.gameClass),type:"mdi",path:r.gameIcon},null,8,["class","path"])])],2)]),(0,i._)("div",it,[(0,i._)("label",ot,[(0,i.Uk)(" Link "),(0,i._)("span",rt,(0,k.zw)(r.errors.linkError),1)]),(0,i._)("div",{class:(0,k.C_)([r.linkClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"linkInput",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>r.linkInput=t),autocomplete:"off"},null,512),[[n.nr,r.linkInput]]),(0,i._)("div",at,[(0,i.Wm)(c,{class:(0,k.C_)(r.linkClass),type:"mdi",path:r.linkIcon},null,8,["class","path"])])],2)]),(0,i._)("div",ct,[lt,(0,i._)("div",ut,[(0,i._)("button",{onClick:e[3]||(e[3]=t=>a.submitForm()),disabled:r.isButtonDisabled}," Wyślij ",8,dt)])]),(0,i._)("div",pt,[ht,(0,i._)("div",mt,[(0,i.wy)((0,i._)("textarea",{name:"formTextArea",rows:"5",maxlength:"300","onUpdate:modelValue":e[4]||(e[4]=t=>r.descInput=t)},null,512),[[n.nr,r.descInput]]),(0,i._)("div",ft,[(0,i.Wm)(c,{type:"mdi",path:r.descIcon},null,8,["path"])]),(0,i._)("span",gt,(0,k.zw)("".concat(r.lettersCount.descLetters,"/").concat(r.lettersCount.maxDescLetters)),1)])])]))])}var wt=s(7600),kt=s(5229),It=s(5454),yt={name:"CarouselContent",emits:["submitForm"],props:{whichSection:Number},components:{svgIcon:C.Z},setup(){const t=(0,h.J)(),e=(0,kt.x)(),s=(0,x.Q)(),n=(0,It.F)();return{preferenceStore:t,alertsStore:e,iconsStore:s,generalStore:n}},data(){return{nickIcon:this.iconsStore.questionMarkIcon,gameIcon:this.iconsStore.questionMarkIcon,linkIcon:this.iconsStore.questionMarkIcon,descIcon:this.iconsStore.questionMarkIcon,nickInput:"",gameInput:"",linkInput:"",descInput:"",nickClass:"",gameClass:"",linkClass:"",isButtonDisabled:!0,errors:{nickError:"",gameError:"",linkError:""},lettersCount:{descLetters:0,maxDescLetters:300}}},methods:{async submitForm(){if(0==this.nickInput.length&&0==this.gameInput.length&&0==this.linkInput.length)return;const t={nick:this.nickInput,game:this.gameInput,link:this.linkInput,desc:this.descInput};if(this.nickInput="",this.gameInput="",this.linkInput="",this.descInput="",await this.generalStore.sendVideo(t).then((async t=>{await this.alertsStore.showNotification(t.duration,t.status,t.message),"success"===t.status&&(this.nickIcon=this.iconsStore.questionMarkIcon,this.gameIcon=this.iconsStore.questionMarkIcon,this.linkIcon=this.iconsStore.questionMarkIcon,this.nickClass="neutral",this.gameClass="neutral",this.linkClass="neutral",this.errors.nickError="",this.errors.gameError="",this.errors.linkError="",this.isButtonDisabled=!0)})).catch((t=>console.log(t))),this.preferenceStore.preferences[0].state){const t=new Audio(wt);t.volume=.5,t.play()}},formVerification(t){return t.length>0?{icon:this.iconsStore.successIcon,status:"success",error:""}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}},buttonVerification(){0==this.nickInput.length||0==this.gameInput.length||0==this.linkInput.length?this.isButtonDisabled=!0:this.isButtonDisabled=!1}},watch:{nickInput(){this.buttonVerification();const t=this.formVerification(this.nickInput);this.nickIcon=t.icon,this.nickClass=t.status,this.errors.nickError=t.error},gameInput(){this.buttonVerification();const t=this.formVerification(this.gameInput);this.gameIcon=t.icon,this.gameClass=t.status,this.errors.gameError=t.error},linkInput(){this.buttonVerification();const t=this.formVerification(this.linkInput);this.linkIcon=t.icon,this.linkClass=t.status,this.errors.linkError=t.error},descInput(){this.lettersCount.descLetters=this.descInput.length}}};const St=(0,r.Z)(yt,[["render",vt]]);var bt=St,_t={name:"MainSection",components:{svgIcon:C.Z,CarouselContent:bt},setup(){const t=(0,x.Q)();return{iconsStore:t}},data(){return{activeSection:1}},watch:{activeSection(t){t<1?this.activeSection=2:t>2&&(this.activeSection=1)}}};const Ct=(0,r.Z)(_t,[["render",q],["__scopeId","data-v-067256fc"]]);var xt=Ct,Dt=s(1434),Tt=s(3148);const At={key:0,id:"formOverlayContainer"},Zt={id:"formContainer"},Lt=(0,i._)("div",{id:"FormVideoSection"},null,-1);function Ot(t,e,s,n,o,r){const a=(0,i.up)("LoginSection"),c=(0,i.up)("SigupSection");return n.loginStore.isShow?((0,i.wg)(),(0,i.iD)("div",At,[(0,i._)("div",{onClick:e[0]||(e[0]=t=>r.showForm()),id:"formOverlay",class:"pointer"}),(0,i._)("div",Zt,[(0,i._)("div",null,[1===n.loginStore.activeForm?((0,i.wg)(),(0,i.j4)(a,{key:0})):(0,i.kq)("",!0),2===n.loginStore.activeForm?((0,i.wg)(),(0,i.j4)(c,{key:1})):(0,i.kq)("",!0)]),Lt])])):(0,i.kq)("",!0)}const Ft={class:"formBox"},Bt={id:"formLoginSection"},Et={class:"formInputsContainer"},Wt={class:"formInput formItem"},Vt={for:"nickInput"},Ut={class:"formError"},jt={class:"helpBox",title:"Wpisz swój nick"},Mt={class:"formInput formItem"},zt={for:"passwordInput"},Nt={class:"formError"},qt=["type"],Pt={class:"helpBox",title:"Wpisz swoje hasło"},Rt=["disabled"];function Qt(t,e,s,o,r,a){const c=(0,i.up)("FormButton"),l=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("div",Ft,[(0,i._)("div",Bt,[(0,i.Wm)(c),(0,i._)("div",Et,[(0,i._)("div",Wt,[(0,i._)("label",Vt,[(0,i.Uk)(" Login "),(0,i._)("span",Ut,(0,k.zw)(r.errors.nickError),1)]),(0,i._)("div",{class:(0,k.C_)([r.nickClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"nickInput",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.nickInput=t),maxlength:"10",autocomplete:"off"},null,512),[[n.nr,r.nickInput]]),(0,i._)("div",jt,[(0,i.Wm)(l,{class:(0,k.C_)(r.nickClass),type:"mdi",path:r.nickIcon},null,8,["class","path"])])],2)]),(0,i._)("div",Mt,[(0,i._)("label",zt,[(0,i.Uk)(" Hasło "),(0,i._)("span",Nt,(0,k.zw)(r.errors.passwordError),1)]),(0,i._)("div",{class:(0,k.C_)([r.passwordClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"passwordInput",type:r.passwordType,"onUpdate:modelValue":e[1]||(e[1]=t=>r.passwordInput=t),maxlength:"20",autocomplete:"off"},null,8,qt),[[n.YZ,r.passwordInput]]),(0,i._)("div",Pt,[(0,i.Wm)(l,{onMouseenter:e[2]||(e[2]=t=>r.passwordType="text"),onMouseleave:e[3]||(e[3]=t=>r.passwordType="password"),class:(0,k.C_)(r.passwordClass),type:"mdi",path:r.passwordIcon},null,8,["class","path"])])],2)])])]),(0,i._)("button",{onClick:e[4]||(e[4]=t=>a.submitForm()),disabled:o.loginStore.isButtonDisabled,id:"submitBtn"},(0,k.zw)(o.loginStore.formText),9,Rt)])}const Ht={id:"formChangeSectionButton"};function Yt(t,e,s,n,o,r){const a=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("div",Ht,[(0,i._)("div",{onClick:e[0]||(e[0]=t=>n.loginStore.setActiveForm("add")),class:"arrowLeft pointer"},[(0,i.Wm)(a,{width:"50px",height:"50px",type:"mdi",path:n.iconsStore.mdiChevronLeft},null,8,["path"])]),(0,i._)("span",null,(0,k.zw)(n.loginStore.formText),1),(0,i._)("div",{onClick:e[1]||(e[1]=t=>n.loginStore.setActiveForm("subtract")),class:"arrowRight pointer"},[(0,i.Wm)(a,{width:"50px",height:"50px",type:"mdi",path:n.iconsStore.mdiChevronRight},null,8,["path"])])])}var Jt={name:"FormButton",components:{svgIcon:C.Z},setup(){const t=T(),e=(0,x.Q)();return{loginStore:t,iconsStore:e}}};const Gt=(0,r.Z)(Jt,[["render",Yt],["__scopeId","data-v-59d4caa8"]]);var Kt=Gt,$t={name:"LoginSection",components:{svgIcon:C.Z,FormButton:Kt},setup(){const t=(0,x.Q)(),e=T(),s=(0,p.c)(),n=(0,h.J)(),i=(0,kt.x)();return{iconsStore:t,loginStore:e,accountStore:s,preferenceStore:n,alertsStore:i}},data(){return{passwordType:"password",nickIcon:this.iconsStore.questionMarkIcon,passwordIcon:this.iconsStore.questionMarkIcon,nickInput:"",passwordInput:"",nickClass:"",passwordClass:"",errors:{nickError:"",passwordError:""}}},methods:{async submitForm(){if(this.nickInput.length<3&&this.passwordInput.length<3)return;const t={nick:this.nickInput,password:this.passwordInput};if(await this.accountStore.getData(t).then((async t=>{await this.alertsStore.showNotification(t.duration,t.status,t.message),"success"===t.status&&(this.nickInput="",this.passwordInput="",this.loginStore.isShow=!1,this.loginStore.isButtonDisabled=!0,this.accountStore.saveCookies(t.content._id))})).catch((t=>console.log(t))),this.preferenceStore.preferences[0].state){const t=new Audio(wt);t.volume=.5,await t.play()}},formVerification(t){return t.length>=3?{icon:this.iconsStore.successIcon,status:"success",error:""}:t.length>0&&t.length<3?{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Minimum 3 znaki!"}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}},buttonVerification(){this.nickInput.length>=3&&this.passwordInput.length>=3?this.loginStore.isButtonDisabled=!1:this.loginStore.isButtonDisabled=!0}},watch:{nickInput(){this.buttonVerification();const t=this.formVerification(this.nickInput);this.nickIcon=t.icon,this.nickClass=t.status,this.errors.nickError=t.error},passwordInput(){this.buttonVerification();const t=this.formVerification(this.passwordInput);this.passwordIcon=t.icon,this.passwordClass=t.status,this.errors.passwordError=t.error}}};const Xt=(0,r.Z)($t,[["render",Qt],["__scopeId","data-v-636ce146"]]);var te=Xt;const ee={class:"formBox"},se={id:"formSignupSection"},ne={class:"formInputsContainer"},ie={class:"formInput formItem"},oe={for:"nickInput"},re={class:"formError"},ae={class:"helpBox",title:"Wpisz swój nick"},ce={class:"formInput formItem"},le={for:"passwordInput"},ue={class:"formError"},de=["type"],pe={class:"helpBox",title:"Wpisz swoje hasło"},he={class:"formInput formItem"},me={for:"codeInput"},fe={class:"formError"},ge={class:"helpBox",title:"Wpisz kod"},ve=["disabled"];function we(t,e,s,o,r,a){const c=(0,i.up)("FormButton"),l=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("div",ee,[(0,i._)("div",se,[(0,i.Wm)(c),(0,i._)("div",ne,[(0,i._)("div",ie,[(0,i._)("label",oe,[(0,i.Uk)(" Login "),(0,i._)("span",re,(0,k.zw)(r.errors.nickError),1)]),(0,i._)("div",{class:(0,k.C_)([r.nickClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"nickInput",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.nickInput=t),maxlength:"10",autocomplete:"off"},null,512),[[n.nr,r.nickInput]]),(0,i._)("div",ae,[(0,i.Wm)(l,{class:(0,k.C_)(r.nickClass),type:"mdi",path:r.nickIcon},null,8,["class","path"])])],2)]),(0,i._)("div",ce,[(0,i._)("label",le,[(0,i.Uk)(" Hasło "),(0,i._)("span",ue,(0,k.zw)(r.errors.passwordError),1)]),(0,i._)("div",{class:(0,k.C_)([r.passwordClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"passwordInput",type:r.passwordType,"onUpdate:modelValue":e[1]||(e[1]=t=>r.passwordInput=t),maxlength:"20",autocomplete:"off"},null,8,de),[[n.YZ,r.passwordInput]]),(0,i._)("div",pe,[(0,i.Wm)(l,{onMouseenter:e[2]||(e[2]=t=>r.passwordType="text"),onMouseleave:e[3]||(e[3]=t=>r.passwordType="password"),class:(0,k.C_)(r.passwordClass),type:"mdi",path:r.passwordIcon},null,8,["class","path"])])],2)]),(0,i._)("div",he,[(0,i._)("label",me,[(0,i.Uk)(" Kod "),(0,i._)("span",fe,(0,k.zw)(r.errors.codeError),1)]),(0,i._)("div",{class:(0,k.C_)([r.codeClass,"border"])},[(0,i.wy)((0,i._)("input",{name:"codeInput",type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>r.codeInput=t),maxlength:"10",autocomplete:"off"},null,512),[[n.nr,r.codeInput]]),(0,i._)("div",ge,[(0,i.Wm)(l,{class:(0,k.C_)(r.codeClass),type:"mdi",path:r.codeIcon},null,8,["class","path"])])],2)])])]),(0,i._)("button",{onClick:e[5]||(e[5]=t=>a.submitForm()),disabled:o.loginStore.isButtonDisabled,id:"submitBtn"},(0,k.zw)(o.loginStore.formText),9,ve)])}var ke={name:"SigupSection",components:{svgIcon:C.Z,FormButton:Kt},setup(){const t=(0,x.Q)(),e=T(),s=(0,p.c)(),n=(0,h.J)(),i=(0,kt.x)();return{iconsStore:t,loginStore:e,accountStore:s,preferenceStore:n,alertsStore:i}},data(){return{passwordType:"password",nickIcon:this.iconsStore.questionMarkIcon,passwordIcon:this.iconsStore.questionMarkIcon,codeIcon:this.iconsStore.questionMarkIcon,nickInput:"",passwordInput:"",codeInput:"",nickClass:"",passwordClass:"",codeClass:"",errors:{nickError:"",passwordError:"",codeError:""}}},methods:{async submitForm(){if(this.nickInput.length<3&&this.passwordInput.length<3&&10!=this.codeInput.length)return;const t={nick:this.nickInput,password:this.passwordInput,code:this.codeInput};if(await this.accountStore.saveData(t).then((async t=>{await this.alertsStore.showNotification(t.duration,t.status,t.message),"success"===t.status&&(this.nickInput="",this.passwordInput="",this.codeInput="",this.loginStore.isShow=!1,this.loginStore.isButtonDisabled=!0,this.accountStore.saveCookies(t.content._id))})).catch((t=>console.log(t))),this.preferenceStore.preferences[0].state){const t=new Audio(wt);t.volume=.5,await t.play()}},formVerification(t){return t.length>=3?{icon:this.iconsStore.successIcon,status:"success",error:""}:0===t.length?{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Minimum 3 znaki!"}},codeVerification(t){return 10===t.length?{icon:this.iconsStore.successIcon,status:"success",error:""}:0===t.length?{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Puste pole!"}:{icon:this.iconsStore.alertCircleIcon,status:"alert",error:"Wymagane 10 znaków!"}},buttonVerification(){this.nickInput.length>=3&&this.passwordInput.length>=3&&10==this.codeInput.length?this.loginStore.isButtonDisabled=!1:this.loginStore.isButtonDisabled=!0}},watch:{nickInput(){this.buttonVerification();const t=this.formVerification(this.nickInput);this.nickIcon=t.icon,this.nickClass=t.status,this.errors.nickError=t.error},passwordInput(){this.buttonVerification();const t=this.formVerification(this.passwordInput);this.passwordIcon=t.icon,this.passwordClass=t.status,this.errors.passwordError=t.error},codeInput(){this.buttonVerification();const t=this.codeVerification(this.codeInput);this.codeIcon=t.icon,this.codeClass=t.status,this.errors.codeError=t.error}}};const Ie=(0,r.Z)(ke,[["render",we],["__scopeId","data-v-90308ff4"]]);var ye=Ie,Se={name:"OverlayForm",components:{LoginSection:te,SigupSection:ye},setup(){const t=T();return{loginStore:t}},methods:{showForm(){this.loginStore.isShow=!1}}};const be=(0,r.Z)(Se,[["render",Ot]]);var _e=be,Ce={name:"HomeView",components:{HeaderLogo:w.Z,HomeButtons:L,MainSection:xt,Notification:Dt.Z,UserCard:Tt.Z,OverlayForm:_e}};const xe=(0,r.Z)(Ce,[["render",v],["__scopeId","data-v-cb591b56"]]);var De=xe;const Te=[{path:"/",name:"home",component:De},{path:"/dashboard",name:"dashboard",meta:{requiresAuth:!0},component:()=>s.e(362).then(s.bind(s,3027))},{path:"/dashboard/uzytkownicy",name:"users",meta:{requiresAuth:!0},component:()=>s.e(530).then(s.bind(s,9279))},{path:"/dashboard/linki",name:"links",meta:{requiresAuth:!0},component:()=>s.e(542).then(s.bind(s,3273))},{path:"/dashboard/zadania",name:"tasks",meta:{requiresAuth:!0},component:()=>s.e(351).then(s.bind(s,5983))},{path:"/dashboard/zadania/:id",name:"taskDetails",meta:{requiresAuth:!0},component:()=>s.e(403).then(s.bind(s,1217))},{path:"/dashboard/profil",name:"profile",meta:{requiresAuth:!0},component:()=>s.e(97).then(s.bind(s,2523))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>s.e(187).then(s.bind(s,7135))}],Ae=(0,u.p7)({history:(0,u.r5)(),routes:Te});Ae.beforeEach((async(t,e,s)=>{const n=(0,p.c)(),i=(0,h.J)();d.Z.get("logged")&&await n.getCookies("getAccount"),d.Z.get("notificationSound")&&i.setPreference("notificationSound",d.Z.get("notificationSound"),!1),d.Z.get("animatedHeader")&&i.setPreference("animatedHeader",d.Z.get("notificationSound"),!1),t.matched.some((t=>t.meta.requiresAuth))?d.Z.get("logged")&&n.isLogged?s():s({name:"home"}):s()}));var Ze=Ae;(0,n.ri)(l).use((0,D.WB)()).use(Ze).mount("#app")},845:function(t,e,s){s.d(e,{c:function(){return r}});s(8674);var n=s(9876),i=s(1955),o=s(8332);const r=(0,n.Q_)("accountStore",{state:()=>({isLogged:!1,userID:0,userNickname:"",userRoles:[],userCreatedAt:""}),actions:{async getData(t){const e=await o.Z.getUser(t);if("success"===e.status){this.isLogged=!0,this.userID=e.content._id,this.userNickname=e.content.nick,this.userRoles=e.content.roles;const t=new Date(e.content.createdAt);let s=t.getDate(),n=t.getMonth()+1,i=t.getFullYear();s<10&&(s="0"+s),n<10&&(n="0"+n),this.userCreatedAt="".concat(s,".").concat(n,".").concat(i)}return e},async saveData(t){const e=await o.Z.newUser(t);if("success"===e.status){this.isLogged=!0,this.userID=e.content._id,this.userNickname=e.content.nick,this.userRoles=e.content.roles;const t=new Date(e.content.createdAt);let s=t.getDate(),n=t.getMonth()+1,i=t.getFullYear();s<10&&(s="0"+s),n<10&&(n="0"+n),this.userCreatedAt="".concat(s,".").concat(n,".").concat(i)}return e},saveCookies(t){i.Z.set("logged",t,{expires:365})},async getCookies(){const t=i.Z.get("logged");if(t){const e=await o.Z.getUserNV({user:t});if("success"===e.status){this.isLogged=!0,this.userID=e.content._id,this.userNickname=e.content.nick,this.userRoles=e.content.roles;const t=new Date(e.content.createdAt);let s=t.getDate(),n=t.getMonth()+1,i=t.getFullYear();s<10&&(s="0"+s),n<10&&(n="0"+n),this.userCreatedAt="".concat(s,".").concat(n,".").concat(i)}}},deleteCookies(){this.$reset(),i.Z.remove("logged")}}})},5229:function(t,e,s){s.d(e,{x:function(){return o}});var n=s(9876),i=s(5317);const o=(0,n.Q_)("alertsStore",{state:()=>({alerts:{isDisplay:!1,styles:{top:"-75px"},notificationIcon:"",notificationClass:"",notificationMsg:"",icons:{successIcon:i.k6A,alertCircleIcon:i._gM,alertTriangleIcon:i.O8k,alertOctagonIcon:i.wXx}}}),actions:{showNotification(t,e,s){this.alerts.isDisplay=!0,t*=1e3,setTimeout((()=>{this.alerts.notificationIcon="success"===e?this.alerts.icons.successIcon:"info"===e?this.alerts.icons.alertCircleIcon:"warning"===e?this.alerts.icons.alertTriangleIcon:this.alerts.icons.alertOctagonIcon,this.alerts.styles.top="25px",this.alerts.notificationClass=e,this.alerts.notificationMsg=s}),1),setTimeout((()=>{this.alerts.styles.top="-75px"}),t),setTimeout((()=>{this.alerts.isDisplay=!1}),t+1e3)}}})},5454:function(t,e,s){s.d(e,{F:function(){return o}});s(8674),s(6699),s(2023);var n=s(9876),i=s(8332);const o=(0,n.Q_)("generalStore",{state:()=>({activeTaskElement:"home",statistics:{users:void 0,links:void 0,tasks:void 0,tasksStatistics:{general:void 0,available:void 0,inProgress:void 0,finished:void 0,cancelled:void 0,important:void 0}}}),actions:{async getStatistics(){const t=await i.Z.getAllUsers();this.statistics.users=t.length;const e=await i.Z.getAllLinks();this.statistics.links=e.length;const s=await i.Z.getAllTasks();this.statistics.tasks=s.length},async getTasksStatistics(){const t=await i.Z.getAllTasks();this.statistics.tasksStatistics.general=t.length;const e=await t.filter((t=>t.status.includes("available")));this.statistics.tasksStatistics.available=e.length;const s=await t.filter((t=>t.status.includes("inProgress")));this.statistics.tasksStatistics.inProgress=s.length;const n=await t.filter((t=>t.status.includes("finished")));this.statistics.tasksStatistics.finished=n.length;const o=await t.filter((t=>t.status.includes("cancelled")));this.statistics.tasksStatistics.cancelled=o.length;const r=await t.filter((t=>!0===t.important));this.statistics.tasksStatistics.important=r.length},async sendVideo(t){return await i.Z.postLink(t)},async addTask(t){return await i.Z.postTask(t)}}})},4409:function(t,e,s){s.d(e,{Q:function(){return o}});var n=s(9876),i=s(5317);const o=(0,n.Q_)("iconsStore",{state:()=>({successIcon:i.k6A,alertCircleIcon:i._gM,alertTriangleIcon:i.O8k,alertOctagonIcon:i.wXx,questionMarkIcon:i.Gir,mdiChevronLeft:i.gAv,mdiChevronRight:i.zrb,mdiYoutube:i.Vmg,mdiLogin:i.YoP,mdiLogout:i.GyE,mdiAccountOutline:i.jiR,mdiBellOutline:i.QWc,mdiHomeOutline:i.C1V,mdiViewDashboardOutline:i.V7Q,mdiAccountMultipleOutline:i.qCs,mdiLinkVariant:i.$jG,mdiCalendarMonthOutline:i.zOX,mdiOpenInNew:i.fOx,mdiMovieOutline:i.uLw,mdiPencilOutline:i.I$6,mdiImageRefreshOutline:i.gE1,mdiImagePlusOutline:i.Uqx,mdiMagnify:i.I0v,mdiTrashCanOutline:i.j43,mdiResizeBottomRight:i.o2K,mdiPlusCircleOutline:i.jxF,mdiDotsHorizontalCircleOutline:i.Dzj,mdiRecordCircleOutline:i.U3w,mdiStar:i.Vip,mdiNotePlusOutline:i.U2U,mdiClose:i.r5M,mdiCloseCircleOutline:i.DNZ,mdiFilterOutline:i.Qbm,mdiFilterOffOutline:i.RCu})})},9735:function(t,e,s){s.d(e,{J:function(){return r}});var n=s(9876),i=s(1955),o=s(5317);const r=(0,n.Q_)("preferenceStore",{state:()=>({preferences:[{name:"notificationSound",icon:o.p_Q,label:"Dźwięk powiadomień",state:!0},{name:"animatedHeader",icon:o.BhQ,label:"Animowane logo",state:!0}]}),actions:{getPreference(t){return i.Z.get(t)},setPreference(t,e,s){const n=this.preferences.find((e=>e.name===t));let o=n.state;void 0===e?(o=!o,e=o):o=e,"true"==o?o=!0:"false"==o&&(o=!1),n.state=o,s&&i.Z.set(t,e,{expires:365})}}})},1434:function(t,e,s){s.d(e,{Z:function(){return p}});var n=s(6252),i=s(3577);const o={id:"iconContainer"};function r(t,e,s,r,a,c){const l=(0,n.up)("svg-icon");return r.alertsStore.alerts.isDisplay?((0,n.wg)(),(0,n.iD)("div",{key:0,id:"notification",style:(0,i.j5)(r.alertsStore.alerts.styles),class:(0,i.C_)(r.alertsStore.alerts.notificationClass)},[(0,n._)("div",o,[(0,n.Wm)(l,{width:"30",height:"30",type:"mdi",path:r.alertsStore.alerts.notificationIcon},null,8,["path"])]),(0,n._)("h1",null,(0,i.zw)(r.alertsStore.alerts.notificationMsg),1)],6)):(0,n.kq)("",!0)}var a=s(2273),c=s(5229),l={name:"NotificationContainer",components:{svgIcon:a.Z},setup(){const t=(0,c.x)();return{alertsStore:t}},data(){return{isDisplay:!1,styles:{top:"-75px"},notificationIcon:"",notificationClass:"",notificationMsg:""}}},u=s(3744);const d=(0,u.Z)(l,[["render",r],["__scopeId","data-v-609b03ca"]]);var p=d},3148:function(t,e,s){s.d(e,{Z:function(){return b}});var n=s(6252),i=s(3577),o=s(6859);const r=t=>((0,n.dD)("data-v-76f320b5"),t=t(),(0,n.Cn)(),t),a=r((()=>(0,n._)("img",{class:"staticImg",src:o,alt:"User Avatar"},null,-1))),c=[a],l={id:"userInfo"},u={id:"userNickname"},d={id:"userRole"},p=r((()=>(0,n._)("hr",null,null,-1)));function h(t,e,s,o,r,a){const h=(0,n.up)("svg-icon"),m=(0,n.up)("router-link");return this.accountStore.isLogged?((0,n.wg)(),(0,n.iD)("div",{key:0,id:"userCard",style:(0,i.j5)(r.userCardStyle)},[(0,n._)("div",{onClick:e[0]||(e[0]=t=>0==r.cardState?r.cardState=1:r.cardState=0),id:"userImage",class:"pointer"},c),(0,n._)("div",{style:(0,i.j5)(r.userDetails),id:"userDetails"},[(0,n.Wm)(h,{onClick:e[1]||(e[1]=t=>1==r.cardState?r.cardState=2:r.cardState=1),id:"userArrow",class:"pointer",width:"30px",height:"30px",type:"mdi",style:(0,i.j5)(r.userArrow),path:o.iconsStore.mdiChevronLeft},null,8,["style","path"]),(0,n._)("div",l,[(0,n._)("span",u,(0,i.zw)(o.accountStore.userNickname),1),(0,n._)("span",d,(0,i.zw)(o.accountStore.userRoles[0]),1)])],4),(0,n._)("div",{style:(0,i.j5)(r.userOptions),id:"userOptions"},[(0,n.Wm)(h,{onClick:e[2]||(e[2]=t=>a.logout()),class:"pointer",type:"mdi",style:{"--r":"180deg"},path:o.iconsStore.mdiLogout},null,8,["path"]),p,(0,n.Wm)(m,{to:"/dashboard/profil"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{type:"mdi",path:o.iconsStore.mdiAccountOutline},null,8,["path"])])),_:1})],4)],4)):(0,n.kq)("",!0)}s(8674);var m=s(2273),f=s(7600),g=s(5229),v=s(845),w=s(9735),k=s(4409),I={name:"UserCard",components:{svgIcon:m.Z},setup(){const t=(0,v.c)(),e=(0,w.J)(),s=(0,g.x)(),n=(0,k.Q)();return{accountStore:t,preferenceStore:e,alertsStore:s,iconsStore:n}},data(){return{cardState:0,userCardStyle:{borderRadius:"25px"},userDetails:{visibility:"hidden",maxWidth:"0px",marginRight:"0px"},userArrow:{"--r":"0deg"},userOptions:{visibility:"hidden",maxWidth:"0px",paddingLeft:"0px"}}},methods:{async logout(){if(this.cardState=0,this.accountStore.deleteCookies(),this.$router.push("/"),await this.alertsStore.showNotification(4,"success","Pomyślnie wylogowano"),this.preferenceStore.preferences[0].state){const t=new Audio(f);t.volume=.5,await t.play()}}},watch:{cardState(){1==this.cardState?(this.userCardStyle={borderRadius:"10px 25px 25px 10px"},this.userDetails={visibility:"visible",maxWidth:"150px",marginRight:"20px"},this.userArrow={"--r":"0deg"},this.userOptions={visibility:"hidden",maxWidth:"0px",paddingLeft:"0px"}):2==this.cardState?(this.userArrow={"--r":"180deg"},this.userOptions={visibility:"visible",maxWidth:"250px",paddingLeft:"10px"}):(this.userCardStyle={borderRadius:"25px"},this.userDetails={visibility:"hidden",maxWidth:"0px",marginRight:"0px"},this.userArrow={"--r":"0deg"},this.userOptions={visibility:"hidden",maxWidth:"0px",paddingLeft:"0px"})}}},y=s(3744);const S=(0,y.Z)(I,[["render",h],["__scopeId","data-v-76f320b5"]]);var b=S},3556:function(t,e,s){s.d(e,{Z:function(){return w}});var n=s(6252),i=s(3577);const o=t=>((0,n.dD)("data-v-d0b9aa04"),t=t(),(0,n.Cn)(),t),r={id:"headerLogo"},a=o((()=>(0,n._)("h1",null,"AKANG",-1))),c=o((()=>(0,n._)("hr",null,null,-1))),l={key:0},u={class:"typed-text"},d=o((()=>(0,n._)("span",{class:"blinking-cursor"},"|",-1))),p={key:1};function h(t,e,s,o,h,m){return(0,n.wg)(),(0,n.iD)("header",r,[a,c,o.preferenceStore.preferences[1].state?((0,n.wg)(),(0,n.iD)("p",l,[(0,n.Uk)(" The Best "),(0,n._)("span",u,(0,i.zw)(h.typeValue),1),d])):((0,n.wg)(),(0,n.iD)("p",p,"The Best Site In The World"))])}var m=s(9735),f={name:"HeaderLogo",setup(){const t=(0,m.J)();return{preferenceStore:t}},data(){return{typeValue:"",typeStatus:!1,displayTextArray:["Site In The World","Idea","Developer","Friends","Videos"],typingSpeed:100,erasingSpeed:100,newTextDelay:2e3,displayTextArrayIndex:0,charIndex:0}},methods:{typeText(){this.charIndex<this.displayTextArray[this.displayTextArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.displayTextArray[this.displayTextArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.displayTextArrayIndex+=1,this.displayTextArrayIndex>=this.displayTextArray.length&&(this.displayTextArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}},g=s(3744);const v=(0,g.Z)(f,[["render",h],["__scopeId","data-v-d0b9aa04"]]);var w=v},7600:function(t,e,s){t.exports=s.p+"media/popup.624b8218.wav"},6859:function(t,e,s){t.exports=s.p+"img/userAvatar.b27ee444.png"}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,o){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+{97:"Profile",187:"NotFound",351:"Tasks",362:"Dashboard",403:"TaskDetails",530:"Users",542:"Links"}[t]+"."+{97:"790e1ed0",187:"4230310a",351:"69fa40b1",362:"4fe4798e",403:"72531a1c",530:"466496ef",542:"2595a5f4"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+{97:"Profile",187:"NotFound",351:"Tasks",362:"Dashboard",403:"TaskDetails",530:"Users",542:"Links"}[t]+"."+{97:"1e3bc887",187:"b9fb8128",351:"bb0f1762",362:"401b7496",403:"f1eb01b1",530:"a5919daa",542:"eef43a85"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="akang:";s.l=function(n,i,o,r){if(t[n])t[n].push(i);else{var a,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",e+o),a.src=n),t[n]=[i];var p=function(e,s){a.onerror=a.onload=null,clearTimeout(h);var i=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(s)})),e)return e(s)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t=function(t,e,s,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)s();else{var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var i=s[n],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){i=r[n],o=i.getAttribute("data-href");if(o===t||o===e)return i}},n=function(n){return new Promise((function(i,o){var r=s.miniCssF(n),a=s.p+r;if(e(r,a))return i();t(n,a,i,o)}))},i={143:0};s.f.miniCss=function(t,e){var s={97:1,187:1,351:1,362:1,403:1,530:1,542:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,n){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(s,n){i=t[e]=[s,n]}));n.push(i[2]=o);var r=s.p+s.u(e),a=new Error,c=function(n){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,i[1](a)}};s.l(r,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(c)var u=c(s)}for(e&&e(n);l<r.length;l++)o=r[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},n=self["webpackChunkakang"]=self["webpackChunkakang"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5637)}));n=s.O(n)})();
//# sourceMappingURL=app.d9fcf69f.js.map