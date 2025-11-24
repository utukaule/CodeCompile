import { useState } from "react";
import Tag from "../Tag/Tag";
import "./task-form.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for development",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  // this handleChange handles task and dropdown
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTaskData((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  // practise ✅

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // handling form submit refresh defualt beheviour
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    console.log(taskData);
  };

  // selecting tag

  const selectedTag = (tag) => {
    setTaskData((prev) => {
      const isSelected = prev.tags.includes(tag);
      const tags = isSelected
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  };

  // const selectedTag = (tag) => {
  //   // this logic is to unselect the selected tag eg. if we selected QT and letter on we have to change it
  //   // so we can unselect it by clicking on it again.
  //   if (taskData.tags.some((item) => item === tag)) {
  //     const filterTags = taskData.tags.filter((item) => item !== tag);
  //     setTaskData((prev) => {
  //       return { ...prev, tags: filterTags };
  //     });
  //   } else {
  //     setTaskData((prev) => {
  //       return { ...prev, tags: [...prev.tags, tag] };
  //     });
  //   }
  // };

  console.log(taskData);

  // this is old method to handle state of every input field using multiple states
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");
  // const handleTask = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.ta rget.value);
  // };
  // console.log(task, status);

  return (
    <header className="app_header">
      <form action="" onSubmit={handleSubmit}>
        {/* task input */}
        <input
          type="text"
          name="task"
          onChange={handleChange}
          className="task_input"
          placeholder="Enter task details"
        />
        <div className="task_form_bottom">
          {/* tags */}
          <div>
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          {/* select option */}
          <div>
            <select
              id=""
              name="status"
              className="tast_status"
              onChange={handleChange}
            >
              <option value="Ready for development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for test">Ready for test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="tast_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
