import{_ as e}from"./BasicForm.9118d7fd.js";import{ae as t,g as a}from"./index.bfbdc958.js";import{M as o}from"./index.03f98dc4.js";import{_ as r}from"./PageWrapper.45ba9367.js";import{k as s,a1 as i,K as n,o as d,n as m,Q as p,q as l}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.ddd2c5cc.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";import"./createAsyncComponent.f219ea68.js";import"./usePageContext.30475202.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>i(o,{value:e[t],onChange:a=>{e[t]=a}})}];var u=s({components:{BasicForm:e,CollapseContainer:t,PageWrapper:r},setup(){const{createMessage:e}=a();return{schemas:c,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});u.render=function(e,t,a,o,r,s){const i=n("BasicForm"),c=n("CollapseContainer"),u=n("PageWrapper");return d(),m(u,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[l(c,{title:"MarkDown表单"},{default:p((()=>[l(i,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
