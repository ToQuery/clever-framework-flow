import{dP as t}from"./index.ef013507.js";const i=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let s=e||{};s&&(delete s.pageNum,delete s.pageSize);const l={query:r,entity:s};return t.post({url:"/flow/privilege/user/getPagerModel",params:l})},u=e=>t.post({url:"/flow/privilege/user/checkEntityExist",params:e}),a=e=>t.post({url:"/flow/privilege/user/getAll",params:e}),p=e=>t.post({url:"/flow/privilege/user/saveOrUpdate",params:e}),g=e=>{const r=e.userId;return delete e.userId,t.post({url:"/flow/privilege/user/allocationRoles/"+r,params:e.groups})},c=e=>t.post({url:"/flow/privilege/user/setPassword",params:e}),n=e=>t.post({url:"/flow/privilege/user/delete",params:e});export{c as a,g as b,u as c,n as d,a as e,i as g,p as s};
