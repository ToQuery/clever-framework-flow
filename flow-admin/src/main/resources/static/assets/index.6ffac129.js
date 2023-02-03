import{B}from"./TableImg.8ad498cd.js";import{l as T}from"./BasicForm.027cbf67.js";import{u as y}from"./useTable.7536e350.js";import{g as E,d as S}from"./jobGrade.d0262e80.js";import{P as w}from"./index.c79f76d5.js";import F from"./JobGradeTypeList.06f5c6ff.js";import{b as M}from"./index.a492e5cd.js";import{J,c as k,s as G}from"./JobGradeModal.419a0e53.js";import{az as x,a as A,fD as D,x as I,aB as r,i as g,l as _,C as a,q as n,D as P,m as v,k as b,H as R}from"./index.e61ad282.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.6e0a0264.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./index.9f50e000.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./FullscreenOutlined.3a424424.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";import"./index.ba1457ae.js";/* empty css              *//* empty css               */import"./index.9233793b.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./index.0ba11515.js";import"./useContextMenu.87346ca1.js";import"./jobGradeType.226d59aa.js";import"./constantEnum.bf6653fb.js";const{createMessage:N}=R(),W=A({name:"JobGrade",components:{BasicTable:B,PageWrapper:w,JobGradeTypeList:F,JobGradeModal:J,TableAction:T,Popconfirm:D},setup(){const[e,{openModal:s,setModalProps:p}]=M(),t=I({}),[h,{reload:m}]=y({title:"\u5217\u8868",api:E,immediate:!1,columns:k,formConfig:{labelWidth:120,schemas:G,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function l(){if(!b(t).code){N.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}p({title:"\u65B0\u589E\u804C\u7EA7"}),s(!0,{record:{typeId:b(t).id,typeCode:b(t).code},isUpdate:!0})}function u(o){p({title:"\u4FEE\u6539\u804C\u7EA7"}),s(!0,{record:o,isUpdate:!0})}function c(o){S([o.id]).then(()=>{m()})}function d(){i(t.value)}function i(o){t.value=o;let f={typeId:o?o.id:""};m({searchInfo:f})}return{registerTable:h,registerModal:e,handleCreate:l,handleEdit:u,handleDelete:c,handleSuccess:d,handleSelect:i}}});function $(e,s,p,t,h,m){const l=r("JobGradeTypeList"),u=r("a-button"),c=r("TableAction"),d=r("BasicTable"),i=r("JobGradeModal"),o=r("PageWrapper");return g(),_(o,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:a(()=>[n(l,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),n(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:a(()=>[n(u,{type:"primary",onClick:e.handleCreate},{default:a(()=>[P("\u65B0\u589E")]),_:1},8,["onClick"])]),bodyCell:a(({column:f,record:C})=>[f.key==="action"?(g(),_(c,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,C)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,C),placement:"left"}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),n(i,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var qe=x(W,[["render",$]]);export{qe as default};
