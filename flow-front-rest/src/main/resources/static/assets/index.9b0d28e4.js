import{L as d,a as p,v as l,aF as n,o as f,i as I,z as _,l as t,m as a}from"./index.2df1abd3.js";import{C as u}from"./index.0dc45056.js";import"./index.4d7dc19d.js";import"./index.321c37f5.js";import{P as g}from"./index.e96bd3d2.js";import C from"./DynamicInfo.f47dcb73.js";import h from"./BannerInfo.7bafed9d.js";import v from"./NoticeInfo.a9556661.js";import y from"./ITWikiCard.552fcb1b.js";import w from"./ITContactCard.69eda246.js";import B from"./CommonDownCard.57627273.js";import{dynamicInfoItems as D,bannerList as S,noticeInfoItems as N}from"./data.ea5f89c5.js";import"./index.8b7dc37d.js";import"./index.31030814.js";import"./useRefs.a1ab229d.js";import"./PlusOutlined.fd61ce8f.js";import"./useFlexGapSupport.ce5faf33.js";import"./index.c03d9706.js";import"./index.d567a6cf.js";import"./useSize.562f40a4.js";import"./eagerComputed.4f79ce77.js";import"./useWindowSizeFn.3d5076e0.js";import"./useContentViewHeight.448b2691.js";import"./ArrowLeftOutlined.a6198073.js";import"./index.9dd6ae39.js";import"./transButton.7cce5fb9.js";import"./index.02fdb8d6.js";import"./index.e8e929dd.js";import"./index.f51bea10.js";const T=p({components:{PageWrapper:g,DynamicInfo:C,BannerInfo:h,NoticeInfo:v,ITWikiCard:y,ITContactCard:w,CommonDownCard:B,Card:u},setup(){const o=l(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:D,bannerInfoItems:S,noticeInfoItems:N}}}),P={class:"flex mt-4"},W={class:"w-2/3"},$={class:"w-1/3 pl-4"},b={class:"flex mt-4"},k={class:"w-1/4 mr-4"},L={class:"w-3/4"};function V(o,z,F,j,q,A){const e=n("BannerInfo"),r=n("NoticeInfo"),i=n("ITContactCard"),s=n("DynamicInfo"),m=n("CommonDownCard"),c=n("PageWrapper");return f(),I(c,null,{default:_(()=>[t("div",P,[t("div",W,[a(e,{dataSource:o.bannerInfoItems,height:"270",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])]),t("div",$,[a(r,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),t("div",b,[t("div",k,[a(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",L,[a(s,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"]),a(m,{loading:o.loading,class:"enter-y !mt-4"},null,8,["loading"])])])]),_:1})}var uo=d(T,[["render",V]]);export{uo as default};
