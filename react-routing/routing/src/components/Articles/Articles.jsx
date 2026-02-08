import { useSearchParams } from "react-router-dom";

const dummyArticles = [
  {
    id: 1,
    title: "Understanding React Hooks",
    view: 1250,
    category: "React",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features Explained",
    view: 980,
    category: "React",
  },
  {
    id: 3,
    title: "Building Responsive UI with Bootstrap",
    view: 760,
    category: "CSS",
  },
  {
    id: 4,
    title: "State Management with Redux",
    view: 1430,
    category: "React",
  },
  {
    id: 5,
    title: "Node.js REST API Best Practices",
    view: 1105,
    category: "Backend",
  },
];

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByValue = searchParams.get("sortByValue");
  const category = searchParams.get("category");
  // const fitlerByDate = searchParams.get("dateWise");
  let filterdData = dummyArticles;

  const handleClick = () => {
    setSearchParams({
      sortByValue: "true",
      category: "CSS",
    });
  };
  if (category) {
    filterdData = filterdData.filter((item) => item.category == category);
    if (sortByValue === "true") {
      filterdData = [...filterdData].sort((a, b) => a.view - b.view);
    }
  } 
  return (
    <div>
      <p>article sorted :{sortByValue==="true"?"true":"none"}</p>
      <p>article category: {category ?? "All"}</p>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <ul>
          {filterdData.map((article) => (
            <li key={article.id}>
              {article.title} - {article.view} ({article.category}){" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
