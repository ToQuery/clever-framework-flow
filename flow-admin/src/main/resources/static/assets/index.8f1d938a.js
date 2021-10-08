import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.4dde5251.js";import{t as a}from"./data.5e96733f.js";import{P as t}from"./index.1d9afa2c.js";import{z as n,b5 as r,aV as d,aU as l,aL as o,r as s,n as i,Y as u,u as p,Z as c,D as f,F as m,a3 as y,w as x,a9 as D}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              */import"./index.514e05b1.js";import"./useContextMenu.cc93e9bb.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useWindowSizeFn.9fecf134.js";import"./useContentViewHeight.b2883a86.js";var v=n({components:{BasicTree:e,PageWrapper:t,Card:r,Row:d,Col:l,Spin:o},setup(){const e=s(null),t=s(null),n=s([]),r=s(!1);const d=s([{title:"parent ",key:"0-0"}]);return{treeData:a,handleCheck:function(e,a){},tree:d,onLoadData:function(a){return new Promise((t=>{a.children?setTimeout((()=>{const n=p(e);if(n){const e=[{title:`Child Node ${a.eventKey}-0`,key:`${a.eventKey}-0`},{title:`Child Node ${a.eventKey}-1`,key:`${a.eventKey}-1`}];n.updateNodeByKey(a.eventKey,{children:e}),n.setExpandedKeys([a.eventKey,...n.getExpandedKeys()])}t()}),1e3):t()}))},asyncTreeRef:e,asyncExpandTreeRef:t,tree2:n,loadTreeData:function(){r.value=!0,setTimeout((()=>{n.value=i(a),r.value=!1,u((()=>{var e;null==(e=p(t))||e.expandAll(!0)}))}),2e3)},treeLoading:r}}});const j=D("加载数据");v.render=function(e,a,t,n,r,d){const l=c("BasicTree"),o=c("Col"),s=c("a-button"),i=c("Spin"),u=c("Card"),p=c("Row"),D=c("PageWrapper");return f(),m(D,{title:"Tree基础示例"},{default:y((()=>[x(p,{gutter:[16,16]},{default:y((()=>[x(o,{span:8},{default:y((()=>[x(l,{title:"基础示例，默认展开第一层",treeData:e.treeData,defaultExpandLevel:"1"},null,8,["treeData"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"可勾选，默认全部展开",treeData:e.treeData,checkable:!0,defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1}),x(o,{span:8},{default:y((()=>[x(l,{title:"懒加载异步树",ref:"asyncTreeRef",treeData:e.tree,"load-data":e.onLoadData},null,8,["treeData","load-data"])])),_:1}),x(o,{span:16},{default:y((()=>[x(u,{title:"异步数据，默认展开"},{extra:y((()=>[x(s,{onClick:e.loadTreeData,loading:e.treeLoading},{default:y((()=>[j])),_:1},8,["onClick","loading"])])),default:y((()=>[x(i,{spinning:e.treeLoading},{default:y((()=>[x(l,{ref:"asyncExpandTreeRef",treeData:e.tree2},null,8,["treeData"])])),_:1},8,["spinning"])])),_:1})])),_:1})])),_:1})])),_:1})};export default v;
