(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{71889:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creators",function(){return t(54150)}])},54150:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(47568),s=t(14924),l=t(26042),a=t(69396),i=t(97582),c=t(85893),o=t(67294),u=t(41664),d=t.n(u),f=t(60851),h=t(65033),x=t(28256),m=t(58385),p=t(55509),v=t(45638),j=t(87122),b=t(55914),g=t(8486);function w(){var e=(0,o.useState)([]),r=e[0],t=e[1],u=(0,o.useState)(!0),w=u[0],N=u[1],_=(0,o.useState)({}),k=_[0],C=_[1],Z=(0,m.aC)(),y=Z.atomicAuthUser,E=Z.atomicLoadingSession,S=(0,x.T)(),T=S.handleToast,B=S.openLoginModal,I=(0,o.useState)({}),X=I[0],L=I[1],A=(0,o.useCallback)(function(){var e=(0,n.Z)((function(e){var r,t;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:if(!y)return B(),T(g.Ex.needToBeLoggedIn,"error"),[2];n.label=1;case 1:return n.trys.push([1,4,,5]),L((function(e){return(0,l.Z)({},e)})),C((function(r){return(0,a.Z)((0,l.Z)({},r),(0,s.Z)({},e,!0))})),t=[{creator_profile_id:e,email:y.email}],[4,y.getIdToken()];case 2:return[4,p.AL.apply(void 0,t.concat(n.sent()))];case 3:return r=n.sent(),L((function(t){return(0,a.Z)((0,l.Z)({},t),(0,s.Z)({},e,r))})),C((function(r){return(0,a.Z)((0,l.Z)({},r),(0,s.Z)({},e,!1))})),[3,5];case 4:return n.sent(),T(g.Ex.failedOnSubscribe,"error"),[3,5];case 5:return[2]}}))}));return function(r){return e.apply(this,arguments)}}(),[y,T,B]),O=(0,o.useCallback)((0,n.Z)((function(){var e,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return N(!0),y?[4,y.getIdToken()]:[3,2];case 1:return r=n.sent(),[3,3];case 2:r=void 0,n.label=3;case 3:return e=r,(0,p.Bd)(y?{email:y.email}:void 0,e).then((function(e){var r={};e.forEach((function(e){var t=e.creator_profile_id;e.subscribed&&(r[t]=!0)})),L(r),t(e),N(!1)})).catch((function(){return N(!1)})),[2]}}))})),[y]);return(0,o.useEffect)((function(){E||(j.c.emitEvent({eventName:"Access",eventContent:{event_category:"creator_list",event_label:"Tentando carregar lista de criadores"}}),O())}),[E,O]),w?(0,c.jsx)(b.Kp,{fullHeight:!0,showBanner:!0,context:"user",navContext:"Criadores",title:"Criadores",children:(0,c.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,c.jsx)(f.Zi,{size:128})})}):(0,c.jsx)(b.Kp,{showBanner:!0,context:"user",navContext:"Criadores",title:"Criadores",children:(0,c.jsxs)("div",{className:"flex flex-col gap-5 px-3 xl1:px-0 w-full h-full",children:[(0,c.jsx)("p",{className:"text-20 font-bold text-white",children:"Criadores"}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-y-10 justify-center lg:justify-start items-center pb-20 w-full gap-[1.855rem]",children:[(0,c.jsxs)("div",{className:"hidden flex-col gap-2 justify-end items-center w-[8.87rem] h-[14.25rem]",children:[(0,c.jsx)(d(),{href:"https://nv99.com.br/ad/profile-sejacriador-nv99-partner-1",children:(0,c.jsx)("a",{target:"_blank",className:"relative flex-shrink-0 w-[8.75rem] h-[8.75rem]",children:(0,c.jsx)("img",{alt:"Seja um Criador",title:"Seja um Criador",src:"https://cdn.flowpodcast.com.br/assets/images/profile-criador-NV99.png",className:"object-fill absolute top-0 left-0 w-full h-full rounded-full"})})}),(0,c.jsxs)("div",{className:"flex flex-col gap-3 items-center w-full",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-1 items-center w-full",children:[(0,c.jsx)(d(),{href:"https://nv99.com.br/ad/profile-sejacriador-nv99-partner-1",children:(0,c.jsx)("a",{target:"_blank",className:"text-14 font-semibold text-white",children:"Seja um Criador"})}),(0,c.jsx)("p",{className:"text-12 font-normal text-ui-lightest",children:"Preencha o formul\xe1rio"})]}),(0,c.jsx)(d(),{href:"https://nv99.com.br/ad/profile-sejacriador-nv99-partner-1",children:(0,c.jsx)("a",{target:"_blank",className:"contents",children:(0,c.jsx)(h.X4,{className:"w-full",color:"baseNoBorder",children:"Inscreva-se"})})})]})]}),r.sort((function(e,r){var t=e.subscribers;return r.subscribers-t})).map((function(e){var r=e.icon,t=e.label,n=e.name,s=e.subscribers,l=e.creator_profile_id;return(0,c.jsxs)("div",{className:"flex flex-col gap-2 justify-end items-center w-[8.87rem] h-[18.25rem]",children:[(0,c.jsx)(d(),{href:"/".concat(n),children:(0,c.jsx)("a",{className:"relative flex-shrink-0 w-[8.87rem] h-[8.75rem]",children:(0,c.jsx)("img",{alt:t,title:t,src:r,className:"object-fill absolute top-0 left-0 w-full h-full rounded-full"})})}),(0,c.jsxs)("div",{className:"flex flex-col gap-3 items-center w-full",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-1 items-center w-full",children:[(0,c.jsx)(d(),{href:"/".concat(n),children:(0,c.jsx)("a",{className:"text-14 font-semibold text-white",children:t})}),(0,c.jsxs)("p",{title:s.toString(),className:"text-14 font-normal text-ui-lightest",children:[s>=1e6?"".concat((0,v.v)(s)," de"):(0,v.v)(s)," inscrito",(0===s||s>1)&&"s"]})]}),(0,c.jsx)(h.X4,{disabled:{status:!!(null===k||void 0===k?void 0:k[l])&&"disabled-light"},onClick:function(){return A(l)},color:(null===X||void 0===X?void 0:X[l])?"baseNoBorder":"darkest-plus",className:"w-full",children:(null===k||void 0===k?void 0:k[l])?(0,c.jsx)(f.tx,{color:"white",size:14}):(0,c.jsx)(c.Fragment,{children:(null===X||void 0===X?void 0:X[l])?"Inscrito":"Inscreva-se"})}),(0,c.jsx)(d(),{href:"/ranking/".concat(n),children:(0,c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"contents",children:(0,c.jsx)(h.X4,{className:"w-full",color:"darkest-plus",children:"Ranking"})})})]})]})}))]})]})})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=71889,e(e.s=r);var r}));var r=e.O();_N_E=r}]);