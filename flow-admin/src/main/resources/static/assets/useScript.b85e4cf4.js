import{x as r,o as i,c2 as f}from"./index.ef013507.js";function p(a){const o=r(!1),s=r(!1),t=r(!1);let e;const n=new Promise((c,u)=>{i(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){o.value=!1,t.value=!0,s.value=!1,c("")},e.onerror=function(l){o.value=!1,t.value=!1,s.value=!0,u(l)},e.src=a.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:o,error:s,success:t,toPromise:()=>n}}export{p as u};
