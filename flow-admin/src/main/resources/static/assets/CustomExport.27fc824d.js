import{B as d}from"./TableImg.b4edebb6.js";import"./BasicForm.d977d74c.js";import{E as f}from"./index.7cf43558.js";import{c as _,d as s,j as B}from"./data.5ce41024.js";import{b as C}from"./index.61c914e7.js";import{P as E}from"./index.0b8e7721.js";import{az as F,a as x,aB as t,o as b,k as g,B as r,p,C as M}from"./index.7ea10544.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";const k=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:E},setup(){function o({filename:i,bookType:a}){B({data:s,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=C();return{defaultHeader:o,columns:_,data:s,register:e,openModal:m}}});function A(o,e,m,i,a,S){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var So=F(k,[["render",A]]);export{So as default};
