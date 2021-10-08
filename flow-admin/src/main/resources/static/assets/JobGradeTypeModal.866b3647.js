var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t,r)=>new Promise(((a,o)=>{var s=e=>{try{l(r.next(e))}catch(t){o(t)}},i=e=>{try{l(r.throw(e))}catch(t){o(t)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,i);l((r=r.apply(e,t)).next())}));import{B as n,a as d}from"./index.5b995397.js";import{_ as c}from"./BasicForm.ae4250e1.js";import{u}from"./useForm.213a5276.js";import{ae as m,b4 as p,z as f,r as g,u as b,j as h,Z as y,D as w,F as v,a3 as j,w as x,a0 as P}from"./vendor.11d66826.js";/* empty css              */import{c as I,s as O}from"./jobGradeType.b94d3a82.js";const F=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",align:"left"},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,r=t?"启用":"停用";return m(p,{color:t?"green":"red"},(()=>r))}},{title:"排序编号",dataIndex:"orderNo",width:100,align:"left"},{title:"备注",dataIndex:"note",align:"left"}],q=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],M=[{field:"id",label:"",required:!1,component:"Input",show:!1},{field:"code",label:"编码",required:!0,component:"Input",show:!0},{field:"name",label:"名称",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"}]},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"停用"}},{field:"orderNo",label:"排序编号",required:!1,component:"InputNumber",show:!0},{field:"note",label:"备注",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"字符长度不能大于255！"}]}];var _=f({name:"JobGradeTypeModal",components:{BasicModal:n,BasicForm:c},emits:["success","register"],setup(e,{emit:n}){const c=g(!0),[m,{resetFields:p,updateSchema:f,setFieldsValue:y,validate:w}]=u({labelWidth:100,schemas:M,showActionButtonGroup:!1}),[v,{setModalProps:j,closeModal:x}]=d((e=>l(this,null,(function*(){yield p(),j({confirmLoading:!1}),c.value=!!(null==e?void 0:e.isUpdate);let l=e.record;var n,d;yield f([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:40,message:"字符长度不能大于40！"},...(e={id:b(c)&&l&&l.id||"",field:"code",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(t,r)=>r?I({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),b(c)&&y((n=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&i(e,r,t[r]);return e})({},e.record),d={status:1===e.record.status},t(n,r(d))))}))));return{registerModal:v,registerForm:m,getTitle:h((()=>b(c)?"修改":"新增")),handleSubmit:function(){return l(this,null,(function*(){try{j({confirmLoading:!0});const e=yield w();e.status=e.status?1:0,yield O(e),x(),n("success")}finally{j({confirmLoading:!1})}}))}}}});_.render=function(e,t,r,a,o,s){const i=y("BasicForm"),l=y("BasicModal");return w(),v(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:j((()=>[x(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});export{B as J,_,F as c,q as s};
