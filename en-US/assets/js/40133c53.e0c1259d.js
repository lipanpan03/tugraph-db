"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81237],{70646:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(74848),a=r(28453);const l={},d="Learn Tutorial",i={id:"developer-manual/interface/learn/tutorial",title:"Learn Tutorial",description:"\u672c\u6587\u6863\u662f\u4e3a TuGraph \u7684\u7528\u6237\u8bbe\u8ba1\u7684\u5f15\u5bfc\u7a0b\u5e8f\uff0c\u7528\u6237\u5728\u9605\u8bfb\u8be6\u7ec6\u7684\u6587\u6863\u4e4b\u524d\uff0c\u5e94\u8be5\u9996\u5148\u9605\u8bfb\u8be5\u6587\u6863\uff0c\u5bf9 TuGraph \u7684\u56fe\u5b66\u4e60\u8fd0\u884c\u6d41\u7a0b\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3\uff0c\u4e4b\u540e\u518d\u9605\u8bfb\u8be6\u7ec6\u6587\u6863\u4f1a\u66f4\u52a0\u65b9\u4fbf\u3002\u5f15\u5bfc\u7a0b\u5e8f\u662f\u57fa\u4e8e Tugraph \u7684\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\u5b9e\u4f8b\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5176\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/versions/version-3.5.1/zh-CN/source/5.developer-manual/6.interface/5.learn/1.tutorial.md",sourceDirName:"5.developer-manual/6.interface/5.learn",slug:"/developer-manual/interface/learn/tutorial",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/interface/learn/tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RESTful API",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/interface/protocol/restful-api"},next:{title:"Sampling API",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/interface/learn/sampling_api"}},s={},c=[{value:"1. TuGraph \u56fe\u5b66\u4e60\u6a21\u5757",id:"1-tugraph-\u56fe\u5b66\u4e60\u6a21\u5757",level:2},{value:"2. \u6570\u636e\u5bfc\u5165",id:"2-\u6570\u636e\u5bfc\u5165",level:2},{value:"3. feature\u7279\u5f81\u8f6c\u6362",id:"3-feature\u7279\u5f81\u8f6c\u6362",level:2},{value:"4. \u91c7\u6837\u7b97\u5b50\u53ca\u7f16\u8bd1",id:"4-\u91c7\u6837\u7b97\u5b50\u53ca\u7f16\u8bd1",level:2},{value:"4.1.\u91c7\u6837\u7b97\u5b50\u4ecb\u7ecd",id:"41\u91c7\u6837\u7b97\u5b50\u4ecb\u7ecd",level:3},{value:"4.2.\u7f16\u8bd1",id:"42\u7f16\u8bd1",level:3},{value:"5. \u8bad\u7ec3",id:"5-\u8bad\u7ec3",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"learn-tutorial",children:"Learn Tutorial"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u6863\u662f\u4e3a TuGraph \u7684\u7528\u6237\u8bbe\u8ba1\u7684\u5f15\u5bfc\u7a0b\u5e8f\uff0c\u7528\u6237\u5728\u9605\u8bfb\u8be6\u7ec6\u7684\u6587\u6863\u4e4b\u524d\uff0c\u5e94\u8be5\u9996\u5148\u9605\u8bfb\u8be5\u6587\u6863\uff0c\u5bf9 TuGraph \u7684\u56fe\u5b66\u4e60\u8fd0\u884c\u6d41\u7a0b\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3\uff0c\u4e4b\u540e\u518d\u9605\u8bfb\u8be6\u7ec6\u6587\u6863\u4f1a\u66f4\u52a0\u65b9\u4fbf\u3002\u5f15\u5bfc\u7a0b\u5e8f\u662f\u57fa\u4e8e Tugraph \u7684\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\u5b9e\u4f8b\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5176\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-tugraph-\u56fe\u5b66\u4e60\u6a21\u5757",children:"1. TuGraph \u56fe\u5b66\u4e60\u6a21\u5757"}),"\n",(0,t.jsxs)(n.p,{children:["TuGraph \u56fe\u5b66\u4e60\u6a21\u5757\u5c06TuGraph\u4e2d\u7684\u56fe\u6570\u636e\u91c7\u6837\uff0c\u91c7\u6837\u540e\u7684\u8282\u70b9\u548c\u8fb9\u4f5c\u4e3a\u56fe\u5b66\u4e60\u7684\u7279\u5f81\uff0c\u8fdb\u884c\u5b66\u4e60\u8bad\u7ec3\u3002\u8fd0\u884c\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,t.jsx)(n.img,{alt:"Alt text",src:r(48704).A+"",width:"808",height:"1046"})]}),"\n",(0,t.jsx)(n.h2,{id:"2-\u6570\u636e\u5bfc\u5165",children:"2. \u6570\u636e\u5bfc\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u6570\u636e\u5bfc\u5165\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/3.5.1/developer-manual/server-tools/data-import",children:"\u6570\u636e\u5bfc\u5165"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5bfc\u5165\u8fc7\u7a0b\u4ee5cora\u6570\u636e\u96c6\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u5728build/output\u76ee\u5f55\u4e0b\u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./lgraph_import -c ./../../test/integration/data/algo/cora.conf --dir ./cora_db --overwrite true\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2dcora.conf\u4e3a\u56feschema\u6587\u4ef6\uff0c\u4ee3\u8868\u56fe\u6570\u636e\u7684\u683c\u5f0f\u3002cora_db\u4e3a\u5bfc\u5165\u540e\u7684\u56fe\u6570\u636e\u6587\u4ef6\u540d\u79f0\uff0c\u4ee3\u8868\u56fe\u6570\u636e\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"3-feature\u7279\u5f81\u8f6c\u6362",children:"3. feature\u7279\u5f81\u8f6c\u6362"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u56fe\u5b66\u4e60\u4e2d\u7684feature\u7279\u5f81\u4e00\u822c\u8868\u793a\u4e3a\u8f83\u957f\u7684float\u7c7b\u578b\u6570\u7ec4\uff0cTuGraph\u6682\u4e0d\u652f\u6301float\u6570\u7ec4\u7c7b\u578b\u52a0\u8f7d\uff0c\u56e0\u6b64\u53ef\u5c06\u5176\u6309\u7167string\u7c7b\u578b\u5bfc\u5165\u540e\uff0c\u8f6c\u6362\u6210char*\u65b9\u4fbf\u540e\u7eed\u5b58\u53d6\uff0c\u5177\u4f53\u5b9e\u73b0\u53ef\u53c2\u8003feature_float.cpp\u6587\u4ef6\u3002\n\u5177\u4f53\u6267\u884c\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728build\u76ee\u5f55\u4e0b\u7f16\u8bd1\u5bfc\u5165plugin\uff1a\n",(0,t.jsx)(n.code,{children:"make feature_float_embed"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728build/output\u76ee\u5f55\u4e0b\u6267\u884c\n",(0,t.jsx)(n.code,{children:"./algo/feature_float_embed ./cora_db"}),"\n\u5373\u53ef\u8fdb\u884c\u8f6c\u6362\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"4-\u91c7\u6837\u7b97\u5b50\u53ca\u7f16\u8bd1",children:"4. \u91c7\u6837\u7b97\u5b50\u53ca\u7f16\u8bd1"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph\u5728cython\u5c42\u5b9e\u73b0\u4e86\u4e00\u79cd\u83b7\u53d6\u5168\u56fe\u6570\u636e\u7684\u7b97\u5b50\u53ca4\u79cd\u91c7\u6837\u7b97\u5b50\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"41\u91c7\u6837\u7b97\u5b50\u4ecb\u7ecd",children:"4.1.\u91c7\u6837\u7b97\u5b50\u4ecb\u7ecd"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u91c7\u6837\u7b97\u5b50"}),(0,t.jsx)(n.th,{children:"\u91c7\u6837\u65b9\u5f0f"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GetDB"}),(0,t.jsx)(n.td,{children:"\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u56fe\u6570\u636e\u5e76\u8f6c\u6362\u6210\u6240\u9700\u6570\u636e\u7ed3\u6784"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Neighbor Sampling"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7ed9\u5b9a\u7684\u8282\u70b9\u91c7\u6837\u5176\u90bb\u5c45\u8282\u70b9\uff0c\u5f97\u5230\u91c7\u6837\u5b50\u56fe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Edge Sampling"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u91c7\u6837\u7387\u91c7\u6837\u56fe\u4e2d\u7684\u8fb9\uff0c\u5f97\u5230\u91c7\u6837\u5b50\u56fe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Random Walk Sampling"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7ed9\u5b9a\u7684\u8282\u70b9\uff0c\u8fdb\u884c\u968f\u673a\u6e38\u8d70\uff0c\u5f97\u5230\u91c7\u6837\u5b50\u56fe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Negative Sampling"}),(0,t.jsx)(n.td,{children:"\u751f\u6210\u4e0d\u5b58\u5728\u8fb9\u7684\u5b50\u56fe\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"42\u7f16\u8bd1",children:"4.2.\u7f16\u8bd1"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728tugraph-db/build\u6587\u4ef6\u5939\u4e0b\u6267\u884c\n",(0,t.jsx)(n.code,{children:"make -j2"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6216\u5728tugraph-db/learn/procedures\u6587\u4ef6\u5939\u4e0b\u6267\u884c\n",(0,t.jsx)(n.code,{children:"python3 setup.py build_ext -i"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5f97\u5230\u7b97\u5b50so\u540e\uff0c\u5728Python\u4e2dimport \u5373\u53ef\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"5-\u8bad\u7ec3",children:"5. \u8bad\u7ec3"}),"\n",(0,t.jsxs)(n.p,{children:["TuGraph\u5728python\u5c42\u8c03\u7528cython\u5c42\u7684\u7b97\u5b50\uff0c\u5b9e\u73b0\u56fe\u5b66\u4e60\u7684\u8bad\u7ec3\u3002\n\u4f7f\u7528 TuGraph \u56fe\u5b66\u4e60\u6a21\u5757\u4f7f\u7528\u65b9\u5f0f\u4ecb\u7ecd\u5982\u4e0b:\n\u5728tugraph-db/learn/example\u6587\u4ef6\u5939\u4e0b\u6267\u884c\n",(0,t.jsx)(n.code,{children:"python3 train_full_cora.py"}),"\n\u5373\u53ef\u8fdb\u884c\u8bad\u7ec3\u3002\n\u6700\u7ec8\u6253\u5370loss\u6570\u503c\u5c0f\u4e8e0.9\uff0c\u5373\u4e3a\u8bad\u7ec3\u6210\u529f\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},48704:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/learn_flow_chart_zh-2b6033f80e4ac9e5ed7491e345d34f51.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(96540);const a={},l=t.createContext(a);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);