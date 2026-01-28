import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const PAGE_SIZE = 10;
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    setProducts(res.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts/PAGE_SIZE)

  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"10px",margin:"10px"}}>
      <div>{[...Array(10).keys()]}</div>
      {products.map((item) => (
        <ProductCart
          title={item.title}
          key={item.id}
          image={item.images[0]}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default App;

const ProductCart = ({ title, image, description }) => {
  return (
    <div
      style={{
        margin:"10px",
        gap: "12px",
        border: "1px solid #ddd",
        padding: "10px",
        width: "300px",
        borderRadius: "6px",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      {/* Content */}
      <div>
        <p style={{ fontWeight: "bold", margin: "0" }}>{title}</p>

        <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
          {description}
        </p>
      </div>
    </div>
  );
};



