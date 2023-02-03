import{B as v}from"./TableImg.6b85bf08.js";import{l as M}from"./BasicForm.d8aa86d3.js";import{u as F}from"./useTable.60e7369f.js";import{j as R,k as I,l as P,m as A}from"./dictionary.9f8ae2b3.js";import{P as $}from"./index.4dfdb4ab.js";import{az as N,a as V,x as W,aB as r,i as f,j,q as b,C as h,l as g,D as K,m as C,H as U}from"./index.ef013507.js";import{b as q}from"./index.4ff668bf.js";import z from"./DictionaryModal.d7c8bfaa.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useForm.d7bb3373.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0b0495b0.js";import"./uuid.2b29000c.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./useWindowSizeFn.37be93ea.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./FullscreenOutlined.d97e6502.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";import"./index.eaeab232.js";/* empty css              *//* empty css               */import"./index.0e08ed6e.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./constantEnum.bf6653fb.js";const{createMessage:H}=U(),L=V({name:"DictionaryTable",components:{BasicTable:v,DictionaryModal:z,PageWrapper:$,TableAction:M},setup(e,{emit:l}){const[y,{openModal:s,setModalProps:c}]=q(),i=W(""),[p,{reload:n,setProps:u,setTableData:m,setSelectedRowKeys:d}]=F({title:"\u6570\u636E\u5B57\u5178\u5217\u8868",api:R,columns:I,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){if(i.value===""){H.warning("\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B\uFF01",2);return}c({title:"\u65B0\u589E\u5B57\u5178"}),s(!0,{record:{dicTypeId:i.value},isUpdate:!1})}function T(t){i.value=t,u({searchInfo:{dicTypeId:t}}),n({page:1})}function B(){m([]),i.value=""}function D(t,o){o.stopPropagation(),c({title:"\u4FEE\u6539\u5B57\u5178"}),s(!0,{record:t,isUpdate:!0})}function _(t,o){o.stopPropagation()}function k(t){A(t.id).then(()=>{n()})}function S(){setTimeout(()=>{n()},200)}function E(t){d([t.id]),l("handleSelect",t.id)}function w({keys:t,rows:o}){o&&o.length>0&&l("handleSelect",o[0].id)}return{registerTable:p,registerModal:y,dictTypeId:i,handleDeleteStop:_,clickDictionary:E,changeDictionary:w,filterByDictType:T,cleanTableData:B,handleCreate:a,handleEdit:D,handleDelete:k,handleSuccess:S}}}),O={class:"bg-white overflow-hidden dictionary"};function G(e,l,y,s,c,i){const p=r("a-button"),n=r("TableAction"),u=r("BasicTable"),m=r("DictionaryModal");return f(),j("div",O,[b(u,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h(()=>[e.dictTypeId!==""?(f(),g(p,{key:0,type:"primary",onClick:e.handleCreate},{default:h(()=>[K("\u65B0\u589E")]),_:1},8,["onClick"])):C("",!0)]),bodyCell:h(({column:d,record:a})=>[d.key==="action"?(f(),g(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,a),popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a),placement:"left"}}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister","onRowClick","onSelectionChange"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Je=N(L,[["render",G]]);export{Je as default};
