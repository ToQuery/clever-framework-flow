import{_ as e}from"./Description.vue_vue&type=script&lang.4377d847.js";import{u as a}from"./useDescription.32e1df18.js";import{_ as t}from"./PageWrapper.75f0cc87.js";import{k as s,K as r,o as i,n,Q as o,q as l}from"./vendor.56d2c57f.js";/* empty css              */import"./index.90af2bb9.js";import"./usePageContext.765b9a25.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";const c={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},m=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=s({components:{Description:e,PageWrapper:t},setup(){const[e]=a({title:"useDescription",data:c,schema:m}),[t]=a({title:"无边框",bordered:!1,data:c,schema:m});return{mockData:c,schema:m,register:e,register1:t}}});p.render=function(e,a,t,s,c,m){const p=r("Description"),d=r("PageWrapper");return i(),n(d,{title:"详情组件示例"},{default:o((()=>[l(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),l(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default p;
