import { useEffect, useState } from "react";
import Product from "./components/Product";
const App = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    setProductList(jsonData.products);
    console.log("The data", jsonData.products);
  };

  return (
    <div className="container">
      {productList.map((product) => {
        return (
          <div className="" key={product.id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
