import{az as B,a as k,cG as g,I as D,b0 as A,x as b,bZ as T,aB as r,i as d,l as v,C as t,q as u,p as h,D as o,j as P,G as $,aE as y,t as w,H as G}from"./index.e61ad282.js";import{P as L}from"./index.c79f76d5.js";import{A as _}from"./index.dbdde179.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useSize.5a37866d.js";import"./eagerComputed.d3c262c3.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./transButton.2c723edc.js";const N=k({name:"TabsDemo",components:{CollapseContainer:g,PageWrapper:L,[D.name]:D,[_.name]:_},setup(){const e=A(),l=b(""),{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:i,refreshPage:a,setTitle:c}=T(),{createMessage:n}=G();function p(){l.value?c(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function s(E){e(`/feat/tabs/detail/${E}`)}return{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:i,toDetail:s,refreshPage:a,setTabTitle:p,title:l}}}),V={class:"mt-2 flex flex-grow-0"};function W(e,l,m,C,F,f){const i=r("a-alert"),a=r("a-button"),c=r("a-input"),n=r("CollapseContainer"),p=r("PageWrapper");return d(),v(p,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(i,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),h("div",V,[u(a,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[o(" \u8BBE\u7F6ETab\u6807\u9898 ")]),_:1},8,["onClick"]),u(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=s=>e.title=s),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(a,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[o(" \u5173\u95ED\u6240\u6709 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[o(" \u5173\u95ED\u5DE6\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[o(" \u5173\u95ED\u53F3\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[o(" \u5173\u95ED\u5176\u4ED6 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[o(" \u5173\u95ED\u5F53\u524D ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[o(" \u5237\u65B0\u5F53\u524D ")]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(d(),P($,null,y(6,s=>u(a,{key:s,class:"mr-2",onClick:E=>e.toDetail(s)},{default:t(()=>[o(" \u6253\u5F00"+w(s)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var K=B(N,[["render",W]]);export{K as default};
