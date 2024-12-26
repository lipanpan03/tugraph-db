"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47567],{75982:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(74848),a=t(28453);const l={},o="Traversal API",i={id:"developer-manual/interface/procedure/traversal",title:"Traversal API",description:"\u6b64\u6587\u6863\u4e3b\u8981\u8bb2\u89e3 TuGraph \u7684\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u7684Traversal API",source:"@site/versions/version-4.0.1/zh-CN/source/5.developer-manual/6.interface/3.procedure/2.traversal.md",sourceDirName:"5.developer-manual/6.interface/3.procedure",slug:"/developer-manual/interface/procedure/traversal",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/procedure/traversal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Procedure API",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/procedure/procedure"},next:{title:"Rust \u5b58\u50a8\u8fc7\u7a0b",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/procedure/Rust-procedure"}},s={},d=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u63a5\u53e3\u8bf4\u660e",id:"2-\u63a5\u53e3\u8bf4\u660e",level:2},{value:"2.1. Snapshot",id:"21-snapshot",level:3},{value:"2.2. Traversal",id:"22-traversal",level:3}];function c(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"traversal-api",children:"Traversal API"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u8bb2\u89e3 TuGraph \u7684\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u7684Traversal API"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,n.jsx)(r.p,{children:"TuGraph \u5f3a\u5927\u7684\u5728\u7ebf\u5206\u6790\u5904\u7406\uff08OLAP\uff09\u80fd\u529b\u662f\u5176\u533a\u522b\u4e8e\u5176\u5b83\u56fe\u6570\u636e\u5e93\u7684\u4e00\u4e2a\u91cd\u8981\u7279\u6027\u3002\n\u501f\u52a9 C++ OLAP API\uff08olap_on_db.h\uff09\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u5730\u5bfc\u51fa\u4e00\u4e2a\u9700\u8981\u8fdb\u884c\u590d\u6742\u5206\u6790\u7684\u5b50\u56fe\uff0c\u7136\u540e\u5728\u5176\u4e0a\u8fd0\u884c\u8bf8\u5982 PageRank\u3001\u8fde\u901a\u5206\u91cf\u3001\u793e\u533a\u53d1\u73b0\u7b49\u8fed\u4ee3\u5f0f\u56fe\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u6700\u540e\u6839\u636e\u7ed3\u679c\u505a\u51fa\u76f8\u5e94\u51b3\u7b56\u3002\n\u5bfc\u51fa\u548c\u8ba1\u7b97\u7684\u8fc7\u7a0b\u90fd\u53ef\u4ee5\u901a\u8fc7\u5e76\u884c\u5904\u7406\u7684\u65b9\u5f0f\u8fdb\u884c\u52a0\u901f\uff0c\u4ece\u800c\u5b9e\u73b0\u51e0\u4e4e\u5b9e\u65f6\u7684\u5206\u6790\u5904\u7406\uff0c\u907f\u514d\u4e86\u4f20\u7edf\u89e3\u51b3\u65b9\u6848\u9700\u8981\u5c06\u6570\u636e\u5bfc\u51fa\u3001\u8f6c\u6362\u3001\u518d\u5bfc\u5165\uff08ETL\uff09\u5230\u4e13\u95e8\u7684\u5206\u6790\u7cfb\u7edf\u8fdb\u884c\u79bb\u7ebf\u5904\u7406\u7684\u5197\u957f\u6b65\u9aa4\u3002"}),"\n",(0,n.jsx)(r.p,{children:"TuGraph \u5185\u7f6e\u4e86\u5927\u91cf\u5e38\u7528\u7684\u56fe\u5206\u6790\u7b97\u6cd5\u548c\u4e30\u5bcc\u7684\u8f85\u52a9\u63a5\u53e3\uff0c\u56e0\u6b64\u7528\u6237\u51e0\u4e4e\u4e0d\u9700\u8981\u81ea\u5df1\u6765\u5b9e\u73b0\u5177\u4f53\u7684\u56fe\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u53ea\u9700\u5728\u5b9e\u73b0\u81ea\u5df1\u7684\u5b58\u50a8\u8fc7\u7a0b\u65f6\u5c06\u76f8\u5e94\u7b97\u6cd5\u5e93\u7684\u5934\u6587\u4ef6\uff08.h \u6587\u4ef6\uff09\u5305\u542b\u5230\u81ea\u5df1\u7a0b\u5e8f\u4e2d\uff0c\u5e76\u5728\u7f16\u8bd1\u65f6\u94fe\u63a5\u76f8\u5e94\u7684\u52a8\u6001\u5e93\u6587\u4ef6\uff08.so\uff09\u5373\u53ef\u3002\n\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u7684\u53ea\u6709\u5c06\u9700\u8981\u5206\u6790\u7684\u5b50\u56fe\u62bd\u53d6\u51fa\u6765\u7684\u8fc7\u7a0b\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u76ee\u524d Traversal API \u4ec5\u652f\u6301 C++\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"2-\u63a5\u53e3\u8bf4\u660e",children:"2. \u63a5\u53e3\u8bf4\u660e"}),"\n",(0,n.jsx)(r.h3,{id:"21-snapshot",children:"2.1. Snapshot"}),"\n",(0,n.jsx)(r.p,{children:"C++ OLAP API \u4e2d\u7684 Snapshot \u6a21\u7248\u7c7b\u7528\u4e8e\u8868\u793a\u62bd\u53d6\u51fa\u6765\u7684\u9759\u6001\u5b50\u56fe\uff0c\u5176\u4e2d EdgeData \u7528\u6765\u8868\u793a\u8be5\u5b50\u56fe\u4e0a\u6bcf\u6761\u8fb9\u6240\u7528\u6743\u503c\u7684\u6570\u636e\u7c7b\u578b\uff08\u5982\u679c\u8fb9\u4e0d\u9700\u8981\u6743\u503c\uff0c\u4f7f\u7528 Empty \u4f5c\u4e3a EdgeData \u5373\u53ef\uff09\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u62bd\u53d6\u7684\u5b50\u56fe\u901a\u8fc7 Snapshot \u7c7b\u7684\u6784\u9020\u51fd\u6570\u6765\u63cf\u8ff0\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"Snapshot::Snapshot(\n    GraphDB & db,\n    Transaction & txn,\n    size_t flags = 0,\n    std::function<bool(VertexIterator &)> vertex_filter = nullptr,\n    std::function<bool(OutEdgeIterator &, EdgeData &)> out_edge_filter = nullptr\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5176\u4e2d\uff0cdb \u4e3a\u6570\u636e\u5e93\u53e5\u67c4\uff0ctxn \u4e3a\u4e8b\u52a1\u53e5\u67c4\uff0cflags \u4e3a\u751f\u6210\u65f6\u4f7f\u7528\u7684\u9009\u9879\uff0c\u53ef\u9009\u503c\u5305\u62ec\u4ee5\u4e0b\u7684\u7ec4\u5408\uff1aSNAPSHOT_PARALLEL \u8868\u793a\u5bfc\u51fa\u65f6\u4f7f\u7528\u591a\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u5e76\u884c\uff1bSNAPSHOT_UNDIRECTED \u8868\u793a\u9700\u8981\u5c06\u5bfc\u51fa\u7684\u56fe\u53d8\u4e3a\u65e0\u5411\u56fe\u3002\nvertex_filter \u662f\u9762\u5411\u70b9\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u4e3a true \u8868\u793a\u8be5\u70b9\u9700\u8981\u88ab\u5305\u542b\u5230\u5f85\u62bd\u53d6\u7684\u5b50\u56fe\u4e2d\uff0c\u53cd\u4e4b\u5219\u8868\u793a\u9700\u8981\u88ab\u6392\u9664\u3002\nout_edge_filter \u662f\u9762\u5411\u8fb9\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u4e3a true \u8868\u793a\u8be5\u8fb9\u9700\u8981\u88ab\u5305\u542b\u5230\u5f85\u62bd\u53d6\u7684\u5b50\u56fe\u4e2d\uff0c\u53cd\u4e4b\u5219\u8868\u793a\u9700\u8981\u88ab\u6392\u9664\u3002\n\u5f53\u8fc7\u6ee4\u51fd\u6570\u4e3a\u7f3a\u7701\u503c\u65f6\uff0c\u5219\u8868\u793a\u9700\u8981\u5c06\u6240\u6709\u70b9/\u8fb9\u90fd\u5305\u542b\u8fdb\u6765\u3002"}),"\n",(0,n.jsx)(r.p,{children:"Snapshot \u7c7b\u63d0\u4f9b\u7684\u5176\u5b83\u65b9\u6cd5\u8bf7\u53c2\u8003\u8be6\u7ec6\u7684 C++ API \u6587\u6863\uff08olap_on_db.h\uff09\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"22-traversal",children:"2.2. Traversal"}),"\n",(0,n.jsx)(r.p,{children:"\u56fe\u6570\u636e\u5e93\u4e2d\u5341\u5206\u5e38\u89c1\u7684\u4e00\u5927\u7c7b\u5206\u6790\u662f\u57fa\u4e8e\u4e00\u4e2a\u6216\u591a\u4e2a\u70b9\u51fa\u53d1\uff0c\u9010\u5c42\u5730\u62d3\u5c55\u5e76\u8bbf\u95ee\u90bb\u5c45\u3002\n\u5c3d\u7ba1\u8fd9\u7c7b\u5206\u6790\u4e5f\u53ef\u4ee5\u4f7f\u7528 Cypher \u5b8c\u6210\uff0c\u4f46\u662f\u5f53\u8bbf\u95ee\u7684\u5c42\u6570\u8f83\u6df1\u65f6\uff0c\u5176\u6027\u80fd\u4f1a\u53d7\u5230\u4e32\u884c\u89e3\u91ca\u6267\u884c\u7684\u9650\u5236\u3002\n\u4f7f\u7528 C++ Core API \u7f16\u5199\u5b58\u50a8\u8fc7\u7a0b\u5c3d\u7ba1\u907f\u514d\u4e86\u89e3\u91ca\u6267\u884c\uff0c\u4f46\u4f9d\u7136\u53d7\u9650\u4e8e\u5355\u4e2a\u7ebf\u7a0b\u7684\u5904\u7406\u80fd\u529b\u3002\n\u4e3a\u4e86\u8ba9\u7528\u6237\u80fd\u591f\u65b9\u4fbf\u5730\u901a\u8fc7\u5e76\u884c\u5904\u7406\u7684\u65b9\u5f0f\u52a0\u901f\u8fd9\u4e00\u7c7b\u5e94\u7528\u573a\u666f\uff0c\u6211\u4eec\u57fa\u4e8e C++ OLAP API \u5c01\u88c5\u4e86\u4e00\u4e2a Traversal \u6846\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5176\u4e2d\u7684 FrontierTraversal \u548c PathTraversal \u7c7b\u6765\u5b8c\u6210\u8fd9\u79cd\u9010\u5c42\u904d\u5386\u7684\u5206\u6790\u4efb\u52a1\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003\u76f8\u5e94\u7684 C++ API \u6587\u6863\uff08lgraph_traversal.h\uff09\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"ParallelVector<size_t> FindVertices(\n    GraphDB & db,\n    Transaction & txn,\n    std::function<bool(VertexIterator &)> filter,\n    bool parallel = false\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u627e\u5230\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\uff08filter \u8fd4\u56de true\uff09\u7684\u70b9\uff0c\u5f53 parallel \u4e3a true \u65f6\u5219\u4f1a\u5e76\u884c\u8be5\u67e5\u627e\u8fc7\u7a0b\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"template <typename VertexData>\nParallelVector<VertexData> ExtractVertexData(\n    GraphDB & db,\n    Transaction & txn,\n    ParallelVector<size_t> & frontier,\n    std::function<void(VertexIterator &, VertexData &)> extract,\n    bool parallel = false\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4ece\u6307\u5b9a\u70b9\u96c6\uff08frontier\uff09\u4e2d\uff08\u901a\u8fc7 extract \u65b9\u6cd5\uff09\u62bd\u53d6\uff08\u7c7b\u578b\u4e3a VertexData \u7684\uff09\u5c5e\u6027\uff0c\u5f53 parallel \u4e3a true \u65f6\u4f1a\u5e76\u884c\u8be5\u62bd\u53d6\u8fc7\u7a0b\u3002"}),"\n",(0,n.jsx)(r.p,{children:"FrontierTraversal \u9002\u7528\u4e8e\u53ea\u5173\u6ce8\u904d\u5386\u6269\u5c55\u5230\u7684\u70b9\u96c6\u7684\u60c5\u51b5\uff1b\u5f53\u7528\u6237\u5728\u904d\u5386\u8fc7\u7a0b\u6216\u662f\u7ed3\u679c\u4e2d\u9700\u8981\u8bbf\u95ee\u8def\u5f84\u4e0a\u7684\u4fe1\u606f\uff08\u8def\u5f84\u4e0a\u7684\u70b9/\u8fb9\uff09\u65f6\uff0c\u5219\u9700\u8981\u4f7f\u7528 PathTraversal\u3002\n\u4e24\u7c7b Traversal \u7684\u6784\u9020\u51fd\u6570\u5747\u6709\u56db\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u4e3a\u6570\u636e\u5e93\u53e5\u67c4 db\u3001\u4e8b\u52a1\u53e5\u67c4 txn\u3001\u9009\u9879 flags \u548c \u521d\u59cb\u5316\u6570\u7ec4\u5bb9\u91cf capacity\u3002\n\u9009\u9879\u7684\u53ef\u9009\u503c\u5305\u62ec\u4ee5\u4e0b\u7684\u7ec4\u5408\uff1aTRAVERSAL_PARALLEL \u8868\u793a\u904d\u5386\u65f6\u4f7f\u7528\u591a\u4e2a\u7ebf\u7a0b\u5e76\u884c\uff1bTRAVERSAL_ALLOW_REVISITS \u8868\u793a\u904d\u5386\u65f6\u5141\u8bb8\u91cd\u590d\u5730\u8bbf\u95ee\u70b9\uff08PathTraversal \u9690\u542b\u4e86\u8be5\u9009\u9879\uff09\u3002capacity \u8868\u793a\u521d\u59cb\u5316\u65f6\u8def\u5f84\u96c6\u5408\u7684\u5bb9\u91cf\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"void SetFrontier(size_t root_vid);\nvoid SetFrontier(ParallelVector<size_t> & root_vids);\nvoid SetFrontier(std::function<bool(VertexIterator &)> root_vertex_filter);\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u4e24\u7c7b Traversal \u8bbe\u7f6e\u904d\u5386\u7684\u8d77\u59cb\u70b9/\u70b9\u96c6\u6709\u4e0a\u8ff0\u4e09\u79cd\u65b9\u5f0f\uff0c\u524d\u4e24\u79cd\u901a\u8fc7\u70b9 ID \u76f4\u63a5\u6307\u5b9a\uff0c\u6700\u540e\u4e00\u79cd\u65b9\u5f0f\u5219\u7c7b\u4f3c\u4e8e FindVertices\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u4e24\u7c7b Traversal \u7684\u904d\u5386\u90fd\u662f\u4ece\u5f53\u524d\u5c42\u7684\u70b9\u96c6\u5408\u51fa\u53d1\uff0c\u6839\u636e\u4f7f\u7528\u7684\u6269\u5c55\u51fd\u6570\u8bbf\u95ee\u6bcf\u6761\u51fa\u8fb9/\u5165\u8fb9/\u51fa\u8fb9\u548c\u5165\u8fb9\uff0c\u901a\u8fc7\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8fc7\u6ee4\u51fd\u6570\u51b3\u5b9a\u6269\u5c55\u662f\u5426\u6210\u529f\uff0c\u82e5\u6210\u529f\u5219\u5c06\u90bb\u5c45\u70b9/\u8ffd\u52a0\u4e86\u8be5\u6761\u8fb9\u7684\u8def\u5f84\u52a0\u5165\u4e0b\u4e00\u5c42\u7684\u70b9/\u8def\u5f84\u96c6\u5408\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"void ExpandOutEdges(\n    std::function<bool(OutEdgeIterator &)> out_edge_filter = nullptr,\n    std::function<bool(VertexIterator &)> out_neighbour_filter = nullptr\n);\nvoid ExpandInEdges(\n    std::function<bool(InEdgeIterator &)> in_edge_filter = nullptr,\n    std::function<bool(VertexIterator &)> in_neighbour_filter = nullptr\n);\nvoid ExpandEdges(\n    std::function<bool(OutEdgeIterator &)> out_edge_filter = nullptr,\n    std::function<bool(InEdgeIterator &)> in_edge_filter = nullptr,\n    std::function<bool(VertexIterator &)> out_neighbour_filter = nullptr,\n    std::function<bool(VertexIterator &)> in_neighbour_filter = nullptr\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u4e0a\u8ff0\u4e3a FrontierTraversal \u7684\u4e09\u79cd\u904d\u5386\u65b9\u5f0f\uff0c\u5373\u4ece\u5f53\u524d\u7684\u70b9\u96c6\u5408\u51fa\u53d1\uff0c\u5bf9\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u70b9\uff0c\u4f9d\u6b21\u8bbf\u95ee\u6bcf\u6761\u51fa\u8fb9/\u5165\u8fb9/\u51fa\u8fb9\u548c\u5165\u8fb9\uff0c\u82e5\u6ee1\u8db3\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8fc7\u6ee4\u6761\u4ef6\uff08\u5176\u4e2d\uff0cedge_filter \u4e3a\u9762\u5411\u8fb9\u7684\u8fc7\u6ee4\u51fd\u6570\uff0cneighbour_filter \u5219\u4e3a\u9762\u5411\u90bb\u5c45\u70b9\u7684\u8fc7\u6ee4\u51fd\u6570\uff09\uff0c\u5219\u5c06\u90bb\u5c45\u70b9\u52a0\u5165\u65b0\u7684\u70b9\u96c6\u5408\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"ParallelVector<size_t> & GetFrontier();\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5f53\u524d\u70b9\u96c6\u5408\u7684\u6269\u5c55\u7ed3\u675f\u540e\uff0c\u65b0\u7684\u70b9\u96c6\u5408\u53ef\u4ee5\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u53d6\u5f97\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"void ExpandOutEdges(\n    std::function<bool(OutEdgeIterator &, Path &, IteratorHelper &)> out_edge_filter = nullptr,\n    std::function<bool(VertexIterator &, Path &, IteratorHelper &)> out_neighbour_filter = nullptr\n);\nvoid ExpandInEdges(\n    std::function<bool(InEdgeIterator &, Path &, IteratorHelper &)> in_edge_filter = nullptr,\n    std::function<bool(VertexIterator &, Path &, IteratorHelper &)> in_neighbour_filter = nullptr\n);\nvoid ExpandEdges(\n    std::function<bool(OutEdgeIterator &, Path &, IteratorHelper &)> out_edge_filter = nullptr,\n    std::function<bool(InEdgeIterator &, Path &, IteratorHelper &)> in_edge_filter = nullptr,\n    std::function<bool(VertexIterator &, Path &, IteratorHelper &)> out_neighbour_filter = nullptr,\n    std::function<bool(VertexIterator &, Path &, IteratorHelper &)> in_neighbour_filter = nullptr\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"PathTraversal \u7684\u4e09\u79cd\u904d\u5386\u65b9\u5f0f\u4e0e FrontierTraversal \u7c7b\u4f3c\uff0c\u53ea\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8fc7\u6ee4\u51fd\u6570\u4e2d\u589e\u52a0\u4e86\u4e24\u4e2a\u53c2\u6570\uff0c\u5176\u4e2d\uff1aPath \u5305\u542b\u4e86\u5230\u65b0\u6269\u5c55\u7684\u8fd9\u6761\u8fb9\u4e4b\u524d\u7684\u8def\u5f84\uff0cIteratorHelper \u53ef\u7528\u4e8e\u5c06\u8def\u5f84\u4e2d\u7684\u70b9/\u8fb9\u8f6c\u4e3a\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u7684\u8fed\u4ee3\u5668\uff0c\u76f8\u5173\u6587\u6863\u53ef\u53c2\u8003\u5bf9\u5e94\u7684 C++ API \u6587\u6863\u3002"})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const a={},l=n.createContext(a);function o(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);