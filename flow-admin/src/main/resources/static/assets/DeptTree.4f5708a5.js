import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.4dde5251.js";import{a as t}from"./system.d1d684a8.js";import{z as a,r,X as n,Z as s,D as o,F as i,w as l}from"./vendor.11d66826.js";import"./index.514e05b1.js";import"./useContextMenu.cc93e9bb.js";/* empty css              */var c=a({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const s=r([]);function o(){return e=this,a=null,r=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{i(r.next(e))}catch(t){n(t)}},o=e=>{try{i(r.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);i((r=r.apply(e,a)).next())}));var e,a,r}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};c.render=function(e,t,a,r,n,c){const m=s("BasicTree");return o(),i("div",d,[l(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default c;
