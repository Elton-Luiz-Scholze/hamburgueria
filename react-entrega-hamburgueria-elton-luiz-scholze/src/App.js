import { useEffect, useState } from "react";
import "./App.css";
import { ProductsList } from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  // function showProducts() {}

  // function handleClick() {}

  return (
    <div className="container">
      <ProductsList products={products} />
    </div>
  );
}

export default App;
