import{B as l}from"./TableImg.3ff4c1b4.js";import{l as s}from"./BasicForm.bc1bc2ec.js";import{u as d}from"./useTable.dffabf3f.js";import{d as c}from"./table.2f788f73.js";import{az as F,a as b,aB as n,o as p,i as f,p as B,B as h,k as A,l as C}from"./index.bbfb8c5d.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useForm.35a2e1b5.js";import"./index.6f4a9d56.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.bd278e5f.js";import"./uuid.2b29000c.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./index.56ac9033.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              *//* empty css               */import"./index.53f3ac38.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),w={class:"p-4"};function x(t,i,e,o,D,I){const m=n("TableAction"),a=n("BasicTable");return p(),f("div",w,[B(a,{onRegister:t.registerTable},{bodyCell:h(({column:u,record:r})=>[u.key==="action"?(p(),A(m,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",x]]);export{Dt as default};
