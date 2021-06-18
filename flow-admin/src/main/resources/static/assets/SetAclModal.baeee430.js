var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,l=(e,o,a)=>new Promise(((t,r)=>{var s=e=>{try{l(a.next(e))}catch(o){r(o)}},i=e=>{try{l(a.throw(e))}catch(o){r(o)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);l((a=a.apply(e,o)).next())}));import{_ as n,a as c}from"./useModal.5417216c.js";import{_ as d}from"./TableImg.72bfe0c2.js";import{_ as u}from"./BasicForm.66d503e8.js";import{u as m}from"./useTable.78c29fd1.js";import{u as p}from"./useForm.4f5ed9fc.js";import{b as f,d as h}from"./group.data.034c1502.js";import{b}from"./account.3fac994f.js";import{_ as g,g as v,s as j}from"./AclCheckboxGroup.94871eaa.js";import{k as x,bt as k,aT as C,r as S,u as A,K as y,o as I,n as T,Q as O,q as w,N as B,Y as F}from"./vendor.56d2c57f.js";/* empty css              */import{aP as M}from"./index.90af2bb9.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.886b9f44.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";/* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";var P=x({name:"SetAclModal",components:{BasicModal:n,BasicTable:d,BasicForm:u,Select:k,Checkbox:C,CheckboxGroup:C.Group,AclCheckboxGroup:g},emits:["success","register"],setup(e,{emit:n}){const d=S(!0),u=S(""),g=S([]),x=S(!0),k=S(!1),C=S(!1),[y,{setFieldsValue:I,updateSchema:T,resetFields:O,validate:w}]=p({labelWidth:100,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:0}}),[B,{getDataSource:F,setTableData:P,reload:_,expandAll:R}]=m({title:"",size:"small",dataSource:g,loading:x,immediate:!1,searchInfo:{},columns:h,formConfig:{labelWidth:120},canResize:!0,maxHeight:400,isTreeTable:!0,useSearchForm:!1,showTableSetting:!1,bordered:!1,showIndexColumn:!1,pagination:!1}),[G,{setModalProps:L,closeModal:E}]=c((e=>l(this,null,(function*(){if(O(),L({confirmLoading:!1,title:"给组【"+e.record.name+"("+e.record.sn+")】设置权限"}),d.value=!!(null==e?void 0:e.isUpdate),A(d)){let n=e.record.groups||[];n=n.map((e=>e.id)),I((l=((e,o)=>{for(var a in o||(o={}))r.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))s.call(o,a)&&i(e,a,o[a]);return e})({},e.record),o(l,a({groups:n})))),u.value=e.record.id}var l;x.value=!0,v({groupId:e.record.id}).then((e=>{U(e),g.value=e,x.value=!1,setTimeout((()=>{R()}))}))}))));function U(e){let o=0,a=0,t=0;M(e,(e=>{e.pvs&&e.pvs.forEach((e=>{o++,e.flag?a++:t++}))})),a===o?(C.value=!0,k.value=!1):t===o?(C.value=!1,k.value=!1):k.value=!0}return{registerTable:B,registerModal:G,indeterminate:k,registerForm:y,checkAllBox:C,handelChangeCheckAllStatus:function(){v({groupId:u.value}).then((e=>{U(e)}))},checkAll:e=>{x.value=!0,k.value=!1,j({checked:e.target.checked?1:0,aclInfo:{releaseId:A(u)}}).then((o=>{M(g.value,(o=>{o.pvs&&o.pvs.forEach((o=>{o.flag=e.target.checked}))})),P(g.value),x.value=!1,setTimeout((()=>{R()}))})).catch((()=>{x.value=!1}))},handleSubmit:function(){return l(this,null,(function*(){try{L({confirmLoading:!0});const e=yield w();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield b(e),E(),n("success")}finally{L({confirmLoading:!1})}}))}}}});const _=F("全选");P.render=function(e,o,a,t,r,s){const i=y("Checkbox"),l=y("AclCheckboxGroup"),n=y("BasicTable"),c=y("BasicForm"),d=y("BasicModal");return I(),T(d,B(e.$attrs,{onRegister:e.registerModal,onOk:e.handleSubmit}),{default:O((()=>[w(c,{onRegister:e.registerForm},{acls:O((({model:a,field:t})=>[w(n,{value:a[t],"onUpdate:value":e=>a[t]=e,onRegister:e.registerTable},{customTitle:O((()=>[w("span",null,[w(i,{checked:e.checkAllBox,"onUpdate:checked":o[1]||(o[1]=o=>e.checkAllBox=o),indeterminate:e.indeterminate,onClick:e.checkAll},{default:O((()=>[_])),_:1},8,["checked","indeterminate","onClick"])])])),pvs:O((({record:o})=>[w(l,{onChangeCheckAllStatus:e.handelChangeCheckAllStatus,checkboxList:o.pvs.map((e=>({label:e.name,value:e.position,checked:e.flag}))),groupId:a.id,moduleSn:o.sn,moduleId:o.id},null,8,["onChangeCheckAllStatus","checkboxList","groupId","moduleSn","moduleId"])])),_:2},1032,["value","onUpdate:value","onRegister"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","onOk"])};export default P;
