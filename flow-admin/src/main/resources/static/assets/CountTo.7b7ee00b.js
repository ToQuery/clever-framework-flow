import{p as a,al as t}from"./index.734d8392.js";import{k as l,A as r,I as n,f as e,D as i,u as o,a6 as s,o as u,n as c,s as p}from"./vendor.9d9efc92.js";var d=l({name:"CountTo",props:{startVal:a.number.def(0),endVal:a.number.def(2020),duration:a.number.def(1300),autoplay:a.bool.def(!0),decimals:{type:Number,required:!1,default:0,validator:a=>a>=0},color:{type:String,require:!1},decimal:a.string.def("."),separator:a.string.def(","),prefix:a.string.def(""),suffix:a.string.def(""),useEasing:a.bool.def(!0),easingFn:{type:Function,default:(a,t,l,r)=>l*(1-Math.pow(2,-10*a/r))*1024/1023+t}},emits:["mounted","callback"],setup(a,{emit:l}){const u=r({localStartVal:a.startVal,displayValue:V(a.startVal),printVal:null,paused:!1,localDuration:a.duration,startTime:null,timestamp:null,remaining:null,rAF:null,color:null});n((()=>{a.autoplay&&p(),l("mounted")}));const c=e((()=>a.startVal>a.endVal));function p(){const{startVal:t,duration:l,color:r}=a;u.localStartVal=t,u.startTime=null,u.localDuration=l,u.color=r,u.paused=!1,u.rAF=requestAnimationFrame(m)}function d(){u.startTime=null,u.localDuration=+u.remaining,u.localStartVal=+u.printVal,requestAnimationFrame(m)}function m(t){const{useEasing:r,easingFn:n,endVal:e}=a;u.startTime||(u.startTime=t),u.timestamp=t;const i=t-u.startTime;u.remaining=u.localDuration-i,r?o(c)?u.printVal=u.localStartVal-n(i,0,u.localStartVal-e,u.localDuration):u.printVal=n(i,u.localStartVal,e-u.localStartVal,u.localDuration):o(c)?u.printVal=u.localStartVal-(u.localStartVal-e)*(i/u.localDuration):u.printVal=u.localStartVal+(e-u.localStartVal)*(i/u.localDuration),o(c)?u.printVal=u.printVal<e?e:u.printVal:u.printVal=u.printVal>e?e:u.printVal,u.displayValue=V(u.printVal),i<u.localDuration?u.rAF=requestAnimationFrame(m):l("callback")}function V(l){const{decimals:r,decimal:n,separator:e,suffix:i,prefix:o}=a;l=Number(l).toFixed(r);const s=(l+="").split(".");let u=s[0];const c=s.length>1?n+s[1]:"",p=/(\d+)(\d{3})/;if(e&&!t(e))for(;p.test(u);)u=u.replace(p,"$1"+e+"$2");return o+u+c+i}return i([()=>a.startVal,()=>a.endVal],(()=>{a.autoplay&&p()})),{count:m,reset:function(){u.startTime=null,cancelAnimationFrame(u.rAF),u.displayValue=V(a.startVal)},resume:d,start:p,pauseResume:function(){u.paused?(d(),u.paused=!1):(cancelAnimationFrame(u.rAF),u.paused=!0)},displayValue:s(u,"displayValue")}}});d.render=function(a,t,l,r,n,e){return u(),c("span",{style:{color:a.color}},p(a.displayValue),5)};export default d;
