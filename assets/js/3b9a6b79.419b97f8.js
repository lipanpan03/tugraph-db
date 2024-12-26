"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46674],{92168:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>h,toc:()=>l});var r=t(74848),i=t(28453);const d={},s="\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93",h={id:"introduction/what-is-gdbms",title:"\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93\uff0c\u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf\uff0c\u4ee5\u53ca\u4e24\u8005\u7279\u70b9\u7684\u5bf9\u6bd4\u3002",source:"@site/versions/version-4.3.1/zh-CN/source/2.introduction/2.what-is-gdbms.md",sourceDirName:"2.introduction",slug:"/introduction/what-is-gdbms",permalink:"/tugraph-db/zh/4.3.1/introduction/what-is-gdbms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f\u56fe",permalink:"/tugraph-db/zh/4.3.1/introduction/what-is-graph"},next:{title:"\u4ec0\u4e48\u662fTuGraph",permalink:"/tugraph-db/zh/4.3.1/introduction/what-is-tugraph"}},c={},l=[{value:"1. \u56fe\u6570\u636e\u5e93\u4ecb\u7ecd",id:"1-\u56fe\u6570\u636e\u5e93\u4ecb\u7ecd",level:2},{value:"2. \u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u8f83\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf",id:"2-\u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u8f83\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf",level:2},{value:"2.1. \u6027\u80fd",id:"21-\u6027\u80fd",level:3},{value:"2.2. \u517c\u5bb9\u6027",id:"22-\u517c\u5bb9\u6027",level:3},{value:"2.3. \u76f4\u89c2\u6027",id:"23-\u76f4\u89c2\u6027",level:3},{value:"3. \u56fe\u6570\u636e\u5e93\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5bf9\u6bd4",id:"3-\u56fe\u6570\u636e\u5e93\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5bf9\u6bd4",level:2}];function o(n){const e={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93",children:"\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4ec0\u4e48\u662f\u56fe\u6570\u636e\u5e93\uff0c\u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf\uff0c\u4ee5\u53ca\u4e24\u8005\u7279\u70b9\u7684\u5bf9\u6bd4\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1-\u56fe\u6570\u636e\u5e93\u4ecb\u7ecd",children:"1. \u56fe\u6570\u636e\u5e93\u4ecb\u7ecd"}),"\n",(0,r.jsx)(e.p,{children:"\u56fe\u6570\u636e\u5e93\u662f\u57fa\u4e8e\u56fe\u6a21\u578b\u7684\u6570\u636e\u5e93\u3002\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u76f8\u6bd4\uff0c\u56fe\u6570\u636e\u5e93\u771f\u6b63\u6ce8\u91cd\u201c\u5173\u7cfb\u201d\u3002\u56fe\u6570\u636e\u5e93\u7684\u4e3b\u8981\u529f\u80fd\u662f\u7ba1\u7406\u56fe\u6570\u636e\uff0c\u56e0\u6b64\u9700\u8981\u652f\u6301\u9ad8\u6548\u7684\u70b9\u3001\u8fb9\u67e5\u8be2\u548c\u66f4\u65b0\uff1b\u4e3a\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\uff0c\u901a\u5e38\u8fd8\u9700\u8981\u589e\u52a0\u5bf9\u4e8b\u52a1\uff08transaction\uff09\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u5e76\u53d1\u64cd\u4f5c\u4e0b\u7684\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"2-\u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u8f83\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf",children:"2. \u56fe\u6570\u636e\u5e93\u76f8\u6bd4\u8f83\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f18\u52bf"}),"\n",(0,r.jsx)(e.p,{children:"\u56fe\u6570\u636e\u5e93\u7684\u529f\u80fd\u662f\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u6269\u5c55\u3002\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4ec5\u652f\u6301\u7684\u201c\u8868\u7ed3\u6784\u201d\u76f8\u6bd4\uff0c\u56fe\u6570\u636e\u5e93\u6240\u652f\u6301\u7684\u201c\u56fe\u7ed3\u6784\u201d\u66f4\u4e3a\u7075\u6d3b\u3002\u56fe\u6570\u636e\u5e93\u5728\u57fa\u4e8e\u56fe\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u67e5\u8be2\u548c\u4fee\u6539\u65b9\u9762\u91c7\u7528\u4e0d\u540c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\u7684\u8bbe\u8ba1\u3002\u5728\u56fe\u6570\u636e\u64cd\u4f5c\u62bd\u8c61\u4e0a\uff0c\u91c7\u7528\u57fa\u4e8e\u70b9\u7684\u89c6\u89d2\uff0c\u4f8b\u5982\u70b9\u901a\u8fc7\u5176\u6240\u6709\u201c\u51fa\u8fb9\u201d\uff08\u4ece\u4e00\u4e2a\u70b9\u51fa\u53d1\uff0c\u8fde\u63a5\u5230\u5176\u4ed6\u70b9\u7684\u8fb9\uff09\u8bbf\u95ee\u5176\u90bb\u63a5\u70b9\u3002\u8fd9\u662f\u56fe\u6570\u636e\u5e93\u7cfb\u7edf\u8bbe\u8ba1\u7684\u6838\u5fc3\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u56fe\u6570\u636e\u5e93\u7684\u72ec\u7279\u6027\u4f53\u73b0\u5728\u4ee5\u4e0b\u4e09\u4e2a\u65b9\u9762:"}),"\n",(0,r.jsx)(e.h3,{id:"21-\u6027\u80fd",children:"2.1. \u6027\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5173\u8054\u5173\u7cfb\u5904\u7406\u4e0a\uff0c\u4f7f\u7528\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0d\u53ef\u907f\u514d\u5730\u8981\u4f7f\u7528\u8868\u7684JOIN\u64cd\u4f5c\uff0c\u8fd9\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u8f83\u5927\u5f71\u54cd\uff1b\u800c\u56fe\u6570\u636e\u5e93\u5219\u76f4\u63a5\u8df3\u8f6c\u8bbf\u95ee\u7c7b\u6307\u9488\uff0c\u64cd\u4f5c\u5173\u8054\u6570\u636e\u7684\u6548\u7387\u66f4\u9ad8\uff0c\u6bd4\u5173\u7cfb\u578b\u6570\u636e\u5e93\u63d0\u9ad82\u52304\u4e2a\u6570\u91cf\u7ea7\u7684\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"22-\u517c\u5bb9\u6027",children:"2.2. \u517c\u5bb9\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u73b0\u5b9e\u4e2d\uff0c\u9879\u76ee\u8fdb\u7a0b\u901a\u5e38\u4e0d\u65ad\u6f14\u53d8\uff0c\u6570\u636e\u7684\u5185\u5bb9\u751a\u81f3\u6570\u636e\u683c\u5f0f\u4e5f\u5728\u4e0d\u65ad\u53d8\u5316\u3002\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u8868\u7ed3\u6784\u7684\u53d8\u5316\u6216\u5efa\u7acb\u591a\u4e2a\u65b0\u8868\uff0c\u5bf9\u6e90\u6570\u636e\u7684\u4fee\u6539\u975e\u5e38\u5927\u3002\u800c\u5728\u56fe\u6570\u636e\u5e93\u4e2d\uff0c\u4ec5\u9700\u6dfb\u52a0\u65b0\u7684\u70b9\u3001\u8fb9\u548c\u5c5e\u6027\uff0c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5bf9\u5e94\u7684\u7c7b\u578b\u5373\u53ef\u3002\u4ece\u672c\u8d28\u4e0a\u8bf4\uff0c\u4e00\u4e2a\u8868\u4ee3\u8868\u4e00\u79cd\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4e00\u4e2a\u70b9\u4ee3\u8868\u4e00\u4e2a\u7279\u5b9a\u7684\u6570\u636e\u3002\u8fd9\u610f\u5473\u7740\u5173\u7cfb\u578b\u6570\u636e\u5e93\u66f4\u5173\u6ce8\u6570\u636e\u7c7b\u578b\uff0c\u800c\u56fe\u6570\u636e\u5e93\u66f4\u5173\u6ce8\u6570\u636e\u4e2a\u4f53\u53ca\u5176\u5173\u8054\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"23-\u76f4\u89c2\u6027",children:"2.3. \u76f4\u89c2\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u56fe\u7684\u65b9\u5f0f\u8868\u8fbe\u73b0\u5b9e\u4e16\u754c\u7684\u5173\u7cfb\u66f4\u76f4\u63a5\u548c\u81ea\u7136\uff0c\u5728\u4e07\u7269\u4e92\u8054\u7684\u65f6\u4ee3\u5c24\u4e3a\u7a81\u51fa\u3002\u5982\u679c\u4f7f\u7528\u5173\u7cfb\u578b\u6570\u636e\uff0c\u5148\u5efa\u7acb\u5b9e\u4f53\u8868\uff0c\u518d\u5efa\u7acb\u5173\u7cfb\u8868\uff0c\u6700\u540e\u6620\u5c04\u6570\u636e\uff0c\u9700\u8981\u9ad8\u5ea6\u7684\u62bd\u8c61\u601d\u7ef4\u3002\u5728\u56fe\u6570\u636e\u4e0a\u8fdb\u884c\u5206\u6790\u67e5\u8be2\u65f6\uff0c\u53ef\u4ee5\u76f4\u89c2\u5730\u901a\u8fc7\u70b9\u8fb9\u8fde\u63a5\u7684\u62d3\u6251\u7ed3\u6784\u627e\u5230\u6240\u9700\u6570\u636e\uff0c\u65e0\u9700\u4efb\u4f55\u4e13\u4e1a\u77e5\u8bc6\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"3-\u56fe\u6570\u636e\u5e93\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5bf9\u6bd4",children:"3. \u56fe\u6570\u636e\u5e93\u4e0e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5bf9\u6bd4"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5206\u7c7b"}),(0,r.jsx)(e.th,{children:"\u6a21\u578b"}),(0,r.jsx)(e.th,{children:"\u4f18\u52bf"}),(0,r.jsx)(e.th,{children:"\u52a3\u52bf"}),(0,r.jsx)(e.th,{children:"\u4e3e\u4f8b"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5173\u7cfb\u578b\u6570\u636e\u5e93"}),(0,r.jsx)(e.td,{children:"\u8868\u7ed3\u6784"}),(0,r.jsx)(e.td,{children:"\u6570\u636e\u9ad8\u5ea6\u7ed3\u6784\u5316\uff0c\u4e00\u81f4\u6027\u5f3a\uff0c\u8f6f\u4ef6\u6210\u719f\u5ea6\u9ad8"}),(0,r.jsx)(e.td,{children:"\u9762\u5411\u591a\u8df3\u7684\u5173\u8054\u5173\u7cfb\u67e5\u8be2\u4f4e\u6548\u6216\u4e0d\u652f\u6301"}),(0,r.jsx)(e.td,{children:"MySQL\u3001Oracle"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u56fe\u6570\u636e\u5e93"}),(0,r.jsx)(e.td,{children:"\u56fe\u7ed3\u6784"}),(0,r.jsx)(e.td,{children:"\u9488\u5bf9\u5173\u8054\u5173\u7cfb\u7684\u5efa\u6a21\u5efa\u6a21\u548c\u64cd\u4f5c\u6548\u7387\u975e\u5e38\u9ad8"}),(0,r.jsx)(e.td,{children:"\u9ad8\u5ea6\u7ed3\u6784\u5316\u7684\u6570\u636e\u5904\u7406\u80fd\u529b\u4e0d\u53ca\u5173\u7cfb\u578b\u6570\u636e\u5e93"}),(0,r.jsx)(e.td,{children:"Neo4j\u3001TuGraph"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u603b\u4e4b\uff0c\u9762\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u5b58\u50a8\u548c\u5904\u7406\u95ee\u9898\uff0c\u4f20\u7edf\u7684\u5173\u7cfb\u6570\u636e\u5e93\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5927\u90e8\u5206\u7684\u65e5\u5e38\u6570\u636e\u5b58\u50a8\u9700\u6c42\u3002\u56fe\u6570\u636e\u5e93\u6280\u672f\u53ef\u4ee5\u5c06\u5173\u7cfb\u4fe1\u606f\u5b58\u50a8\u4e3a\u5b9e\u4f53\uff0c\u7075\u6d3b\u62d3\u5c55\u6570\u636e\u6a21\u578b\u3002\u7531\u4e8e\u63d0\u4f9b\u4e86\u5bf9\u5173\u8054\u6570\u636e\u6700\u76f4\u63a5\u7684\u8868\u8fbe\u65b9\u5f0f\u548c\u56fe\u6a21\u578b\u5bf9\u5f02\u6784\u6570\u636e\u7684\u5929\u7136\u5305\u5bb9\u6027\uff0c\u56fe\u6570\u636e\u5e93\u6280\u672f\u5fc5\u5c06\u6210\u4e3a\u672a\u6765\u6700\u70ed\u70b9\u7684\u6280\u672f\u4e4b\u4e00\uff0c\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u5b58\u50a8\u548c\u5206\u6790\u5927\u89c4\u6a21\u56fe\u6570\u636e\u7684\u6709\u529b\u652f\u6301\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>h});var r=t(96540);const i={},d=r.createContext(i);function s(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);