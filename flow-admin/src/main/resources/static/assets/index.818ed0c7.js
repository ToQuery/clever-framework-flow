var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(e,o,n)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,_=(e,o)=>{for(var n in o||(o={}))E.call(o,n)&&F(e,n,o[n]);if(f)for(var n of f(o))D.call(o,n)&&F(e,n,o[n]);return e};import{b0 as B,_ as A,b1 as W}from"./index.e84e956c.js";import{u as j,A as T,bM as L,r as b,P as w,W as P,a0 as l,bo as R,F as V,B as $,a1 as N,a6 as u,H,w as t,ae as r}from"./vendor.5879c5ca.js";import{P as S}from"./index.ea14bdae.js";/* empty css                *//* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";function C(e){let o,n=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const a=e;o=a.props||{},n=a.target||document.body}else o=e;const s=B(o,void 0,!0);return[()=>{const a=j(n);!a||s.open(a)},()=>{s.close()},a=>{s.setTip(a)}]}const z=T({components:{Loading:W,PageWrapper:S,[L.name]:L},setup(){const e=b(null),o=b(!1),n=w({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"\u52A0\u8F7D\u4E2D..."}),[s,p]=C({tip:"\u52A0\u8F7D\u4E2D..."}),[c,i]=C({target:e,props:{tip:"\u52A0\u8F7D\u4E2D...",absolute:!0}});function a(h){n.absolute=h,n.loading=!0,setTimeout(()=>{n.loading=!1},2e3)}function d(){a(!1)}function g(){a(!0)}function m(){s(),setTimeout(()=>{p()},2e3)}function k(){c(),setTimeout(()=>{i()},2e3)}function y(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return _({openCompFullLoading:d,openFnFullLoading:m,openFnWrapLoading:k,openCompAbsolute:g,wrapEl:e,loadingRef:o,openDirectiveLoading:y},P(n))}}),M={ref:"wrapEl"},q=r(" \u5168\u5C4F Loading "),x=r(" \u5BB9\u5668\u5185 Loading "),G=r(" \u5168\u5C4F Loading "),I=r(" \u5BB9\u5668\u5185 Loading "),J=r(" \u6253\u5F00\u6307\u4EE4Loading ");function K(e,o,n,s,p,c){const i=l("a-alert"),a=l("a-button"),d=l("Loading"),g=l("PageWrapper"),m=R("loading");return V(($(),N(g,{"loading-tip":"\u52A0\u8F7D\u4E2D...",title:"Loading\u7EC4\u4EF6\u793A\u4F8B"},{default:u(()=>[H("div",M,[t(i,{message:"\u7EC4\u4EF6\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[q]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[x]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i,{message:"\u51FD\u6570\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[G]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[I]),_:1},8,["onClick"]),t(i,{message:"\u6307\u4EE4\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[J]),_:1},8,["onClick"])],512)]),_:1},512)),[[m,e.loadingRef]])}var ae=A(z,[["render",K]]);export{ae as default};
