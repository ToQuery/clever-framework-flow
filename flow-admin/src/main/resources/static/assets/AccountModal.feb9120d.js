var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t,o)=>new Promise(((a,r)=>{var n=e=>{try{i(o.next(e))}catch(t){r(t)}},l=e=>{try{i(o.throw(e))}catch(t){r(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,l);i((o=o.apply(e,t)).next())}));import{_ as l,a as i}from"./useModal.b121dc3d.js";import{_ as s}from"./BasicForm.4b5e3079.js";import{u as d}from"./useForm.c00e8219.js";import{b as c,a as p}from"./system.315b3030.js";import{k as u,r as m,f,u as b,K as h,o as g,n as y,Q as v,q as w,N as I}from"./vendor.9d9efc92.js";const P=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],F=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],j=[{field:"account",label:"用户名",component:"Input",required:!0},{field:"pwd",label:"密码",component:"InputPassword",required:!0,show:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:c,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var x=u({name:"AccountModal",components:{BasicModal:l,BasicForm:s},emits:["success","register"],setup(e,{emit:l}){const s=m(!0),[c,{setFieldsValue:u,updateSchema:h,resetFields:g,validate:y}]=d({labelWidth:100,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:w,closeModal:I}]=i((e=>n(this,null,(function*(){g(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),b(s)&&u(((e,n)=>{for(var l in n||(n={}))o.call(n,l)&&r(e,l,n[l]);if(t)for(var l of t(n))a.call(n,l)&&r(e,l,n[l]);return e})({},e.record));const n=yield p();h([{field:"pwd",show:!b(s)},{field:"dept",componentProps:{treeData:n}}])}))));return{registerModal:v,registerForm:c,getTitle:f((()=>b(s)?"编辑账号":"新增账号")),handleSubmit:function(){return n(this,null,(function*(){try{w({confirmLoading:!0});yield y();I(),l("success")}finally{w({confirmLoading:!1})}}))}}}});x.render=function(e,t,o,a,r,n){const l=h("BasicForm"),i=h("BasicModal");return g(),y(i,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{O as A,x as _,P as c,F as s};
