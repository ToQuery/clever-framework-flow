import{_ as e}from"./BasicForm.4b5e3079.js";import{u as l}from"./useForm.c00e8219.js";import{ae as o}from"./index.734d8392.js";import{_ as n}from"./PageWrapper.d199a033.js";import{k as i,K as a,o as t,n as s,Q as d,q as p,Y as r}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],f=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:()=>{return l=this,o=null,n=function*(){const{validate:l}=e;yield l()},new Promise(((e,i)=>{var a=e=>{try{s(n.next(e))}catch(l){i(l)}},t=e=>{try{s(n.throw(e))}catch(l){i(l)}},s=l=>l.done?e(l.value):Promise.resolve(l.value).then(a,t);s((n=n.apply(l,o)).next())}));var l,o,n}})}];var m=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:n},setup(){const[e,{setProps:o,updateSchema:n,appendSchemaByField:i,removeSchemaByFiled:a}]=l({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[t]=l({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:e,register1:t,schemas:c,setProps:o,changeLabel3:function(){n({field:"field3",label:"字段3 New"})},changeLabel34:function(){n([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){a("field11")}}}});const b={class:"mb-4"},u=r(" 更改字段3label "),h=r(" 同时更改字段3,4label "),P=r(" 往字段3后面插入字段10 "),j=r(" 删除字段11 ");m.render=function(e,l,o,n,i,r){const c=a("a-button"),f=a("BasicForm"),m=a("CollapseContainer"),g=a("PageWrapper");return t(),s(g,{title:"动态表单示例"},{default:d((()=>[p("div",b,[p(c,{onClick:e.changeLabel3,class:"mr-2"},{default:d((()=>[u])),_:1},8,["onClick"]),p(c,{onClick:e.changeLabel34,class:"mr-2"},{default:d((()=>[h])),_:1},8,["onClick"]),p(c,{onClick:e.appendField,class:"mr-2"},{default:d((()=>[P])),_:1},8,["onClick"]),p(c,{onClick:e.deleteField,class:"mr-2"},{default:d((()=>[j])),_:1},8,["onClick"])]),p(m,{title:"动态表单示例,动态根据表单内其他值改变"},{default:d((()=>[p(f,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{class:"mt-5",title:"componentProps动态改变"},{default:d((()=>[p(f,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default m;
