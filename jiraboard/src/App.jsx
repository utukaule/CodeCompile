import "./App.css";
import TaskForm from "./components/Task Form/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import closedIcon from "./assets/tick.png";
import { useEffect, useState } from "react";

const existingTasks = localStorage.getItem("tasks");
console.log(existingTasks);

const App = () => {
  const [tasks, setTasks] = useState(
    existingTasks ? JSON.parse(existingTasks) : [],
  );
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  const handleDelete = (TaskIndex) => {
    const newTask = tasks.filter((tasks, index) => index !== TaskIndex);
    setTasks(newTask);
  };

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard == undefined) return;
    const taskToMove = tasks[activeCard];
    const updateTasks = tasks.filter((task, index) => index !== activeCard);
    updateTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updateTasks)
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for Development"
          status="Ready for Development"
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          status="In Progress"
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Ready for Test"
          status="Ready for Test"
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Closed"
          closedIcon={closedIcon}
          status="Closed"
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
