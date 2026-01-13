import dummy from "../assets/dummy.jfif";
import "../App.css";
const Product = ({ product }) => {
  return (
    <div className="">
      {!product.images[0] ? (
        <dummy />
      ) : (
        <img className="image" src={product.images[0] || dummy} alt="" />
      )}

      <p>{product.title}</p>
    </div>
  );
};

export default Product;
