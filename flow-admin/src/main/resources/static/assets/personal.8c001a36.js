import{av as e}from"./index.24f6b3f0.js";var o,a;(a=o||(o={})).PersonalPageList="/flow/org/personal/getPagerModel",a.PersonalPageListShowRows="/flow/org/personal/getPagerModelShowRoles",a.AllocationRoles="/flow/org/personalRole/allocationRoles",a.SaveOrUpdate="/flow/org/personal/saveOrUpdate",a.Delete="/flow/org/personal/delete",a.SetLeaderCode="/flow/org/personal/setLeaderCode",a.CheckEntityExist="/flow/org/personal/checkEntityExist",a.DeletePersonalRole="/flow/org/personalRole/deletePersonalRole";const s=a=>{const s=a&&{pageNum:a.pageNum,pageSize:a.pageSize};let l=a||{};const r=a.showRoles;l&&(delete l.pageNum,delete l.pageSize,delete l.showRoles);const t=r?o.PersonalPageListShowRows+`?showRoles=${r}`:o.PersonalPageList,p={query:s,entity:l};return e.post({url:t,params:p})},l=a=>e.post({url:o.SaveOrUpdate,params:a}),r=a=>e.post({url:o.AllocationRoles+"/"+a.personalId,params:a.roles}),t=a=>e.post({url:o.Delete,params:a}),p=a=>e.post({url:o.DeletePersonalRole,params:a}),n=a=>e.post({url:o.SetLeaderCode+`/${a.leaderCode}/${a.id}`}),g=a=>e.post({url:o.CheckEntityExist,params:a});export{r as a,p as b,g as c,t as d,l as e,s as g,n as s};
