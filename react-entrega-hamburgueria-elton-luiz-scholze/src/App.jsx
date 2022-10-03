import { GlobalStyle } from "./styles/global.js";
import { useEffect, useState } from "react";
import "./App.css";
import { ProductsList } from "./components/ProductsList";
import logo from "./assets/logo.svg";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(inputValue) {}

  function handleClick(productId) {
    const productFind = products.find((product) => product.id === productId);

    setCurrentSale([...currentSale, productFind]);
  }

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header>
          <div className="containerHeader">
            <img src={logo} alt="Logo Burguer Kenzie" />
            <form>
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <button type="submit" onClick={() => showProducts(inputValue)}>
                Pesquisar
              </button>
            </form>
          </div>
        </header>
        <div className="container">
          <ProductsList products={products} handleClick={handleClick} />
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
      </div>
    </>
  );
}

export default App;
