import{_ as e}from"./TableImg.c9ed598a.js";import{g as i}from"./BasicForm.ae4250e1.js";import{u as t}from"./useTable.26f8956b.js";import{d as o}from"./table.2674ac54.js";import{z as n,Z as d,D as a,F as s,w as r,a3 as l}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";import"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.5b995397.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";const c=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:i},setup(){const[e]=t({title:"TableAction组件及固定列示例",api:o,columns:c,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,i,t,o,n,c){const m=d("TableAction"),b=d("BasicTable");return a(),s("div",p,[r(b,{onRegister:e.registerTable},{action:l((({record:i})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
