import{k as a,b3 as t,r as s,K as i,o as e,n,Q as r,q as o,X as b,N as c}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import d from"./VisitAnalysis.836814af.js";import p from"./VisitAnalysisBar.71eab13c.js";import"./useECharts.5fecd9a5.js";import"./index.734d8392.js";import"./props.f48aca0b.js";var y=a({components:{Card:t,VisitAnalysis:d,VisitAnalysisBar:p},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const l={key:0},m={key:1};y.render=function(a,t,s,d,p,y){const f=i("VisitAnalysis"),j=i("VisitAnalysisBar"),u=i("Card");return e(),n(u,c({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",l,[o(f)])):b("",!0),"tab2"===a.activeKey?(e(),n("p",m,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default y;
