var C=Object.defineProperty;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))_.call(t,e)&&E(a,e,t[e]);if(h)for(var e of h(t))x.call(t,e)&&E(a,e,t[e]);return a};var g=(a,t,e)=>new Promise((s,n)=>{var c=u=>{try{l(e.next(u))}catch(i){n(i)}},r=u=>{try{l(e.throw(u))}catch(i){n(i)}},l=u=>u.done?s(u.value):Promise.resolve(u.value).then(c,r);l((e=e.apply(a,t)).next())});import{B as P,a as S}from"./index.a492e5cd.js";import{B as A}from"./BasicForm.027cbf67.js";import{u as v}from"./useForm.81406efc.js";import{bV as N,az as R,a as q,x as k,b0 as $,k as B,h as T,aB as y,i as K,l as L,C as O,q as V,aC as j}from"./index.e61ad282.js";import{T as z}from"./index.6e0a0264.js";import{e as U,s as W}from"./modelInfo.ab994ee5.js";import{a as G}from"./app.d217a613.js";const le=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"categoryName",width:100,align:"left"},{title:"\u7CFB\u7EDF",dataIndex:"appName",width:100,align:"left"},{title:"\u5E94\u7528\u8303\u56F4",dataIndex:"appliedRangeName",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"statusName",width:70,align:"center",customRender:({record:a})=>{const{status:t,statusName:e}=a;var s="";return~~t===2?s="yellow":~~t===3?s="green":~~t===4?s="red":s="gray",N(z,{color:s},()=>e)}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",width:120,align:"left"}],ne=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"\u7CFB\u7EDF",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Y=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}]},{field:"modelKey",label:"\u6807\u8BC6",component:"Input",required:!0},{field:"appSn",label:"\u6240\u5C5E\u7CFB\u7EDF",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}],Z=q({name:"ModelInfoModal",components:{BasicModal:P,BasicForm:A},emits:["success","register"],setup(a,{emit:t}){const e=k(!0),s=$(),[n,{setFieldsValue:c,updateSchema:r,resetFields:l,validate:u}]=v({labelWidth:100,schemas:Y,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(d,m)=>m?U({id:o.id,field:o.field,fieldValue:m,fieldName:o.fieldName}).then(F=>F?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[D,{setModalProps:f,changeLoading:p,closeModal:I}]=S(o=>g(this,null,function*(){l(),f({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate),p(!0);let d=null;try{d=yield G()}finally{p(!1)}let m=o.record;yield r([{field:"appSn",componentProps:{options:d,labelField:"id"}},{field:"modelKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:150,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E150\uFF01"},...i({id:B(e)&&m&&m.id||"",field:"modelKey",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),B(e)&&c(b({},o.record))})),w=T(()=>B(e)?"\u7F16\u8F91":"\u65B0\u589E");function M(){return g(this,null,function*(){try{f({confirmLoading:!0});const o=yield u(),d=yield W(o);s("/flowable/bpmn/designer?modelId="+d.modelId),I(),t("success")}finally{p(!1),f({confirmLoading:!1})}})}return{registerModal:D,registerForm:n,getTitle:w,handleSubmit:M}}});function H(a,t,e,s,n,c){const r=y("BasicForm"),l=y("BasicModal");return K(),L(l,j(a.$attrs,{onRegister:a.registerModal,title:a.getTitle,onOk:a.handleSubmit}),{default:O(()=>[V(r,{onRegister:a.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var J=R(Z,[["render",H]]),re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{J as M,re as a,le as c,ne as s};
