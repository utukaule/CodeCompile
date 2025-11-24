import TaskCard from "../TaskCard/TaskCard";
import "./task-column.css";

const TaskColumn = ({ title, tasks, status,icon }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="" className="task_column_icon" />
          {title}
        </h2>
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task} tags={task.tags} />
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
