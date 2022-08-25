import "./App.css";
import TaskList from "./components/TaskList";
import React from "react"

function App() {
  return (
    <div className="App">
      <div className="list">
        <h1>THINGS TO DO </h1>
        <TaskList />
      </div>
      <div className="coder-info">
        Coded by 🇪🇨&nbsp;
        <a
          href="https://www.linkedin.com/in/maggi-bastidas-013734104/"
          target="_blank"
          className="link-info"
        >
          M.B.
        </a>
        <br />
        Open source on&nbsp;
        <a
          href="https://github.com/MaggiMBR/react-to-do-list"
          className="link-info"
        >
          GitHub.&nbsp;
        </a>
      </div>
    </div>
  );
}

export default App;
