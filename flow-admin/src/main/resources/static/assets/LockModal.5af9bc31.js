import{d as e,c as r,f as s}from"./index.90af2bb9.js";import{_ as o,a}from"./useModal.5417216c.js";import{_ as t}from"./BasicForm.66d503e8.js";import{u as i}from"./useForm.4f5ed9fc.js";import{u as n}from"./lock.4608c29c.js";import{h as d}from"./header.d801b988.js";import{k as l,f as c,K as m,o as p,n as f,Q as u,q as j,s as x,Y as h,N as v}from"./vendor.56d2c57f.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";var g=l({name:"LockModal",components:{BasicModal:o,BasicForm:t},setup(){const{t:o}=e(),{prefixCls:t}=r("header-lock-modal"),l=s(),m=n(),p=c((()=>{var e;return null==(e=l.getUserInfo)?void 0:e.realName})),[f,{closeModal:u}]=a(),[j,{validateFields:x,resetFields:h}]=i({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:o,prefixCls:t,getRealName:p,register:f,registerForm:j,handleLock:function(){return e=this,r=null,s=function*(){const e=(yield x()).password;u(),m.setLockInfo({isLock:!0,pwd:e}),yield h()},new Promise(((o,a)=>{var t=e=>{try{n(s.next(e))}catch(r){a(r)}},i=e=>{try{n(s.throw(e))}catch(r){a(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(t,i);n((s=s.apply(e,r)).next())}));var e,r,s},avatar:c((()=>{const{avatar:e}=l.getUserInfo;return e||d}))}}});g.render=function(e,r,s,o,a,t){const i=m("BasicForm"),n=m("a-button"),d=m("BasicModal");return p(),f(d,v({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:u((()=>[j("div",{class:`${e.prefixCls}__entry`},[j("div",{class:`${e.prefixCls}__header`},[j("img",{src:e.avatar,class:`${e.prefixCls}__header-img`},null,10,["src"]),j("p",{class:`${e.prefixCls}__header-name`},x(e.getRealName),3)],2),j(i,{onRegister:e.registerForm},null,8,["onRegister"]),j("div",{class:`${e.prefixCls}__footer`},[j(n,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:u((()=>[h(x(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default g;
