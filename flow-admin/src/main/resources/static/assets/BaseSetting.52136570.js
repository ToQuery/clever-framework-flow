var d=(o,s,r)=>new Promise((c,i)=>{var l=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,t);a((r=r.apply(o,s)).next())});import{a as v,cG as h,E as B,w as F,o as g,h as A,az as b,H as w,aB as p,i as I,l as S,C as u,q as n,p as _,D as k,fk as y,fl as E}from"./index.e61ad282.js";/* empty css               */import{B as R}from"./BasicForm.027cbf67.js";import{u as U}from"./useForm.81406efc.js";import{a as V}from"./index.7677599f.js";import{h as $}from"./header.d801b988.js";import{a as x}from"./account.d3cb3c6a.js";import{b as M}from"./data.08d7c751.js";import{u as N}from"./upload.81e70117.js";import{R as G,C as T}from"./index.6d7de824.js";/* empty css              */import"./index.9f50e000.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.6e0a0264.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.9233793b.js";import"./get.bca7403a.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.a492e5cd.js";import"./useWindowSizeFn.27de1b1b.js";import"./FullscreenOutlined.3a424424.js";import"./index.dbdde179.js";import"./index.e8295ad9.js";import"./uuid.2b29000c.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./uniqBy.8c214189.js";import"./index.f6c9d1b9.js";import"./index.5621adef.js";const q=v({components:{BasicForm:R,CollapseContainer:h,Button:B,ARow:G,ACol:T,CropperAvatar:V},setup(){const{createMessage:o}=w(),s=F(),[r,{setFieldsValue:c}]=U({labelWidth:120,schemas:M,showActionButtonGroup:!1});g(()=>d(this,null,function*(){const t=yield x();c(t)}));const i=A(()=>{const{avatar:t}=s.getUserInfo;return t||$});function l(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:N,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),z=o=>(y("data-v-249137cb"),o=o(),E(),o),D={class:"change-avatar"},H=z(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function P(o,s,r,c,i,l){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),C=p("CollapseContainer");return I(),S(C,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",D,[H,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[k(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var Go=b(q,[["render",P],["__scopeId","data-v-249137cb"]]);export{Go as default};
