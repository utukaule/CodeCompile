import Tag from "../Tag/Tag";
import "./TaskCard.css";
import deleteLogo from "../../assets/deletezbtn.png";
const TaskCard = ({ task, tags, handleDelete, taskIndex, setActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => {
        setActiveCard(taskIndex);
      }}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{task}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete">
          <img
            src={deleteLogo}
            alt=""
            onClick={() => {
              handleDelete(taskIndex);
            }}
            className="delete_icon"
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
