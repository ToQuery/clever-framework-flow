import{az as _,a as C,bL as F,bF as g,bg as y,c as h,x as v,h as L,aQ as S,aB as m,i as w,l as R,C as $,p as a,t as c,q as k,s as l,m as I,e as U,k as n,fk as b,fl as G}from"./index.e61ad282.js";import{D as B,G as D,S as H}from"./siteSetting.136c2269.js";import{a as T}from"./useContentViewHeight.34702d2a.js";import{G as W}from"./GithubFilled.1884a686.js";import"./useWindowSizeFn.27de1b1b.js";const A=C({name:"LayoutFooter",components:{Footer:F.Footer,GithubFilled:W},setup(){const{t:e}=U(),{getShowFooter:o}=g(),{currentRoute:p}=y(),{prefixCls:d}=h("layout-footer"),r=v(null),{setFooterHeight:i}=T();return{getShowLayoutFooter:L(()=>{var s,t;if(n(o)){const u=(s=n(r))==null?void 0:s.$el;i((u==null?void 0:u.offsetHeight)||0)}else i(0);return n(o)&&!((t=n(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:e,DOC_URL:B,GITHUB_URL:D,SITE_URL:H,openWindow:S,footerRef:r}}}),N=e=>(b("data-v-138e5d67"),e=e(),G(),e),V=N(()=>a("div",null,"Copyright \xA92021 \u4F01\u4E1A\u6570\u667A\u5316",-1));function z(e,o,p,d,r,i){const f=m("GithubFilled"),s=m("Footer");return e.getShowLayoutFooter?(w(),R(s,{key:0,class:l(e.prefixCls),ref:"footerRef"},{default:$(()=>[a("div",{class:l(`${e.prefixCls}__links`)},[a("a",{onClick:o[0]||(o[0]=t=>e.openWindow(e.SITE_URL))},c(e.t("layout.footer.onlinePreview")),1),k(f,{onClick:o[1]||(o[1]=t=>e.openWindow(e.GITHUB_URL)),class:l(`${e.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:o[2]||(o[2]=t=>e.openWindow(e.DOC_URL))},c(e.t("layout.footer.onlineDocument")),1)],2),V]),_:1},8,["class"])):I("",!0)}var Q=_(A,[["render",z],["__scopeId","data-v-138e5d67"]]);export{Q as default};
