import{_ as e,u as a,a as o,b as s,L as t}from"./LoginFormTitle.f36879f8.js";import{k as l,aJ as r,aU as n,ad as i,aT as d,r as m,A as c,f as u,u as f,K as p,o as g,n as h,q as v,Q as w,Y as y,s as x,V as b,X as k}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as D}from"./StrengthMeter.c038c542.js";import{_}from"./CountdownInput.d660d8a6.js";import{d as F}from"./index.90af2bb9.js";var I=l({name:"RegisterPasswordForm",components:{Button:r,Form:n,FormItem:n.Item,Input:i,InputPassword:i.Password,Checkbox:d,StrengthMeter:D,CountdownInput:_,LoginFormTitle:e},setup(){const{t:e}=F(),{handleBackLogin:l,getLoginState:r}=a(),n=m(),i=m(!1),d=c({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:p}=o(d),{validForm:g}=s(n);return{t:e,formRef:n,formData:d,getFormRules:p,handleRegister:function(){return e=this,a=null,o=function*(){yield g()},new Promise(((s,t)=>{var l=e=>{try{n(o.next(e))}catch(a){t(a)}},r=e=>{try{n(o.throw(e))}catch(a){t(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,r);n((o=o.apply(e,a)).next())}));var e,a,o},loading:i,handleBackLogin:l,getShow:u((()=>f(r)===t.REGISTER))}}});I.render=function(e,a,o,s,t,l){const r=p("LoginFormTitle"),n=p("Input"),i=p("FormItem"),d=p("CountdownInput"),m=p("StrengthMeter"),c=p("InputPassword"),u=p("Checkbox"),f=p("Button"),D=p("Form");return e.getShow?(g(),h(b,{key:0},[v(r,{class:"enter-x"}),v(D,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:w((()=>[v(i,{name:"account",class:"enter-x"},{default:w((()=>[v(n,{size:"large",value:e.formData.account,"onUpdate:value":a[1]||(a[1]=a=>e.formData.account=a),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"mobile",class:"enter-x"},{default:w((()=>[v(n,{size:"large",value:e.formData.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formData.mobile=a),placeholder:e.t("sys.login.mobile")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"sms",class:"enter-x"},{default:w((()=>[v(d,{size:"large",value:e.formData.sms,"onUpdate:value":a[3]||(a[3]=a=>e.formData.sms=a),placeholder:e.t("sys.login.smsCode")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"password",class:"enter-x"},{default:w((()=>[v(m,{size:"large",value:e.formData.password,"onUpdate:value":a[4]||(a[4]=a=>e.formData.password=a),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"confirmPassword",class:"enter-x"},{default:w((()=>[v(c,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":a[5]||(a[5]=a=>e.formData.confirmPassword=a),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])])),_:1}),v(i,{class:"enter-x",name:"policy"},{default:w((()=>[v(u,{checked:e.formData.policy,"onUpdate:checked":a[6]||(a[6]=a=>e.formData.policy=a),size:"small"},{default:w((()=>[y(x(e.t("sys.login.policy")),1)])),_:1},8,["checked"])])),_:1}),v(f,{type:"primary",class:"enter-x",size:"large",block:"",onClick:e.handleRegister,loading:e.loading},{default:w((()=>[y(x(e.t("sys.login.registerButton")),1)])),_:1},8,["onClick","loading"]),v(f,{size:"large",block:"",class:"enter-x mt-4",onClick:e.handleBackLogin},{default:w((()=>[y(x(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])),_:1},8,["model","rules"])],64)):k("",!0)};export default I;
