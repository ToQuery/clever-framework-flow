import{B as d}from"./TableImg.b4edebb6.js";import"./BasicForm.d977d74c.js";import{u as F}from"./useTable.2d6a625d.js";import{getBasicColumns as h,getFormConfig as k}from"./tableData.38d0f3c2.js";import{az as B,a as _,w as C,aB as m,o as p,k as b,B as t,C as s,p as a,i as c,F as y,n as E,t as T}from"./index.7ea10544.js";import{A}from"./index.d3af8cb2.js";import{d as D}from"./table.7fbc2fd7.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.0b8e7721.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./transButton.331b5127.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./index.61c914e7.js";import"./FullscreenOutlined.8864dded.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./index.a8777167.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";const w=_({components:{BasicTable:d,AAlert:A},setup(){const o=C([]),[e,{getForm:n}]=F({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:h(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onChange:r}});function u(){n().getFieldsValue()}function r(i){o.value=i}return{registerTable:e,getFormValues:u,checkedKeys:o,onSelectChange:r}}}),S={key:1};function V(o,e,n,u,r,i){const l=m("a-button"),f=m("a-alert"),g=m("BasicTable");return p(),b(g,{onRegister:o.registerTable},{"form-custom":t(()=>[s(" custom-slot ")]),headerTop:t(()=>[a(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(p(),c(y,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),a(l,{type:"link",onClick:e[0]||(e[0]=K=>o.checkedKeys=[]),size:"small"},{default:t(()=>[s("\u6E05\u7A7A")]),_:1})],64)):(p(),c("span",S,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[a(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[s("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $o=B(w,[["render",V]]);export{$o as default};
