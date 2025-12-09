import "./App.css";
import TaskForm from "./components/Task Form/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import {closedIcon} from './assets/tick.png'
const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready for Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" closedIcon = {closedIcon} />
      </main>
    </div>
  );
};

export default App;
