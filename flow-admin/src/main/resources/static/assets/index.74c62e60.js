import{k as e,bz as r,K as o,o as s,n as a,Q as t,q as i,Y as n}from"./vendor.9d9efc92.js";/* empty css              */import{u as p}from"./useDrawer.1cefc237.js";import m from"./Drawer1.c7efc97e.js";import d from"./Drawer2.ed504283.js";import c from"./Drawer3.e829fcd7.js";import w from"./Drawer4.7d4c2f94.js";import f from"./Drawer5.0d8942f3.js";import{_ as D}from"./PageWrapper.d199a033.js";/* empty css              */import"./index.734d8392.js";import"./BasicForm.4b5e3079.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";import"./useForm.c00e8219.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var l=e({components:{Alert:r,PageWrapper:D,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:w,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[s,{openDrawer:a}]=p(),[t,{openDrawer:i}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:s,openDrawer2:a,register3:t,openDrawer3:i,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const g=n(" 打开Drawer "),j=n(" 打开Drawer "),u=n(" 打开Drawer "),b=n(" 打开Drawer并传递数据 "),x=n(" 打开详情Drawer ");l.render=function(e,r,n,p,m,d){const c=o("Alert"),w=o("a-button"),f=o("Drawer1"),D=o("Drawer2"),l=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return s(),a(C,{title:"抽屉组件使用示例"},{default:t((()=>[i(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[g])),_:1},8,["onClick"]),i(c,{message:"内外同时控制显示隐藏","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:t((()=>[j])),_:1}),i(c,{message:"自适应高度/显示footer","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:t((()=>[u])),_:1}),i(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),i(c,{message:"详情页模式","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),i(f,{onRegister:e.register1},null,8,["onRegister"]),i(D,{onRegister:e.register2},null,8,["onRegister"]),i(l,{onRegister:e.register3},null,8,["onRegister"]),i(y,{onRegister:e.register4},null,8,["onRegister"]),i(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default l;
