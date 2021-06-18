var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,r)=>{for(var d in r||(r={}))a.call(r,d)&&l(e,d,r[d]);if(t)for(var d of t(r))o.call(r,d)&&l(e,d,r[d]);return e},d=(e,t,a)=>new Promise(((o,l)=>{var r=e=>{try{s(a.next(e))}catch(t){l(t)}},d=e=>{try{s(a.throw(e))}catch(t){l(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,d);s((a=a.apply(e,t)).next())}));import{_ as s,a as n}from"./useModal.ddd2c5cc.js";import{_ as i}from"./BasicForm.9118d7fd.js";import{u as p}from"./useForm.7b000bd0.js";import{a1 as m,b2 as c,k as u,bV as f,bu as g,by as b,r as y,u as h,f as P,l as I,m as v,K as w,o as x,n as j,q as R,N as F,x as N}from"./vendor.56d2c57f.js";/* empty css              */import{az as O,aO as _,g as C}from"./index.bfbdc958.js";import{a as M}from"./dept.038d9342.js";import{g as k}from"./company.25d73ffc.js";import{c as q,e as D}from"./personal.c46ea1f6.js";import"./uuid.c53863e7.js";/* empty css              */import{a as S}from"./jobGrade.f0e55111.js";import{g as B}from"./positionInfo.7b1c6e3a.js";const T=[{title:"姓名",dataIndex:"name",width:120,align:"left",slots:{customRender:"nameRender"}},{title:"工号",dataIndex:"code",width:100,align:"left"},{title:"状态",dataIndex:"status",width:60,customRender:({record:e})=>{const t=1==~~e.status,a=t?"在职":"离职";return m(c,{color:t?"green":"red"},(()=>a))}},{title:"邮箱",dataIndex:"email",width:120,align:"left"},{title:"手机",dataIndex:"mobile",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"上级领导",dataIndex:"leaderName",width:140,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"未设置"},{title:"角色",dataIndex:"roles",width:300,align:"left",slots:{customRender:"rolesRender"}},{title:"离职日期",dataIndex:"leaveDate",width:100,customRender:({text:e})=>e?O(e):""},{title:"创建时间",dataIndex:"createTime",width:130,customRender:({text:e})=>e?_(e):""}],U=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入姓名/工号/手机/邮箱"},labelWidth:60,colProps:{span:8,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],G=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"姓名",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"姓名不能为空！"},{max:20,message:"字符长度不能大于20！"}]},{field:"code",label:"工号",component:"Input",required:!0,colProps:{span:9}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: 0;",span:5}},{field:"sex",label:"性别",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"男",value:1},{label:"女",value:2}]}},{field:"jobGradeCode",label:"职级",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"positionCode",label:"岗位",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"companyId",label:"所属公司",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"deptId",label:"所属部门",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"name",replaceFields:{title:"name",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{label:"手机",field:"mobile",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"}]},{label:"邮箱",field:"email",component:"Input",colProps:{span:9},rules:[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"}]},{field:"status",label:"在职状态",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"在职",value:1},{label:"离职",value:0}]}},{label:"地址",field:"address",component:"InputTextArea",rules:[{max:400,message:"字符长度不能大于400！"}]}];var L=u({name:"PersonalModal",components:{BasicModal:s,BasicForm:i,PlusOutlined:f,LoadingOutlined:g,Upload:b},emits:["success","register"],setup(e,{emit:t}){const a=y(!0),o=y(""),{createMessage:l}=C(),[s,{setFieldsValue:i,updateSchema:m,resetFields:c,validate:u}]=p({labelWidth:100,schemas:G,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:g,closeModal:b,changeLoading:I}]=n((e=>d(this,null,(function*(){I(!0),c(),g({confirmLoading:!1}),a.value=!!(null==e?void 0:e.isUpdate);const t=yield k(),l=yield S(),d=yield B();let s=e.record;if(yield m([{field:"jobGradeCode",componentProps:{treeData:l}},{field:"positionCode",componentProps:{treeData:d}},{field:"companyId",componentProps:{treeData:t,onChange:e=>{m([{field:"deptId",componentProps:{treeData:[]}}]),i({deptId:""}),e&&M({companyId:e}).then((e=>{m([{field:"deptId",componentProps:{treeData:e}}])}))}}},{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...(e={id:h(a)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"工号"},[{trigger:"blur",validator:(t,a)=>a?q({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(a)){const t=yield M({companyId:e.record.companyId});m([{field:"deptId",componentProps:{treeData:t}}]),i(r({},e.record)),o.value=e.record.headImg}else{if(s.companyId){const e=yield M({companyId:s.companyId});m([{field:"deptId",componentProps:{treeData:e}}]),i(r({},s))}o.value=""}I(!1)})))),v=P((()=>h(a)?"编辑":"新增"));return{registerModal:f,registerForm:s,getTitle:v,imageUrl:o,handleSubmit:function(){return d(this,null,(function*(){try{g({confirmLoading:!0});const e=yield u();e.headImg=o.value,yield D(e),b(),t("success")}finally{g({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return l.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,t)=>{const a=new FileReader;a.addEventListener("load",(()=>t(a.result))),a.readAsDataURL(e)})(e,(e=>{o.value=e})),!1):(l.error("图片不能大于2MB！"),!1)}}}});const V=N();I("data-v-15df6e1a");const $={key:1},E=R("div",{class:"ant-upload-text"},"上传头像",-1);v();const z=V(((e,t,a,o,l,r)=>{const d=w("plus-outlined"),s=w("Upload"),n=w("BasicForm"),i=w("BasicModal");return x(),j(i,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:V((()=>[R(n,{onRegister:e.registerForm,class:"personalForm"},{headImg:V((({model:t,field:a})=>[R(s,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:V((()=>[e.imageUrl?(x(),j("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(x(),j("div",$,[R(d),E]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}));L.render=z,L.__scopeId="data-v-15df6e1a";var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{A as P,L as _,T as c,U as s};
