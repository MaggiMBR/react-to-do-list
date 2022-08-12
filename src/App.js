import "./App.css";
import TaskList from "./components/TaskList";

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
      </div>
    </div>
  );
}

export default App;
