import{_ as e}from"./TableImg.80ce785e.js";import{f as o}from"./BasicForm.2565c07e.js";import{u as t}from"./useTable.cdb834a1.js";import{g as i,d as n}from"./appPrivilegeValue.4b55229b.js";import{P as r}from"./perEnum.9a5ef72f.js";import{_ as a,c as s}from"./AppPrivilegeValueModal.738a281c.js";import{b as d}from"./useModal.5069d636.js";import{_ as l}from"./Authority.vue_vue&type=script&lang.409e5f07.js";import{k as m,K as p,o as c,n as u,q as f,Q as j,Y as b}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.bc6116e1.js";import"./index.24f6b3f0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";var h=m({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:o,AppModal:a,Authority:l},setup(){const[e,{openModal:o}]=d(),[a,{reload:l}]=t({title:"列表",api:i,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:r,registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const g=b(" 新增 ");h.render=function(e,o,t,i,n,r){const a=p("a-button"),s=p("Authority"),d=p("TableAction"),l=p("BasicTable"),m=p("AppModal");return c(),u("div",null,[f(l,{onRegister:e.registerTable},{toolbar:j((()=>[f(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:j((()=>[f(a,{type:"primary",onClick:e.handleCreate},{default:j((()=>[g])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:j((({record:o})=>[f(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;
