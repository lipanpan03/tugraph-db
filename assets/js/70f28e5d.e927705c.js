"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62336],{54521:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>h,metadata:()=>s,toc:()=>u});var i=e(74848),t=e(28453);const h={},l="\u4ec0\u4e48\u662fTuGraph",s={id:"introduction/what-is-tugraph",title:"\u4ec0\u4e48\u662fTuGraph",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdTuGraph\u793e\u533a\u7248\u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u6027\uff0c\u4ee5\u53caTuGraph\u4f01\u4e1a\u7248\u548c\u793e\u533a\u7248\u7684\u5dee\u5f02\u3002",source:"@site/versions/version-4.3.1/zh-CN/source/2.introduction/3.what-is-tugraph.md",sourceDirName:"2.introduction",slug:"/introduction/what-is-tugraph",permalink:"/tugraph-db/zh/4.3.1/introduction/what-is-tugraph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93",permalink:"/tugraph-db/zh/4.3.1/introduction/what-is-gdbms"},next:{title:"TuGraph\u56fe\u6a21\u578b\u8bf4\u660e",permalink:"/tugraph-db/zh/4.3.1/introduction/schema"}},a={},u=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. TuGraph\u793e\u533a\u7248",id:"2-tugraph\u793e\u533a\u7248",level:2},{value:"3. TuGraph\u7279\u6027",id:"3-tugraph\u7279\u6027",level:2},{value:"4. TuGraph\u4f01\u4e1a\u7248",id:"4-tugraph\u4f01\u4e1a\u7248",level:2}];function c(n){const r={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"\u4ec0\u4e48\u662ftugraph",children:"\u4ec0\u4e48\u662fTuGraph"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdTuGraph\u793e\u533a\u7248\u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u6027\uff0c\u4ee5\u53caTuGraph\u4f01\u4e1a\u7248\u548c\u793e\u533a\u7248\u7684\u5dee\u5f02\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,i.jsx)(r.p,{children:"TuGraph\u56fe\u6570\u636e\u5e93\u7531\u8682\u8681\u96c6\u56e2\u4e0e\u6e05\u534e\u5927\u5b66\u8054\u5408\u7814\u53d1\uff0c\u6784\u5efa\u4e86\u4e00\u5957\u5305\u542b\u56fe\u5b58\u50a8\u3001\u56fe\u8ba1\u7b97\u3001\u56fe\u5b66\u4e60\u3001\u56fe\u7814\u53d1\u5e73\u53f0\u7684\u5b8c\u5584\u7684\u56fe\u6280\u672f\u4f53\u7cfb\uff0c\u62e5\u6709\u4e1a\u754c\u9886\u5148\u89c4\u6a21\u7684\u56fe\u96c6\u7fa4\uff0c\u89e3\u51b3\u4e86\u56fe\u6570\u636e\u5206\u6790\u9762\u4e34\u7684\u5927\u6570\u636e\u91cf\u3001\u9ad8\u541e\u5410\u7387\u548c\u4f4e\u5ef6\u8fdf\u7b49\u91cd\u5927\u6311\u6218\uff0c\u662f\u8682\u8681\u96c6\u56e2\u91d1\u878d\u98ce\u63a7\u80fd\u529b\u7684\u91cd\u8981\u57fa\u7840\u8bbe\u65bd\uff0c\u663e\u8457\u63d0\u5347\u4e86\u6b3a\u8bc8\u6d17\u94b1\u7b49\u91d1\u878d\u98ce\u9669\u7684\u5b9e\u65f6\u8bc6\u522b\u80fd\u529b\u548c\u5ba1\u7406\u5206\u6790\u6548\u7387\uff0c\u5e76\u9762\u5411\u91d1\u878d\u3001\u5de5\u4e1a\u3001\u653f\u52a1\u670d\u52a1\u7b49\u884c\u4e1a\u5ba2\u6237\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"2-tugraph\u793e\u533a\u7248",children:"2. TuGraph\u793e\u533a\u7248"}),"\n",(0,i.jsx)(r.p,{children:"2022\u5e749\u6708\uff0cTuGraph\u5355\u673a\u7248\u5f00\u6e90\uff0c\u63d0\u4f9b\u4e86\u5b8c\u5907\u7684\u56fe\u6570\u636e\u5e93\u57fa\u7840\u529f\u80fd\u548c\u6210\u719f\u7684\u4ea7\u54c1\u8bbe\u8ba1\uff0c\u652f\u6301TB\u7ea7\u522b\u7684\u6570\u636e\u89c4\u6a21\uff0c\u4e3a\u7528\u6237\u7ba1\u7406\u548c\u5206\u6790\u590d\u6742\u5173\u8054\u6570\u636e\u63d0\u4f9b\u4e86\u9ad8\u6548\u3001\u6613\u7528\u3001\u53ef\u9760\u7684\u5e73\u53f0\u3002"}),"\n",(0,i.jsx)(r.p,{children:"TuGraph\u793e\u533a\u7248\u4e8e2022\u5e749\u6708\u5f00\u6e90\uff0c\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u56fe\u6570\u636e\u5e93\u57fa\u7840\u529f\u80fd\u548c\u6210\u719f\u7684\u4ea7\u54c1\u8bbe\u8ba1\uff08\u5982ACID\u517c\u5bb9\u7684\u4e8b\u52a1\u3001\u7f16\u7a0bAPI\u548c\u914d\u5957\u5de5\u5177\u7b49\uff09\uff0c\u9002\u7528\u4e8e\u5355\u5b9e\u4f8b\u90e8\u7f72\u3002\u793e\u533a\u7248\u652f\u6301TB\u7ea7\u522b\u7684\u6570\u636e\u89c4\u6a21\uff0c\u4e3a\u7528\u6237\u7ba1\u7406\u548c\u5206\u6790\u590d\u6742\u5173\u8054\u6570\u636e\u63d0\u4f9b\u4e86\u9ad8\u6548\u3001\u6613\u7528\u3001\u53ef\u9760\u7684\u5e73\u53f0\uff0c\u662f\u5b66\u4e60TuGraph\u548c\u5b9e\u73b0\u5c0f\u578b\u9879\u76ee\u7684\u7406\u60f3\u9009\u62e9\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"3-tugraph\u7279\u6027",children:"3. TuGraph\u7279\u6027"}),"\n",(0,i.jsx)(r.p,{children:"TuGraph\u662f\u652f\u6301\u5927\u6570\u636e\u91cf\u3001\u4f4e\u5ef6\u8fdf\u67e5\u627e\u548c\u5feb\u901f\u56fe\u5206\u6790\u529f\u80fd\u7684\u9ad8\u6548\u56fe\u6570\u636e\u5e93\u3002TuGraph\u4e5f\u662f\u57fa\u4e8e\u78c1\u76d8\u7684\u6570\u636e\u5e93\uff0c\u652f\u6301\u5b58\u50a8\u591a\u8fbe\u6570\u5341TB\u7684\u6570\u636e\u3002TuGraph\u63d0\u4f9b\u591a\u79cdAPI\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u8f7b\u677e\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4f7f\u5176\u6613\u4e8e\u6269\u5c55\u548c\u4f18\u5316\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5b83\u5177\u6709\u5982\u4e0b\u529f\u80fd\u7279\u5f81\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u5c5e\u6027\u56fe\u6a21\u578b"}),"\n",(0,i.jsx)(r.li,{children:"\u5b9e\u65f6\u589e\u5220\u67e5\u6539"}),"\n",(0,i.jsx)(r.li,{children:"\u591a\u91cd\u56fe\uff08\u70b9\u95f4\u5141\u8bb8\u591a\u91cd\u8fb9\uff09"}),"\n",(0,i.jsx)(r.li,{children:"\u591a\u56fe\uff08\u5927\u56fe\u4e0e\u591a\u4e2a\u5b50\u56fe\uff09"}),"\n",(0,i.jsx)(r.li,{children:"\u5b8c\u5584\u7684ACID\u4e8b\u52a1\u5904\u7406\uff0c\u9694\u79bb\u7ea7\u522b\u4e3a\u53ef\u4e32\u884c\u5316\uff08serializable\uff09"}),"\n",(0,i.jsx)(r.li,{children:"\u70b9\u8fb9\u7d22\u5f15"}),"\n",(0,i.jsx)(r.li,{children:"\u6df7\u5408\u4e8b\u52a1\u548c\u5206\u6790\u5904\u7406\uff08HTAP\uff09\uff0c\u652f\u6301\u56fe\u67e5\u8be2\u3001\u56fe\u5206\u6790\u3001\u56fe\u5b66\u4e60"}),"\n",(0,i.jsx)(r.li,{children:"\u4e3b\u6d41\u56fe\u67e5\u8be2\u8bed\u8a00\uff08OpenCypher\u3001ISO GQL\u7b49\uff09"}),"\n",(0,i.jsx)(r.li,{children:"\u652f\u6301OLAP API\uff0c\u5185\u7f6e30\u591a\u79cd\u56fe\u5206\u6790\u7b97\u6cd5"}),"\n",(0,i.jsx)(r.li,{children:"\u57fa\u4e8eC++/Python\u7684\u5b58\u50a8\u8fc7\u7a0b\uff0c\u542b\u4e8b\u52a1\u5185\u5e76\u884cTraversal API"}),"\n",(0,i.jsx)(r.li,{children:"\u63d0\u4f9b\u56fe\u53ef\u89c6\u5316\u5de5\u5177"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u5728\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u65b9\u9762\u7684\u652f\u6301\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u5343\u4e07\u70b9/\u79d2\u7684\u9ad8\u541e\u5410\u7387"}),"\n",(0,i.jsx)(r.li,{children:"TB\u7ea7\u5927\u5bb9\u91cf"}),"\n",(0,i.jsx)(r.li,{children:"\u9ad8\u53ef\u7528\u6027\u652f\u6301"}),"\n",(0,i.jsx)(r.li,{children:"\u9ad8\u6027\u80fd\u6279\u91cf\u5bfc\u5165"}),"\n",(0,i.jsx)(r.li,{children:"\u5728\u7ebf/\u79bb\u7ebf\u7684\u5907\u4efd\u6062\u590d"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"4-tugraph\u4f01\u4e1a\u7248",children:"4. TuGraph\u4f01\u4e1a\u7248"}),"\n",(0,i.jsx)(r.p,{children:"\u4f01\u4e1a\u7248\u5bf9\u5546\u4e1a\u5316\u529f\u80fd\u652f\u6301\u66f4\u52a0\u5b8c\u5584\uff0c\u5305\u62ec\u5206\u5e03\u5f0f\u96c6\u7fa4\u67b6\u6784\uff0c\u8986\u76d6\u63a2\u7d22\u3001\u7814\u53d1\u3001\u670d\u52a1\u3001\u8fd0\u7ef4\u7ba1\u7406\u5168\u751f\u547d\u5468\u671f\u7684\u4e00\u7ad9\u5f0f\u56fe\u5e73\u53f0\uff0c\u5728\u7ebf\u3001\u8fd1\u7ebf\u3001\u79bb\u7ebf\u7684\u56fe\u8ba1\u7b97\u5f15\u64ce\uff0c\u652f\u6301\u6d41\u5f0f\u3001\u5927\u6570\u636e\u7c7b\u6570\u636e\u6e90\uff0c\u591a\u5730\u591a\u4e2d\u5fc3\u7684\u90e8\u7f72\u5f62\u6001\uff0c\u4ee5\u53ca\u4e13\u5bb6\u652f\u6301\u670d\u52a1\u7b49\u3002\u4f01\u4e1a\u7248\u662f\u5546\u4e1a\u5316\u89e3\u51b3\u65b9\u6848\u7684\u7406\u60f3\u9009\u62e9\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u9700\u5546\u4e1a\u652f\u6301\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u7535\u8bdd\uff1a400-903-0809"}),"\n",(0,i.jsxs)(r.li,{children:["\u90ae\u4ef6\uff1a",(0,i.jsx)(r.a,{href:"mailto:tugraph@service.alipay.com",children:"tugraph@service.alipay.com"})]}),"\n",(0,i.jsxs)(r.li,{children:["\u5b98\u7f51\uff1a",(0,i.jsx)(r.a,{href:"https://tugraph.antgroup.com",children:"https://tugraph.antgroup.com"})]}),"\n"]})]})}function d(n={}){const{wrapper:r}={...(0,t.R)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},28453:(n,r,e)=>{e.d(r,{R:()=>l,x:()=>s});var i=e(96540);const t={},h=i.createContext(t);function l(n){const r=i.useContext(h);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function s(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(h.Provider,{value:r},n.children)}}}]);