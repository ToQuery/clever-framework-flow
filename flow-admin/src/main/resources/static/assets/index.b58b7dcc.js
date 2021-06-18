import{_ as e}from"./Qrcode.e2a06828.js";import{ae as o,aT as l}from"./index.24f6b3f0.js";import{_ as t}from"./PageWrapper.f686cbe0.js";import{k as a,r as n,u as r,l as d,m as s,K as i,o as c,n as m,q as u,x as g,Y as f}from"./vendor.56d2c57f.js";import"./download.61f9d787.js";import"./usePageContext.33476434.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var p=a({components:{CollapseContainer:o,QrCode:e,PageWrapper:t},setup(){const e=n(null),o=n(null);return{onQrcodeDone:function({ctx:e}){e instanceof CanvasRenderingContext2D&&(e.fillStyle="black",e.font='16px "微软雅黑"',e.textBaseline="bottom",e.textAlign="center",e.fillText("你帅你先扫",100,195,200))},qrCodeUrl:"https://www.vvbin.cn",LogoImg:l,download:function(){const o=r(e);o&&o.download("文件名")},downloadDiy:function(){const e=r(o);e&&e.download("Qrcode")},qrRef:e,qrDiyRef:o}}});const v=g();d("data-v-9fa75628");const b={class:"flex flex-wrap"},q=f(" 下载 "),x=u("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1),C=f(" 下载 "),_=u("div",{class:"msg"}," 要进行扩展绘制则不能将tag设为img ",-1);s();const w=v(((e,o,l,t,a,n)=>{const r=i("QrCode"),d=i("CollapseContainer"),s=i("a-button"),g=i("PageWrapper");return c(),m(g,{title:"二维码组件使用示例"},{default:v((()=>[u("div",b,[u(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),u(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),u(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),u(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),u(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),u(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),u(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),u(s,{class:"mb-2",type:"primary",onClick:e.download},{default:v((()=>[q])),_:1},8,["onClick"]),x])),_:1}),u(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1}),u(d,{title:"扩展绘制示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),u(s,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:v((()=>[C])),_:1},8,["onClick"]),_])),_:1})])])),_:1})}));p.render=w,p.__scopeId="data-v-9fa75628";export default p;
