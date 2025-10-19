import TaskCard from "../TaskCard/TaskCard";
import "./task-column.css";

const TaskColumn = (props) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={props.icon} alt="" className="task_column_icon" />
          {props.title}
        </h2>
        <TaskCard/>
      </section>
    </div>
  );
};

export default TaskColumn;
