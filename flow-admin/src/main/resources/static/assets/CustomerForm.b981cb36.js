import{_ as e}from"./BasicForm.4b5e3079.js";import{u as o}from"./useForm.c00e8219.js";import{ae as r,g as s}from"./index.734d8392.js";import{k as t,ad as i,a1 as n,K as a,o as d,n as p,Q as l,q as m}from"./vendor.9d9efc92.js";import{_ as u}from"./PageWrapper.d199a033.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>n(i,{placeholder:"请输入",value:e[o],onChange:r=>{e[o]=r.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=t({components:{BasicForm:e,CollapseContainer:r,PageWrapper:u,[i.name]:i},setup(){const{createMessage:e}=s(),[r,{setProps:t}]=o({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:r,schemas:c,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:t}}});f.render=function(e,o,r,s,t,i){const n=a("a-input"),u=a("BasicForm"),c=a("CollapseContainer"),f=a("PageWrapper");return d(),p(f,{title:"自定义组件示例"},{default:l((()=>[m(c,{title:"自定义表单"},{default:l((()=>[m(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(n,{value:e[o],"onUpdate:value":r=>e[o]=r,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
