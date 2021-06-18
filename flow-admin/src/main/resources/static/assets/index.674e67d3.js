import{_ as e}from"./TableImg.80ce785e.js";import{f as o}from"./BasicForm.2565c07e.js";import{u as i}from"./useTable.cdb834a1.js";import{g as t,d as n}from"./account.d170720f.js";import{_ as s}from"./PageWrapper.f686cbe0.js";import{b as r}from"./useModal.5069d636.js";import a from"./AccountModal.18402527.js";import d from"./PasswordModal.1c64a782.js";import l from"./SetGroupModal.e659d820.js";import{c,s as u}from"./account.data.05af2890.js";import{k as p,bp as m,bw as f,cf as g,r as b,K as j,o as h,n as w,q as S,Q as v,Y as M}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.bc6116e1.js";import"./index.24f6b3f0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./usePageContext.33476434.js";/* empty css              */import"./group.c52199f3.js";var x=p({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:a,PasswordModal:d,SetGroupModal:l,TableAction:o,Avatar:m,Image:f,UserOutlined:g},setup(){const[e,{openModal:o}]=r(),[s,{openModal:a}]=r(),[d,{openModal:l}]=r(),p=b(""),m=b(!1),[f,{reload:g}]=i({title:"列表",api:t,columns:c,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:p,previewImageVisible:m,previewImageHandle:function(e){e&&(p.value=e,m.value=!0)},previewImageVisibleChange:function(e,o){m.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){a(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){l(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{g()}))},handleSuccess:function(){g()},handlePasswordSuccess:function(){g()},handleSetGroupSuccess:function(){g()}}}});const C=M(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};x.render=function(e,o,i,t,n,s){const r=j("a-button"),a=j("TableAction"),d=j("UserOutlined"),l=j("Avatar"),c=j("BasicTable"),u=j("Image"),p=j("AccountModal"),m=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(c,{onRegister:e.registerTable},{toolbar:v((()=>[S(r,{type:"primary",onClick:e.handleCreate},{default:v((()=>[C])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(a,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(l,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(m,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default x;
