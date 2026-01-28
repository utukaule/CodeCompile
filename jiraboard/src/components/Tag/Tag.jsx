import "./Tag.css";
const Tag = (props) => {
  const { tagName, selectedTag, selected } = props;
  const tagStyle = {
    DEV: { backgroundColor: "#04caff" },
    QA: { backgroundColor: "#ff2e04" },
    PO: { backgroundColor: "#04ff2a" },
  };

  const tagKeyMap = {
    DEV: "DEV",
    QA: "QA",
    "Product Owner": "PO",
  };

  const key = tagKeyMap[tagName];
  return (
    <>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[key] : {}}
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
