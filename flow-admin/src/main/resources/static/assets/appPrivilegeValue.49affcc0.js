import{av as e}from"./index.bfbdc958.js";var l,p;(p=l||(l={})).getAppPrivilegeValues="/flow/privilege/pvalue/getAppPrivilegeValues",p.SaveOrUpdate="/flow/privilege/pvalue/saveOrUpdate",p.Delete="/flow/privilege/pvalue/delete",p.CheckEntityExist="/flow/privilege/pvalue/checkEntityExist";const a=()=>e.post({url:l.getAppPrivilegeValues}),t=p=>e.post({url:l.SaveOrUpdate,params:p}),i=p=>e.post({url:l.Delete,params:p});export{i as d,a as g,t as s};
