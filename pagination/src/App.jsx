// https://dummyjson.com/products

import { useEffect,useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    let url = "https://dummyjson.com/products";
    let json = await fetch(url);
    let response = await  json.json();
    console.log(response);
    setData(response);
  };
  return <div>Heloow</div>;
};

export default App;
