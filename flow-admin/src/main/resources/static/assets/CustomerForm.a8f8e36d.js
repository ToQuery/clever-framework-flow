import{B as C}from"./BasicForm.d977d74c.js";import{u as B}from"./useForm.d5452096.js";import{az as E,a as g,cE as F,I as n,aB as e,o as h,k as b,B as p,p as i,bU as v,G as A}from"./index.7ea10544.js";import{P}from"./index.0b8e7721.js";/* empty css              *//* empty css               */import"./index.5d6fdc93.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.6954dcaa.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.c6794bd1.js";import"./get.4066932b.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.61c914e7.js";import"./useWindowSizeFn.3dc14e02.js";import"./FullscreenOutlined.8864dded.js";import"./index.d3af8cb2.js";import"./index.32756aa0.js";import"./uuid.2b29000c.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,k,x){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
