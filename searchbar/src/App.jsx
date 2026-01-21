import { useEffect, useState } from "react";
import axios from "axios";
// https://dummyjson.com/products
// https://dummyjson.com/products/search?q=${phone}
// const App = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let url = "https://dummyjson.com/products";
//         if (query.trim() !== "") {
//           url = `https://dummyjson.com/products/search?q=${query}`;
//         }
//         const response = await axios.get(url);
//         setResult(response.data.products);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [query]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {setQuery(e.target.value)}}
//       />
//       <ul>
//         {result.length > 0 ? (
//           result.map((item) => <li>{item.title}</li>)
//         ) : (
//           <p>No result found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
const App = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        let url = "https://dummyjson.com/products";
        if (query.trim() !== "") {
          url = `https://dummyjson.com/products/search?q=${query}`;
        }
        let response = await axios.get(url);
        setResult(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDate();
    console.log(result);
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {result.length > 0 ? (
          result.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No Record found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
