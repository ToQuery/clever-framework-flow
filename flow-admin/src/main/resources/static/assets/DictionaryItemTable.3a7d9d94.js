import{_ as e}from"./TableImg.c9ed598a.js";import{g as t}from"./BasicForm.ae4250e1.js";import{u as i}from"./useTable.26f8956b.js";import{a as o,i as a,b as n,e as r}from"./dictionary.87dc419c.js";import{P as s}from"./index.1d9afa2c.js";import{h as d}from"./index.514e05b1.js";import{b as c}from"./index.5b995397.js";import l from"./DictionaryItemModal.c5ca846e.js";import{z as m,r as p,Z as f,D as u,F as b,w as j,a3 as x,a8 as h,a9 as g}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";/* empty css              *//* empty css              */import"./useContentViewHeight.b2883a86.js";const{createMessage:v}=d();var w=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:f,setTableData:u}]=i({title:"字典项列表",api:o,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){u([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):v.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,f({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const I={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=g("新增");w.render=function(e,t,i,o,a,n){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("DictionaryItemModal");return u(),b("div",I,[j(d,{onRegister:e.registerTable},{toolbar:x((()=>[""!==e.dictId?(u(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])):h("",!0)])),action:x((({record:t})=>[j(s,{actions:[{tooltip:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default w;
