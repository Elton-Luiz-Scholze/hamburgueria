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
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts(inputValue) {
    inputValue.length
      ? setProducts(
          filteredProducts.filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(inputValue.toLowerCase().trim()) ||
              product.category
                .toLowerCase()
                .includes(inputValue.toLowerCase().trim())
          )
        )
      : setProducts(filteredProducts);
  }

  function handleClick(productId) {
    const productFind = products.find((product) => product.id === productId);
    currentSale.includes(productFind)
      ? console.log("//O item já existe no carrinho.(TOAST)")
      : setCurrentSale([...currentSale, productFind]);
  }

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header>
          <div className="containerHeader">
            <img src={logo} alt="Logo Burguer Kenzie" />
            <form
              onSubmit={(event) => {
                event.preventDefault();
                showProducts(inputValue);
              }}
            >
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <button type="submit" onClick={() => setSearch(!search)}>
                Pesquisar
              </button>
            </form>
          </div>
        </header>
        <div className="container">
          {search ? (
            <>
              <h2>Resultado para: {inputValue}</h2>
              <button
                type="button"
                onClick={() => {
                  setSearch(!search);
                  setInputValue("");
                  setProducts(filteredProducts);
                }}
              >
                Fechar Busca
              </button>
              <ProductsList products={products} handleClick={handleClick} />
            </>
          ) : (
            <ProductsList products={products} handleClick={handleClick} />
          )}
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
      </div>
    </>
  );
}

export default App;
