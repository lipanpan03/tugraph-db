"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88872],{61141:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var i=n(74848),r=n(28453);const d={},s="OlapBase API",c={id:"developer-manual/interface/olap/olap-base-api",title:"OlapBase API",description:"\u6b64\u6587\u6863\u4e3b\u8981\u8be6\u7ec6\u4ecb\u7ecd\u4e86OlapBase API\u7684\u4f7f\u7528\u8bf4\u660e",source:"@site/versions/version-4.0.1/zh-CN/source/5.developer-manual/6.interface/2.olap/2.olap-base-api.md",sourceDirName:"5.developer-manual/6.interface/2.olap",slug:"/developer-manual/interface/olap/olap-base-api",permalink:"/tugraph-db/zh/4.0.1/developer-manual/interface/olap/olap-base-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OLAP API",permalink:"/tugraph-db/zh/4.0.1/developer-manual/interface/olap/tutorial"},next:{title:"OlapOnDB API",permalink:"/tugraph-db/zh/4.0.1/developer-manual/interface/olap/olap-on-db-api"}},a={},t=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. \u914d\u7f6e\u8981\u6c42",id:"2-\u914d\u7f6e\u8981\u6c42",level:2},{value:"3. \u539f\u5b50\u64cd\u4f5c",id:"3-\u539f\u5b50\u64cd\u4f5c",level:2},{value:"4. \u70b9\u96c6\u5408\u7c7bParallelBitset",id:"4-\u70b9\u96c6\u5408\u7c7bparallelbitset",level:2},{value:"4.1 ParallelBitset\u7c7b\u6210\u5458",id:"41-parallelbitset\u7c7b\u6210\u5458",level:3},{value:"5. \u70b9\u6570\u7ec4\u7c7bParallelVector",id:"5-\u70b9\u6570\u7ec4\u7c7bparallelvector",level:2},{value:"5.1 ParallelVector\u7c7b\u6210\u5458",id:"51-parallelvector\u7c7b\u6210\u5458",level:3},{value:"6. \u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",id:"6-\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",level:2},{value:"6.1 \u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"61-\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:3},{value:"6.2 \u7ec4\u5408\u6570\u636e\u7ed3\u6784",id:"62-\u7ec4\u5408\u6570\u636e\u7ed3\u6784",level:3},{value:"7. \u56fe\u7c7bOlapBase",id:"7-\u56fe\u7c7bolapbase",level:2},{value:"7.1 \u57fa\u672c\u4fe1\u606f",id:"71-\u57fa\u672c\u4fe1\u606f",level:3},{value:"7.2 \u70b9\u96c6\u548c\u8fb9\u96c6\u53ca\u5176\u76f8\u5173\u64cd\u4f5c",id:"72-\u70b9\u96c6\u548c\u8fb9\u96c6\u53ca\u5176\u76f8\u5173\u64cd\u4f5c",level:3},{value:"7.3 \u9501\u673a\u5236",id:"73-\u9501\u673a\u5236",level:3},{value:"7.4 \u6279\u5904\u7406\u64cd\u4f5c",id:"74-\u6279\u5904\u7406\u64cd\u4f5c",level:3}];function o(e){const l={blockquote:"blockquote",code:"code",edgedata:"edgedata",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.header,{children:(0,i.jsx)(l.h1,{id:"olapbase-api",children:"OlapBase API"})}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsx)(l.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u8be6\u7ec6\u4ecb\u7ecd\u4e86OlapBase API\u7684\u4f7f\u7528\u8bf4\u660e"}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,i.jsx)(l.p,{children:"\u672c\u624b\u518c\u5c06\u4ecb\u7ecd\u4f7f\u7528TuGraph\u56fe\u8ba1\u7b97\u7cfb\u7edf\u9700\u8981\u7684\u7b80\u5355\u914d\u7f6e\uff0c\u540c\u65f6\u7ed3\u5408\u4ee3\u7801\u5bf9TuGraph\u4e2d\u51e0\u4e2a\u5171\u540c\u7684\u91cd\u8981\u6587\u4ef6\u548c\u63a5\u53e3\u8fdb\u884c\u89e3\u91ca\u3002"}),"\n",(0,i.jsx)(l.h2,{id:"2-\u914d\u7f6e\u8981\u6c42",children:"2. \u914d\u7f6e\u8981\u6c42"}),"\n",(0,i.jsx)(l.p,{children:"\u5982\u679c\u8981\u4f7f\u7528TuGraph\u56fe\u8ba1\u7b97\u7f16\u5199\u4ee5\u53ca\u7f16\u8bd1\u81ea\u5df1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u9700\u8981\u7684\u914d\u7f6e\u8981\u6c42\u4e3a\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"linux\u64cd\u4f5c\u7cfb\u7edf\uff0c\u76ee\u524d\u5728Ubuntu16.04, Ubuntu18.04, Ubuntu20.04\u548cCentos7, Centos8\u7cfb\u7edf\u4e0a\u53ef\u6210\u529f\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(l.li,{children:"\u652f\u6301C++17\u7684\u7f16\u8bd1\u5668\uff0c\u8981\u6c42GCC\u7248\u672c\u4e3a8.4.0\u6216\u66f4\u65b0\u7684\u7248\u672c\u3002"}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"3-\u539f\u5b50\u64cd\u4f5c",children:"3. \u539f\u5b50\u64cd\u4f5c"}),"\n",(0,i.jsx)(l.p,{children:"TuGraph\u4f7f\u7528\u4e86\u591a\u7ebf\u7a0b\u6280\u672f\u8fdb\u884c\u6279\u5904\u7406\u64cd\u4f5c\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u51fa\u73b0\u8bbf\u5b58\u51b2\u7a81\u73b0\u8c61\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5e76\u884c\u8ba1\u7b97\u65f6\u4fee\u6539\u64cd\u4f5c\u7684\u6b63\u786e\u6027\uff0cTuGraph\u5b9e\u73b0\u4e86\u539f\u5b50\u64cd\u4f5c\u3002\u4ee3\u7801\u90e8\u5206\u89c1lgraph\u6587\u4ef6\u5939\u4e0b\u7684lgraph_atomic.cpp\u6587\u4ef6\u3002\nTuGraph\u8fd8\u81ea\u5b9a\u4e49\u4e864\u4e2a\u5e38\u7528\u7684\u539f\u5b50\u64cd\u4f5c\u3002\u5f53\u6211\u4eec\u9700\u8981\u5728\u591a\u7ebf\u7a0b\u6a21\u5f0f\u4e0b\u4fee\u6539\u70b9\u7684\u6570\u636e\u65f6\uff0c\u6211\u4eec\u90fd\u5e94\u8be5\u4f7f\u7528\u539f\u5b50\u64cd\u4f5c\u6765\u786e\u4fdd\u5e76\u884c\u73af\u5883\u4e0b\u4fee\u6539\u64cd\u4f5c\u7684\u6b63\u786e\u6027\u3002\u9664\u4e86\u8fd94\u4e2a\u539f\u5b50\u64cd\u4f5c\u5916\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\u201ccas\u201d\u6765\u6784\u5efa\u81ea\u5df1\u7684\u539f\u5b50\u64cd\u4f5c\u51fd\u6570\u3002"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"bool cas(T * ptr, T oldv, T newv)"}),"\uff1a\u5982\u679cptr\u6307\u5411\u7684\u503c\u7b49\u4e8eoldv\uff0c\u5219\u5c06ptr\u6307\u5411\u7684\u503c\u8d4b\u4e3anewv\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"bool write_min(T *a, T b)"}),"\uff1a\u5982\u679cb\u6bd4a\u6307\u5411\u7684\u503c\u66f4\u5c0f\uff0c\u90a3\u4e48\u5c06a\u6307\u5411\u7684\u503c\u8d4b\u4e3ab\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"bool write_max(T *a, T b)"}),"\uff1a\u5982\u679cb\u6bd4a\u6307\u5411\u7684\u503c\u66f4\u5927\uff0c\u90a3\u4e48\u5c06a\u6307\u5411\u7684\u503c\u8d4b\u4e3ab\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void write_add(T *a, T b)"}),"\uff1a\u5c06b\u7684\u503c\u52a0\u5230a\u6307\u5411\u7684\u503c\u4e0a\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void write_sub(T *a, T b)"}),"\uff1a\u5c06a\u6307\u5411\u7684\u503c\u51cf\u53bbb\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"4-\u70b9\u96c6\u5408\u7c7bparallelbitset",children:"4. \u70b9\u96c6\u5408\u7c7bParallelBitset"}),"\n",(0,i.jsx)(l.p,{children:"\u5728\u4f7f\u7528TuGraph\u8fdb\u884c\u6279\u5904\u7406\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u70b9\u96c6\u5408\u6765\u8868\u793a\u9700\u8981\u5904\u7406\u7684\u70b9\u3002ParallelBitset\u5b9e\u73b0\u4e86\u70b9\u96c6\u5408\u7c7b\uff0c\u4ee5bit\u4e3a\u5355\u4f4d\u8868\u793a\u70b9\uff0c\u56e0\u6b64\u80fd\u591f\u8282\u7701\u5927\u91cf\u5185\u5b58\u3002\u5bf9\u5e94\u7684\u4ee3\u7801\u89c1lgraph\u6587\u4ef6\u5939\u4e0b\u7684olap_base.h\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"41-parallelbitset\u7c7b\u6210\u5458",children:"4.1 ParallelBitset\u7c7b\u6210\u5458"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t Size()"}),"\uff1a\u8868\u793aBitmap\u4e2d\u7684\u70b9\u4e2a\u6570\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ParallelBitset(size_t size)"}),"\uff1a\u521d\u59cb\u5316size\u548cdata\uff0cdata\u957f\u5ea6\u4e3a(size >> 6)+1"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Clear()"}),"\uff1a\u6e05\u7a7a\u96c6\u5408"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Fill()"}),"\uff1a\u5c06\u6240\u6709\u70b9\u52a0\u5165\u96c6\u5408"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"bool Has(size_t i)"}),"\uff1a\u68c0\u67e5\u70b9i\u662f\u5426\u5728\u96c6\u5408\u4e2d"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"bool Add(size_t i)"}),"\uff1a\u5c06\u70b9i\u52a0\u5165\u96c6\u5408\u4e2d"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Swap(ParallelBitset &other)"}),"\uff1a\u548c\u53e6\u4e00\u7ec4ParallelBitset\u96c6\u5408\u4ea4\u6362\u5143\u7d20"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"5-\u70b9\u6570\u7ec4\u7c7bparallelvector",children:"5. \u70b9\u6570\u7ec4\u7c7bParallelVector"}),"\n",(0,i.jsx)(l.p,{children:"\u5728\u4f7f\u7528TuGraph\u8fdb\u884c\u6279\u5904\u7406\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u70b9\u6570\u7ec4\u6765\u8868\u793a\u5bf9\u70b9\u7684\u5904\u7406\u7ed3\u679c\u3002ParallelVector\u5b9e\u73b0\u4e86\u70b9\u6570\u7ec4\u7c7b\u3002\u5bf9\u5e94\u7684\u4ee3\u7801\u89c1lgraph\u6587\u4ef6\u5939\u4e0b\u7684olap_base.h\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"51-parallelvector\u7c7b\u6210\u5458",children:"5.1 ParallelVector\u7c7b\u6210\u5458"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ParallelVector(size_t capacity)"})," \u6784\u5efaParallelVector\uff0ccapacity\u4e3a\u70b9\u6570\u7ec4\u7684\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"T &operator[](size_t i)"}),"\uff1a\u4e0b\u6807\u4e3ai\u7684\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"T *begin()"}),"\uff1aParallelVector\u7684\u8d77\u59cb\u6307\u9488"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"T *end()"}),"\uff1aParallelVector\u7684\u7ed3\u675f\u6307\u9488\u3002begin\u548cend\u7684\u7528\u6cd5\u7c7b\u4f3c\u4e8evector\u5bb9\u5668\u7684begin\u548cend\u6307\u9488\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e24\u4e2a\u6307\u9488\u5bf9\u6570\u7ec4\u8fdb\u884c\u987a\u5e8f\u8bbf\u95ee"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"T &Back()"}),"\uff1aParallelVector\u6700\u540e\u4e00\u4e2a\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"T *Data()"}),"\uff1a\u8868\u793a\u6570\u7ec4\u672c\u8eab\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Destroy()"}),"\uff1a\u6e05\u7a7aParallelVector\u6570\u7ec4\u5185\u6570\u636e\u5e76\u5220\u9664\u6570\u7ec4"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t Size()"}),"\uff1a\u8868\u793aParallelVector\u4e2d\u7684\u6570\u636e\u4e2a\u6570"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t Capacity()"}),"\uff1a\u8868\u793aParallelVector\u7684\u5bb9\u91cf\u5927\u5c0f"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Resize(size_t size)"}),"\uff1a\u66f4\u6539ParallelVector\u4e3asize\u5927\u5c0f\uff0c\u8be5size\u5e94\u5927\u4e8e\u7b49\u4e8e\u66f4\u6539\u524d\u7684\u5927\u5c0f\u4e14\u5c0f\u4e8ecapacity"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Clear()"}),"\uff1a\u6e05\u7a7aParallelVector\u5185\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void ReAlloc(size_t capacity)"}),"\uff1a\u7ed9ParallelVector\u5206\u914d\u65b0\u7684\u5bb9\u91cf\u5927\u5c0f\uff0c\u82e5\u6570\u7ec4\u6709\u6570\u636e\u5219\u5c06\u6570\u636e\u8fc1\u79fb\u81f3\u65b0\u5185\u5b58"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Fill(T elem)"}),"\uff1a\u4e3aParallelVector\u7684\u5168\u90e8\u6570\u636e\u8d4b\u503c\u4e3aelem"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Append(const T &elem, bool atomic = true)"}),"\uff1a\u5411ParallelVector\u7ed3\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Swap(ParallelVector<T> &other)"}),"\uff1a\u548c\u5176\u4ed6\u7684ParallelVector\u4ea4\u6362\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ParallelVector<T> Copy()"}),"\uff1a\u590d\u5236\u5f53\u524d\u7684ParallelVector\u6570\u636e\u5b58\u81f3Copy\u6570\u7ec4\u4e2d"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"6-\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",children:"6. \u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784"}),"\n",(0,i.jsx)(l.h3,{id:"61-\u57fa\u672c\u6570\u636e\u7c7b\u578b",children:"6.1 \u57fa\u672c\u6570\u636e\u7c7b\u578b"}),"\n",(0,i.jsx)(l.p,{children:"\u6211\u4eec\u81ea\u5b9a\u4e49\u4e86\u70b9\u548c\u8fb9\u7684\u6570\u636e\u7ed3\u6784\u8868\u793a\uff0c\u7528\u4e8e\u5728\u8986\u76d6\u6240\u6709\u70b9\u7684\u540c\u65f6\u8282\u7701\u5185\u5b58\u7a7a\u95f4\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"Empty"}),"\uff1a\u5185\u5bb9\u4e3a\u7a7a\u7684\u7279\u6b8a\u6570\u636e\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"62-\u7ec4\u5408\u6570\u636e\u7ed3\u6784",children:"6.2 \u7ec4\u5408\u6570\u636e\u7ed3\u6784"}),"\n",(0,i.jsx)(l.p,{children:"\u4e3a\u4e86\u4fbf\u4e8e\u8ba1\u7b97\uff0c\u6211\u4eec\u6839\u636e\u8ba1\u7b97\u573a\u666f\u4e0d\u540c\uff0c\u5b9a\u4e49\u4e86\u51e0\u79cd\u70b9\u548c\u8fb9\u6570\u636e\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"EdgeUnit<EdgeData>"}),"\uff1a\u8868\u793a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u8fb9\uff0c\u7528\u4e8e\u89e3\u6790\u8f93\u5165\u6587\u4ef6\uff0c\u5305\u542b\u4e09\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t src"}),"\uff1a\u8fb9\u7684\u8d77\u59cb\u70b9"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t dst"}),"\uff1a\u8fb9\u7684\u7ec8\u70b9"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"EdgeData edge_data"}),"\uff1a\u8fb9\u7684\u6743\u503c"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjUnit<EdgeData>"}),"\uff1a\u8868\u793a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u8fb9\uff0c\u7528\u4e8e\u6279\u5904\u7406\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\uff0c\u5305\u542b\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t neighbour"}),"\uff1a\u8fb9\u7684\u90bb\u5c45\u70b9"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"EdgeData edge_data"}),"\uff1a\u8fb9\u7684\u6743\u503c"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjList<EdgeData>"}),"\uff1a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u70b9\u7684\u90bb\u63a5\u8868\uff0c\u5e38\u7528\u4e8e\u8868\u793a\u70b9\u7684\u5165\u8fb9\u548c\u51fa\u8fb9\u96c6\u5408\uff0c\u5305\u542b\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjUnit<T> * begin"}),"\uff1a\u5217\u8868\u7684\u8d77\u59cb\u6307\u9488"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjUnit<T> * end"}),"\uff1a\u5217\u8868\u7684\u7ed3\u675f\u6307\u9488\u3002begin\u548cend\u7684\u7528\u6cd5\u7c7b\u4f3c\u4e8evector\u5bb9\u5668\u7684begin\u548cend\u6307\u9488\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e24\u4e2a\u6307\u9488\u5bf9\u90bb\u63a5\u8868\u8fdb\u884c\u5faa\u73af\u8bbf\u95ee\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"7-\u56fe\u7c7bolapbase",children:"7. \u56fe\u7c7bOlapBase"}),"\n",(0,i.jsxs)(l.p,{children:["\u56fe\u7c7bOlapBase\u662fTuGraph\u7528\u4e8e\u52a0\u8f7d\u56fe\u4ee5\u53ca\u8fdb\u884c\u56fe\u8ba1\u7b97\u64cd\u4f5c\u7684\u4e3b\u7c7b\uff0c\u5e38\u7528OlapBase",(0,i.jsx)(l.edgedata,{children:"\u8868\u793a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u56fe\uff0c\u4ee3\u7801\u90e8\u5206\u89c1lgraph\u6587\u4ef6\u5939\u4e0b\u7684olap_base.hpp\u3002\u672c\u7ae0\u5c06\u4ecb\u7ecdGraph\u7c7b\u4e2d\u5e38\u7528\u7684\u7c7b\u578b\u548cAPI\u63a5\u53e3\u3002\u4e0a\u6587\u4ecb\u7ecdProcedure\u3001Embed\u53caStandalone\u529f\u80fd\u6240\u4f7f\u7528\u7684\u7c7b\u5747\u4e3a\u8be5\u7c7b\u7684\u5b50\u7c7b\u3002"})]}),"\n",(0,i.jsx)(l.h3,{id:"71-\u57fa\u672c\u4fe1\u606f",children:"7.1 \u57fa\u672c\u4fe1\u606f"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t NumVertices()"}),"\uff1a\u83b7\u53d6\u70b9\u6570"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t NumEdges()"}),"\uff1a\u83b7\u53d6\u8fb9\u6570"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t OutDegree(size_t vid)"}),"\uff1a\u70b9vid\u7684\u51fa\u5ea6"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"size_t InDegree(size_t vid)"}),"\uff1a\u70b9vid\u7684\u5165\u5ea6"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"72-\u70b9\u96c6\u548c\u8fb9\u96c6\u53ca\u5176\u76f8\u5173\u64cd\u4f5c",children:"7.2 \u70b9\u96c6\u548c\u8fb9\u96c6\u53ca\u5176\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ParallelVector<VertexData> AllocVertexArray<VertexData>()"}),"\uff1a\u5206\u914d\u4e00\u4e2a\u7c7b\u578b\u4e3aVertexData\u7684\u6570\u7ec4\uff0c\u5927\u5c0f\u4e3a\u70b9\u4e2a\u6570"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void fill_vertex_array<V>(V * array, V value)"}),"\uff1a\u5c06\u6570\u7ec4array\u4e2d\u7684\u6240\u6709\u5143\u7d20\u8d4b\u503c\u4e3avalue"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ParallelBitset AllocVertexSubset()"}),"\uff1a\u5206\u914d\u4e00\u4e2aParallelBitset\u96c6\u5408\uff0c\u7528\u4e8e\u8868\u793a\u6240\u6709\u70b9\u7684\u72b6\u6001\u662f\u5426\u6fc0\u6d3b"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjList<EdgeData> OutEdges(size_t vid)"}),"\uff1a\u83b7\u53d6\u70b9v\u7684\u6240\u6709\u51fa\u8fb9\u96c6\u5408"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"AdjList<EdgeData> InEdges(size_t vid)"}),"\uff1a\u83b7\u53d6\u70b9v\u7684\u6240\u6709\u5165\u8fb9\u96c6\u5408"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void Transpose()"}),"\uff1a\u5bf9\u6709\u5411\u56fe\u8fdb\u884c\u56fe\u53cd\u8f6c"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"LoadFromArray(char * edge_array, VertexId input_vertices, EdgeId input_edges,  EdgeDirectionPolicy edge_direction_policy)"}),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u52a0\u8f7d\u56fe\u6570\u636e\uff0c\u5305\u542b\u56db\u4e2a\u53c2\u6570\uff0c\u5176\u542b\u4e49\u5206\u522b\u8868\u793a\uff1a\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"edge_array"}),"\uff1a\u5c06\u8be5\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u8bfb\u5165\u56fe\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u8be5\u6570\u7ec4\u5305\u542b\u591a\u6761\u8fb9\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"input_vertices"}),"\uff1a\u6307\u5b9a\u6570\u7ec4\u8bfb\u5165\u56fe\u7684\u70b9\u4e2a\u6570\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"input_edges"}),"\uff1a\u6307\u5b9a\u6570\u7ec4\u8bfb\u5165\u56fe\u7684\u8fb9\u7684\u6761\u6570\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"edge_direction_policy"}),"\uff1a\u6307\u5b9a\u56fe\u4e3a\u6709\u5411\u6216\u65e0\u5411\uff0c\u5305\u542b\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3aDUAL_DIRECTION\u3001MAKE_SYMMETRIC\u4ee5\u53caINPUT_SYMMETRIC\u3002\u5bf9\u5e94\u7684\u8be6\u7ec6\u4ecb\u7ecd\u89c1include/lgraph/olap_base.h\u6587\u4ef6\u7684",(0,i.jsx)(l.code,{children:"enum EdgeDirectionPolicy"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"73-\u9501\u673a\u5236",children:"7.3 \u9501\u673a\u5236"}),"\n",(0,i.jsx)(l.p,{children:"TuGraph\u5b9e\u73b0\u4e86\u4e00\u5bf9\u9501\u673a\u5236\uff0c\u6765\u63a7\u5236\u7a0b\u5e8f\u5bf9\u4e8e\u70b9\u6570\u636e\u7684\u8bbf\u5b58\u6743\u9650\u3002\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void AcquireVertexLock(size_t vid)"}),"\uff1a\u5bf9\u70b9vid\u52a0\u9501\uff0c\u7981\u6b62\u5176\u5b83\u7ebf\u7a0b\u5bf9\u8be5\u9501\u5bf9\u5e94\u7684\u70b9\u6570\u636e\u8fdb\u884c\u8bbf\u5b58"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"void ReleaseVertexLock(size_t vid)"}),"\uff1a\u5bf9\u70b9vid\u89e3\u9501\uff0c\u6240\u6709\u7ebf\u7a0b\u5747\u53ef\u8bbf\u5b58\u8be5\u9501\u5bf9\u5e94\u7684\u70b9\u6570\u636e"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"VertexLockGuard GuardVertexLock(size_t vid)"}),"\uff1a\u5728\u5bf9vid\u64cd\u4f5c\u65f6\uff0c\u5bf9\u70b9vid\u52a0\u9501\uff0c\u9000\u51fa\u4f5c\u7528\u57df\u65f6\u65f6\u81ea\u52a8\u91ca\u653e\u9501"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"74-\u6279\u5904\u7406\u64cd\u4f5c",children:"7.4 \u6279\u5904\u7406\u64cd\u4f5c"}),"\n",(0,i.jsx)(l.p,{children:"TuGraph\u63d0\u4f9b\u4e86\u4e24\u4e2a\u6279\u5904\u7406\u64cd\u4f5c\u6765\u5e76\u884c\u5730\u8fdb\u884c\u4ee5\u70b9\u4e3a\u4e2d\u5fc3\u7684\u6279\u5904\u7406\u8fc7\u7a0b\u3002\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c++",children:'/*\n    \u51fd\u6570\u540d\u79f0:ReducedSum ProcessVertexInRange(std::function<ReducedSum(size_t)> work, size_t lower, size_t upper,\n                ReducedSum zero = 0,std::function<ReducedSum(ReducedSum, ReducedSum)> reduce =reduce_plus<ReducedSum>)\n\t\t\t\t\n    \u51fd\u6570\u7528\u9014:\u5bf9Graph\u4e2d\u8282\u70b9\u7f16\u53f7\u4ecb\u4e8elower\u548cupper\u4e4b\u95f4\u7684\u8282\u70b9\u6267\u884cwork\u51fd\u6570\u3002\u7b2c\u56db\u4e2a\u53c2\u6570\u8868\u793a\u7d2f\u52a0\u7684\u57fa\u6570\uff0c\u9ed8\u8ba4\u4e3a0\uff1b\n    \u7b2c\u4e94\u4e2a\u53c2\u6570\u8868\u793a\u5bf9\u6bcf\u4e2awork\u5904\u7406\u540e\u7684\u8282\u70b9\u8fd4\u56de\u503c\u8fdb\u884c\u8fed\u4ee3reduce\u51fd\u6570\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u4e3a\u7d2f\u52a0\u64cd\u4f5c\u3002\n    \u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003include/lgraph/olap_base.h\u4e2d\u5177\u4f53\u4ee3\u7801\n\n    \u4f7f\u7528\u793a\u4f8b:\u7edf\u8ba1\u6570\u7ec4parent\u6570\u7ec4\u4e2d\u6709\u51fa\u8fb9\u7684\u70b9\u4e2a\u6570\n*/\n\nauto vertex_num = graph.ProcessVertexInRange<size_t>(\n    [&](size_t i) {\n        if (graph.OutDegree(parent[i]) > 0) {\n            return 1;\n        }\n    },\n    0, parent.Size()\n);\nprintf("the number is %lu\\n",vertex_num);\n'})}),"\n",(0,i.jsx)(l.p,{children:"\u5176\u4e2dgraph\u4e3a\u56fe\u7c7bOlapBase\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-C++",children:'/*\n    \u51fd\u6570\u540d\u79f0:ReducedSum ProcessVertexActive(std::function<ReducedSum(size_t)> work, ParallelBitset &active_vertices,\n                ReducedSum zero = 0,std::function<ReducedSum(ReducedSum, ReducedSum)> reduce =reduce_plus<ReducedSum>)\n\t\t\t\t\n    \u51fd\u6570\u7528\u9014:\u5bf9active_vertices\u4e2d\u5bf9\u5e94\u4e3a1\u7684\u8282\u70b9\u6267\u884cwork\u51fd\u6570\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u8868\u793a\u7d2f\u52a0\u7684\u57fa\u6570\uff0c\u9ed8\u8ba4\u4e3a0\uff1b\n    \u7b2c\u56db\u4e2a\u53c2\u6570\u8868\u793a\u5bf9\u6bcf\u4e2awork\u5904\u7406\u540e\u7684\u8282\u70b9\u8fd4\u56de\u503c\u8fdb\u884c\u8fed\u4ee3reduce\u51fd\u6570\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u4e3a\u7d2f\u52a0\u64cd\u4f5c\u3002\n    \u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003/include/lgraph/olap_base.h\u4e2d\u5177\u4f53\u4ee3\u7801\n    \n    \u4f7f\u7528\u793a\u4f8b:\u8f93\u51faGraph\u4e2d\u8282\u70b91\uff0c2\uff0c3\u7684\u6240\u6709\u51fa\u5ea6\u90bb\u5c45\uff0c\u5e76\u7edf\u8ba1\u8fd9\u4e09\u4e2a\u8282\u70b9\u7684\u603b\u51fa\u5ea6\n*/\n\nauto active_in = graph.AllocVertexSubset();\nactive_in.Add(1);\nactive_in.Add(2);\nactive_in.Add(3);\nauto total_outdegree = graph.ProcessVertexActive<size_t>(\n    [&](size_t vi) {\n        size_t local_outdegree = 0;\n        for (auto & edge : graph.OutEdges(vi)) {\n            size_t dst = edge.neighbour;\n            printf("node %lu has neighbour %lu\\n",vi,dst);\n            local_outdegree += 1;\n        }\n        return local_outdegree;\n    },\n    active_in\n);\nprintf("total outdegree of node1,2,3 is %lu\\n",total_outdegree);\n'})})]})}function h(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>s,x:()=>c});var i=n(96540);const r={},d=i.createContext(r);function s(e){const l=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:l},e.children)}}}]);