import Tag from "../Tag/Tag";
import "./TaskCard.css";
import deleteLogo from "../../assets/deletezbtn.png";
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">this is heading</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="Dev" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={deleteLogo} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
