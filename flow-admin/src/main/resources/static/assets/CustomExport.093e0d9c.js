import{_ as e}from"./TableImg.c9ed598a.js";import"./BasicForm.ae4250e1.js";import{E as o}from"./index.2073c2c6.js";import{c as a,d as i,j as t}from"./data.045c5a81.js";import{b as s}from"./index.5b995397.js";import{P as r}from"./index.1d9afa2c.js";import{z as d,Z as n,D as m,F as p,a3 as c,w as f,a9 as j}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";import"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";/* empty css              *//* empty css              */import"./useContentViewHeight.b2883a86.js";var l=d({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:r},setup(){const[e,{openModal:o}]=s();return{defaultHeader:function({filename:e,bookType:o}){t({data:i,filename:e,write2excelOpts:{bookType:o}})},columns:a,data:i,register:e,openModal:o}}});const u=j(" 导出 ");l.render=function(e,o,a,i,t,s){const r=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModal"),l=n("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(r,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
