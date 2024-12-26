"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53421],{61231:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=a(74848),o=a(28453);const r={},i="Sampling API",s={id:"olap&procedure/learn/sampling_api",title:"Sampling API",description:"This document provides a detailed guide on using the Sampling API of TuGraph.",source:"@site/versions/version-4.3.0/en-US/source/9.olap&procedure/3.learn/2.sampling_api.md",sourceDirName:"9.olap&procedure/3.learn",slug:"/olap&procedure/learn/sampling_api",permalink:"/tugraph-db/en-US/en/4.3.0/olap&procedure/learn/sampling_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Learning Tutorial",permalink:"/tugraph-db/en-US/en/4.3.0/olap&procedure/learn/tutorial"},next:{title:"Training",permalink:"/tugraph-db/en-US/en/4.3.0/olap&procedure/learn/training"}},d={},l=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Graph Data Instantiation",id:"2-graph-data-instantiation",level:2},{value:"3. Introduction to Sampling Operators",id:"3-introduction-to-sampling-operators",level:2},{value:"3.1.RandomWalk Operator",id:"31randomwalk-operator",level:3},{value:"3.2.NeighborSampling Operator",id:"32neighborsampling-operator",level:3},{value:"3.3.NegativeSampling Operator",id:"33negativesampling-operator",level:3},{value:"3.4.EdgeSampling Operator",id:"34edgesampling-operator",level:3},{value:"3.5.GetDB Operator",id:"35getdb-operator",level:3},{value:"4. User-Defined Sampling Algorithm",id:"4-user-defined-sampling-algorithm",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sampling-api",children:"Sampling API"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document provides a detailed guide on using the Sampling API of TuGraph."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-overview",children:"1. Overview"}),"\n",(0,t.jsx)(n.p,{children:"This manual introduces the Sampling API using TuGraph."}),"\n",(0,t.jsx)(n.h2,{id:"2-graph-data-instantiation",children:"2. Graph Data Instantiation"}),"\n",(0,t.jsx)(n.p,{children:"Before the sampling operation, load the graph data according to the graph data path, and map it into the olapondb graph analysis class, the code is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"galaxy = PyGalaxy(args.db_path) # Create a galaxy instance based on the path\ngalaxy.SetCurrentUser(args.username, args.password) # Set the current user\ndb = galaxy.OpenGraph('default', False) # Open the graph database specified by db\ntxn = db.CreateReadTxn() # Create a transaction instance\nolapondb = PyOlapOnDB('Empty', db, txn) # Instantiate OlapOnDB based on the graph loading method, graph database instance, and transaction instance\ndel txn\ndel db\ndel galaxy\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-introduction-to-sampling-operators",children:"3. Introduction to Sampling Operators"}),"\n",(0,t.jsx)(n.p,{children:"The graph sampling operator is implemented in the cython layer and is used to sample the input graph. The generated NodeInfo is used to save point information such as feature attributes and label attributes, and EdgeInfo is used to save edge information. These metadata information can be used for features Extraction, network embedding and other tasks. Currently, the TuGraph graph learning module supports five sampling operators: GetDB, NeighborSampling, EdgeSampling, RandomWalkSampling, and NegativeSampling."}),"\n",(0,t.jsx)(n.h3,{id:"31randomwalk-operator",children:"3.1.RandomWalk Operator"}),"\n",(0,t.jsx)(n.p,{children:"Random walks are performed a specified number of times around the sampling nodes to obtain the sampling subgraph."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Process(db_: lgraph_db_python.PyGraphDB, olapondb: lgraph_db_python.PyOlapOnDB, feature_num: size_t, sample_node: list, step: size_t, NodeInfo: list, EdgeInfo: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter list:"}),"\n",(0,t.jsx)(n.p,{children:"db_: An instance of the graph database.\nolapondb: Graph analysis class.\nfeature_num: The length of the feature vectors for the nodes.\nsample_node: A list of nodes to be sampled.\nnei_num: The number of neighbor nodes to be sampled for each node.\nNodeInfo: A list of dictionaries containing metadata information for the nodes.\nEdgeInfo: A list of dictionaries containing metadata information for the edges.\nReturn value: This function does not return anything."}),"\n",(0,t.jsx)(n.h3,{id:"32neighborsampling-operator",children:"3.2.NeighborSampling Operator"}),"\n",(0,t.jsx)(n.p,{children:"A certain number of nodes are sampled from the first-degree neighbors of the sampling nodes to obtain the sampling subgraph."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Process(db_: lgraph_db_python.PyGraphDB, olapondb: lgraph_db_python.PyOlapOnDB, feature_num: size_t, sample_node: list, nei_num: size_t, NodeInfo: list, EdgeInfo: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter list:"}),"\n",(0,t.jsx)(n.p,{children:"db_: An instance of the graph database.\nolapondb: Graph analysis class.\nfeature_num: The length of the feature vectors for the nodes.\nsample_node: A list of nodes to be sampled.\nnei_num: The number of neighbor nodes to be sampled for each node.\nNodeInfo: A list of dictionaries containing metadata information for the nodes.\nEdgeInfo: A list of dictionaries containing metadata information for the edges.\nReturn value: This function does not return anything."}),"\n",(0,t.jsx)(n.h3,{id:"33negativesampling-operator",children:"3.3.NegativeSampling Operator"}),"\n",(0,t.jsx)(n.p,{children:"The negative sampling algorithm is used to generate a subgraph of non-existent edges."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Process(db_: lgraph_db_python.PyGraphDB, olapondb: lgraph_db_python.PyOlapOnDB, feature_num: size_t, num_samples: size_t, NodeInfo: list, EdgeInfo: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter list:"}),"\n",(0,t.jsx)(n.p,{children:"db_: An instance of the graph database.\nolapondb: Graph analysis class.\nfeature_num: The length of the feature vectors for the nodes.\nnum_samples: The number of false edges to be generated.\nNodeInfo: A list of dictionaries containing metadata information for the nodes.\nEdgeInfo: A list of dictionaries containing metadata information for the edges.\nReturn value: This function does not return anything."}),"\n",(0,t.jsx)(n.h3,{id:"34edgesampling-operator",children:"3.4.EdgeSampling Operator"}),"\n",(0,t.jsx)(n.p,{children:"The edge sampling algorithm is used to generate a subgraph of sampled edges."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Process(db_: lgraph_db_python.PyGraphDB, olapondb: lgraph_db_python.PyOlapOnDB, feature_num: size_t, sample_rate: double, NodeInfo: list, EdgeInfo: list, EdgeInfo: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter list:"}),"\n",(0,t.jsx)(n.p,{children:"db_: An instance of the graph database.\nolapondb: Graph analysis class.\nfeature_num: The length of the feature vectors for the nodes.\nsample_rate: The sampling rate of the edges to be selected.\nNodeInfo: A list of dictionaries containing metadata information for the nodes.\nEdgeInfo: A list of dictionaries containing metadata information for the edges.\nReturn value: This function does not return anything."}),"\n",(0,t.jsx)(n.h3,{id:"35getdb-operator",children:"3.5.GetDB Operator"}),"\n",(0,t.jsx)(n.p,{children:"Get the graph data from the database and convert it into the required data structure."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Process(db_: lgraph_db_python.PyGraphDB, olapondb: lgraph_db_python.PyOlapOnDB, feature_num: size_t, NodeInfo: list, EdgeInfo: list)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter list:"}),"\n",(0,t.jsx)(n.p,{children:"db_: An instance of the graph database.\nolapondb: Graph analysis class.\nfeature_num: The length of the feature vectors for the nodes.\nNodeInfo: A list of dictionaries containing metadata information for the nodes.\nEdgeInfo: A list of dictionaries containing metadata information for the edges.\nReturn value: This function does not return anything."}),"\n",(0,t.jsx)(n.h2,{id:"4-user-defined-sampling-algorithm",children:"4. User-Defined Sampling Algorithm"}),"\n",(0,t.jsxs)(n.p,{children:["Users can also implement a custom sampling algorithm through the TuGraph Olap interface. For the interface document, see ",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/en/4.3.0/olap&procedure/olap/python-api",children:"here"}),". This document mainly introduces the interface of related functions used by the graph sampling algorithm design."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);