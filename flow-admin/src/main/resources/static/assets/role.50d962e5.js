import{ax as l}from"./index.e84e956c.js";var o;(function(e){e.PageList="/flow/org/role/getPagerModel",e.PageListByPersonalId="/flow/org/role/getPagerModelByPersonalId",e.GetPersonalsByRole="/flow/org/role/getPersonalsByRole",e.SaveOrUpdate="/flow/org/role/saveOrUpdate",e.AddPersonalRoles="/flow/org/role//addPersonalRoles",e.Delete="/flow/org/role/delete",e.DeleteRolePersonal="/flow/org/role/deleteRolePersonal",e.CheckEntityExist="/flow/org/role/checkEntityExist",e.AllocationPersonals="/flow/org/personalRole/allocationPersonals"})(o||(o={}));const g=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e;const s=e.personalId;t&&(delete t.pageNum,delete t.pageSize,delete t.personalId);const a=s?o.PageListByPersonalId+`?personalId=${s}`:o.PageList,n={query:r,entity:t};return l.post({url:a,params:n})},c=e=>l.post({url:o.GetPersonalsByRole+"/"+e.roleId,params:e.personal}),P=e=>l.post({url:o.SaveOrUpdate,params:e}),i=e=>l.post({url:o.AllocationPersonals+"/"+e.roleId,params:e.personalList}),p=e=>l.post({url:o.Delete,params:e}),y=e=>l.post({url:o.CheckEntityExist,params:e});export{c as a,i as b,y as c,p as d,g,P as s};
