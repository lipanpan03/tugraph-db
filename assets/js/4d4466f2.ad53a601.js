"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73211],{92004:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=i(74848),t=i(28453);const c={},s="\u4ece\u6e90\u7801\u7f16\u8bd1",l={id:"installation&running/compile",title:"\u4ece\u6e90\u7801\u7f16\u8bd1",description:"\u672c\u6587\u6863\u4e3b\u8981\u63cf\u8ff0 TuGraph \u4ece\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u3002",source:"@site/versions/version-4.5.1/zh-CN/source/5.installation&running/6.compile.md",sourceDirName:"5.installation&running",slug:"/installation&running/compile",permalink:"/tugraph-db/zh/4.5.1/installation&running/compile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e91\u90e8\u7f72",permalink:"/tugraph-db/zh/4.5.1/installation&running/cloud-deployment"},next:{title:"\u6570\u636e\u5e93\u8fd0\u884c",permalink:"/tugraph-db/zh/4.5.1/installation&running/tugraph-running"}},o={},a=[{value:"1.\u524d\u7f6e\u6761\u4ef6",id:"1\u524d\u7f6e\u6761\u4ef6",level:2},{value:"2.\u7f16\u8bd1\u4ecb\u7ecd",id:"2\u7f16\u8bd1\u4ecb\u7ecd",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u4ece\u6e90\u7801\u7f16\u8bd1",children:"\u4ece\u6e90\u7801\u7f16\u8bd1"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u63cf\u8ff0 TuGraph \u4ece\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1\u524d\u7f6e\u6761\u4ef6",children:"1.\u524d\u7f6e\u6761\u4ef6"}),"\n",(0,r.jsxs)(e.p,{children:["\u63a8\u8350\u5728linux\u7cfb\u7edf\u4e0b\u642d\u5efaTuGraph\u3002\u540c\u65f6docker\u73af\u5883\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9,\u5982\u679c\u4f60\u60f3\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u7684\u73af\u5883\uff0c\u8bf7\u53c2\u8003",(0,r.jsx)(e.a,{href:"/tugraph-db/zh/4.5.1/installation&running/docker-deployment",children:"Dockerfile"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"2\u7f16\u8bd1\u4ecb\u7ecd",children:"2.\u7f16\u8bd1\u4ecb\u7ecd"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u7f16\u8bd1TuGraph\u7684\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u9700\u8981web\u63a5\u53e3\u8fd0\u884c",(0,r.jsx)(e.code,{children:"deps/build_deps.sh"}),"\uff0c\u4e0d\u9700\u8981web\u63a5\u53e3\u5219\u8df3\u8fc7\u6b64\u6b65\u9aa4"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6839\u636e\u5bb9\u5668\u7cfb\u7edf\u4fe1\u606f\u6267\u884c",(0,r.jsx)(e.code,{children:"cmake .. -DOURSYSTEM=centos"}),"\u6216\u8005",(0,r.jsx)(e.code,{children:"cmake .. -DOURSYSTEM=ubuntu"}),"\uff0c\u5982\u679c\u5728arm\u673a\u5668\u7f16\u8bd1\uff08\u5982M1\u82af\u7247\u7684Mac\u4e2d\uff0c\u9700\u8981\u52a0\u4e0a",(0,r.jsx)(e.code,{children:" -DENABLE_BUILD_ON_AARCH64=ON"}),"\uff09"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"make"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"make package"})," \u6216\u8005 ",(0,r.jsx)(e.code,{children:"cpack --config CPackConfig.cmake"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u793a\u4f8b\uff1a",(0,r.jsx)(e.code,{children:"tugraph/tugraph-compile-centos7"}),"Docker\u73af\u5883"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"$ git clone --recursive https://github.com/TuGraph-family/tugraph-db.git\n$ cd tugraph-db\n$ deps/build_deps.sh\n$ mkdir build && cd build\n$ cmake .. -DOURSYSTEM=centos7\n$ make\n$ make package\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var r=i(96540);const t={},c=r.createContext(t);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);