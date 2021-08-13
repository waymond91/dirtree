import Tree from "react-d3-tree";
import "./FileTree.css";

export default function FileTree(props) {
  return (
    <div className="App">
      <div id="treeWrapper" style={{ width: "auto", height: "100vh" }}>
        <Tree
          data={props.data}
          initialDepth={1}
          translate={{ x: 300, y: 400 }}
          zoom={0.85}
          separation={{ siblings: 0.5, nonSiblings: 1 }}
          shouldCollapseNeighborNodes={true}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathFunc={"diagonal"}
          depthFactor={300}
          orientation={"horizontal"}
          onNodeClick={props.parentFunction}
          onLinkClick={(...args) => {
            console.log("onLinkClick");
            console.log(args);
          }}
        />
      </div>
    </div>
  );
}
