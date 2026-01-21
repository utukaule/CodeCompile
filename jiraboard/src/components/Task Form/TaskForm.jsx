import { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import "./TaskForm.css";
const TaskForm = () => {
  const [taskData, setTaskSData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskSData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterdTags = taskData.tags.filter((item) => item !== tag);
      setTaskSData((prev) => {
        return { ...prev, tags: filterdTags };
      });
    } else {
      setTaskSData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(taskData);
  };
  return (
    <header className="app_header">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="task_input"
          name="task"
          value={taskData.task}
          placeholder="Enter Task Details"
          onChange={handleInput}
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="Dev" selectedTag={selectedTag} />
            <Tag tagName="QA" selectedTag={selectedTag} />
            <Tag tagName="Product Owner" selectedTag={selectedTag} />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleInput}
              value={taskData.status}
              id=""
            >
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button onClick={handleSubmit} className="task_submit">
              Task Submit
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
