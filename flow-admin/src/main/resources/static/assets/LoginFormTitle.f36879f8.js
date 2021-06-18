var e,r,t=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,i=(e,r)=>{for(var t in r||(r={}))n.call(r,t)&&l(e,t,r[t]);if(o)for(var t of o(r))s.call(r,t)&&l(e,t,r[t]);return e},a=(e,r,t)=>new Promise(((o,n)=>{var s=e=>{try{i(t.next(e))}catch(r){n(r)}},l=e=>{try{i(t.throw(e))}catch(r){n(r)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,l);i((t=t.apply(e,r)).next())}));import{d as c}from"./index.90af2bb9.js";import{r as u,f as g,u as m,k as d,o as f,n as y,s as p}from"./vendor.56d2c57f.js";(r=e||(e={}))[r.LOGIN=0]="LOGIN",r[r.REGISTER=1]="REGISTER",r[r.RESET_PASSWORD=2]="RESET_PASSWORD",r[r.MOBILE=3]="MOBILE",r[r.QR_CODE=4]="QR_CODE";const P=u(0);function h(){function e(e){P.value=e}return{setLoginState:e,getLoginState:g((()=>P.value)),handleBackLogin:function(){e(0)}}}function v(e){return{validForm:function(){return a(this,null,(function*(){const r=m(e);if(!r)return;return yield r.validate()}))}}}function S(e){const{t:r}=c(),t=g((()=>b(r("sys.login.accountPlaceholder")))),o=g((()=>b(r("sys.login.passwordPlaceholder")))),n=g((()=>b(r("sys.login.smsPlaceholder")))),s=g((()=>b(r("sys.login.mobilePlaceholder")))),l=(e,t)=>a(this,null,(function*(){return t?Promise.resolve():Promise.reject(r("sys.login.policyPlaceholder"))})),u=e=>(t,o)=>a(this,null,(function*(){return o?o!==e?Promise.reject(r("sys.login.diffPwd")):Promise.resolve():Promise.reject(r("sys.login.passwordPlaceholder"))}));return{getFormRules:g((()=>{const r=m(t),a=m(o),c={sms:m(n),mobile:m(s)};switch(m(P)){case 1:return i({account:r,password:a,confirmPassword:[{validator:u(null==e?void 0:e.password),trigger:"change"}],policy:[{validator:l,trigger:"change"}]},c);case 2:return i({account:r},c);case 3:return c;default:return{account:r,password:a}}}))}}function b(e){return[{required:!0,message:e,trigger:"change"}]}var E=d({name:"LoginFormTitle",setup(){const{t:r}=c(),{getLoginState:t}=h();return{getFormTitle:g((()=>({[e.RESET_PASSWORD]:r("sys.login.forgetFormTitle"),[e.LOGIN]:r("sys.login.signInFormTitle"),[e.REGISTER]:r("sys.login.signUpFormTitle"),[e.MOBILE]:r("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:r("sys.login.qrSignInFormTitle")}[m(t)])))}}});const O={class:"font-bold text-2xl xl:text-3xl enter-x text-center xl:text-left mb-6"};E.render=function(e,r,t,o,n,s){return f(),y("h2",O,p(e.getFormTitle),1)};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});export{e as L,E as _,S as a,v as b,R as c,h as u};
