import{L as m,a as i,bA as _,v as l,aF as r,o as b,i as g,z as c,m as e,l as h}from"./index.2df1abd3.js";import{T as n}from"./index.4d7dc19d.js";import{B as k}from"./index.f51bea10.js";import{g as y}from"./process.b9f6d856.js";import"./useRefs.a1ab229d.js";import"./PlusOutlined.fd61ce8f.js";const C=i({props:{current:{type:String,default:"todo"}},name:"ProcessHeader",components:{[n.name]:n,[n.TabPane.name]:n.TabPane,Badge:k},setup(a){const u=_(),s=l(0);function p(o){u("/process/"+o)}return y({}).then(o=>{s.value=o}),{todoCount:s,changeRouter:p}}}),v=h("span",{style:{"font-size":"16px"}},"\u5F85\u529E",-1);function B(a,u,s,p,o,D){const d=r("Badge"),t=r("a-tab-pane"),f=r("a-tabs");return b(),g(f,{"default-active-key":a.current,onChange:a.changeRouter},{default:c(()=>[e(t,{key:"todo"},{tab:c(()=>[e(d,{count:a.todoCount,offset:[15,-2],size:"default"},{default:c(()=>[v]),_:1},8,["count"])]),_:1}),e(t,{key:"have-down",tab:"\u5DF2\u529E"}),e(t,{key:"launched",tab:"\u5DF2\u53D1"}),e(t,{key:"launch",tab:"\u53D1\u8D77"})]),_:1},8,["default-active-key","onChange"])}var x=m(C,[["render",B]]);export{x as default};
