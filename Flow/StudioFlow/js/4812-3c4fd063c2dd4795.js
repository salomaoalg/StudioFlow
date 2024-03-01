"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4812],{60105:function(e,t,n){n.d(t,{x:function(){return C},h:function(){return j}});var r=n(26042),s=n(69396),i=n(29815),l=n(85893),a=n(67294),o=n(89583),c=n(60851),d=n(50165),u=n(65033),f=n(40330),x=n(64957);function h(e){var t=e.handleClose,n=e.handleSave;return(0,l.jsxs)("div",{className:"flex gap-1 justify-end bg-ui-dark",children:[(0,l.jsx)(u.X4,{color:"dark",onClick:t,children:"Cancelar"}),(0,l.jsx)(u.X4,{color:"confirmation",onClick:n,children:"Confirmar"})]})}function m(e){var t=e.open,n=e.setOpen,r=e.style,s=e.setStyle,i=e.Store,o=(0,a.useState)(r),c=o[0],d=o[1],u=(0,a.useState)(r.title),m=u[0],p=u[1],g=(0,a.useState)(r.background),v=g[0],b=g[1],j=(0,a.useState)(r.cardBackground),C=j[0],N=j[1],y=(0,a.useState)(r.cardButtonColors),k=y[0],w=y[1],S=(0,a.useState)(r.cardText),_=S[0],P=S[1],I=(0,a.useCallback)((function(e,t,n){e((function(e){return 0===n?[t,e[1]]:[e[0],t]}))}),[]),Z=(0,a.useCallback)((function(e,t){I(p,e,t)}),[I]),O=(0,a.useCallback)((function(e,t){I(b,e,t)}),[I]);return(0,a.useEffect)((function(){d({title:m,background:v,cardBackground:C,cardButtonColors:k,cardText:_})}),[m,v,C,k,_]),(0,l.jsx)(x.n,{open:t,setOpen:n,heading:"Editar extens\xe3o",minHeightInRem:34.875,maxHeightInRem:34.875,maxWidthInRem:62.5,footerContent:(0,l.jsx)(h,{handleClose:function(){return n(!1)},handleSave:function(){s(c),n(!1)}}),children:(0,l.jsxs)("div",{className:"flex flex-col gap-7 select-none",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("span",{className:"text-14 font-bold text-ui-white",children:"Com produtos"}),(0,l.jsxs)("div",{className:"flex relative flex-col gap-4 p-4 rounded w-[59.5rem] min-h-[22.125rem]",style:{backgroundColor:v[1]},children:[(0,l.jsx)("div",{className:"absolute top-2 right-2",children:(0,l.jsx)(f.T,{notRelative:!0,initialColors:[r.background[1]],labels:["Fundo"],anchor:"left",onColorChange:function(e){return O(e[0],1)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex relative justify-center items-center w-8 h-8 bg-ui-base rounded cursor-pointer"})}),(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("p",{style:{color:m[1]},className:"text-14 font-bold",children:"Loja"}),(0,l.jsx)(f.T,{notRelative:!0,initialColors:[r.title[1]],labels:["Texto"],anchor:"right",onColorChange:function(e){return Z(e[0],1)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex relative justify-center items-center w-8 h-8 bg-ui-base rounded cursor-pointer"})]}),(0,l.jsx)(i,{colorPickerEvents:{cardText:P,cardButtonColors:w,cardBackground:N}})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 select-none",children:[(0,l.jsx)("span",{className:"text-14 font-bold text-ui-white",children:"Sem produtos"}),(0,l.jsxs)("div",{className:"flex relative flex-col p-4 rounded w-[59.5rem] h-[12.5rem]",style:{backgroundColor:v[0]},children:[(0,l.jsx)("div",{className:"absolute top-2 right-2",children:(0,l.jsx)(f.T,{notRelative:!0,initialColors:[r.background[0]],labels:["Fundo"],anchor:"left",onColorChange:function(e){return O(e[0],0)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex relative justify-center items-center w-8 h-8 bg-ui-base rounded cursor-pointer"})}),(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("p",{style:{color:m[0]},className:"text-14 font-bold",children:"Loja"}),(0,l.jsx)(f.T,{notRelative:!0,initialColors:[r.title[0]],labels:["Texto"],anchor:"right",onColorChange:function(e){return Z(e[0],0)},className:"w-8 h-8 notSkeletable",outerClassName:"notSkeletable flex relative justify-center items-center w-8 h-8 bg-ui-base rounded cursor-pointer"})]}),(0,l.jsx)("div",{className:"flex justify-center items-center -mt-5 w-full h-full",children:(0,l.jsx)("p",{className:"text-14 font-bold text-ui-lightest",children:"N\xe3o h\xe1 produtos sendo vendidos no momento"})})]})]})]})})}var p=n(22030),g=n(77010),v=n(53416),b=n(41125).theme.extend.colors,j={background:[b["ui-darker"],b["ui-darker"]],title:[b["ui-white"],b["ui-white"]],cardBackground:[b["ui-darker"]],cardButtonColors:[b["ui-white"],b["ui-base"]],cardText:[b["ui-white"],b["ui-white"],b["ui-light"]]};function C(e){var t,n=e.creatorName,u=e.id,f=e.modifiers,x=e.removeExtension,h=e.fromStudio,b=e.setModifiers,C=(0,a.useState)(!1),N=C[0],y=C[1],k=(0,a.useRef)(),w=(0,a.useState)((null===f||void 0===f?void 0:f.style)?{background:f.style["01"],title:f.style["02"],cardBackground:f.style["03"],cardButtonColors:f.style["04"],cardText:f.style["05"]}:j),S=w[0],_=w[1],P=(0,p.C)(n,S),I=P.StoreItemDisplay,Z=P.StoreItemEditDisplay,O=P.products,z=P.categorizedItems,T=P.setCurrentCategory,B=P.loading,E=(0,a.useMemo)((function(){return 0!==(null===O||void 0===O?void 0:O.length)?"products":"empty"}),[null===O||void 0===O?void 0:O.length]),A=(0,a.useCallback)((function(e){b((function(t){return(0,s.Z)((0,r.Z)({},t),{style:(0,s.Z)((0,r.Z)({},t.style),{"01":e.background,"02":e.title,"03":e.cardBackground,"04":e.cardButtonColors,"05":e.cardText})})})),_(e)}),[b]);(0,a.useEffect)((function(){var e;T(null!==(e=null===f||void 0===f?void 0:f.category)&&void 0!==e?e:"TODOS")}),[null===f||void 0===f?void 0:f.category,T]);var R,M=(0,a.useMemo)((function(){return(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("span",{className:"text-14",children:"Categoria:"}),(0,l.jsx)(d.F,{ref:k,Parent:(0,l.jsxs)("div",{className:"flex gap-2 justify-between items-center py-2 px-3 text-14 text-white bg-ui-light rounded cursor-pointer select-none min-w-[7.375rem]",children:[(0,l.jsx)("p",{children:null!==(t=f.category)&&void 0!==t?t:"TODOS"}),(0,l.jsx)(o.sF,{className:"-mt-2 text-20"})]}),children:function(e){var t=e.closeDrawer,n=e.style;return(0,l.jsx)("div",{style:n,children:(0,l.jsx)("div",{className:"py-3 bg-ui-base rounded-b",children:["TODOS"].concat((0,i.Z)(Object.keys(z))).map((function(e,n){return(0,l.jsx)("div",{className:"flex flex-col items-center w-full bg-ui-base hover:bg-ui-darker cursor-pointer",onClick:function(){t(),b((function(t){return(0,s.Z)((0,r.Z)({},t),{category:e})}))},children:(0,l.jsx)("p",{className:"py-2 px-4 w-full text-14 text-white",children:e})},"".concat((0,v.x0)(3),"-news-option-").concat(n))}))})})}}),(0,l.jsx)("div",{className:"h-full bg-ui-light min-w-[0.125rem]"})]})}),[z,null===f||void 0===f?void 0:f.category,b]);return(0,l.jsx)(g.j,{id:u,AppendComponent:M,removeExtension:x,fromStudio:h,initialTitle:null!==(R=f.extension_title)&&void 0!==R?R:"Loja",state:["empty","products"].indexOf(E),style:S,modifiers:f,setModifiers:b,openEditModal:function(){return y(!0)},children:(0,l.jsxs)("div",{className:B||0===O.length?"h-[8rem]":"h-[17.625rem]",children:[B?(0,l.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,l.jsx)(c.Zi,{size:96})}):(0,l.jsx)(l.Fragment,{children:0!==O.length?(0,l.jsx)(l.Fragment,{children:h?(0,l.jsx)(Z,{}):I}):(0,l.jsx)("div",{className:"flex justify-center items-center -mt-3 w-full h-full",children:(0,l.jsx)("p",{className:"text-14 font-bold text-ui-lightest",children:"N\xe3o h\xe1 produtos sendo vendidos no momento"})})}),h&&(0,l.jsx)(m,{Store:Z,open:N,setOpen:y,style:S,setStyle:A})]})})}},22030:function(e,t,n){n.d(t,{C:function(){return H}});var r=n(47568),s=n(26042),i=n(97582),l=n(85893),a=n(67294),o=n(11163),c=n(55509);var d=n(69396),u=n(828),f=n(71048),x=n(38719),h=n(65033),m=n(3419),p=n(39167),g=n(63515),v=(0,l.jsx)("path",{d:"M6.175 21.1251C5.675 21.1251 5.25 20.9501 4.9 20.6001C4.55 20.2501 4.375 19.8251 4.375 19.3251C4.375 18.8251 4.55 18.4001 4.9 18.0501C5.25 17.7001 5.675 17.5251 6.175 17.5251C6.65833 17.5251 7.07917 17.7043 7.4375 18.0626C7.79583 18.4209 7.975 18.8418 7.975 19.3251C7.975 19.8251 7.8 20.2501 7.45 20.6001C7.1 20.9501 6.675 21.1251 6.175 21.1251ZM16.175 21.1251C15.675 21.1251 15.25 20.9501 14.9 20.6001C14.55 20.2501 14.375 19.8251 14.375 19.3251C14.375 18.8251 14.55 18.4001 14.9 18.0501C15.25 17.7001 15.675 17.5251 16.175 17.5251C16.6583 17.5251 17.0792 17.7043 17.4375 18.0626C17.7958 18.4209 17.975 18.8418 17.975 19.3251C17.975 19.8251 17.8 20.2501 17.45 20.6001C17.1 20.9501 16.675 21.1251 16.175 21.1251ZM5.925 15.9251C5.14167 15.9251 4.58333 15.6626 4.25 15.1376C3.91667 14.6126 3.925 14.0418 4.275 13.4251L5.85 10.5501L2.125 2.6501H1C0.75 2.6501 0.541667 2.5626 0.375 2.3876C0.208333 2.2126 0.125 2.0001 0.125 1.7501C0.125 1.5001 0.2125 1.2876 0.3875 1.1126C0.5625 0.937598 0.775 0.850098 1.025 0.850098H2.675C2.875 0.850098 3.05417 0.895931 3.2125 0.987598C3.37083 1.07926 3.48333 1.21676 3.55 1.4001L4.225 2.8251H18.55C19.2833 2.8251 19.7333 3.02926 19.9 3.4376C20.0667 3.84593 20 4.3251 19.7 4.8751L16.575 10.5501C16.3917 10.8501 16.1417 11.1126 15.825 11.3376C15.5083 11.5626 15.15 11.6751 14.75 11.6751H7.275L5.975 14.1251H17.25C17.5 14.1251 17.7083 14.2126 17.875 14.3876C18.0417 14.5626 18.125 14.7751 18.125 15.0251C18.125 15.2751 18.0375 15.4876 17.8625 15.6626C17.6875 15.8376 17.475 15.9251 17.225 15.9251H5.925Z",fill:"#262A31"});function b(e){var t=e.className,n=e.width,r=void 0===n?20:n,s=e.height,i=void 0===s?22:s;return(0,l.jsx)("svg",{className:t,width:r,height:i,viewBox:"0 0 20 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:v})}var j=n(57779);function C(e){var t=e.color,n=e.onClick,r=e.selected,s=void 0!==r&&r,i=e.disabled,a=void 0!==i&&i;return(0,l.jsx)("div",{style:{backgroundColor:t},onClick:n,className:"h-7 w-7 ".concat(n?"cursor-pointer":""," ").concat(a?"opacity-70 pointer-events-none":""," rounded-full ").concat(s?"border-2 border-white":"")})}function N(e){var t=e.colors,n=e.disabledColors,r=void 0===n?[]:n,s=e.state,i=e.onColorChange,o=(0,a.useState)(0),c=null!==s&&void 0!==s?s:o;return(0,l.jsx)(j.BX,{state:c,children:function(e){var n=e.selectedIndex,s=e.setSelectedIndex;return(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map((function(e,t){return(0,l.jsx)(C,{color:e,onClick:function(){r.includes(e)||(s(t),i&&i())},selected:n===t,disabled:r.includes(e)},"color-".concat(e))}))})}})}var y=n(89583),k=n(41664),w=n.n(k);function S(e){var t,n=e.width,r=e.height,s=e.images,i=e.titles,o=(0,a.useState)(0),c=o[0],d=o[1],u=(0,a.useMemo)((function(){return null!==(t=Array.isArray(i)?null===i||void 0===i?void 0:i[c]:i)&&void 0!==t?t:"Imagem do Produto"}),[c,i]);return(0,a.useEffect)((function(){d(0)}),[s]),(0,l.jsxs)("div",{style:{maxWidth:"".concat(n/16,"rem")},className:"flex flex-col flex-shrink-0 gap-3 items-center m-auto md:m-0 w-full",children:[(0,l.jsxs)("div",{className:"relative",style:{width:"".concat(n/16,"rem"),height:"".concat(r/16,"rem")},children:[(0,l.jsx)("img",{alt:u,title:u,className:"object-cover absolute top-0 left-0 w-full h-full rounded",src:s[c]}),(0,l.jsx)(w(),{href:s[c],children:(0,l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",children:(0,l.jsx)("div",{title:"Abrir imagem em uma nova guia",className:"flex absolute top-1 right-1 justify-center items-center p-2.5 text-14 text-white bg-ui-darkest-plus rounded shadow-1dp cursor-pointer",children:(0,l.jsx)(y.CkN,{})})})})]}),(0,l.jsx)("div",{className:"flex flex-wrap gap-2 items-center",children:(0,l.jsx)(j.BX,{state:[c,d],children:function(e){var t=e.selectedIndex,n=e.setSelectedIndex;return(0,l.jsx)(l.Fragment,{children:s.map((function(e,r){return(0,l.jsx)("img",{draggable:!1,onClick:function(){return n(r)},alt:u,title:u,className:"w-11 object-cover cursor-pointer h-11 rounded ".concat(t===r?"brightness-50":""),src:e},"image-".concat(e))}))})}})})]})}function _(e){var t=e.children,n=e.fontSize,r=void 0===n?16:n,s=e.size,i=void 0===s?42:s,a=e.onClick,o=e.selected,c=void 0!==o&&o,d=e.disabled,u=void 0!==d&&d;return"TAMANHO \xdaNICO"===t.toString().toUpperCase()?(0,l.jsx)("p",{className:"text-14 font-semibold text-ui-lightest uppercase",children:"\xdaNICO"},"size-".concat(i)):(0,l.jsx)("div",{style:{width:"".concat(i/16,"rem"),height:"".concat(i/16,"rem"),fontSize:"".concat(r,"px")},onClick:a,className:"flex justify-center items-center select-none text-white ".concat(a?"cursor-pointer":""," ").concat(u?"opacity-70 pointer-events-none":""," font-semibold bg-ui-darker rounded ").concat(c?"border-2 border-white":""),children:t})}function P(e){var t=e.sizes,n=e.disabledSizes,r=void 0===n?[]:n,s=e.state,i=e.onSizeChange,o=(0,a.useState)(0),c=null!==s&&void 0!==s?s:o;return(0,a.useEffect)((function(){r.includes(t[c[0]])&&c[1](0)}),[r,c,t]),(0,l.jsx)(j.BX,{state:c,children:function(e){var n=e.selectedIndex,s=e.setSelectedIndex;return(0,l.jsx)("div",{className:"flex gap-2",children:t.map((function(e,t){return(0,l.jsx)(_,{onClick:function(){r.includes(e)||(s(t),i&&i())},disabled:r.includes(e),selected:n===t,children:e},"size-".concat(e))}))})}})}var I=n(60851),Z=n(86601),O=n(3342);function z(e){var t=e.getAuthUser,n=e.user_address_id,r=e.product,i=e.openPage,u=e.setButtonEnabled,f=e.setSelectedProduct,x=(0,o.useRouter)(),h=(0,a.useState)(),m=h[0],p=h[1],g=(0,a.useState)(!1),v=g[0],b=g[1],C=(0,a.useState)(0),N=C[0],y=C[1];return(0,Z.n)((function(){x.isReady&&t().then((function(e){u(!1),r.has_shippment?e.getIdToken().then((function(t){(0,c.hv)({category_id:r.category_id,product_id:r._id,user_address_id:n,creator_profile_name:x.query.studioName},e.email,t).then((function(e){var t=e.filter((function(e){return e.status}));if(0===t.length)return b(!0);p(t),u(!0)}))})):u(!0)}))}),[t,r,x,u,n]),(0,Z.n)((function(){m&&m.length>0&&f((function(e){return(0,d.Z)((0,s.Z)({},e),{price:r.value-r.discount+m[N].value})}))}),[m,r,N,f]),(null===r||void 0===r?void 0:r.has_shippment)?(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("p",{className:"text-12 md:text-14 font-bold text-white",children:"Op\xe7\xf5es de frete:"}),v&&(0,l.jsx)("p",{onClick:function(){return i("SelectAddressModal")},className:"text-12 font-bold text-white underline uppercase cursor-pointer",children:"Alterar"})]}),(0,l.jsx)("div",{className:"flex flex-col ".concat(m||v?"pb-1.5":"items-center"," gap-3 p-3 text-white bg-ui-darker rounded"),children:m||v?(0,l.jsx)(j.BX,{name:m&&m.length>0&&"selectedShipping",valueInterpreterFunction:function(e){return(null===m||void 0===m?void 0:m.length)>0&&JSON.stringify({shipping_selected:m[e].service,value:m[e].value})},state:[N,y],children:function(e){var t=e.selectedIndex,n=e.setSelectedIndex;return(0,l.jsxs)(l.Fragment,{children:[v&&(0,l.jsx)("p",{className:"pb-2 text-14 leading-5.5 text-alert-light",children:"Nenhuma transportadora abrange seu endere\xe7o, verifique se as informa\xe7\xf5es est\xe3o corretas ou tente outro endere\xe7o."}),!v&&(0,l.jsx)("table",{children:m&&m.filter((function(e){return e.status})).map((function(e,r){return(0,l.jsxs)("tr",{className:"",children:[(0,l.jsx)("td",{className:"pb-2 w-1/3",children:(0,l.jsxs)("div",{onClick:function(){return n(r)},className:"flex gap-2 items-center w-full h-full cursor-pointer",children:[(0,l.jsx)("div",{className:"flex justify-center items-center w-5 rounded-full border-2 border-ui-white select-none aspect-square",children:(0,l.jsx)("div",{className:"".concat(t===r?"bg-ui-white":"bg-ui-darker"," select-none rounded-full w-2.5 h-2.5")})}),(0,l.jsx)("p",{className:"text-14 font-normal leading-4 text-white",children:e.service_name})]})}),(0,l.jsxs)("td",{className:"relative pb-2 w-1/3",children:[0===r&&(0,l.jsx)("p",{className:"absolute text-12 font-bold text-ui-lightest uppercase transform -top-[29px]",children:"R$"}),(0,l.jsxs)("p",{className:"text-14 font-normal leading-4 text-white",children:["R$",(0,O.Tt)((0,O.Dh)(e.value.toFixed(2)))]})]}),(0,l.jsxs)("td",{className:"relative pb-2",children:[0===r&&(0,l.jsx)("p",{className:"absolute text-12 font-bold text-ui-lightest uppercase transform -top-[29px]",children:"PRAZO"}),(0,l.jsx)("p",{className:"text-14 font-normal leading-4 text-white",children:e.estimate>1?"1-".concat(e.estimate," dias \xfateis"):"".concat(e.estimate," dia \xfatil")})]})]},"shipping-service-".concat(e.service))}))})]})}}):(0,l.jsx)(I.Zi,{size:64})})]}):null}var T=n(4431),B=n(66979),E=n(4480);function A(e){var t,n=e.NV99MultiModalPage,o=e.NV99ProgressHeader,c=e.openPage,v=e.closeMultiModal,b=e.updateContext,j=e.context,C=e.productVariations,y=(0,E.Zl)(f.o),k=(0,a.useMemo)((function(){var e;return(null===(e=j.selectedStoreProduct)||void 0===e?void 0:e._id)?C.findIndex((function(e){return e._id===j.selectedStoreProduct._id})):0}),[null===j||void 0===j?void 0:j.selectedStoreProduct,C]),w=-1===k?0:k,_=(0,a.useState)(w),I=_[0],Z=_[1],O=(0,a.useState)((null===j||void 0===j||null===(t=j.selectedStoreProduct)||void 0===t?void 0:t.selectedSize)?C[w].sizes.findIndex((function(e){return e.label===j.selectedStoreProduct.selectedSize.label})):0),z=O[0],T=O[1],A=(0,E._8)((function(e){var t=e.snapshot;return(0,r.Z)((function(){var e,n,r;return(0,i.__generator)(this,(function(s){switch(s.label){case 0:return[4,Promise.all([t.getPromise(f.o),t.getPromise(x.s)])];case 1:return e=u.Z.apply(void 0,[s.sent(),2]),n=e[0],r=e[1],B.I.currentUser.getIdToken().then((function(e){(0,m.OO)({created_at:(0,p.JK)(),color_changes:n.color_changes,size_changes:n.size_changes,current_sparks:r.balance,page:"FIRST",payment_method:null,product:C[w],purchased:!1,email:B.I.currentUser.email},e)})).catch((function(){return null})),[2]}}))}))}),[C,w]),R=(0,a.useCallback)((function(){b((function(e){return(0,d.Z)((0,s.Z)({},e),{selectedStoreProduct:(0,d.Z)((0,s.Z)({},C[I]),{selectedSize:C[I].sizes[z]})})})),j.validatedFastBuy?c("SelectAddressModal"):c("FastBuyVerifyPage")}),[b,j.validatedFastBuy,C,I,z,c]),M=(0,a.useCallback)((function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.X4,{fluidWidth:"6.25rem",onClick:function(){return v()},color:"dark",children:"Cancelar"}),(0,l.jsx)(h.X4,{fluidWidth:"7.5rem",onClick:function(){return R()},color:"primary",children:"Avan\xe7ar"})]})}),[v,R]);return(0,l.jsx)(n,{forceMaxHeight:!0,maxHeightInRem:36.75,maxWidthInRem:35.438,heading:"Pagamento",footerContent:(0,l.jsx)(M,{}),children:(0,l.jsxs)("div",{className:"flex flex-col gap-4 items-start",children:[(0,l.jsx)(o,{onPageSelected:function(){return b((function(e){return(0,d.Z)((0,s.Z)({},e),{selectedStoreProduct:(0,d.Z)((0,s.Z)({},C[I]),{selectedSize:C[I].sizes[z]})})}))}}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 md:gap-3",children:[(0,l.jsx)(S,{height:215,width:215,images:C[I].images,titles:C[I].title}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("p",{className:"text-16 font-semibold leading-6 text-white",children:C[I].title}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("p",{className:"text-14 font-semibold leading-4 text-white",children:"Cor"}),(0,l.jsx)(N,{onColorChange:function(){y((function(e){return(0,d.Z)((0,s.Z)({},e),{color_changes:e.color_changes+1})})),A()},state:[I,Z],colors:C.map((function(e){return e.color}))})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("p",{className:"text-14 font-semibold leading-4 text-white",children:"Tamanho"}),(0,l.jsx)(P,{onSizeChange:function(){y((function(e){return(0,d.Z)((0,s.Z)({},e),{size_changes:e.size_changes+1})})),A()},state:[z,T],disabledSizes:C[I].sizes.filter((function(e){return!e.in_stock})).map((function(e){return e.label})),sizes:C[I].sizes.map((function(e){return e.label}))})]}),(0,l.jsx)(g.$,{originalNewLine:!0,className:"text-14 leading-5.5",children:C[I].description})]})]})]})})}function R(e){var t=e.open,n=e.setOpen,o=e.productVariations,d=e.availableInstallments,h=void 0===d?[1]:d,g=(0,a.useState)(!1),v=g[0],j=g[1],N=(0,E._8)((function(e){var t=e.snapshot;return function(){var e=(0,r.Z)((function(e,n,r,s){var l,a,c,d,h;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return B.I.currentUser?(a=s)?[3,2]:[4,B.I.currentUser.getIdToken()]:[3,4];case 1:a=i.sent(),i.label=2;case 2:return l=a,[4,Promise.all([t.getPromise(f.o),t.getPromise(x.s)])];case 3:c=u.Z.apply(void 0,[i.sent(),2]),d=c[0],h=c[1],(0,m.OO)({created_at:(0,p.JK)(),color_changes:d.color_changes,size_changes:d.size_changes,current_sparks:h.balance,page:e,payment_method:r,product:o[0],purchased:n,email:B.I.currentUser.email},l).catch((function(){return null})),i.label=4;case 4:return[2]}}))}));return function(t,n,r,s){return e.apply(this,arguments)}}()}),[o]),y=(0,a.useCallback)(function(){var e=(0,r.Z)((function(e,t){var n,r,s,l,a,o,d,u,f,x,h,m,p,g,v,b,j,C;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return n=t.currentUniqueCard,r=t.selectedInstallment,s=t.selectedStoreProduct,l=t.cart,a=l.selectedAddressId,o=l.selectedShipping,d=l.selectedPaymentMethod,u=JSON.parse(o),f=u.shipping_selected,x=u.value,h=s.category_id,m=s.selectedSize,p=s.store_id,g=s._id,v=s.has_shippment,[4,B.I.currentUser.getIdToken()];case 1:b=i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,(0,c.NN)({address_id:a,category_id:h,credit_card_id:"CREDIT_CARD"===e?n.credit_card_id.toString():null,product_id:g,store_id:p,type:e,installments:null!==r&&void 0!==r?r:1,selected_size:m.label,shipping_selected:null!==f&&void 0!==f?f:null,shipping_value:v?x:0},B.I.currentUser.email,b)];case 3:return j=i.sent(),N("PURCHASE",!0,d,b),[2,j];case 4:throw C=i.sent(),N("PURCHASE","FAILED",d,b),C;case 5:return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),[N]);return(0,a.useEffect)((function(){t&&!v&&(j(!0),N("FIRST",!1,null))}),[N,v,t]),(0,l.jsx)(T.R,{externalOpen:[t,n],heading:"Pagamento",initialContext:{successTexts:{"payment-card":"Compra realizada com sucesso! Verifique seu email para mais informa\xe7\xf5es.","payment-bill":"Tudo certo! Agora \xe9 s\xf3 esperar seu boleto ser confirmado. Voc\xea receber\xe1 um email de confirma\xe7\xe3o.","payment-pix":"Tudo certo! Agora \xe9 s\xf3 esperar sua transfer\xeancia ser confirmada. Voc\xea receber\xe1 um email de confirma\xe7\xe3o."},hasUniqueCard:!0,canSavePaymentInfo:!1,availableInstallments:h,AdditionalOptionDisplays:function(e){var t=e.context,n=e.openPage,r=e.setButtonEnabled,s=e.setSelectedProduct;return(0,l.jsx)(z,{getAuthUser:t.getAuthUser,setSelectedProduct:s,product:t.selectedStoreProduct,user_address_id:t.cart.selectedAddressId,openPage:n,setButtonEnabled:r})}},product:[{availablePaymentMethods:["payment-pix","payment-card","payment-bill"],checkoutFunctions:{buyWithCard:function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(t){return[2,y("CREDIT_CARD",e)]}))}));return function(t){return e.apply(this,arguments)}}(),buyWithBill:function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(t){return[2,y("BOLETO",e)]}))}));return function(t){return e.apply(this,arguments)}}(),buyWithPix:function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(t){return[2,y("BOLETO_PIX",e)]}))}));return function(t){return e.apply(this,arguments)}}()},frequency:"SINGLE",OverwriteElement:function(e){var t=e.context.selectedStoreProduct,n=e.openPage;return(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex gap-2 items-center w-full",children:[(0,l.jsx)("p",{className:"text-14 font-bold leading-4 text-white",children:"Seu carrinho:"}),(0,l.jsx)("p",{onClick:function(){return n("ProductPage")},className:"text-12 font-bold leading-3 text-white underline uppercase cursor-pointer",children:"ALTERAR"})]}),(0,l.jsxs)("div",{className:"flex gap-3 w-full",children:[(0,l.jsx)("img",{className:"flex-shrink-0 rounded w-[4.75rem] h-[4.75rem]",title:t.title,alt:t.title,src:t.images[0]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("p",{className:"text-14 font-semibold leading-5.5 text-white",children:t.title}),t.color&&(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("p",{className:"text-14 font-semibold leading-5.5 text-white",children:"Cor:"}),(0,l.jsx)(C,{selected:!0,color:t.color})]}),(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("p",{className:"text-14 font-semibold leading-5.5 text-white",children:"Tamanho:"}),(0,l.jsx)(_,{size:32,fontSize:12,children:t.selectedSize.label})]})]})]})]})},Icon:null,name:o[0].title,price:o[0].discount?o[0].value-o[0].discount:o[0].value}],additionalPages:[{Icon:function(e){return(0,l.jsx)(b,(0,s.Z)({},e))},label:"Itens",id:"ProductPage",Page:(0,l.jsx)(A,{productVariations:o})}]})}var M=n(29815),F=n(24762),D=n(86077),X=n(60105);function U(e){var t=e.name,n=e.style,r=void 0===n?X.h:n,i=e.src,a=e.price,o=e.promoPrice,c=e.onBuyClick,u=e.disabled,f=e.colorPickerEvents,x=e.edit,m=void 0!==x&&x,p=(0,D.y)({defaults:(0,M.Z)(r.cardText).concat((0,M.Z)(r.cardBackground)),labels:["Nome","Pre\xe7o","Desconto","Fundo"],handlers:{onColorSelected:function(e){null===f||void 0===f||f.cardText(e.slice(0,3)),null===f||void 0===f||f.cardBackground(e.slice(3,4))}}}),g=p.currentColors,v=p.ColorPicker,b=p.setColorPickerOpen,j=p.OutClickDivProps,C=(0,D.y)({defaults:r.cardButtonColors,labels:["Texto","Fundo"],handlers:{onColorSelected:null===f||void 0===f?void 0:f.cardButtonColors}}),N=C.currentColors,k=C.ColorPicker,w=C.setColorPickerOpen,S=C.OutClickDivProps;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{backgroundColor:g[3]},className:"flex relative flex-col flex-shrink-0 gap-1 items-center p-1 pb-2 w-[10rem] h-[16.375rem] rounded-[2px]",children:[(0,l.jsx)("img",{draggable:!1,className:"select-none aspect-square rounded-[2px] h-[9.5rem] object-cover ".concat("https://cdn.flowpodcast.com.br/criador/25x0SqMaSNXgwv14g0Xg/assets/medias/gif-5274a623-b672-4e34-8c06-6d1fbc9d0db0.gif"===i?"brightness-0":""),src:i,title:t,alt:t}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 justify-between w-full h-full",children:[(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)("p",{style:{color:g[0]},"data-tip":t,className:"leading-4.5 line-clamp-2 text-[13px]",children:t}),(null===f||void 0===f?void 0:f.cardText)&&(null===f||void 0===f?void 0:f.cardBackground)&&(0,l.jsxs)("div",(0,d.Z)((0,s.Z)({},j),{children:[(0,l.jsx)(h.zY,{hasRipple:!1,Icon:y.Y1G,color:"baseNoBorder",onClick:function(){return b(!0)}}),(0,l.jsx)("div",{className:"fixed z-20 transform translate-x-[calc(32px+8px)] -translate-y-[32px]",children:v})]}))]}),(0,l.jsxs)("div",{className:"flex gap-2 mt-auto",children:[(0,l.jsxs)("p",{style:{color:o?g[2]:g[1]},className:"text-12 font-bold  ".concat(o?"line-through":""," leading-[14px]"),children:["R$ ",(0,O.Tt)((0,O.Dh)(a.toFixed(2)))]}),o&&(0,l.jsxs)("p",{style:{color:g[1]},className:"text-12 font-bold leading-[14px]",children:["R$ ",(0,O.Tt)((0,O.Dh)(o.toFixed(2)))]})]}),(0,l.jsxs)("div",(0,d.Z)((0,s.Z)({className:"relative"},S),{children:[(0,l.jsx)(h.vm,{style:{backgroundColor:N[1],color:N[0]},onClick:c,disabled:{status:u},className:"w-full h-7 text-12 font-bold rounded",size:"small",children:u?"Indispon\xedvel":"Comprar"}),(null===f||void 0===f?void 0:f.cardButtonColors)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"absolute top-1/2 right-0.5 transform -translate-y-1/2",children:(0,l.jsx)(h.zY,{hasRipple:!1,Icon:function(){return(0,l.jsx)(y.Y1G,{size:12})},size:"custom",className:"p-0 w-6 h-6",innerClass:"flex justify-center items-center",color:"baseNoBorder",onClick:function(){return w(!0)}})}),(0,l.jsx)("div",{className:"fixed z-20",children:k})]})]}))]}),o&&(0,l.jsx)("div",{className:"absolute top-0.5 right-0.5 py-1.5 px-1 text-12 font-bold text-white bg-negative-base rounded select-none",children:"Promo\xe7\xe3o"})]}),!m&&(0,l.jsx)(F.Z,{arrowColor:"transparent",effect:"solid",className:"py-2 px-3 text-14 leading-5.5 text-white bg-ui-darkest-plus rounded border-ui-light"})]})}var L={updated_at:null,height:5,images:["https://cdn.flowpodcast.com.br/criador/25x0SqMaSNXgwv14g0Xg/assets/medias/gif-5274a623-b672-4e34-8c06-6d1fbc9d0db0.gif"],sku:"1",status:!0,in_stock:!0,length:5,created_at:"2022-09-23T12:02:10.285-03:00",orderIndex:1,description:"",title:"CAMISETA BRANCA - EXEMPLO",color:"#fff",discount:10,width:5,sizes:[{in_stock:!0,status:!0,label:"P",weight:.3}],value:99.9,weight:.3,has_shippment:!0,tags:[],_id:"exemplo-redonda-careca-branca",category_id:"camisetas",store_id:"YzjstZLNJ0VQXXtzBVbK"};function H(e,t){var n=(0,a.useState)(),d=n[0],u=n[1],f=(0,a.useState)(),x=f[0],h=f[1],m=(0,a.useState)({}),p=m[0],g=m[1],v=(0,a.useState)("TODOS"),b=v[0],j=v[1],C=(0,o.useRouter)(),N=(0,a.useState)(!0),y=N[0],k=N[1],w=(0,a.useMemo)((function(){return d?Object.values("TODOS"===b?d:p[b]):[]}),[p,b,d]),S=(0,a.useMemo)((function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex overflow-x-auto gap-2 justify-start items-start pb-3",children:w.map((function(e){var n=e[0],r=n.title,s=n.value,i=n.discount,a=n.images,o=n.in_stock,c=n.external_resource,d=void 0!==c&&c,u=n.sku,f=n._id;return(0,l.jsx)(U,{style:t,onBuyClick:function(){d?window.open("https://app-git-development-flowpdc.vercel.app/".concat(u,"/p/").concat(f),"_blank"):h(e)},name:r,price:s,src:a[0],disabled:!o,promoPrice:0!==i?s-i:void 0},"".concat(e[0].title,"-group"))}))}),x&&(0,l.jsx)(R,{availableInstallments:[1,2,3],productVariations:x,open:!!x,setOpen:function(){return h(null)}})]})}),[w,x,t]),_=(0,a.useCallback)((function(e){var n=e.colorPickerEvents;return(0,l.jsx)("div",{className:"flex overflow-x-auto gap-2 justify-start items-start pb-3",children:(n||!d?[L]:Object.values("TODOS"===b?d:p[b]).flat().filter((function(e){return!1!==e.status}))).map((function(e,r){var s=e.title,i=e.value,a=e.discount,o=e.images,c=e.in_stock;return(0,l.jsx)(U,{colorPickerEvents:n,style:t,edit:!0,onBuyClick:function(){return null},name:s,price:i,src:o[0],disabled:!c,promoPrice:0!==a?i-a:void 0},"example-group-".concat(r))}))})}),[p,b,d,t]),P=(0,a.useCallback)((0,r.Z)((function(){var t,n,l,a;return(0,i.__generator)(this,(function(o){switch(o.label){case 0:return[4,(0,c.oU)(e)];case 1:return t=o.sent(),n=[],l={},0===(null===t||void 0===t?void 0:t.length)?[2,u([])]:[4,Promise.all(t.map(function(){var e=(0,r.Z)((function(e){var t;return(0,i.__generator)(this,(function(r){return t=function(e){var t=[],n={};return e.forEach((function(e){var n=e.sku.split("==")[0];t.includes(n)||t.push(n)})),t.forEach((function(t){n[t]=e.filter((function(e){return e.sku.split("==")[0]===t}))})),n}(e.items),n.push(t),l[e.title]=t,[2]}))}));return function(t){return e.apply(this,arguments)}}()))];case 2:return o.sent(),g(l),a=n.flat().reduce((function(e,t){return(0,s.Z)({},e,t)}),{}),u(0===Object.keys(a).length?[]:a),k(!1),[2]}}))})),[e]),I=(0,a.useCallback)((function(e){if(d){var t=Object.values(d).find((function(t){return t.some((function(t){return t.title===e}))}));t&&h(t),C.push(C.asPath.split("?")[0],void 0,{shallow:!0})}}),[d,C]);return(0,a.useEffect)((function(){P().catch((function(){return u(void 0)}))}),[P]),{loading:y,products:d,categorizedItems:p,StoreItemDisplay:S,setCurrentCategory:j,StoreItemEditDisplay:_,openProductByName:I}}},86077:function(e,t,n){n.d(t,{y:function(){return v}});var r=n(26042),s=n(69396),i=n(828),l=n(29815),a=n(85893),o=n(67294),c=n(30780),d=n(89583),u=n(46336),f=n(82245),x=n(65033),h=n(99614),m=n(53416),p=n(4480),g=n(65367);function v(e){var t=e.defaults,n=e.handlers,v=e.labels,b=e.className,j=e.noOutClick,C=e.style,N=e.name,y=(0,o.useState)(),k=y[0],w=y[1],S=(0,o.useState)(t),_=S[0],P=S[1],I=(0,o.useState)(t),Z=I[0],O=I[1],z=(0,o.useState)(!1),T=z[0],B=z[1],E=(0,f.K)("color-picker-".concat(k),(function(){return q()})),A=E.register,R=E.OutClickDivProps,M=(0,o.useMemo)((function(){return null!==n&&void 0!==n?n:{}}),[n]),F=M.onColorSelected,D=M.onColorChange,X=(0,o.useState)(0),U=X[0],L=X[1],H=(0,i.Z)((0,p.FV)(u.d),2)[1],V=(0,o.useCallback)((function(e){var t=e.rgb;P((function(e){var n=(0,l.Z)(e);return n[U]="#".concat((0,g.Z)(t.r,t.g,t.b,t.a)).toUpperCase(),D&&D(n),n}))}),[U,D]),q=(0,o.useCallback)((function(){P(Z),L(0),B(!1)}),[Z]),W=(0,o.useCallback)((function(){O(_),F&&F(_),B(!1)}),[_,F]);return(0,o.useEffect)((function(){!j&&A()}),[j,A]),(0,o.useEffect)((function(){w((0,m.x0)(4))}),[]),(0,o.useEffect)((function(){H((function(e){return(0,s.Z)((0,r.Z)({},e),{canScroll:!T})}))}),[T,H]),{ColorPicker:(0,o.useMemo)((function(){return(0,a.jsxs)(a.Fragment,{children:[N&&(0,a.jsx)(h.Z,{name:N,value:JSON.stringify(_)}),T&&(0,a.jsxs)("div",{style:C,className:"flex flex-col text-black items-center h-94.5 bg-ui-white rounded w-[13.75rem] ".concat(b||""),children:[(0,a.jsx)("div",{className:"flex flex-row flex-wrap gap-y-3 justify-between items-center w-full text-14 font-bold p-[0.625rem]",children:v.map((function(e,t){return(0,a.jsx)("div",{style:{width:"".concat((v.length%2!==0||2===v.length?100:200)/v.length,"%")},onClick:function(){return L(t)},className:"".concat(U===t?"text-black":"text-ui-light"," text-center select-none cursor-pointer"),children:e},"color-picker-tab-".concat(t))}))}),(0,a.jsx)("div",{children:(0,a.jsx)(c.xS,{className:"p-0 shadow-none select-none",color:_[U],onChange:V})}),(0,a.jsxs)("div",{className:"flex flex-row justify-center -mt-1 bg-ui-white rounded-b p-[0.625rem]",children:[(0,a.jsx)(x.X4,{onClick:function(){return q()},color:"none",className:"flex justify-center items-center mr-2 w-24 h-8 bg-ui-white rounded border border-black border-solid p-x-5",children:(0,a.jsx)(d.aHS,{})}),(0,a.jsx)(x.X4,{onClick:function(){return W()},color:"confirmation",className:"flex justify-center items-center p-2 w-24 h-8 text-ui-white rounded border border-ui-base border-solid p-x-5",children:(0,a.jsx)(d.l_A,{})})]})]})]})}),[b,T,_,U,q,V,W,v,N,C]),OutClickDivProps:R,setColorPickerOpen:B,currentColors:_}}}}]);