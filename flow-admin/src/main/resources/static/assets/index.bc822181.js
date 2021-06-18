var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{_ as s}from"./PageWrapper.45ba9367.js";import{p as u,d as i,aO as m,az as p,ar as f,al as c,h as d,G as v,ae as b}from"./index.bfbdc958.js";import{k as g,r as j,bT as w,D as O,o as y,n as T,s as D,A as P,H as h,K as M,Q as x,q as C}from"./vendor.56d2c57f.js";import"./usePageContext.30475202.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var _=g({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const t=j(""),{t:a}=i();function n(){const{mode:n,value:r}=e,o=function(){const{value:t}=e;let a=0;if(c(t)){const e=t.toString().length>10?t:1e3*t;a=new Date(e).getTime()}else d(t)?a=new Date(t).getTime():v(t)&&(a=t.getTime());return a}();"relative"===n?t.value=function(e){const t=(new Date).getTime(),n=f(e).isBefore(t);let r=t-e;n||(r=-r);let o="",l=a(n?"component.time.before":"component.time.after");o=r<1e3?a("component.time.just"):r<6e4?parseInt(r/1e3)+a("component.time.seconds")+l:r>=6e4&&r<36e5?Math.floor(r/6e4)+a("component.time.minutes")+l:r>=36e5&&r<864e5?Math.floor(r/36e5)+a("component.time.hours")+l:r>=864e5&&r<262386e4?Math.floor(r/864e5)+a("component.time.days")+l:r>=262386e4&&r<=3156786e4&&n?f(e).format("MM-DD-HH-mm"):f(e).format("YYYY");return o}(o):"datetime"===n?t.value=m(r):"date"===n&&(t.value=p(r))}return w(n,1e3*e.step),O((()=>e.value),(()=>{n()}),{immediate:!0}),{date:t}}});_.render=function(e,t,a,n,r,o){return y(),T("span",null,D(e.date),1)};var Y=g({components:{PageWrapper:s,Time:_,CollapseContainer:b},setup(){const e=(new Date).getTime(),s=P({time1:e-18e4,time2:e-2592e5});return u=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&l(e,a,t[a]);return e})({},h(s)),t(u,a({now:e}));var u}});const H=C("br",null,null,-1),W=C("br",null,null,-1),q=C("br",null,null,-1),A=C("br",null,null,-1);Y.render=function(e,t,a,n,r,o){const l=M("Time"),s=M("CollapseContainer"),u=M("PageWrapper");return y(),T(u,{title:"时间组件示例"},{default:x((()=>[C(s,{title:"基础示例"},{default:x((()=>[C(l,{value:e.time1},null,8,["value"]),H,C(l,{value:e.time2},null,8,["value"])])),_:1}),C(s,{title:"定时更新",class:"my-4"},{default:x((()=>[C(l,{value:e.now,step:1},null,8,["value"]),W,C(l,{value:e.now,step:5},null,8,["value"])])),_:1}),C(s,{title:"定时更新"},{default:x((()=>[C(l,{value:e.now,mode:"date"},null,8,["value"]),q,C(l,{value:e.now,mode:"datetime"},null,8,["value"]),A,C(l,{value:e.now},null,8,["value"])])),_:1})])),_:1})};export default Y;
