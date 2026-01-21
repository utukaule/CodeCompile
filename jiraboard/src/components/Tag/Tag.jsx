import "./Tag.css";
const Tag = (props) => {
  const { tagName, selectedTag } = props;
  return (
    <>
      <button
        type="button"
        className="tag"
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
