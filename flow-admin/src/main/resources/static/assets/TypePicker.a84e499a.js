import{k as e,S as t,l as s,m as a,K as i,o as l,n,V as r,ah as p,q as o,x as d}from"./vendor.56d2c57f.js";import{c}from"./index.24f6b3f0.js";var f=e({name:"MenuTypePicker",components:{Tooltip:t},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}});const m=d();s("data-v-7e211634");const u=o("div",{class:"mix-sidebar"},null,-1);a();const y=m(((e,t,s,a,d,c)=>{const f=i("Tooltip");return l(),n("div",{class:e.prefixCls},[(l(!0),n(r,null,p(e.menuTypeList||[],(t=>(l(),n(f,{key:t.title,title:t.title,placement:"bottom"},{default:m((()=>[o("div",{onClick:s=>e.handler(t),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}]},[u],10,["onClick"])])),_:2},1032,["title"])))),128))],2)}));f.render=y,f.__scopeId="data-v-7e211634";export default f;
