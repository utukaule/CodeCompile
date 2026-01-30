import React from "react";
import DropArea from "../DropArea/DropArea";
import TaskCard from "../Task Card/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({
  title,
  status,
  tasks,
  closedIcon,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  // const { title, closedIcon } = props;
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          {closedIcon && (
            <img src={closedIcon} className="task_column_icon"></img>
          )}
          {title}
        </h2>
        <DropArea  onDrop={() => onDrop(status, 0)} />
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <React.Fragment key={index}>
                <TaskCard
                  task={task.task}
                  tags={task.tags}
                  key={index}
                  handleDelete={handleDelete}
                  taskIndex={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </React.Fragment>
            ),
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
