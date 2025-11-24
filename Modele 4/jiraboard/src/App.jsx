import TaskForm from "./components/TaskForm/task-form";
import "./App.css";
import TaskColumn from "./components/TaskColumn/task-column";
import TickIcon from "./assets/tick.png";
import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for development"
          tasks={tasks}
          status="Ready for development"
        />
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
        />
        <TaskColumn
          title="Closed"
          icon={TickIcon}
          tasks={tasks}
          status="Closed"
        />
      </main>
    </div>
  );
};

export default App;
