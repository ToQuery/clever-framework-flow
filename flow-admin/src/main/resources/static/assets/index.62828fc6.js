import{_ as e}from"./TableImg.c9ed598a.js";import{g as o}from"./BasicForm.ae4250e1.js";import{u as i}from"./useTable.26f8956b.js";import{g as t,d as n}from"./company.084cc1c0.js";import{_ as a,c as s,s as r}from"./CompanyModal.f96056a5.js";import{h as d}from"./index.514e05b1.js";import{b as l}from"./index.5b995397.js";import{z as c,Z as p,D as m,F as f,w as u,a3 as b,a9 as j}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";const{createMessage:h}=d();var g=c({name:"Company",components:{BasicTable:e,TableAction:o,CompanyModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=l(),[d,{reload:c}]=i({title:"列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(){a({title:"新增公司"}),o(!0,{isUpdate:!1})},handleEdit:function(e,i){i.stopPropagation(),a({title:"修改公司"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,i){i.stopPropagation(),a({title:"新增【"+e.cname+"】的子公司"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((e=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=j(" 新增 ");g.render=function(e,o,i,t,n,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),l=p("CompanyModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(r,{actions:[{tooltip:"添加子公司",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
