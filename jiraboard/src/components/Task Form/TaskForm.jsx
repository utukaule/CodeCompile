import Tag from "../Tag/Tag";
import "./TaskForm.css";
const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter Task Details"
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="Dev" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select className="task_status" id="">
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button className="task_submit">Task Submit</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
