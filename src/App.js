import React from "react";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <WorkSpace />
    </div>
  );
}

export default App;
