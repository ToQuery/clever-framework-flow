import{L as I,a as $,cP as U,bf as D,c2 as v,aM as b,b as N,q as O,s as P,e as S,aF as t,o as n,f as A,m as r,z as d,i as f,j as _,l as s,p as a,t as x,F as E,aP as R}from"./index.2df1abd3.js";import{D as V}from"./siteSetting.b6bf29aa.js";import{c as y,u as B}from"./index.0addfd15.js";import{u as F}from"./index.333b79ae.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.ee3d4b15.js";import"./index.705ca173.js";import"./useWindowSizeFn.3d5076e0.js";import"./uniqBy.6c725a77.js";import"./_baseIteratee.fefabcb6.js";import"./get.da017085.js";import"./useContentViewHeight.448b2691.js";import"./index.4d7dc19d.js";import"./useRefs.a1ab229d.js";import"./PlusOutlined.fd61ce8f.js";import"./RedoOutlined.6360f3f7.js";import"./index.8b7dc37d.js";import"./lock.3696e97b.js";const z=$({name:"UserDropdown",components:{Dropdown:U,Menu:D,MenuItem:y(()=>v(()=>import("./DropMenuItem.1cc8cfc7.js"),["assets/DropMenuItem.1cc8cfc7.js","assets/index.2df1abd3.js","assets/index.269e233e.css"])),MenuDivider:D.Divider,LockAction:y(()=>v(()=>import("./LockModal.92156c32.js"),["assets/LockModal.92156c32.js","assets/LockModal.0068f88c.css","assets/index.2df1abd3.js","assets/index.269e233e.css","assets/index.333b79ae.js","assets/index.cea505c1.css","assets/useWindowSizeFn.3d5076e0.js","assets/FullscreenOutlined.ee3d4b15.js","assets/useForm.501e4ed1.js","assets/useForm.9fe0ab02.css","assets/index.ae21daf0.js","assets/index.85b409f6.css","assets/index.321c37f5.js","assets/index.a18cc309.css","assets/useFlexGapSupport.ce5faf33.js","assets/_baseIteratee.fefabcb6.js","assets/get.da017085.js","assets/useSize.562f40a4.js","assets/index.9376414a.js","assets/index.3a3c1369.css","assets/index.63ef69ac.js","assets/index.d0e0ddc5.css","assets/index.c123daea.js","assets/index.509096c8.css","assets/index.1842654c.js","assets/index.9cc25cf1.css","assets/index.6fe01a31.js","assets/index.fd6807f6.css","assets/index.07432cb9.js","assets/index.7b8b5e30.css","assets/eagerComputed.4f79ce77.js","assets/transButton.7cce5fb9.js","assets/index.293eed21.js","assets/index.cd256673.css","assets/useRefs.a1ab229d.js","assets/download.3fe8ec36.js","assets/index.2fe33a0c.js","assets/index.88b1d373.css","assets/ClockCircleOutlined.75f6f42f.js","assets/index.31030814.js","assets/uniqBy.6c725a77.js","assets/lock.3696e97b.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=B(),i=P(),C=S(()=>{const{realName:u="",image:L,desc:M}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:M}}),[o,{openModal:l}]=F();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,C){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),A(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[s("span",{class:a([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:a(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),s("span",{class:a(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:a([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var ce=I(z,[["render",q]]);export{ce as default};
