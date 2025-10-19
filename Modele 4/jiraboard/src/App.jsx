import TaskForm from "./components/TaskForm/task-form";
import "./App.css";
import TaskColumn from "./components/TaskColumn/task-column";
import TickIcon from "./assets/tick.png";
const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready for development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for test"  />
        <TaskColumn title="Closed" icon={TickIcon} />
      </main>
    </div>
  );
};

export default App;
