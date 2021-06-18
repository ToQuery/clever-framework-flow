import{_ as e}from"./TableImg.72bfe0c2.js";import{f as o}from"./BasicForm.66d503e8.js";import{u as t}from"./useTable.78c29fd1.js";import{g as n,d as i}from"./app.2aa2b16e.js";import{c as s,s as r}from"./app.data.2245983d.js";import a from"./AppModal.b58074df.js";import d from"./SecretKeyModal.f7cf1a73.js";import{b as c}from"./useModal.5417216c.js";import{k as l,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4f5ed9fc.js";import"./index.90af2bb9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.886b9f44.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";/* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";/* empty css              */var h=l({name:"App",components:{BasicTable:e,TableAction:o,AppModal:a,SecretKeyModal:d},setup(){const[e,{openModal:o}]=c(),[a,{openModal:d,setModalProps:l}]=c(),[p,{reload:m}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:100,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:p,registerModal:e,registerSecretKeyModal:a,handleCloseFunc:function(){return m(),Promise.resolve(!0)},handleCreate:function(){o(!0,{isUpdate:!1})},handleEditSecretKey:function(e){d(!0,{record:e,isUpdate:!0}),l({title:`修改【${e.name}】的密钥`,showOkBtn:!1,cancelText:"关闭"})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((()=>{m()}))},handleSuccess:function(){m()},handleUpdateSecretKeySuccess:function(){m()}}}});const S=j(" 新增 ");h.render=function(e,o,t,n,i,s){const r=p("a-button"),a=p("TableAction"),d=p("BasicTable"),c=p("AppModal"),l=p("SecretKeyModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[S])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(a,{actions:[{title:"编辑密钥",icon:"ant-design:eye-outlined",onClick:e.handleEditSecretKey.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),f(l,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default h;
