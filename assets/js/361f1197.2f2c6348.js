"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[68139],{83900:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(74848),r=n(28453);const i={},o="Functionality",s={id:"introduction/functionality",title:"Functionality",description:"This document mainly introduces the main functions and features of TuGraph.",source:"@site/versions/version-4.2.0/en-US/source/2.introduction/7.functionality.md",sourceDirName:"2.introduction",slug:"/introduction/functionality",permalink:"/tugraph-db/en/4.2.0/introduction/functionality",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/tugraph-db/en/4.2.0/introduction/architecture"},next:{title:"Scenarios",permalink:"/tugraph-db/en/4.2.0/introduction/scenarios"}},l={},d=[{value:"1.Installation",id:"1installation",level:2},{value:"1.1.Installation",id:"11installation",level:2},{value:"1.2.Software and Hardware Environment",id:"12software-and-hardware-environment",level:2},{value:"2.Storage layer",id:"2storage-layer",level:2},{value:"3.Calculation layer",id:"3calculation-layer",level:2},{value:"4.Core Features",id:"4core-features",level:2},{value:"4.1.Query Language",id:"41query-language",level:3},{value:"4.2.Stored Procedures",id:"42stored-procedures",level:3},{value:"4.3.Data Import/Export",id:"43data-importexport",level:3},{value:"4.4.Backup and Restore",id:"44backup-and-restore",level:3},{value:"4.5 Data Warmup",id:"45-data-warmup",level:3},{value:"4.6 High Availability Mode",id:"46-high-availability-mode",level:3},{value:"5.Client Tools",id:"5client-tools",level:2},{value:"6.Ecological Tools",id:"6ecological-tools",level:2},{value:"6.1.TuGraph DataX",id:"61tugraph-datax",level:3},{value:"6.2.Visual Interaction",id:"62visual-interaction",level:3},{value:"6.3.Monitoring",id:"63monitoring",level:3}];function c(e){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"functionality",children:"Functionality"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"This document mainly introduces the main functions and features of TuGraph."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"1installation",children:"1.Installation"}),"\n",(0,t.jsx)(a.h2,{id:"11installation",children:"1.1.Installation"}),"\n",(0,t.jsx)(a.p,{children:"Deployment methods TuGraph currently provides three deployment methods: cloud deployment, Docker deployment, and local package deployment. Users can choose the appropriate deployment method according to their actual situation."}),"\n",(0,t.jsx)(a.h2,{id:"12software-and-hardware-environment",children:"1.2.Software and Hardware Environment"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph core is developed in C++, and the default compiler used is GCC8.4, using c++14 standard. Some functions use other compilers, such as ApacheLucene-based full-text indexing, which uses JNI interface and requires a Java compiler. In addition, the Python Procedure API is provided in the stored procedure, which requires a Python environment. TuGraph does not require special hardware such as GPUs, and can naturally adapt to general hardware upgrades such as RDMA and HBM with high latency and low bandwidth."}),"\n",(0,t.jsx)(a.p,{children:"TuGraph has been tested on CPUs based on X86 and ARM, including Intel, AMD, Kunpeng, Hygon, Feiteng, etc., and also runs on multiple operating systems, including mainstream versions of Ubuntu, CentOS, SUSE, Galaxy Kylin, Zhongbiao Kylin, and UOS, without special requirements for operating systems and CPUs."}),"\n",(0,t.jsx)(a.p,{children:"The software and hardware environment also includes the environment of dependent libraries. Since the default KV storage in TuGraph's storage layer is LMDB, the file system needs to support POSIX interfaces. The compilation and parameter configuration in different environments will be slightly different. For example, in the packaging of point-edge data in graph storage, it should match the page table size of the operating system, which is 4KB by default, and it is recommended to set the system's page table size to 4KB."}),"\n",(0,t.jsx)(a.h2,{id:"2storage-layer",children:"2.Storage layer"}),"\n",(0,t.jsx)(a.p,{children:"In the graph data model, TUGraph supports the attribute graph model, which can be divided into subgraphs, tags (including vertex tags and edge tags), and attributes according to the hierarchy."}),"\n",(0,t.jsx)(a.p,{children:"From the perspective of the storage layer, TuGraph uses an intuitive multi-layered tree model, without tags across subgraphs or attributes across tags, and only retains the core logic of the graph model. In terms of subgraph storage, TuGraph has performed data physical isolation for multiple graphs, and each graph corresponds to an instance of LMDB. The metadata description information of multiple graphs is saved in a special public LMDB instance called meta. The storage of vertex and edge tags and their attributes maps graph data adaptively to KV key-value pairs, maximizing read performance. At the same time, multi-threaded writing is implemented at the KV layer, solving the disadvantage of low write performance of LMDB. Primary key indexes and secondary indexes correspond to B+ tables in LMDB, supporting index value addition, deletion, query, and modification based on comparison."}),"\n",(0,t.jsx)(a.p,{children:"The storage layer also retains some other non-core functional data, including permission data, pre-compiled plugin data, and monitoring data."}),"\n",(0,t.jsx)(a.h2,{id:"3calculation-layer",children:"3.Calculation layer"}),"\n",(0,t.jsx)(a.p,{children:"The calculation layer is divided into three parts in terms of function, including the TP-class graph transaction engine, the AP-class graph analysis engine, and the graph neural network engine."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"The graph transaction engine"})," is mainly used to process concurrent graph operations, including single-point queries, neighbor queries, and path traversal. The graph transaction engine focuses on ACID transactions of concurrent operations, ensuring that the operation logic will not interfere with each other. The main performance indicator is QPS, which is the number of completed queries per second."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"The graph analysis engine"})," usually operates as a full-graph iteration. Some simple analysis tasks (such as SPSP) can be completed by the graph transaction engine, and complex analysis tasks are completed by the graph analysis engine, which usually takes several seconds to several hours for a single task. Therefore, a single graph analysis task should use all hardware resources in parallel, and the performance indicator is the total time for completing the task."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"The graph neural network engine"})," usually operates as a full-graph iteration. In addition to graph topology-based operations, the graph neural network engine also needs to integrate a machine learning framework to handle vector operations, such as PyTorch, MXNet, and TenserFlow."]}),"\n",(0,t.jsx)(a.p,{children:"The logic of the three engines is different and independently configured for resource pools. The graph transaction engine sets up a thread pool based on RPC operations. For each operation received from the client, a thread is taken from the pool to process it, and the number of concurrent executions is equal to the capacity of the RPC thread pool, which is usually configured as the number of server cores. The graph analysis engine has an analysis thread pool, and each graph analysis task is executed concurrently, that is, all threads are used to execute a task to speed up the performance of the operation. The serial execution feature of TuGraph graph analysis operations will restrict the user experience to a certain extent. The demand for concurrent graph analysis can be processed by deploying high-availability, increasing machine resources, or connecting to an external task scheduler to transfer data to a container for real-time scheduling and calculation. Graph neural network operations will reuse the resources of the graph transaction"}),"\n",(0,t.jsx)(a.h2,{id:"4core-features",children:"4.Core Features"}),"\n",(0,t.jsx)(a.h3,{id:"41query-language",children:"4.1.Query Language"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph provides Cypher graph query language that follows the OpenCypher standard."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Supports Procedure embedding."}),"\n",(0,t.jsx)(a.li,{children:"Supports pluggable optimization frameworks with various optimization features."}),"\n",(0,t.jsx)(a.li,{children:"Supports extensible security check framework for Cypher."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"42stored-procedures",children:"4.2.Stored Procedures"}),"\n",(0,t.jsx)(a.p,{children:"When users need to express complex query/update logic that Cypher cannot describe, or when high performance is required, TuGraph's stored procedures (Procedure) is a more concise and efficient choice than calling multiple REST requests and completing the entire processing flow on the client-side."}),"\n",(0,t.jsx)(a.h3,{id:"43data-importexport",children:"4.3.Data Import/Export"}),"\n",(0,t.jsx)(a.p,{children:"Although TuGraph supports data insertion, batch import can greatly improve efficiency. The import function can be divided into importing into an empty database (offline import) and incremental import. The former refers to importing when the subgraph is empty, and the additional assumption can greatly improve the import performance. In TuGraph, the throughput rate of empty database import and incremental import differs by 10 times. Data consistency needs to be considered in data export, which is based on exporting data based on a snapshot."}),"\n",(0,t.jsxs)(a.p,{children:["TuGraph can perform data export on graph data already stored in TuGraph using the command-line tool ",(0,t.jsx)(a.code,{children:"lgraph_export"}),". The export format supports CSV and JSON."]}),"\n",(0,t.jsx)(a.h3,{id:"44backup-and-restore",children:"4.4.Backup and Restore"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph's backup function can be divided into active/scheduled, offline/online, and full/incremental backup. The goal is to complete the backup with the smallest storage and computing costs possible. The Restore function can restore to the latest state or a historical marked time point, ensuring that the database is in a consistent state."}),"\n",(0,t.jsx)(a.h3,{id:"45-data-warmup",children:"4.5 Data Warmup"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph is a disk-based graph database, and data is loaded into memory only when it is accessed. Therefore, system performance may deteriorate due to frequent IO operations in the first period after the server is opened. We can improve this problem by preheating the data in advance."}),"\n",(0,t.jsx)(a.h3,{id:"46-high-availability-mode",children:"4.6 High Availability Mode"}),"\n",(0,t.jsx)(a.p,{children:"High availability means that by configuring a cluster, real-time multi-replica data hot backup can be achieved, and the cluster can still provide services when some replicas are not in use. TuGraph uses the multi-machine hot backup mechanism of the RAFT protocol, which can reduce RPO to near 0. Data synchronization is performed at the computation layer through RPC interfaces for write operations. The high availability cluster of TuGraph adopts a master-slave mode, where only the master node processes write requests, and both master and slave nodes can process read requests. The write request processing of the master node needs to be synchronized to more than half of the total nodes. The write request is considered complete when the majority of the nodes have written successfully."}),"\n",(0,t.jsx)(a.h2,{id:"5client-tools",children:"5.Client Tools"}),"\n",(0,t.jsx)(a.p,{children:"Client Tools Client tools mainly include SDKs for various programming languages, OGM, and command-line tools."}),"\n",(0,t.jsx)(a.p,{children:"The client SDK is mainly used for secondary development and can be linked to the server through RPC or REST protocols. RPC has better performance based on long links, and data needs to be uniformly serialized through protobuf. TuGraph uses brpc, which supports rpc clients in Java, Python, and C++. REST's protocol is more flexible and can be easily adapted to more diverse environments, and different programming languages can easily connect. TuGraph provides a Python REST client instance, and command-line interaction is also implemented using REST."}),"\n",(0,t.jsx)(a.p,{children:"OGM (Object Graph Mapping) is a graph object mapping tool for TuGraph, which supports mapping JAVA objects (POJO) to TuGraph. Classes in JAVA are mapped to nodes in the graph, collections in classes are mapped to edges, and properties of classes are mapped to properties of graph objects. It also provides corresponding function to operate the graph database. Therefore, JAVA developers can easily use TuGraph database in a familiar ecosystem."}),"\n",(0,t.jsxs)(a.p,{children:["The command-line tool ",(0,t.jsx)(a.code,{children:"lgraph_cypher"})," is a query client that can be used to submit OpenCypher requests to the TuGraph server. ",(0,t.jsx)(a.code,{children:"lgraph_cypher"})," client has two execution modes: single-command mode and interactive mode."]}),"\n",(0,t.jsx)(a.h2,{id:"6ecological-tools",children:"6.Ecological Tools"}),"\n",(0,t.jsx)(a.p,{children:"Ecological tools are a crucial component of enterprise-level databases, and a rich array of ecological tools can greatly enhance the usability and stability of graph databases."}),"\n",(0,t.jsx)(a.h3,{id:"61tugraph-datax",children:"6.1.TuGraph DataX"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Import&amp;Export",src:n(5886).A+"",width:"1288",height:"404"})}),"\n",(0,t.jsx)(a.p,{children:"TuGraph's core supports importing and exporting CSV and JSON data, offering both full database and incremental importing modes. In practice, there may be a need to import from multiple data sources such as MySQL, Kafka, and Hive, and TuGraph connects to these sources using DataX. Due to the differences between relational and graph models, data cleaning processes can be quickly processed using SparkSQL. TuGraph focuses only on the reliability and performance of simple CSV and JSON scenario imports."}),"\n",(0,t.jsx)(a.h3,{id:"62visual-interaction",children:"6.2.Visual Interaction"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph Browser is a visual interface for direct users of graph databases, covering most of TuGraph's capabilities, including data import, graph model building, data addition/deletion/query/modify, and monitoring and maintenance operations."}),"\n",(0,t.jsx)(a.h3,{id:"63monitoring",children:"6.3.Monitoring"}),"\n",(0,t.jsx)(a.p,{children:"TuGraph uses the Prometheus + Grafana monitoring framework in a loosely coupled manner. Prometheus obtains monitoring information from TuGraph's monitoring interface, stores it in a local time-series database, and then displays it interactively on the web using Grafana."}),"\n",(0,t.jsx)(a.p,{children:"The monitoring states provided by TuGraph include the state of the graph database and the state of the server. The former includes the database-side status such as read/write load and number of vertices/edges, while the latter includes the real-time status of the server's memory, CPU, and hard disk. If some monitoring state exceeds the expected threshold, proactive alerts are necessary, usually requiring integration with other operations and control systems such as group messaging and email alerts."})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5886:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/tugraph-datax-0f6f140ea310beb2c90460c3d6d0c08d.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var t=n(96540);const r={},i=t.createContext(r);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);