import{k as e,aH as t,r as a,I as n,K as r,ar as o,w as i,o as s,n as l,q as c}from"./vendor.56d2c57f.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.5b456a9f.js";import{a_ as u}from"./index.bfbdc958.js";import{g as m}from"./positionSeq.b07009dd.js";import"./useContextMenu.b8def761.js";/* empty css              */import"./useExpose.46777d04.js";var p=e({name:"PositionSeqTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),o=a(!1);function i(){return e=this,t=null,a=function*(){o.value=!0,m().then((e=>{r.value=e})).finally((()=>{o.value=!1}))},new Promise(((n,r)=>{var o=e=>{try{s(a.next(e))}catch(t){r(t)}},i=e=>{try{s(a.throw(e))}catch(t){r(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{i()})),{treeData:r,treeLoading:o,handleSelect:function(e,a){const n=u(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const f={class:"bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,n,d,u){const m=r("BasicTree"),p=o("loading");return i((s(),l("div",f,[c(m,{title:"岗位序列",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
