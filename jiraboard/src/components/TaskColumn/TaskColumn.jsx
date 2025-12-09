import "./TaskColumn.css";

const TaskColumn = (props) => {
  const { title, closedIcon } = props;
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
         {closedIcon && <img src={closedIcon} className="task_column_icon"></img>}
          {title}
        </h2>
      </section>
    </div>
  );
};

export default TaskColumn;
