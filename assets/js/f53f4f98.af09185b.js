"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94598],{49255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(74848),l=t(28453);const o={},i="TuGraph Python SDK",a={id:"developer-manual/client-tools/python-client",title:"TuGraph Python SDK",description:"This document is the usage instruction of TuGraph Python SDK",source:"@site/versions/version-4.0.1/en-US/source/5.developer-manual/4.client-tools/1.python-client.md",sourceDirName:"5.developer-manual/4.client-tools",slug:"/developer-manual/client-tools/python-client",permalink:"/tugraph-db/en/4.0.1/developer-manual/client-tools/python-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Warmup",permalink:"/tugraph-db/en/4.0.1/developer-manual/server-tools/data-warmup"},next:{title:"TuGraph C++ SDK",permalink:"/tugraph-db/en/4.0.1/developer-manual/client-tools/cpp-client"}},c={},p=[{value:"1.Overview",id:"1overview",level:2},{value:"2.Demo",id:"2demo",level:2},{value:"2.1.Call cypher",id:"21call-cypher",level:3},{value:"2.2.Call stored procedure",id:"22call-stored-procedure",level:3}];function s(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tugraph-python-sdk",children:"TuGraph Python SDK"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This document is the usage instruction of TuGraph Python SDK"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1overview",children:"1.Overview"}),"\n",(0,r.jsx)(n.p,{children:"Python's TuGraph Rpc Client is a CPP Client SDK packaged with pybind11, so its interface details are not detailed in this document. This document only explains the use of TuGraph Python Restful Client SDK, including executing stored procedures, calling Cypher, and other operations."}),"\n",(0,r.jsx)(n.h2,{id:"2demo",children:"2.Demo"}),"\n",(0,r.jsx)(n.h3,{id:"21call-cypher",children:"2.1.Call cypher"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'TuGraphClient import TuGraphClient\n\nclient = TuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\ncypher = "match (n) return properties(n) limit 1"\nres = client.call_cypher(cypher)\nprint(res)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"22call-stored-procedure",children:"2.2.Call stored procedure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'TuGraphClient import TuGraphClient\n\nclient = TuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\nplugin_type = "cpp"\nplugin_name = "khop"\nplugin_input = "{\\"root\\": 10, \\"hop\\": 3}"\nres = client.call_plugin(plugin_type, plguin_name, plugin_input)\nprint(res)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const l={},o=r.createContext(l);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);