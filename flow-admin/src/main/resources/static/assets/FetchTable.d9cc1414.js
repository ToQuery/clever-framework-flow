import{_ as e}from"./TableImg.5256107f.js";import"./BasicForm.9118d7fd.js";import{u as o}from"./useTable.46ace9df.js";import{getBasicColumns as t}from"./tableData.83d6955e.js";import{d as r}from"./table.bf3295f8.js";import{k as i,K as s,o as a,n as d,q as n,Q as m,Y as p}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.7b000bd0.js";import"./index.bfbdc958.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.ddd2c5cc.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97fe3b93.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";/* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";var c=i({components:{BasicTable:e},setup(){const[e,{reload:i}]=o({title:"远程加载示例",api:r,columns:t()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const f={class:"p-4"},l=p(" 刷新当前页 "),b=p(" 刷新并返回第一页 ");c.render=function(e,o,t,r,i,p){const c=s("a-button"),j=s("BasicTable");return a(),d("div",f,[n(j,{onRegister:e.registerTable},{toolbar:m((()=>[n(c,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[l])),_:1},8,["onClick"]),n(c,{type:"primary",onClick:e.handleReload},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;
