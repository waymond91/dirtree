import "./styles.css";
import dirTree from "directory-tree";
import FileTree from "./FileTree.js";

export default function App() {
  return (
    <div className="App">
      <FileTree data={dirTree("/src")} />
    </div>
  );
}
