import{_ as e}from"./BasicForm.4b5e3079.js";import{u as t}from"./useForm.c00e8219.js";import{step1Schemas as a}from"./data.2505cb7f.js";import{k as s,bt as o,ad as n,aV as i,l as r,m as d,K as p,o as l,n as u,q as c,x as m,Y as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.734d8392.js";import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";var v=s({components:{BasicForm:e,[o.name]:o,ASelectOption:o.Option,[n.name]:n,[n.Group.name]:n.Group,[i.name]:i},emits:["next"],setup(e,{emit:s}){const[o,{validate:n}]=t({labelWidth:100,schemas:a,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:function(){return e=this,t=null,a=function*(){try{const e=yield n();s("next",e)}catch(e){}},new Promise(((s,o)=>{var n=e=>{try{r(a.next(e))}catch(t){o(t)}},i=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,i);r((a=a.apply(e,t)).next())}));var e,t,a}});return{register:o}}});const j=m();r("data-v-3c7b1145");const b={class:"step1"},x={class:"step1-form"},h=f(" 支付宝 "),y=f(" 银联 "),_=c("h3",null,"说明",-1),g=c("h4",null,"转账到支付宝账户",-1),w=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),F=c("h4",null,"转账到银行卡",-1),B=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);d();const O=j(((e,t,a,s,o,n)=>{const i=p("a-select-option"),r=p("a-select"),d=p("a-input"),m=p("a-input-group"),f=p("BasicForm"),v=p("a-divider");return l(),u("div",b,[c("div",x,[c(f,{onRegister:e.register},{fac:j((({model:e,field:t})=>[c(m,{compact:""},{default:j((()=>[c(r,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:j((()=>[c(i,{value:"zfb"},{default:j((()=>[h])),_:1}),c(i,{value:"yl"},{default:j((()=>[y])),_:1})])),_:2},1032,["value","onUpdate:value"]),c(d,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),c(v),_,g,w,F,B])}));v.render=O,v.__scopeId="data-v-3c7b1145";export default v;
