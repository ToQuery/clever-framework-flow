import{_ as e}from"./TableImg.80ce785e.js";import"./BasicForm.2565c07e.js";import{u as a}from"./useTable.cdb834a1.js";import{_ as t}from"./PageWrapper.f686cbe0.js";import{k as l,aV as d,b3 as i,ag as s,bl as r,c9 as o,bh as n,K as u,o as m,n as f,Q as p,q as b,Y as c}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{refundTimeTableSchema as _,refundTimeTableData as j}from"./data.85896168.js";/* empty css              *//* empty css              */import"./useForm.bc6116e1.js";import"./index.24f6b3f0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.5069d636.js";import"./onMountedOrActivated.1a8745f8.js";import"./useSortable.94ff5c95.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./usePageContext.33476434.js";/* empty css              *//* empty css              *//* empty css              */var x=l({components:{BasicTable:e,PageWrapper:t,[d.name]:d,[i.name]:i,AEmpty:s,[r.name]:r,[r.Item.name]:r.Item,[o.name]:o,[o.Step.name]:o.Step,[n.name]:n,[n.TabPane.name]:n.TabPane},setup(){const[e]=a({title:"退货进度",columns:_,pagination:!1,dataSource:j,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const g=c(" 操作一 "),T=c(" 操作二 "),y=c(" 主操作 "),v={class:"pt-4 m-4 desc-wrap"},h=c(" 曲丽丽 "),k=c(" XX 服务 "),P=c(" 2017-01-10 "),S=b("a",null,"12421",-1),X=c(" 2017-07-07 ~ 2017-08-08 "),w=c(" 请于两个工作日内确认 "),C=b("div",null,"Vben",-1),I=c(),B=b("p",null,"2016-12-12 12:32",-1),M=b("p",null,"Chad",-1),W=c(" 付小小 "),z=c(" XX 32943898021309809423 "),F=c(" 3321944288191034921 "),Y=c(" 18112345678 "),A=c(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),E=c(" 111 "),R=c(" 2017-08-08 "),V=c(" 725 "),q=c(" 2017-08-08 "),K=b("h4",null,"信息组",-1),N=c(" 林东东 "),O=c(" 1234567 "),Q=c(" XX公司 - YY部 "),D=c(" 2017-08-08 "),G=c(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),H=c(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),J=c(" 付小小 "),L=c(" 1234568 ");x.render=function(e,a,t,l,d,i){const s=u("a-button"),r=u("a-tab-pane"),o=u("a-tabs"),n=u("a-descriptions-item"),c=u("a-descriptions"),_=u("a-step"),j=u("a-steps"),x=u("a-card"),U=u("a-divider"),Z=u("a-empty"),$=u("BasicTable"),ee=u("PageWrapper");return m(),f(ee,{title:"单号：234231029431",contentBackground:""},{extra:p((()=>[b(s,null,{default:p((()=>[g])),_:1}),b(s,null,{default:p((()=>[T])),_:1}),b(s,{type:"primary"},{default:p((()=>[y])),_:1})])),footer:p((()=>[b(o,{"default-active-key":"1"},{default:p((()=>[b(r,{key:"1",tab:"详情"}),b(r,{key:"2",tab:"规则"})])),_:1})])),default:p((()=>[b("div",v,[b(c,{size:"small",column:2},{default:p((()=>[b(n,{label:"创建人"},{default:p((()=>[h])),_:1}),b(n,{label:"订购产品"},{default:p((()=>[k])),_:1}),b(n,{label:"创建时间"},{default:p((()=>[P])),_:1}),b(n,{label:"关联单据"},{default:p((()=>[S])),_:1}),b(n,{label:"生效日期"},{default:p((()=>[X])),_:1}),b(n,{label:"备注"},{default:p((()=>[w])),_:1})])),_:1}),b(x,{title:"流程进度",bordered:!1},{default:p((()=>[b(j,{current:1,"progress-dot":"",size:"small"},{default:p((()=>[b(_,{title:"创建项目"},{description:p((()=>[C,I,B])),_:1}),b(_,{title:"部门初审"},{description:p((()=>[M])),_:1}),b(_,{title:"财务复核"}),b(_,{title:"完成"})])),_:1})])),_:1}),b(x,{title:"用户信息",bordered:!1,class:"mt-5"},{default:p((()=>[b(c,{column:3},{default:p((()=>[b(n,{label:"用户姓名"},{default:p((()=>[W])),_:1}),b(n,{label:"会员卡号"},{default:p((()=>[z])),_:1}),b(n,{label:"身份证"},{default:p((()=>[F])),_:1}),b(n,{label:"联系方式"},{default:p((()=>[Y])),_:1}),b(n,{label:"联系地址",span:2},{default:p((()=>[A])),_:1})])),_:1}),b(c,{title:"信息组",column:3},{default:p((()=>[b(n,{label:"某某数据"},{default:p((()=>[E])),_:1}),b(n,{label:"该数据更新时间"},{default:p((()=>[R])),_:1}),b(n,{label:"某某数据"},{default:p((()=>[V])),_:1}),b(n,{label:"该数据更新时间"},{default:p((()=>[q])),_:1})])),_:1}),K,b(x,{title:"多层级信息组"},{default:p((()=>[b(c,{title:"组名称",column:3},{default:p((()=>[b(n,{label:"负责人"},{default:p((()=>[N])),_:1}),b(n,{label:"角色码"},{default:p((()=>[O])),_:1}),b(n,{label:"所属部门"},{default:p((()=>[Q])),_:1}),b(n,{label:"过期时间"},{default:p((()=>[D])),_:1}),b(n,{label:"描述",span:2},{default:p((()=>[G])),_:1})])),_:1}),b(U),b(c,{title:"组名称",column:1},{default:p((()=>[b(n,{label:"学名"},{default:p((()=>[H])),_:1})])),_:1}),b(U),b(c,{title:"组名称",column:1},{default:p((()=>[b(n,{label:"负责人"},{default:p((()=>[J])),_:1}),b(n,{label:"角色码"},{default:p((()=>[L])),_:1})])),_:1})])),_:1})])),_:1}),b(x,{title:"用户近半年来电记录",class:"my-5"},{default:p((()=>[b(Z)])),_:1}),b($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export default x;
