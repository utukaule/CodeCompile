import Tag from "../Tag/Tag";
import "./TaskCard.css";
import DeleteIcon from '../../assets/deletezbtn.png'
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">this is sample text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
            <img src={DeleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
