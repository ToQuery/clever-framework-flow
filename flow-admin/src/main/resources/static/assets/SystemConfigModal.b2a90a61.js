var x=Object.defineProperty;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(e,t,u)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,D=(e,t)=>{for(var u in t||(t={}))I.call(t,u)&&y(e,u,t[u]);if(B)for(var u of B(t))A.call(t,u)&&y(e,u,t[u]);return e};var p=(e,t,u)=>new Promise((n,i)=>{var c=a=>{try{o(u.next(a))}catch(l){i(l)}},r=a=>{try{o(u.throw(a))}catch(l){i(l)}},o=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,r);o((u=u.apply(e,t)).next())});import{B as N,a as _}from"./index.4ff668bf.js";import{B as M}from"./BasicForm.d8aa86d3.js";import{u as P}from"./useForm.d7bb3373.js";import{dP as m,az as q,a as k,x as v,k as f,h as V,aB as h,i as R,l as K,C as O,q as $,aC as z}from"./index.ef013507.js";import{F as w}from"./constantEnum.bf6653fb.js";const ee=e=>{const t=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let u=e||{};u&&(delete u.pageNum,delete u.pageSize);const n={query:t,entity:u};return m.post({url:"/flow/base/systemConfig/getPagerModel",params:n})},T=e=>m.post({url:"/flow/base/systemConfig/saveOrUpdate",params:e}),ue=e=>m.post({url:"/flow/base/systemConfig/delete",params:e}),L=e=>m.post({url:"/flow/base/systemConfig/checkEntityExist",params:e}),te=[{title:"\u540D\u79F0",dataIndex:"configName",align:"left"},{title:"\u6807\u8BC6",dataIndex:"configSn",width:100,align:"left"},{title:"\u914D\u7F6EKey",dataIndex:"configKey",width:100,align:"left"},{title:"\u914D\u7F6EValue",dataIndex:"configValue",align:"left"},{title:"\u5907\u6CE8",dataIndex:"remark",align:"left"},{title:"\u6392\u5E8F",dataIndex:"configOrder",width:80},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],se=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],U=[{field:"id",label:"ID",component:"Input",show:!1},{field:"configName",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:30,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E30\uFF01"}]},{field:"configSn",label:"\u6807\u8BC6",required:!0,component:"Input"},{field:"configKey",label:"\u914D\u7F6EKey",required:!0,component:"Input"},{field:"configValue",label:"\u914D\u7F6EValue",component:"Input",rules:[{max:100,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E100\uFF01"}]},{field:"configOrder",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{field:"remark",label:"\u63CF\u8FF0",required:!1,component:"InputTextArea",rules:[{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}]}],j=k({name:"SystemConfigModal",components:{BasicModal:N,BasicForm:M},emits:["success","register"],setup(e,{emit:t}){const u=v(!0),[n,{resetFields:i,updateSchema:c,setFieldsValue:r,validate:o}]=P({labelWidth:100,schemas:U,showActionButtonGroup:!1}),a=s=>[{trigger:"blur",validator:(d,E)=>E?L({id:s.id,field:s.field,fieldValue:E,fieldName:s.fieldName}).then(g=>g?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(g=>Promise.reject(g)):Promise.resolve()}],[l,{setModalProps:F,closeModal:S}]=_(s=>p(this,null,function*(){yield i(),F({confirmLoading:!1}),u.value=!!(s!=null&&s.isUpdate);let d=s.record;yield c([{field:"configSn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(w.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:60,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E60\uFF01"},...a({id:f(u)&&d&&d.id||"",field:"configSn",fieldValue:"",fieldName:"\u6807\u8BC6"})]},{field:"configKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u914D\u7F6EKey\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(w.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:30,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E30\uFF01"},...a({id:f(u)&&d&&d.id||"",field:"configKey",fieldValue:"",fieldName:"\u914D\u7F6EKey"})]}]),f(u)&&r(D({},s.record))})),b=V(()=>f(u)?"\u4FEE\u6539":"\u65B0\u589E");function C(){return p(this,null,function*(){try{F({confirmLoading:!0});const s=yield o();yield T(s),S(),t("success")}finally{F({confirmLoading:!1})}})}return{registerModal:l,registerForm:n,getTitle:b,handleSubmit:C}}});function W(e,t,u,n,i,c){const r=h("BasicForm"),o=h("BasicModal");return R(),K(o,z(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:O(()=>[$(r,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var G=q(j,[["render",W]]),ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});export{G as S,ae as a,te as c,ue as d,ee as g,se as s};
