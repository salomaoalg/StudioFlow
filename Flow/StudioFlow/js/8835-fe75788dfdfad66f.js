"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8835],{77010:function(e,t,n){n.d(t,{j:function(){return f}});var a=n(26042),r=n(69396),l=n(85893),o=n(67294),s=n(47516),i=n(89583),c=n(79352),u=n(65033),d=n(99490),m=n(64957),h=n(83122);function x(e){return"#".concat(e.replace(/[^a-zA-Z]+/g,"")," {\n\r\n\r\n\r\n\r\n\r\n\r}")}function f(e){var t;return(0,l.jsx)(g,(0,a.Z)({modifiersAsState:{hasBlur:e.modifiers.hasBlur,setBlur:function(t){return e.setModifiers(t)},experimentalStyle:null!==(t=e.modifiers.experimentalStyle)&&void 0!==t?t:x(e.id),setExperimentalStyle:function(t){return e.setModifiers(t)}}},e))}function p(e){var t=e.cancelStyle,n=e.saveStyle;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.X4,{onClick:t,color:"base",children:"Cancelar"}),(0,l.jsx)(u.X4,{onClick:n,color:"confirmation",children:"Salvar"})]})}function g(e){var t=e.id,n=e.modifiersAsState,u=e.fromStudio,f=void 0!==u&&u,g=(e.isStore,e.initialTitle),b=e.openEditModal,v=e.removeExtension,j=e.style,y=e.children,w=e.state,k=void 0===w?0:w,C=e.titleContainer,N=e.setModifiers,S=e.className,_=void 0===S?"":S,M=e.hideContainer,B=void 0!==M&&M,P=e.AppendComponent,T=void 0===P?(0,l.jsx)(l.Fragment,{}):P,E=(0,o.useState)(g),R=E[0],D=E[1],A=(0,o.useRef)(),Z=(0,o.useState)(!1),O=Z[0],I=Z[1],F=(0,o.useState)(!1),z=F[0],q=F[1],L=n.hasBlur,W=n.setBlur,X=n.experimentalStyle,U=n.setExperimentalStyle,$=(0,o.useState)(null!==X&&void 0!==X?X:x(t)),V=$[0],H=$[1],K=(0,o.useCallback)((function(){U((function(e){return(0,r.Z)((0,a.Z)({},e),{experimentalStyle:V})}))}),[V,U]);return(0,l.jsxs)(l.Fragment,{children:[z&&(0,l.jsx)(m.n,{open:z,setOpen:q,footerContent:(0,l.jsx)(p,{saveStyle:K,cancelStyle:function(){return q(!1)}}),children:(0,l.jsxs)(h.l,{placeholder:void 0,ref:A,onSubmit:function(){return null},className:"flex flex-col gap-3 justify-center p-3 w-full h-full",children:[(0,l.jsx)("p",{children:"Insira um estilo (CSS) abaixo:"}),(0,l.jsx)(d.UR,{value:V,onChange:function(e){return H(e.target.value)},full:!0,label:"Estilo",noLayoutShift:!0,hideErrorMargin:!0,rows:10,name:"style",multiline:!0})]})}),(0,l.jsxs)("div",{id:t.replace(/[^a-zA-Z]+/g,""),style:{backgroundColor:B?"transparent":j.background[k]},className:"flex invisibleScroll select-none relative flex-col gap-4 p-4 text-ui-white rounded ".concat(L?"backdrop-blur-[10px]":""," ").concat(B?"":"max-w-[62.5rem]"," ").concat(_),children:[(0,l.jsx)("style",{children:X}),f&&(0,l.jsxs)("div",{className:"flex absolute top-0 right-0 gap-2 py-2 px-3 bg-ui-darkest-plus rounded-tr",children:[T,(0,l.jsx)("div",{className:"flex justify-center items-center w-8 h-8 bg-ui-dark hover:bg-ui-darker rounded cursor-pointer",onClick:function(e){return e.altKey?I(!0):b()},children:(0,l.jsx)(i.tU3,{className:"w-4 h-4 text-ui-white"})}),O&&(0,l.jsx)("div",{className:"flex justify-center items-center w-8 h-8 bg-ui-dark hover:bg-ui-darker rounded cursor-pointer",onClick:function(){return q((function(e){return!e}))},children:(0,l.jsx)(s.wEI,{})}),(0,l.jsx)("div",{title:"Ativa o efeito de emba\xe7ar (tente usar com uma cor transparente selecionada)",className:"flex justify-center items-center w-8 h-8 bg-ui-dark hover:bg-ui-darker rounded cursor-pointer",onClick:function(){return W((function(e){return(0,r.Z)((0,a.Z)({},e),{hasBlur:!e.hasBlur})}))},children:L?(0,l.jsx)(c.eDM,{className:"w-4 h-4 text-ui-white"}):(0,l.jsx)(c.HoW,{className:"w-4 h-4 text-ui-white"})}),(0,l.jsx)("div",{onClick:function(){return v()},className:"flex justify-center items-center w-8 h-8 bg-ui-dark hover:bg-ui-darker rounded cursor-pointer",children:(0,l.jsx)(i.AMf,{className:"w-4 h-4 text-ui-white"})})]}),!B&&(0,l.jsx)(d.LA,{fontColor:j.title[k],readOnly:!f,name:"extensionTitle",onConfirm:function(e){return N((function(t){return(0,r.Z)((0,a.Z)({},t),{extension_title:e})}))},fontWeight:700,maxLength:25,value:R,onChange:function(e){return D(e.target.value)},children:function(e){var t=e.value,n=e.setEditing,a=(0,l.jsx)("span",{onClick:function(){return f&&n(!0)},className:"text-14 font-bold ".concat(f?"hover:text-link cursor-pointer":""),style:{color:j.title[k]},children:t});return C?C({TitleComponent:a}):a}}),y]})]})}},38819:function(e,t,n){n.d(t,{x:function(){return ae}});var a=n(47568),r=n(26042),l=n(69396),o=n(97582),s=n(85893),i=n(67294),c=n(86893),u=n(11163),d=n(41125),m=n(55509),h=n(71454),x=n(29815),f=n(89583),p=n(65033),g=n(40330),b=n(64957),v=n(78519);function j(e){var t=e.handleClose,n=e.handleSave;return(0,s.jsxs)("div",{className:"flex gap-1 justify-end bg-ui-dark",children:[(0,s.jsx)(p.X4,{color:"dark",onClick:t,children:"Cancelar"}),(0,s.jsx)(p.X4,{color:"confirmation",onClick:n,children:"Confirmar"})]})}var y=function(e){var t=e.open,n=e.setOpen,a=e.style,r=e.setStyle,l=(0,i.useState)(a),o=l[0],c=l[1],u=(0,i.useState)(a.title),d=u[0],m=u[1],h=(0,i.useState)(a.background),p=h[0],y=h[1],w=(0,i.useState)(a.planCardBackground),k=w[0],C=w[1],N=(0,i.useState)(a.planData),S=N[0],_=N[1],M=(0,i.useState)(a.beMemberButton),B=M[0],P=M[1],T=(0,i.useState)(a.rewardsButton),E=T[0],R=T[1],D=(0,i.useCallback)((function(e,t,n){e((function(e){var a=(0,x.Z)(e);return a[n]=t,a}))}),[]),A=(0,i.useCallback)((function(e,t){D(_,e,t)}),[D]),Z=(0,i.useCallback)((function(e,t){D(P,e,t)}),[D]),O=(0,i.useCallback)((function(e,t){D(R,e,t)}),[D]),I=(0,i.useCallback)((function(e,t){D(y,e,t)}),[D]),F=(0,i.useCallback)((function(e,t){D(m,e,t)}),[D]);return(0,i.useEffect)((function(){c({title:d,background:p,planCardBackground:k,planData:S,beMemberButton:B,rewardsButton:E})}),[d,p,k,S,B,E]),(0,s.jsx)(b.n,{open:t,setOpen:n,heading:"Editar extens\xe3o",minHeightInRem:34.875,maxHeightInRem:34.875,maxWidthInRem:62.5,footerContent:(0,s.jsx)(j,{handleClose:function(){return n(!1)},handleSave:function(){r(o),n(!1)}}),children:(0,s.jsxs)("div",{className:"flex flex-col gap-7 select-none",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)("span",{className:"text-14 font-bold text-ui-white",children:"Com planos"}),(0,s.jsxs)("div",{className:"flex relative flex-col p-4 rounded w-[59.5rem] h-[22.25rem]",style:{backgroundColor:p[1]},children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.background[1]],labels:["Fundo"],anchor:"left",onColorChange:function(e){return I(e[0],1)},className:"w-8 h-8 notSkeletable",outerClassName:"w-8 h-8 notSkeletable justify-center items-center flex absolute top-4 right-4 z-10 bg-ui-light rounded cursor-pointer"}),(0,s.jsxs)("div",{className:"flex relative gap-2",children:[(0,s.jsx)("span",{className:"text-14 font-bold",style:{color:d[1]},children:"Planos de assinatura"}),(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.title[1]],labels:["Texto"],anchor:"right",onColorChange:function(e){return F(e[0],1)},className:"w-8 h-8 notSkeletable",outerClassName:"w-8 h-8 notSkeletable flex relative bottom-2 justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"})]}),(0,s.jsxs)("div",{className:"flex relative flex-col gap-5 items-center py-5 px-4 rounded-lg w-[15.25rem] h-[18.25rem]",style:{backgroundColor:k[0]},children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.title[1]],labels:["Fundo"],anchor:"right",onColorChange:function(e){return C(e)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex absolute top-2 right-2 justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"}),(0,s.jsx)("div",{className:"flex justify-center items-center w-20 h-20 bg-ui-light",children:(0,s.jsx)(f.H3h,{className:"w-6 h-6 text-white"})}),(0,s.jsxs)("div",{className:"flex relative flex-col gap-3 items-center w-full",children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.planData[1],a.planData[2],a.planData[3]],labels:["T\xedtulo","Per\xedodo","Valor"],anchor:"right",onColorChange:function(e){A(e[0],1),A(e[1],2),A(e[2],3)},className:"w-8 h-8 notSkeletable",outerClassName:"z-20 notSkeletable flex absolute -translate-y-1/2 top-1/2 -right-2 justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 items-center",children:[(0,s.jsx)("h1",{className:"text-14 font-semibold",style:{color:S[1]},children:"T\xedtulo do Plano"}),(0,s.jsx)("h1",{className:"leading-3 text-all-caps-12",style:{color:S[2]},children:"Plano Mensal"})]}),(0,s.jsxs)("h1",{className:"flex gap-2 items-center text-14 font-semibold",style:{color:S[3]},children:["R$20,00 ou"," ",(0,s.jsx)("span",{className:"flex items-center -mr-1",children:(0,s.jsx)(v.sN,{width:12,height:12})})," ","200"]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsxs)("div",{className:"flex relative justify-center items-center w-full h-8 text-14 font-bold rounded",style:{color:B[0],backgroundColor:B[1]},children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.beMemberButton[0],a.beMemberButton[1]],labels:["Texto","Fundo"],anchor:"right",onColorChange:function(e){Z(e[0],0),Z(e[1],1)},className:"w-8 h-8 notSkeletable",outerClassName:"z-20 notSkeletable flex absolute -right-2 justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"}),"Seja membro"]}),(0,s.jsxs)("div",{className:"flex relative justify-center items-center w-full h-8 text-14 font-bold rounded",style:{backgroundColor:"transparent",color:E[0],borderColor:E[1],boxShadow:"0 0 0 1px ".concat(E[1]," inset")},children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.rewardsButton[0],a.rewardsButton[1]],labels:["Texto","Borda"],anchor:"right",onColorChange:function(e){O(e[0],0),O(e[1],1)},className:"w-8 h-8 notSkeletable",outerClassName:"z-20 notSkeletable flex absolute -right-2 justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"}),"Recompensas"]})]})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 select-none",children:[(0,s.jsx)("span",{className:"text-14 font-bold text-ui-white",children:"Sem planos"}),(0,s.jsxs)("div",{className:"flex relative flex-col p-4 rounded w-[59.5rem] h-[22.25rem]",style:{backgroundColor:p[0]},children:[(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.background[0]],labels:["Fundo"],anchor:"left",onColorChange:function(e){return I(e[0],0)},className:"w-8 h-8 notSkeletable",outerClassName:"w-8 h-8 notSkeletable justify-center items-center flex absolute top-4 right-4 z-10 bg-ui-light rounded cursor-pointer"}),(0,s.jsxs)("div",{className:"flex relative gap-2",children:[(0,s.jsx)("span",{className:"text-14 font-bold",style:{color:d[0]},children:"Planos de assinatura"}),(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.title[0]],labels:["Texto"],anchor:"right",onColorChange:function(e){return F(e[0],0)},className:"w-8 h-8 notSkeletable",outerClassName:"w-8 h-8 notSkeletable flex relative bottom-2 justify-center items-center bg-ui-light rounded cursor-pointer"})]}),(0,s.jsxs)("div",{className:"flex relative gap-2 justify-center items-center",style:{height:"calc(100% - 3rem)"},children:[(0,s.jsx)("span",{className:"ml-10 text-14 font-bold",style:{color:S[0]},children:"Ainda n\xe3o h\xe1 planos dispon\xedveis"}),(0,s.jsx)(g.T,{notRelative:!0,initialColors:[a.planData[0]],labels:["Texto"],anchor:"right",onColorChange:function(e){return A(e[0],0)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex relative justify-center items-center w-8 h-8 bg-ui-light rounded cursor-pointer"})]})]})]})]})})},w=n(828),k=n(25675),C=n.n(k),N=n(39310),S=n(28256),_=n(53615),M=n(3342),B=n(4431),P=n(11265),T=n(94321),E=n(87904),R=(d.theme.extend.colors,["RewardsModal","ShowReward"]);function D(e){var t=e.open,n=e.setOpen,a=e.initialContext,r=(0,w.Z)((0,T.P)({pages:R,externalOpen:[t,n],initialContext:a}),1)[0];return(0,s.jsxs)(r,{children:[(0,s.jsx)(Z,{}),(0,s.jsx)(A,{})]})}function A(e){var t=e.NV99MultiModalPage,n=e.openPage,a=e.context,r=(0,i.useMemo)((function(){return a}),[a]).modal;return(0,s.jsx)(t,{maxWidthInRem:25,minHeightInRem:0,heading:"Saiba mais",footerContent:(0,s.jsx)("div",{className:"w-full sm:w-max",children:(0,s.jsx)(P.X4,{size:"medium",fluidWidth:"100%",color:"base",onClick:function(){return n("RewardsModal")},children:"Voltar"})}),children:(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full h-full",children:(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)("h1",{className:"text-14 leading-normal text-ui-white font-regular",children:(0,s.jsx)(E.$8,{className:"text-white",children:r.heading})}),(0,s.jsx)("hr",{className:"h-0.5 bg-ui-light border-none"}),(0,s.jsx)(E.$8,{className:"text-14 text-white",children:r.body})]})})})}function Z(e){var t=(0,i.useMemo)((function(){return e}),[e]).NV99MultiModalPage;return(0,s.jsx)(t,{minHeightInRem:0,heading:"Recompensas",children:(0,s.jsx)(O,(0,r.Z)({},e))})}function O(e){var t,n=e.context,a=e.openPage,r=e.updateContext,l=(0,i.useState)({body:"",heading:""}),o=l[0],c=l[1],u=(0,i.useMemo)((function(){return n}),[n]),d=u.product,m=u.openBeMember,h=u.creator,x=u.currentPlan,p=(0,_.Z)(),g=p.data,b=p.mutating,j=p.mutate;return(0,i.useEffect)((function(){j("rewards_view",{where:[["creator_profile_id","==",h.id],["plan_id","==",d._id]]})}),[h,j,d]),(0,i.useEffect)((function(){b||document.querySelectorAll("section").forEach((function(e){e.classList.remove("skeleton")}))}),[b]),(0,i.useEffect)((function(){""!==o.body&&""!==o.heading&&(r({modal:o}),a("ShowReward"))}),[o,a,r]),(0,s.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,s.jsxs)("section",{className:"flex gap-3 skeleton",children:[(0,s.jsx)("div",{className:"relative w-15 h-15 skeletable dark",children:(0,s.jsx)(C(),{src:d.icon_url,alt:"\xcdcone representando o plano",layout:"fill"})}),(0,s.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("h1",{className:"text-14 font-semibold text-ui-white skeletable dark",children:d.name}),(0,s.jsxs)("h2",{className:"text-ui-lightest text-all-caps-12 skeletable dark",children:["Plano"," ",E.xt[d.frequency]]})]}),(0,s.jsxs)("div",{className:"flex gap-1 items-center text-14 font-semibold text-ui-white skeletable dark",children:[(0,s.jsxs)("p",{children:["R$",(0,M.Tt)((0,M.Dh)(d.amount.toFixed(2)))]}),(0,s.jsx)("p",{children:"ou"}),(0,s.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,s.jsx)(v.sN,{height:12,width:12}),(0,s.jsx)("p",{children:(0,M.Tt)((0,M.Dh)((10*d.amount).toFixed(2)))})]})]})]})]}),(0,s.jsx)("section",{className:"mt-auto mb-auto skeleton",children:(0,s.jsxs)("ol",{className:"flex flex-col gap-4",children:[!b&&0===g.filter((function(e){return e.available})).length&&(0,s.jsx)("p",{className:"text-14 font-semibold leading-normal text-center text-ui-lightest skeletable dark",children:"Este plano n\xe3o possui recompensas"}),!b&&g.map((function(e,t){var n=e.available,a=e.description,r=e.more_info;if(n)return(0,s.jsxs)("li",{className:"flex gap-2 items-center",children:[(0,s.jsx)("div",{className:"w-3.5 h-3.5 skeletable dark",children:(0,s.jsx)(f.PIe,{className:"text-ui-white"})}),(0,s.jsx)("p",{className:"text-14 leading-normal text-ui-white skeletable dark",children:r?(0,s.jsx)("span",{children:(0,s.jsx)("a",{className:"text-primary-light underline cursor-pointer",onClick:function(e){e.preventDefault(),c({body:r,heading:a})},children:(0,s.jsx)(E.$8,{children:a})})}):(0,s.jsx)(E.$8,{className:"text-white",children:a})})]},t)}))]})}),(null===x||void 0===x||null===(t=x.plan)||void 0===t?void 0:t.id)!==d._id&&(0,s.jsx)("section",{className:"skeleton",children:(0,s.jsx)(P.X4,{color:"primary",className:"skeletable dark",fluidWidth:"100%",onClick:function(){m()},size:"medium",children:"Seja membro"})})]})}var I=n(8193),F=n(60851),z=n(57091),q=n(58385),L=n(39167),W=n(32472),X=n(55914),U=n(48824),$=n(30120);function V(e){var t=e.currentPlan,n=e.planCards,a=e.setProduct,o=e.openModal,c=e.styles,u=e.loadingCurrentPlan,d=e.setCustomSummaryInfo,m=e.favoritingCallback,h=e.currentFavorite,f=e.isEditing,g=e.fromLanding,b=void 0!==g&&g,j=(0,w.Z)((0,q.sG)(),2),y=j[0],k=j[1],C="Voc\xea est\xe1 alterando para um plano mais barato, portanto voc\xea n\xe3o ir\xe1 pagar no primeiro m\xeas, s\xf3 sendo cobrado e tendo seus benef\xedcios modificados na data da pr\xf3xima cobran\xe7a ".concat((0,L.A0)(t.next_billing_date,"dd/MM/yyyy")),N=(0,i.useState)(null),S=N[0],_=N[1],B=(0,i.useState)(null),P=B[0],T=B[1],E=(0,i.useState)(t),R=E[0],D=E[1],A=(0,q.aC)(),Z=A.atomicLoadingSession,O=A.atomicAuthUser,V=(0,i.useState)(!1),H=V[0],K=V[1],G=(0,i.useMemo)((function(){return!Z&&O}),[O,Z]),J=(0,i.useMemo)((function(){return G&&Object.keys(t).length>0&&("ACTIVE"!==t.status&&"USER_CANCELLED"!==t.status||$.ou.fromISO(t.next_billing_date)<$.ou.now())}),[t,G]),Q=function(e,n){var a;if((null===t||void 0===t||null===(a=t.plan)||void 0===a?void 0:a.id)&&!n)return _(e.amount>t.plan.amount?"Voc\xea est\xe1 alterando para um plano mais caro, portanto s\xf3 ser\xe1 cobrada a diferen\xe7a do pre\xe7o entre esse plano e o seu plano atual e seus benef\xedcios ser\xe3o atualizados para os benef\xedcios do novo plano.":C),T(e),void k();ee("checkout",e)},Y=(0,i.useCallback)((function(){var e=f?null:n.find((function(e){return e.id===h})),t=(0,x.Z)(n).sort((function(e,t){return e.amount-t.amount})),a=t.filter((function(e){return e.id!==h&&e}));return e?[e].concat((0,x.Z)(a)):f?t:a}),[h,f,n]),ee=(0,i.useCallback)((function(e,t,n){a((0,l.Z)((0,r.Z)({},t),{quantity:1,image:t.icon_url,_id:t.id,is_member:n})),"planDetails"!==e&&o(e),"planDetails"===e&&K(!0)}),[o,a]);return(0,i.useEffect)((function(){D(t)}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex ".concat(b?"flex-nowrap md:flex-wrap":"flex-wrap"," justify-center gap-4 w-full font-poppins"),children:Y().map((function(e){var n,a=(null===t||void 0===t||null===(n=t.plan)||void 0===n?void 0:n.id)===e.id;return(0,s.jsxs)("div",{className:"flex relative flex-col gap-5 items-center py-5 px-4 rounded-lg w-[15.25rem] h-[18.25rem]",style:{backgroundColor:c.planCardBackground[0]},children:[m&&f&&(0,s.jsx)("div",{className:"absolute top-5 left-4",children:h===e.id?(0,s.jsx)(I.pHD,{className:"text-golden-base cursor-pointer",onClick:function(){return m(null)}}):(0,s.jsx)(I.y5j,{className:"cursor-pointer",onClick:function(){return m(e.id)}})}),(0,s.jsx)(X.JG,{className:"h-full",src:null===e||void 0===e?void 0:e.icon_url,width:80,height:80}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 items-center w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1 items-center",children:[(0,s.jsx)("h1",{className:"text-14 font-semibold",style:{color:c.planData[1]},children:e.name}),(0,s.jsxs)("h1",{className:"leading-3 text-all-caps-12",style:{color:c.planData[2]},children:["Plano ",W.xt[e.frequency]]})]}),(0,s.jsxs)("div",{className:"flex gap-1 items-center text-14 font-semibold",style:{color:c.planData[3]},children:[(0,s.jsxs)("p",{children:["R$",(0,M.Tt)((0,M.Dh)(e.amount.toFixed(2)))]}),(0,s.jsx)("p",{children:"ou"}),(0,s.jsxs)("div",{className:"flex gap-1 items-center ml-0.5",children:[(0,s.jsx)("p",{children:(0,s.jsx)(v.sN,{width:12,height:12})}),(0,s.jsx)("p",{children:(0,M.Tt)((0,M.Dh)((0,M.Dh)((10*e.amount).toFixed(2))))})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[a?(0,s.jsx)(p.X4,{disabled:{status:Z||!(!u||!G)},color:"confirmation",className:"w-full rounded",style:{color:c.beMemberButton[0],backgroundColor:c.beMemberButton[1],transition:"background-color 2s"},onClick:function(){return ee("planDetails",e,a)},children:Z||u&&G?(0,s.jsx)(F.tx,{color:"white",size:14}):"Plano Atual"}):(0,s.jsx)(z.Ag,{color:"ui-darkest-plus",text:"Regularize o pagamento do seu plano",maxWidth:"22rem",visible:J,children:(0,s.jsx)(p.X4,{disabled:{status:Z||!(!u||!G)||J},color:"none",className:"w-full rounded",style:{color:c.beMemberButton[0],backgroundColor:c.beMemberButton[1],transition:"background-color 2s"},onClick:function(){return Q(e)},children:Z||u&&G?(0,s.jsx)(F.tx,{color:"white",size:14}):"Seja membro"})}),(0,s.jsx)(p.X4,{color:"none",className:"w-full rounded",style:{backgroundColor:"transparent",color:c.rewardsButton[0],borderColor:c.rewardsButton[1],boxShadow:"0 0 0 1px ".concat(c.rewardsButton[1]," inset")},onClick:function(){return ee("rewards",e,a)},children:"Recompensas"})]})]},e.id)}))}),(0,s.jsx)(U.r,{heading:"Plano",reloadSub:function(){return D(null)},open:H,setOpen:K,cancelDate:"USER_CANCELLED"===t.status?t.next_billing_date:void 0,changeDate:t.change_to?t.next_billing_date:void 0,sub:R}),(0,s.jsx)(y,{title:"Alterar plano",bodyContent:S||"",confirmation:"positive",confirmationCTA:"Continuar",callback:function(e){_(null),e&&(d((function(){return t.plan.amount<P.amount?{current:t.plan.amount,next:P.amount}:null})),Q(P,!0))}})]})}var H=n(8486),K=n(54580),G=n(4480);function J(e){var t=e.currentPlanAmount,n=e.nextPlanAmout;return(0,s.jsxs)("div",{className:"flex flex-col gap-4 text-12",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1 items-end",children:[(0,s.jsxs)("p",{children:["R$",(0,M.Tt)((0,M.Dh)(t.toFixed(2))),"/no primeiro m\xeas"]}),(0,s.jsxs)("p",{children:["ou ",(0,M.Tt)((0,M.Dh)((10*t).toFixed(2)))," Sparks/no primeiro m\xeas"]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 items-end",children:[(0,s.jsxs)("p",{children:["ap\xf3s isso, ser\xe1 cobrado R$",(0,M.Tt)((0,M.Dh)(n.toFixed(2))),"/m\xeas"]}),(0,s.jsxs)("p",{children:["ou ",(0,M.Tt)((0,M.Dh)((10*n).toFixed(2)))," Sparks/m\xeas"]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 items-end",children:[(0,s.jsx)("p",{children:"A cobran\xe7a da assinatura \xe9 recorrente,"}),(0,s.jsx)("p",{children:"podendo ser cancelada quando quiser."})]})]})}function Q(e){var t=e.planCards,n=e.creator,c=e.styles,u=e.fromStudio,d=e.fromLanding,m=void 0!==d&&d,h=e.favoriting,x=(0,_.Z)(),f=x.data,p=x.mutate,g=x.mutating,b=(0,i.useMemo)((function(){return!g&&(null===f||void 0===f?void 0:f.length)>0?f[0]:{}}),[f,g]),v=(0,i.useState)(null),j=v[0],y=v[1],k=(0,i.useState)(null),M=k[0],P=k[1],T=(0,i.useState)(null),E=T[0],R=T[1],A=(0,S.T)().handleToast,Z=(0,G.sJ)(K.W_),O=(0,G._8)((function(e){var t=e.snapshot;return(0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return[4,t.getPromise(K.ad)];case 1:return(null===(e=a.sent())||void 0===e?void 0:e.unique_id)&&(null===n||void 0===n?void 0:n.id)&&p("users_sub_view",{where:[["unique_id","==",e.unique_id],["creator_profile_id","==",n.id]]}),[2]}}))}))}),[n,p]);(0,i.useEffect)((function(){u||Z||O()}),[u,O,Z]);var I=(0,G._8)((function(e){var t=e.snapshot;return function(){var e=(0,a.Z)((function(e){var n,a,r,l,s,i,c,u,d,m,h,x,f,p;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:n=e.cart,a=n.selectedPaymentMethod,o.label=1;case 1:return o.trys.push([1,5,,6]),s=0!==Object.keys(null!==b&&void 0!==b?b:{}).length?N.Mg:N.XW,[4,Promise.all([t.getPromise(K.ad),t.getPromise(K.NC)])];case 2:return i=w.Z.apply(void 0,[o.sent(),2]),c=i[0],u=i[1],m=[{credit_card_id:null!==(d=null===(r=n.selectedCreditCard)||void 0===r||null===(l=r.credit_card_id)||void 0===l?void 0:l.toString())&&void 0!==d?d:null,email:c.email,plan_id:j._id,type:n.sparksCard?"payment-card-sparks":"payment-card-sparks"===a?"payment-sparks":a}],[4,u.getIdToken()];case 3:return[4,s.apply(void 0,m.concat(o.sent()))];case 4:return o.sent(),[3,6];case 5:return(null===(h=o.sent())||void 0===h||null===(x=h.status)||void 0===x?void 0:x.error)&&A(null!==(p=null===h||void 0===h||null===(f=h.status)||void 0===f?void 0:f.message)&&void 0!==p?p:H.Ex.checkoutFlow.genericUnknownError,"error"),[3,6];case 6:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()}),[b,j,A]);return(0,s.jsxs)("main",{children:[(u&&j||j&&!g&&void 0!==b)&&(0,s.jsx)(D,{open:"rewards"===M,setOpen:function(){return P(null)},initialContext:{openBeMember:function(){return P("checkout")},product:j,creator:n,currentPlan:b}},"".concat(j._id,"-product")),!u&&j&&"checkout"===M&&(0,s.jsx)(B.R,{heading:"Assinar plano",externalOpen:["checkout"===M,function(){return P(null)}],needsAddress:!0,initialContext:{successTexts:{"payment-sparks":"Parab\xe9ns! Agora voc\xea \xe9 um assinante do plano ".concat(j.name),"payment-card-sparks":"Parab\xe9ns! Agora voc\xea \xe9 um assinante do plano ".concat(j.name),"payment-card":"Parab\xe9ns! Agora voc\xea \xe9 um assinante do plano ".concat(j.name)},errorTexts:{"payment-sparks":"Ocorreu um erro ao realizar o pagamento","payment-card-sparks":"Ocorreu um erro ao realizar o pagamento","payment-card":"Ocorreu um erro ao realizar o pagamento"}},CustomSummary:E&&function(){return(0,s.jsx)(J,{currentPlanAmount:null===E||void 0===E?void 0:E.current,nextPlanAmout:null===E||void 0===E?void 0:E.next})},product:[{name:j.name,Icon:function(){return(0,s.jsx)("div",{className:"relative w-11 h-11 ".concat(j.icon_url?"bg-transparent":"bg-ui-light"),children:j.icon_url&&(0,s.jsx)(C(),{src:j.icon_url,layout:"fill"})})},price:j.amount,availablePaymentMethods:["payment-sparks","payment-card-sparks","payment-card"],checkoutFunctions:{buyWithCard:I,buyWithSparks:I},frequency:j.frequency}]}),(0,s.jsx)(V,(0,l.Z)((0,r.Z)({},h),{fromLanding:m,setCustomSummaryInfo:R,currentPlan:u?{}:b,loadingCurrentPlan:!u&&g,setProduct:y,openModal:P,planCards:t,styles:c}))]})}var Y=n(77010),ee=n(66979),te=n(53416),ne=d.theme.extend.colors;function ae(e){var t,n=e.modifiers,d=e.setModifiers,x=e.removeExtension,f=e.creator_profile,p=e.favoriting,g=e.fromStudio,b=void 0!==g&&g,v=e.hideContainer,j=void 0!==v&&v,w=e.fromLanding,k=void 0!==w&&w,C=(0,i.useState)(null),N=C[0],S=C[1],_=(0,u.useRouter)(),M=(0,i.useState)(!1),B=M[0],P=M[1],T=(0,i.useState)(!1),E=T[0],R=T[1],D=(0,i.useMemo)((function(){return(0,te.x0)(3)}),[]),A=(0,i.useCallback)((0,a.Z)((function(){var e,t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return ee.I.currentUser?(t=[{creator_profile_name:_.query.studioName,email:ee.I.currentUser.email}],[4,ee.I.currentUser.getIdToken()]):[3,3];case 1:return[4,m._1.apply(void 0,t.concat(n.sent()))];case 2:e=n.sent(),R(e.has_role),n.label=3;case 3:return[2]}}))})),[_]);(0,i.useEffect)((function(){b?R(f.has_role):ee.I.onAuthStateChanged((function(e){e?A():R(!1)}))}),[f,b,A]),(0,i.useLayoutEffect)((function(){var e;_.query.page&&(P(!0),null===(e=document.getElementById("bemember-".concat(D)))||void 0===e||e.scrollIntoView({behavior:"smooth"}),_.push(_.asPath.split("?")[0],void 0,{shallow:!0}))}),[D,_]);var Z,O={background:[ne["ui-darker"],ne["ui-darker"]],title:[ne["ui-white"],ne["ui-white"]],planCardBackground:[ne["ui-base"]],planData:[ne["ui-white"],ne["ui-lightest"],ne["ui-white"],ne["ui-white"]],beMemberButton:[ne["ui-white"],ne["primary-base"]],rewardsButton:[ne["ui-white"],ne["ui-lighter"]]},I=(0,i.useState)((null===n||void 0===n?void 0:n.style)?{background:n.style["01"],title:n.style["02"],planCardBackground:n.style["03"],planData:n.style["04"],beMemberButton:n.style["05"],rewardsButton:n.style["06"]}:O),F=I[0],z=I[1],q=(0,i.useCallback)((function(e){d((function(t){return(0,l.Z)((0,r.Z)({},t),{style:(0,l.Z)((0,r.Z)({},t.style),{"01":e.background,"02":e.title,"03":e.planCardBackground,"04":e.planData,"05":e.beMemberButton,"06":e.rewardsButton})})})),z(e)}),[d]),L=["empty","plans"],W=n&&0!==Object.values(n).length?0===(null===n||void 0===n||null===(t=n.plans)||void 0===t?void 0:t.length)?"empty":"plans":"empty",X=(0,i.useCallback)((function(e){var t=e.TitleComponent;return b||E?(0,s.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)(c.XKb,{className:"hover:text-ui-lighter cursor-pointer",onClick:function(){return(0,h.v)("".concat(location.href.split("/")[2],"/").concat(_.query.studioName,"/assinar"))},size:12})]}):(0,s.jsx)("p",{children:t})}),[b,E,_]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Y.j,{id:"bemember-".concat(D),modifiers:n,setModifiers:d,initialTitle:null!==(Z=n.extension_title)&&void 0!==Z?Z:"Planos de assinatura",hideContainer:j,className:"min-h-[22.25rem] ".concat(B?"animate-appear-longer":""),removeExtension:x,titleContainer:X,state:L.indexOf(W),style:F,fromStudio:b,openEditModal:function(){return S(!0)},children:["empty"===W&&(0,s.jsx)("div",{className:"flex justify-center items-center",style:{height:"260px"},children:(0,s.jsx)("span",{className:"text-14 font-bold",style:{color:F.planData[L.indexOf(W)]},children:"Ainda n\xe3o h\xe1 planos dispon\xedveis"})}),"plans"===W&&(0,s.jsx)("div",{className:"flex h-full w-[98.5%]",children:(0,s.jsx)(Q,{fromLanding:k,favoriting:p,fromStudio:b,creator:f,planCards:n.plans,styles:F})})]}),b&&(0,s.jsx)(y,{open:N,setOpen:S,style:F,setStyle:q})]})}},20759:function(e,t,n){function a(e){if(!e)return null;var t=e.split("/");return t.includes("youtu.be")||t.includes("www.youtube.com")?e:null}n.d(t,{N0:function(){return r},SB:function(){return o},bK:function(){return l},mC:function(){return a}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("/").filter((function(e){return e&&"http:"!==e&&"https:"!==e}));if(t.includes("youtu.be")||t.includes("www.youtu.be")){var n=-1===t.indexOf("youtu.be")?t.indexOf("www.youtu.be"):t.indexOf("youtu.be"),a=t[n+1],r=a.split("?");return r[0]}if(t.includes("www.youtube.com")||t.includes("youtube.com")){var l=-1===t.indexOf("www.youtube.com")?t.indexOf("youtube.com"):t.indexOf("www.youtube.com"),o=t[l+1],s=o.split("&");if(s[0].startsWith("watch?v=")){var i=s[0].split("watch?v=").filter((function(e){return e}))[0];return i}}},l=function(e){var t=r(e);return t?"https://i.ytimg.com/vi/".concat(t,"/hqdefault.jpg"):null},o=function(e){return"https://youtube.com/watch?v=".concat(e.split("vi/")[1].split("/")[0])}}}]);