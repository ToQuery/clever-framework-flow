import{bV as u,b9 as l}from"./index.e61ad282.js";import{T as a}from"./index.6e0a0264.js";const c=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u6807\u8BC6",dataIndex:"sn",width:180,align:"left"},{title:"\u7528\u6237",dataIndex:"users",align:"left",customRender:({record:e})=>{const t=e.users,s="green";return t&&t.map(n=>u(a,{color:s,style:{marginRight:"5px"}},()=>n.realName))||[]}},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],m=[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"name",align:"left",width:150,customRender:({record:e})=>u("span",{title:e.name+"["+e.sn+"]"},[u(l,{icon:e.image}),u("span",e.name)])},{dataIndex:"pvs",align:"left",slots:{customRender:"pvs",title:"customTitle"}}],i=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],d=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}],colProps:{span:24}},{field:"sn",label:"\u6807\u8BC6",required:!0,component:"Input",colProps:{span:24}},{label:"\u5907\u6CE8",field:"note",component:"InputTextArea",rules:[{max:1024,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E1024\uFF01"}],colProps:{span:24}}],f=[{field:"id",label:"ID",component:"Input",show:!1},{label:"\u9009\u62E9\u7528\u6237",field:"users",slot:"users",component:"Input",labelWidth:65}],F=[{field:"id",label:"ID",component:"Input",show:!1},{field:"sn",label:"ID",required:!0,component:"Input",show:!1},{label:"",labelWidth:"0",field:"acls",slot:"acls",component:"Input",colProps:{span:24}}];export{f as a,F as b,c,m as d,d as f,i as s};
