"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83651],{95386:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),r=i(28453);const s={},o="OlapOnDisk API",a={id:"olap&procedure/olap/olap-on-disk-api",title:"OlapOnDisk API",description:"\u6b64\u6587\u6863\u4e3b\u8981\u8be6\u7ec6\u4ecb\u7ecd\u4e86OlapOnDisk API\u7684\u4f7f\u7528\u8bf4\u660e",source:"@site/versions/version-4.3.0/zh-CN/source/9.olap&procedure/2.olap/4.olap-on-disk-api.md",sourceDirName:"9.olap&procedure/2.olap",slug:"/olap&procedure/olap/olap-on-disk-api",permalink:"/tugraph-db/zh/4.3.0/olap&procedure/olap/olap-on-disk-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OlapOnDB API",permalink:"/tugraph-db/zh/4.3.0/olap&procedure/olap/olap-on-db-api"},next:{title:"Python Olap API",permalink:"/tugraph-db/zh/4.3.0/olap&procedure/olap/python-api"}},c={},l=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u7b97\u6cd5\u4e3e\u4f8b",id:"2-\u7b97\u6cd5\u4e3e\u4f8b",level:2},{value:"2.1 \u5934\u6587\u4ef6",id:"21-\u5934\u6587\u4ef6",level:3},{value:"2.2 \u914d\u7f6e\u7c7bMyConfig",id:"22-\u914d\u7f6e\u7c7bmyconfig",level:3},{value:"2.3 \u4e3b\u51fd\u6570",id:"23-\u4e3b\u51fd\u6570",level:3},{value:"2.4 bfs\u7b97\u6cd5\u6d41\u7a0b",id:"24-bfs\u7b97\u6cd5\u6d41\u7a0b",level:3},{value:"3. \u5176\u4ed6\u5e38\u7528\u51fd\u6570\u529f\u80fd\u63cf\u8ff0",id:"3-\u5176\u4ed6\u5e38\u7528\u51fd\u6570\u529f\u80fd\u63cf\u8ff0",level:2},{value:"3.1 \u56fe\u52a0\u8f7d",id:"31-\u56fe\u52a0\u8f7d",level:3},{value:"3.2 \u56fe\u5199\u5165",id:"32-\u56fe\u5199\u5165",level:3},{value:"3.3 \u56fe\u89e3\u6790\u51fd\u6570",id:"33-\u56fe\u89e3\u6790\u51fd\u6570",level:3}];function d(n){const e={blockquote:"blockquote",code:"code",edgedata:"edgedata",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"olapondisk-api",children:"OlapOnDisk API"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u8be6\u7ec6\u4ecb\u7ecd\u4e86OlapOnDisk API\u7684\u4f7f\u7528\u8bf4\u660e"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,t.jsx)(e.p,{children:"TuGraph\u7684Standalone\u6a21\u5f0f\u53ef\u7528\u4e8e\u52a0\u8f7d\u56fe\u6570\u636e\u6587\u4ef6\uff0c\u5176\u4e2d\u56fe\u6570\u636e\u6587\u4ef6\u6765\u6e90\u53ef\u5305\u542btext\u6587\u672c\u6587\u4ef6\u3001BINARY_FILE\u4e8c\u8fdb\u5236\u6587\u4ef6\u548cODPS\u6e90\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0cTuGraph\u53ef\u5b9e\u73b0\u591a\u6570\u636e\u6765\u6e90\u5feb\u901f\u52a0\u8f7d\u6210\u56fe\uff0c\u7136\u540e\u5728\u8be5\u56fe\u4e0a\u8fd0\u884c\u5982BFS\u3001WCC\u3001SSSP\u7b49\u8fed\u4ee3\u5f0f\u7b97\u6cd5\uff0c\u5e76\u8f93\u51fa\u6700\u7ec8\u7ed3\u679c\u81f3\u7ec8\u7aef\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728TuGraph\u4e2d\uff0c\u5bfc\u51fa\u548c\u8ba1\u7b97\u8fc7\u7a0b\u5747\u53ef\u4ee5\u901a\u8fc7\u5728\u5185\u5b58\u4e2d\u5e76\u884c\u5904\u7406\u7684\u65b9\u5f0f\u8fdb\u884c\u52a0\u901f\uff0c\u4ece\u800c\u8fbe\u5230\u8fd1\u4e4e\u5b9e\u65f6\u7684\u5904\u7406\u5206\u6790\uff0c\u548c\u4f20\u7edf\u65b9\u6cd5\u76f8\u6bd4\uff0c\u5373\u907f\u514d\u4e86\u6570\u636e\u5bfc\u51fa\u843d\u76d8\u7684\u5f00\u9500\uff0c\u53c8\u80fd\u4f7f\u7528\u7d27\u51d1\u7684\u56fe\u6570\u636e\u7ed3\u6784\u83b7\u5f97\u8ba1\u7b97\u7684\u7406\u60f3\u6027\u80fd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"TuGraph\u5185\u7f6e\u4e86\u5927\u91cf\u7684\u5e38\u89c1\u56fe\u5206\u6790\u7b97\u6cd5\u548c\u4e30\u5bcc\u7684\u8f85\u52a9\u63a5\u53e3\uff0c\u56e0\u6b64\u7528\u6237\u51e0\u4e4e\u4e0d\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u5177\u4f53\u7684\u56fe\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u53ea\u9700\u8981\u5728\u5b9e\u73b0\u81ea\u5df1\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u65f6\u5019\u5c06\u76f8\u5e94\u7b97\u6cd5\u5e93\u7684\u5934\u6587\u4ef6(.h)\u5305\u542b\u5230\u81ea\u5df1\u7684\u7a0b\u5e8f\u4e2d\uff0c\u5e76\u5728\u7f16\u8bd1\u9636\u6bb5\u94fe\u63a5\u81ea\u5df1\u7684\u52a8\u6001\u5e93\u6587\u4ef6\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86Standalone\u7684\u5e38\u7528\u63a5\u53e3\uff0c\u4f7f\u7528\u5230\u7684\u8f85\u52a9\u51fd\u6570\u4e3b\u8981\u5305\u542b\u5728OlapOnDB\u7c7b\u3002\u540c\u65f6\u4e3a\u5e2e\u52a9\u7528\u6237\u7406\u89e3\u65b9\u4fbf\uff0c\u5bf9BFS\u7b97\u6cd5\u8fdb\u884c\u4e3e\u4f8b\u8bf4\u660e\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"2-\u7b97\u6cd5\u4e3e\u4f8b",children:"2. \u7b97\u6cd5\u4e3e\u4f8b"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\u5bf9BFS\u7b97\u6cd5\u5206\u5757\u505a\u89e3\u91ca\uff0c\u5927\u4f53\u4e0a\u5206\u4e3a\u4e3b\u51fd\u6570",(0,t.jsx)(e.code,{children:"main"}),"\u3001BFS\u7b97\u6cd5\u6d41\u7a0b",(0,t.jsx)(e.code,{children:"BFSCore"}),"\u51fd\u6570\u548c\u914d\u7f6e\u7c7bMyConfig\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"21-\u5934\u6587\u4ef6",children:"2.1 \u5934\u6587\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-C++",children:'#include "olap/olap_on_disk.h"   \n#include "tools/json.hpp"      //\u4f7f\u7528 TuGraph \u65f6\u9700\u8981\u5305\u542b\u7684\u5934\u6587\u4ef6\n#include "./algo.h"   //\u5305\u542b\u5404\u79cd\u7b97\u6cd5\u903b\u8f91\u51fd\u6570\u7684\u5934\u6587\u4ef6\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4f7f\u7528 TuGraph \u5b9e\u73b0\u56fe\u6570\u636e\u6587\u4ef6\u8ba1\u7b97\u5e94\u7528\u65f6\uff0c\u4e00\u822c\u9996\u5148\u5efa\u7acbStandaloneGraph\u7c7b\u5bf9\u8c61graph\uff0c\u5c06\u56fe\u6587\u4ef6\u6570\u636e\u52a0\u8f7d\u8fdbgraph\u4e2d\uff0c\u4e4b\u540e\u901a\u8fc7\u8c03\u7528\u56fe\u903b\u8f91\u51fd\u6570\u5b9e\u73b0\u56fe\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u6700\u540e\u5bf9\u56fe\u8ba1\u7b97\u7684\u7ed3\u679c\u8fdb\u884c\u6253\u5370\u8f93\u51fa\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"22-\u914d\u7f6e\u7c7bmyconfig",children:"2.2 \u914d\u7f6e\u7c7bMyConfig"}),"\n",(0,t.jsxs)(e.p,{children:["MyConfig\u914d\u7f6e\u7c7b\u51fd\u6570\u7528\u4e8e\u63d0\u4f9b\u7b97\u6cd5\u903b\u8f91\u8ba1\u7b97\u65f6\u6240\u9700\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u7ee7\u627f\u4e8eConfigBase",(0,t.jsx)(e.edgedata,{children:",\u5176\u4e2dEdgeDate\u53ef\u6839\u636e\u52a0\u8f7d\u56fe\u7c7b\u578b\u4e0d\u540c\u9009\u62e9Empty\uff08\u65e0\u6743\u56fe\uff09\u3001int\uff08\u5e26\u6743\u56fe\u6743\u91cd\u4e3a\u6574\u6570\uff09\u6216\u8005double\uff08\u5e26\u6743\u56fe\u6743\u91cd\u4e3adouble\uff09\u7c7b\u578b\u3002"})]}),"\n",(0,t.jsx)(e.p,{children:"MyConfig\u914d\u7f6e\u7c7b\u4e00\u822c\u6839\u636e\u7b97\u6cd5\u4e0d\u540c\uff0c\u9700\u8981\u989d\u5916\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"1.\u7b97\u6cd5\u6240\u9700\u53c2\u6570\n2.\u7b97\u6cd5\u540d\u79f0\n3.\u914d\u7f6e\u7c7b\u5185Print\u51fd\u6570\n\u5176\u4f59\u516c\u7528\u6210\u5458\u7ee7\u627f\u4e0eConfigBase\uff0c\u53ef\u53c2\u8003src/olap/olap_config.h\u67e5\u9605\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-C++",children:'class MyConfig : public ConfigBase<Empty> {\n public:\n\n    // \u7b97\u6cd5\u6240\u9700\u53c2\u6570\u521d\u59cb\u5316\n    size_t root = 0;\n    std::string name = std::string("bfs");\n    void AddParameter(fma_common::Configuration & config) {\n        ConfigBase<Empty>::AddParameter(config);\n        config.Add(root, "root", true)\n                .Comment("the root of bfs");\n    }\n    void Print() {\n        ConfigBase<Empty>::Print();\n        std::cout << "  name: " << name << std::endl;\n        if (root != size_t(-1)) {\n            std::cout << "  root: " << root << std::endl;\n        } else {\n            std::cout << "  root: UNSET" << std::endl;\n        }\n    }\n    // \u914d\u7f6e\u6587\u4ef6\u63a5\u53d7\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u8be5\u7528\u4f8b\u4f1a\u987a\u6b21\u8bfb\u53d6\u547d\u4ee4\u884c\u8c03\u7528\u7b97\u6cd5\u65f6\u7684\u53c2\u6570\uff0c\u4f18\u5148\u4f7f\u7528\u7528\u6237\u6307\u5b9a\u6570\u503c\uff0c\u82e5\u7528\u6237\u5e76\u672a\u6307\u5b9a\u5219\u9009\u62e9\u9ed8\u8ba4\u53c2\u6570\u3002\n    MyConfig(int &argc, char** &argv): ConfigBase<Empty>(argc, argv) {\n        fma_common::Configuration config;\n        AddParameter(config);\n        config.ExitAfterHelp(true);\n        config.ParseAndFinalize(argc, argv);\n        Print();\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h3,{id:"23-\u4e3b\u51fd\u6570",children:"2.3 \u4e3b\u51fd\u6570"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-C++",children:'int main(int argc, char** argv) {\n    double start_time;\n    // \u7edf\u8ba1\u5185\u5b58\u6d88\u8017\u7c7bMemUsage\u5b9e\u4f8b\u5316\n    MemUsage memUsage;\n    memUsage.startMemRecord();\n\n    // prepare\n    start_time = get_time();\n    // \u914d\u7f6e\u7c7bMyConfig\u5b9e\u4f8b\u5316\n    MyConfig config(argc, argv);\n    size_t root_vid = config.root;\n    // OlapOnDisk\u7c7b\u5b9e\u4f8b\u5316\n    OlapOnDisk<Empty> graph;\n    graph.Load(config, DUAL_DIRECTION);\n    memUsage.print();\n    memUsage.reset();\n    // \u7edf\u8ba1\u56fe\u52a0\u8f7d\u6d88\u8017\u65f6\u95f4\n    auto prepare_cost = get_time() - start_time;\n    printf("prepare_cost = %.2lf(s)\\n", prepare_cost);\n\n    // core\n    start_time = get_time();\n    // \u521b\u5efa\u6570\u7ec4\u7528\u4e8e\u7edf\u8ba1\u67d0\u8282\u70b9\u662f\u5426\u904d\u5386\u8fc7\n    auto parent = graph.AllocVertexArray<size_t>();\n    // \u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u7b97\u6cd5\uff0c\u8fd4\u56de\u56fe\u5185root_vid\u6839\u7ed3\u70b9\u8fde\u63a5\u7684\u8282\u70b9\u4e2a\u6570\n    size_t count = BFSCore(graph, root_vid, parent);\n    memUsage.print();\n    memUsage.reset();\n    auto core_cost = get_time() - start_time;\n    printf("core_cost = %.2lf(s)\\n", core_cost);\n\n    // output\n    start_time = get_time();\n    // \u6253\u5370\u76f8\u5173\u4fe1\u606f\u81f3\u7ec8\u7aef\n    printf("found_vertices = %ld\\n", count);\n    auto output_cost = get_time() - start_time;\n    printf("output_cost = %.2lf(s)\\n", output_cost);\n\n    printf("total_cost = %.2lf(s)\\n", prepare_cost + core_cost + output_cost);\n    printf("DONE.");\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"24-bfs\u7b97\u6cd5\u6d41\u7a0b",children:"2.4 bfs\u7b97\u6cd5\u6d41\u7a0b"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"bfs"}),"\u4e3b\u6d41\u7a0b\u6709\u4e24\u4e2a\u8f93\u5165\u53c2\u6570\uff0c\u5feb\u7167\u7c7b\uff08\u5b50\u56fe\uff09\u8fd8\u6709\u8fed\u4ee3\u6b21\u6570\uff0c\u6574\u4f53\u6d41\u7a0b\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u76f8\u5173\u5b9a\u4e49\u3001\u6570\u636e\u7ed3\u6784\u7684\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528\u6279\u5904\u7406\u51fd\u6570\u5bf9\u6bcf\u4e2a\u8282\u70b9\u8fdb\u884c\u5faa\u73af\u8ba1\u7b97\uff0c\u6bcf\u4e00\u8f6e\u627e\u5230\u4e0e\u5f53\u524d\u8282\u70b9\u76f8\u90bb\u7684\u5168\u90e8\u8282\u70b9\uff0c\u5e76\u5728\u8be5\u8f6e\u6b21\u7ec8\u6b62\u65f6\u8fdb\u884c\u4ea4\u6362\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u76f4\u5230\u627e\u5230\u5168\u90e8\u8282\u70b9\uff0c\u8fd4\u56de\u8282\u70b9\u4e2a\u6570discovered_vertices\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-C++",children:'size_t BFSCore(Graph<Empty>& graph, size_t root_vid, ParallelVector<size_t>& parent){\n\n  size_t root = root_vid;\n  auto active_in = graph.AllocVertexSubset();   //\u5206\u914d\u6570\u7ec4\uff0cactive_in\u7528\u4e8e\u5b58\u653e\u4e0a\u4e00\u5faa\u73af\u9636\u6bb5\u5df2\u627e\u5230\u7684\u8282\u70b9\n  active_in.Add(root);            //\u628a\u8ddf\u8282\u70b9\u52a0\u5165\u6570\u7ec4\u4e2d\n  auto active_out = graph.AllocVertexSubset();  //\u5206\u914d\u6570\u7ec4active_out\u7528\u4e8e\u5b58\u653e\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u7684\u8282\u70b9\n  parent.Fill((size_t)-1);               //\u5c06parent\u6570\u7ec4\u4e2d\u7684\u8282\u70b9\u8d4b\u503c\u4e3a-1\uff0c-1\u8868\u793a\u672a\u88ab\u627e\u5230\n  parent[root] = root;\n  size_t num_activations = 1;       //\u8868\u793a\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u7684\u8282\u70b9\u4e2a\u6570\n  size_t discovered_vertices = 0;    //\u8868\u793a\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u8282\u70b9\u7684\u603b\u4e2a\u6570\n\n  for (int ii = 0; num_activations != 0; ii++) {       //num_activations\u8868\u793a\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u7684\u8282\u70b9\u4e2a\u6570\n      printf("activates(%d) <= %lu\\n", ii, num_activations);\n      discovered_vertices += num_activations;         //discovered_vertices\u8868\u793a\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u8282\u70b9\u7684\u603b\u4e2a\u6570\n      active_out.Clear();\n      num_activations = graph.ProcessVertexActive<size_t>(\n          [&](size_t vi) {\n              size_t num_activations = 0;\n              for (auto& edge : graph.OutEdges(vi)) {   //\u6bcf\u4e00\u6b21\u5faa\u73af\u4ece\u6839\u8282\u70b9\u51fa\u53d1\uff0c\u67e5\u627e\u90bb\u8fd1\u7684\u76f8\u90bb\u8282\u70b9\uff0c\u5bf9\u5176parent\u503c\u6539\u53d8\uff0c\u5e76num_activations+1\u64cd\u4f5c\n                  size_t dst = edge.neighbour;\n                  if (parent[dst] == (size_t)-1) {\n                      auto lock = graph.GuardVertexLock(dst);\n                      if (parent[dst] == (size_t)-1) {\n                          parent[dst] = vi;\n                          num_activations += 1;\n                          active_out.Add(dst);       //\u5b58\u653e\u5f53\u524d\u5faa\u73af\u9636\u6bb5\u627e\u5230\u7684\u8282\u70b9\n                      }\n                  }\n              }\n              return num_activations;\n          },\n          active_in);\n      active_in.Swap(active_out);\n  }\n  // \u8fd4\u56de\u5168\u90e8\u8282\u70b9\u6570\n  return discovered_vertices;\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"3-\u5176\u4ed6\u5e38\u7528\u51fd\u6570\u529f\u80fd\u63cf\u8ff0",children:"3. \u5176\u4ed6\u5e38\u7528\u51fd\u6570\u529f\u80fd\u63cf\u8ff0"}),"\n",(0,t.jsx)(e.h3,{id:"31-\u56fe\u52a0\u8f7d",children:"3.1 \u56fe\u52a0\u8f7d"}),"\n",(0,t.jsx)(e.p,{children:"TuGraph-Standalone\u5bf9\u4e8e\u56fe\u6570\u636e\u6587\u4ef6\u7684\u52a0\u8f7d\u6765\u6e90\u4e3b\u8981\u5206\u4e3a\u4e09\u5927\u7c7b\uff1a\u6587\u672c\u6587\u4ef6\u3001\u4e8c\u8fdb\u5236\u6587\u4ef6\u548cODPS\u3002\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e3a\u5c06\u8fb9\u6570\u636e\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u6309\u987a\u5e8f\u6392\u5217\u7684\u6587\u4ef6\uff0c\u80fd\u591f\u8282\u7701\u5927\u91cf\u5b58\u50a8\u7a7a\u95f4\u3002\u5176\u52a0\u8f7d\u51fd\u6570\u5206\u4e3a\u4e09\u79cd\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"void Load(ConfigBase<EdgeData> config,EdgeDirectionPolicy edge_direction_policy = DUAL_DIRECTION)"}),"\uff1a\u56fe\u6570\u636e\u6587\u4ef6\u7684\u52a0\u8f7d\u65b9\u5f0f\uff0c\u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff0c\u5176\u542b\u4e49\u5206\u522b\u8868\u793a\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"config"}),"\uff1a\u9700\u8981\u52a0\u8f7d\u7684\u914d\u7f6e\u53c2\u6570\u3002\u8be5\u53c2\u6570\u5185\u4fdd\u5b58\u4e86\u8be5\u56fe\u7684\u4e00\u822c\u4fe1\u606f\uff08\u5982\u6570\u636e\u6765\u6e90\uff0c\u7b97\u6cd5\u540d\u79f0\uff0c\u6570\u636e\u8f93\u5165\u3001\u8f93\u51fa\u8def\u5f84\uff0c\u70b9\u4e2a\u6570\u7b49\uff09\u4ee5\u53ca\u6839\u636e\u4e0d\u540c\u6570\u636e\u6765\u6e90\u3001\u4e0d\u540c\u7b97\u6cd5\u6240\u914d\u7f6e\u7684\u4e0d\u540c\u4fe1\u606f\u53c2\u6570\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"edge_direction_policy"}),"\uff1a\u6307\u5b9a\u56fe\u4e3a\u6709\u5411\u6216\u65e0\u5411\uff0c\u5305\u542b\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3aDUAL_DIRECTION\u3001MAKE_SYMMETRIC\u4ee5\u53caINPUT_SYMMETRIC\u3002\u5176\u4e2dDUAL_DIRECTION\u4e3a\u9ed8\u8ba4\u7684\u56fe\u52a0\u8f7d\u65b9\u5f0f\u3002\nDUAL_DIRECTION : \u8f93\u5165\u6587\u4ef6\u4e3a\u975e\u5bf9\u79f0\u56fe\uff0c\u52a0\u8f7d\u56fe\u4e3a\u975e\u5bf9\u79f0\u56fe\u3002\nMAKE_SYMMETRIC : \u8f93\u5165\u6587\u4ef6\u4e3a\u975e\u5bf9\u79f0\u56fe\uff0c\u52a0\u8f7d\u56fe\u4e3a\u5bf9\u79f0\u56fe\u3002\nINPUT_SYMMETRIC : \u8f93\u5165\u6587\u4ef6\u4e3a\u5bf9\u79f0\u56fe\uff0c\u52a0\u8f7d\u56fe\u4e3a\u5bf9\u79f0\u56fe\u3002\n\u5bf9\u5e94\u7684\u8be6\u7ec6\u4ecb\u7ecd\u89c1lgraph\u6587\u4ef6\u5939\u4e0b\u7684olap_config.h\u6587\u4ef6\u7684",(0,t.jsx)(e.code,{children:"enum EdgeDirectionPolicy"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"void LoadVertexArrayTxt<V>(V * array, std::string path, std::function<size_t(const char *, const char *, VertexUnit<V> &)> parse_line)"}),"\uff1a\u5c06\u6587\u4ef6\u4e2d\u7684\u70b9-\u6570\u636e\u5bf9\u6309\u7167\u70b9id\u7684\u987a\u5e8f\u52a0\u8f7d\u5230\u6570\u7ec4\u4e2d\u3002\u5404\u53c2\u6570\u8868\u793a\u610f\u4e49\u5206\u522b\u4e3a\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"array"}),"\uff1a\u5f85\u8bfb\u5165\u6570\u636e\u7684\u6570\u7ec4"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"path"}),"\uff1a\u8bfb\u53d6\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6587\u4ef6\u4e2d\u6bcf\u884c\u8868\u793a\u4e00\u5bf9\u70b9-\u6570\u636e\u5bf9"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"parse_line"}),"\uff1a\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u544a\u8bc9\u7cfb\u7edf\u5982\u4f55\u5c06\u4e00\u884c\u6587\u672c\u6570\u636e\u89e3\u6790\u4e3a\u4e00\u4e2a\u70b9-\u6570\u636e\u5bf9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"32-\u56fe\u5199\u5165",children:"3.2 \u56fe\u5199\u5165"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"void Write(ConfigBase<EdgeData> & config, ParallelVector<VertexData>& array, size_t array_size, std::string name, std::function<bool(VertexData &)> filter_output = filter_output_default<VertexData&>)"}),"\uff1a\u628aarray\u4e2d\u6570\u636e\u5199\u56de\u6587\u4ef6\u4e2d\uff0c\u5404\u53c2\u6570\u8868\u793a\u610f\u4e49\u5206\u522b\u662f\uff1a\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"config"}),"\uff1a\u9700\u8981\u52a0\u8f7d\u7684\u914d\u7f6e\u53c2\u6570\u3002\u8be5\u53c2\u6570\u5185\u4fdd\u5b58\u4e86\u8be5\u56fe\u7684\u4e00\u822c\u4fe1\u606f\uff08\u5982\u6570\u636e\u6765\u6e90\uff0c\u7b97\u6cd5\u540d\u79f0\uff0c\u6570\u636e\u8f93\u5165\u3001\u8f93\u51fa\u8def\u5f84\uff0c\u70b9\u4e2a\u6570\u7b49\uff09\u4ee5\u53ca\u6839\u636e\u4e0d\u540c\u6570\u636e\u6765\u6e90\u3001\u4e0d\u540c\u7b97\u6cd5\u6240\u914d\u7f6e\u7684\u4e0d\u540c\u4fe1\u606f\u53c2\u6570\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"array"}),"\uff1a\u5f85\u5199\u5165\u6570\u636e\u7684\u6570\u7ec4"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"array_size"}),"\uff1a\u5f85\u5199\u5165\u6570\u636e\u7684\u6570\u5b57\u957f\u5ea6"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"name"}),"\uff1a\u7b97\u6cd5\u540d\u79f0"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"filter_output"}),"\uff1a\u5199\u5165\u6570\u636e\u89c4\u5219\u51fd\u6570\uff0c\u5f85\u5199\u5165\u6570\u636e\u9700\u8981\u6ee1\u8db3\u8be5\u51fd\u6570\u7684\u8981\u6c42\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"33-\u56fe\u89e3\u6790\u51fd\u6570",children:"3.3 \u56fe\u89e3\u6790\u51fd\u6570"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"std::tuple<size_t, bool> parse_line_unweighted(const char *p, const char *end, EdgeUnit<EdgeData> &e)"}),"\uff1a\u5bf9\u56fe\u6570\u636e\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\uff0c\u52a0\u8f7d\u56fe\u4e3a\u65e0\u6743\u56fe\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"std::tuple<size_t, bool> parse_line_weighted(const char* p, const char* end, EdgeUnit<EdgeData>& e)"}),"\uff1a\u5bf9\u56fe\u6570\u636e\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\uff0c\u52a0\u8f7d\u56fe\u4e3a\u6709\u6743\u56fe\uff0c\u6743\u91cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,t.jsx)(e.edgedata,{children:"\u6307\u5b9a\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u53ef\u901a\u8fc7MyConfig\u7c7b\u5b9a\u4e49\u65f6\u7684\u6784\u9020\u51fd\u6570parse_line\u8fdb\u884c\u6307\u5b9a\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);