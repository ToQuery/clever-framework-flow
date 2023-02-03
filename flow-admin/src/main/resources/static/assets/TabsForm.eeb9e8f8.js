var _=(a,n,r)=>new Promise((i,b)=>{var c=s=>{try{u(r.next(s))}catch(o){b(o)}},m=s=>{try{u(r.throw(s))}catch(o){b(o)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(c,m);u((r=r.apply(a,n)).next())});import{az as h,a as k,cG as E,x as v,ar as T,aB as f,bT as $,z as A,i as C,l as y,C as p,p as D,q as F,D as g,j as P,G as K,aE as V,aC as w,dN as S,H as R}from"./index.ef013507.js";import{T as B}from"./index.09ae92e2.js";import{P as N}from"./index.4dfdb4ab.js";import{B as W}from"./BasicForm.d8aa86d3.js";import{u as j}from"./useForm.d7bb3373.js";import"./useRefs.5ed2b70f.js";import"./PlusOutlined.95fc7300.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./eagerComputed.487f958f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./index.edd8ff4a.js";import"./index.4ff668bf.js";import"./FullscreenOutlined.d97e6502.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const G=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:N,CollapseContainer:E,BasicForm:W},setup(){const{createMessage:a}=R(),n=v("tabs2"),r=v(!1),i=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],d={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=d,i.push({key:e,tab:e,forceRender:!0,Form:j(Object.assign({schemas:l},b))})}function m(){return _(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return _(this,null,function*(){let o="";r.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:d,getFieldsValue:t}=l.Form[1];yield d(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{r.value=!1}})}function s(){return _(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(c)}})}return{omit:T,loading:r,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:s}}}),M={class:"mb-4"};function z(a,n,r,i,b,c){const m=f("a-button"),u=f("BasicForm"),s=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),l=f("PageWrapper"),d=$("loading");return A((C(),y(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[D("div",M,[F(m,{onClick:a.handleReset,class:"mr-2"},{default:p(()=>[g(" \u91CD\u7F6E\u8868\u5355 ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSetValues,class:"mr-2"},{default:p(()=>[g(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:p(()=>[g(" \u63D0\u4EA4\u8868\u5355 ")]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:p(()=>[(C(!0),P(K,null,V(a.tabsFormSchema,t=>(C(),y(s,w({key:t.key},a.omit(t,["Form","key"])),{default:p(()=>[F(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var Re=h(G,[["render",z]]);export{Re as default};
