import{L as B,a as f,C as _,bX as w,bQ as v,h as P,aF as t,o as h,f as F,m as o,z as s,B as M,F as g}from"./index.2df1abd3.js";import{u as C}from"./index.333b79ae.js";import k from"./index.17eb3ba4.js";import{A}from"./ApartmentOutlined.66997c3d.js";import"./useWindowSizeFn.3d5076e0.js";import"./FullscreenOutlined.ee3d4b15.js";import"./index.e96bd3d2.js";import"./index.c03d9706.js";import"./index.d567a6cf.js";import"./useSize.562f40a4.js";import"./eagerComputed.4f79ce77.js";import"./useContentViewHeight.448b2691.js";import"./ArrowLeftOutlined.a6198073.js";import"./index.9dd6ae39.js";import"./transButton.7cce5fb9.js";import"./index.c123daea.js";import"./index.293eed21.js";import"./useFlexGapSupport.ce5faf33.js";import"./index.aaff26e3.js";import"./throttleByAnimationFrame.52680a28.js";import"./index.fb60660a.js";import"./Viewer.ca2e1abd.js";import"./process.b9f6d856.js";import"./PlusOutlined.fd61ce8f.js";const E=f({name:"BaseActionButtons",components:{Button:_,Tooltip:w,ApartmentOutlined:A,BpmnPreviewModal:k},setup(e,{emit:l}){const{currentRoute:a}=v(),{params:{modelKey:m},query:{taskId:c,procInstId:u}}=P(a),[r,{openModal:n,setModalProps:p}]=C();function i(){n(!0,{modelKey:m,procInstId:u||"",isUpdate:!0}),p({width:900,minHeight:400,wrapperFooterOffset:20,useWrapper:!1,title:"\u67E5\u770B - \u56FE\u9884\u89C8",showOkBtn:!1,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:r,handleCloseFunc:d,showFlowDiagram:i}}});function I(e,l,a,m,c,u){const r=t("ApartmentOutlined"),n=t("Button"),p=t("Tooltip"),i=t("BpmnPreviewModal");return h(),F(g,null,[o(p,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[o(n,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[o(r)]),_:1},8,["onClick"])]),_:1}),o(i,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Z=B(E,[["render",I]]);export{Z as default};
