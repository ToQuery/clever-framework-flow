import{B as C}from"./TableImg.513742d5.js";import{T as j}from"./BasicForm.0ba2e15f.js";import{u as g}from"./useTable.6e5baa13.js";import{g as h,d as B}from"./category.add32850.js";import{C as x,c as F,s as _}from"./CategoryModal.00b797f3.js";import{_ as E,h as T}from"./index.e84e956c.js";import{b as w}from"./index.c505e96f.js";import{A as y,a0 as r,B as M,D as S,w as u,a6 as m,ae as D}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";import"./index.ea14bdae.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";import"./company.54be1035.js";const{createMessage:A}=T(),k=y({name:"Category",components:{BasicTable:C,TableAction:j,CategoryModal:x},setup(){const[o,{openModal:i,setModalProps:a}]=w(),[f,{reload:s}]=g({title:"\u5217\u8868",api:h,columns:F,formConfig:{labelWidth:120,schemas:_,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function b(e){a({title:"\u65B0\u589E\u6D41\u7A0B\u5206\u7C7B"}),i(!0,{isUpdate:!1})}function d(e,n){n.stopPropagation(),a({title:"\u4FEE\u6539\u6D41\u7A0B\u5206\u7C7B"}),i(!0,{record:e,isUpdate:!0})}function l(e,n){n.stopPropagation(),a({title:"\u65B0\u589E\u3010"+e.name+"\u3011\u7684\u5B50\u5206\u7C7B"}),e={pid:e.id,frontShow:1},i(!0,{record:e,isUpdate:!0})}function c(e,n){if(n.stopPropagation(),e.children&&e.children.length>0){A.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}B([e.id]).then(P=>{s()})}function p(){s()}function t(){s()}return{registerTable:f,registerModal:o,handleCreate:b,handleEdit:d,handleCreateChild:l,handleDelete:c,handleSuccess:t,doSearch:p}}}),R=D(" \u65B0\u589E ");function v(o,i,a,f,s,b){const d=r("a-button"),l=r("TableAction"),c=r("BasicTable"),p=r("CategoryModal");return M(),S("div",null,[u(c,{onRegister:o.registerTable},{toolbar:m(()=>[u(d,{type:"primary",onClick:o.handleCreate},{default:m(()=>[R]),_:1},8,["onClick"])]),action:m(({record:t})=>[u(l,{actions:[{tooltip:"\u6DFB\u52A0\u5B50\u5206\u7C7B",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(p,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ce=E(k,[["render",v]]);export{Ce as default};
