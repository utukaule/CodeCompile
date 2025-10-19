import Tag from "../Tag/Tag";
import "./task-form.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter task details"
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV"/>
            <Tag  tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select name="" id="" className="tast_status">
              <option value="Ready for Development">
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
