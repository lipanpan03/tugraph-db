"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47984],{60075:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(74848),r=i(28453);const o={},s="Environment Mode",l={id:"developer-manual/installation/environment-mode",title:"Environment Mode",description:"This document primarily introduces the three types of environments involved in TuGraph.",source:"@site/versions/version-3.6.0/en-US/source/5.developer-manual/1.installation/2.environment-mode.md",sourceDirName:"5.developer-manual/1.installation",slug:"/developer-manual/installation/environment-mode",permalink:"/tugraph-db/en/3.6.0/developer-manual/installation/environment-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/tugraph-db/en/3.6.0/developer-manual/installation/environment"},next:{title:"Docker Deployment",permalink:"/tugraph-db/en/3.6.0/developer-manual/installation/docker-deployment"}},a={},d=[{value:"1.Classification",id:"1classification",level:2},{value:"2.System Library",id:"2system-library",level:2}];function c(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"environment-mode",children:"Environment Mode"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document primarily introduces the three types of environments involved in TuGraph."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1classification",children:"1.Classification"}),"\n",(0,t.jsx)(n.p,{children:"Based on the different functionalities supported by the environments, they can be categorized into the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compilation Environment: This environment includes all the dependencies required for compiling TuGraph. It contains all the dependencies of the runtime environment and is capable of compiling TuGraph source code. However, it does not include pre-compiled TuGraph executable files and library files. It is intended for developers to compile the source code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Runtime Environment: This environment includes GCC/Java/Python environments, enabling the execution of all TuGraph functionalities. It can support full-text indexing, Java client, uploading C++ source code as a plugin, and running Python plugins. It comes with pre-compiled TuGraph executable files and library files, allowing customers to directly install and use TuGraph without the need for source code compilation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Mini-Runtime Environment: This environment is equivalent to a bare system with pre-compiled TuGraph. It can only run the basic functionalities of TuGraph, without the ability to compile and run C++ plugins, lack of full-text indexing, and absence of Python plugins. It is designed for quick deployment and trial purposes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After compiling TuGraph, all the required dependencies are packaged together in the form of .a files, eliminating the need for unnecessary additional dependencies during runtime. However, since TuGraph supports stored procedures, which involve compiling C++ code on the server, the required compilers still need to be present in the environment."}),"\n",(0,t.jsx)(n.h2,{id:"2system-library",children:"2.System Library"}),"\n",(0,t.jsx)(n.p,{children:"For the three types of environments, the required system libraries, excluding the TuGraph runtime package, are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compilation Environment: It includes GCC, Python, Java compilers, as well as libraries such as ANTLR4 and Pybind11. Please refer to the tugraph-compile-*-Dockerfile for more details."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Runtime Environment: The main dependencies introduced by stored procedures include GCC, Boost, CMake, and others. Please refer to the tugraph-runtime-*-Dockerfile for more details."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Mini-Runtime Environment: There are no additional system library dependencies. Please refer to the tugraph-mini-runtime-*-Dockerfile for more details."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);