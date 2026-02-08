import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Articles from "./components/Articles/Articles.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import SingleProduct from "./components/Products/SingleProduct.jsx";
import Sales from "./components/Admin/Sales.jsx";
import Sellers from "./components/Admin/Sellers.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/admin" element={<Admin />} >
          
          <Route path="sales" element={<Sales />} />
          <Route path="sellers" element={<Sellers />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
