import{a as i,v as n,K as r,L as u,aF as l,o as s,i as d,z as m,l as p,b0 as f}from"./index.2df1abd3.js";import{C as c}from"./index.0dc45056.js";import"./index.4d7dc19d.js";import"./index.321c37f5.js";import{u as h}from"./useECharts.ce06a2dc.js";import"./index.8b7dc37d.js";import"./index.31030814.js";import"./useRefs.a1ab229d.js";import"./PlusOutlined.fd61ce8f.js";import"./useFlexGapSupport.ce5faf33.js";const g=i({components:{Card:c},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=n(null),{setOptions:a}=h(t);return r(()=>e.loading,()=>{e.loading||a({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),{chartRef:t}}});function E(e,t,a,b,C,v){const o=l("Card");return s(),d(o,{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:m(()=>[p("div",{ref:"chartRef",style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var D=u(g,[["render",E]]);export{D as default};
