var e=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(r,i,t)=>i in r?e(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,s=(e,r,i)=>new Promise(((t,o)=>{var s=e=>{try{n(i.next(e))}catch(r){o(r)}},a=e=>{try{n(i.throw(e))}catch(r){o(r)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,r)).next())}));import{_ as a,a as n}from"./useModal.5417216c.js";import{_ as d}from"./BasicForm.66d503e8.js";import{u as l}from"./useForm.4f5ed9fc.js";import{f as m}from"./group.data.034c1502.js";import{c,s as u}from"./group.e5107716.js";import{k as f,r as p,u as g,f as j,K as b,o as h,n as y,Q as v,q as x,N as w}from"./vendor.56d2c57f.js";import"./index.90af2bb9.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";var P=f({name:"GroupModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=p(!0),[f,{resetFields:b,updateSchema:h,setFieldsValue:y,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[x,{setModalProps:w,closeModal:P}]=n((e=>s(this,null,(function*(){yield b(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield h([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{trigger:["change","blur"],max:64,message:"字符长度不能大于64！"},...(e={id:g(d)&&s&&s.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,i)=>i?c({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(d)&&y(((e,s)=>{for(var a in s||(s={}))i.call(s,a)&&o(e,a,s[a]);if(r)for(var a of r(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:x,registerForm:f,getTitle:j((()=>g(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{const e=yield v();w({confirmLoading:!0}),yield u(e),P(),a("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,r,i,t,o,s){const a=b("BasicForm"),n=b("BasicModal");return h(),y(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[x(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
