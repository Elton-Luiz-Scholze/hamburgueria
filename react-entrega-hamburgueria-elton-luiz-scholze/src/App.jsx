import { GlobalStyle } from "./styles/global.js";
import { useEffect, useState } from "react";
import "./App.css";
import { ProductsList } from "./components/ProductsList";
import logo from "./assets/logo.svg";
import { Cart } from "./components/Cart";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (currentSale.includes(productFind)) {
      toast.error("O item já foi adicionado.", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Produto adicionado com sucesso!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCurrentSale([...currentSale, productFind]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer transition={Flip} />
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
              <button type="submit" onClick={() => setSearch(true)}>
                Pesquisar
              </button>
            </form>
          </div>
        </header>
        <div className="container">
          <ProductsList
            products={products}
            handleClick={handleClick}
            search={search}
            inputValue={inputValue}
            setSearch={setSearch}
            setInputValue={setInputValue}
            setProducts={setProducts}
            filteredProducts={filteredProducts}
          />

          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
      </div>
    </>
  );
}

export default App;
