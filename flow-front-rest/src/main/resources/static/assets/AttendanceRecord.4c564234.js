import{L as n,a as i,v as r,K as u,aF as l,o as s,i as d,z as m,l as p,b0 as f}from"./index.2df1abd3.js";import{C as c}from"./index.0dc45056.js";import"./index.4d7dc19d.js";import"./index.321c37f5.js";import{u as h}from"./useECharts.ce06a2dc.js";import"./index.8b7dc37d.js";import"./index.31030814.js";import"./useRefs.a1ab229d.js";import"./PlusOutlined.fd61ce8f.js";import"./useFlexGapSupport.ce5faf33.js";const g=i({components:{Card:c},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=r(null),{setOptions:a}=h(t);return u(()=>e.loading,()=>{e.loading||a({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u6211\u7684\u8003\u52E4",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u65E5\u5E38\u51FA\u5DEE"},{value:735,name:"\u56E0\u516C\u5916\u51FA"},{value:580,name:"\u7D2F\u8BA1\u8BF7\u5047"},{value:484,name:"\u8FDF\u5230\u65E9\u9000"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),{chartRef:t}}});function b(e,t,a,v,C,E){const o=l("Card");return s(),d(o,{title:"\u8003\u52E4\u8BB0\u5F55",loading:e.loading},{default:m(()=>[p("div",{ref:"chartRef",style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var x=n(g,[["render",b]]);export{x as default};
