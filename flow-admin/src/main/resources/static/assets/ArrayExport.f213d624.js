import{_ as e}from"./TableImg.80ce785e.js";import"./BasicForm.2565c07e.js";import"./index.22f4a73f.js";import{c as o,d as t,a,b as s,e as i}from"./data.af71de4a.js";import{_ as r}from"./PageWrapper.f686cbe0.js";import{k as d,K as n,o as m,n as p,Q as c,q as f,Y as j}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.bc6116e1.js";import"./index.24f6b3f0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.5069d636.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./createAsyncComponent.b8f90fcd.js";import"./usePageContext.33476434.js";/* empty css              *//* empty css              */var u=d({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){a({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:t})});const l=j(" 导出 ");u.render=function(e,o,t,a,s,i){const r=n("a-button"),d=n("BasicTable"),j=n("PageWrapper");return m(),p(j,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(r,{onClick:e.aoaToExcel},{default:c((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;
