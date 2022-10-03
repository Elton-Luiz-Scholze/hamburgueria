import { Product } from "../Product/index";
import { Button } from "../Product/style";
import { ContainerCards } from "./style";

export function ProductsList({
  products,
  handleClick,
  search,
  inputValue,
  setSearch,
  setInputValue,
  setProducts,
  filteredProducts,
}) {
  function allCards() {
    return (
      <ContainerCards>
        {products.map(({ name, category, price, img, id }) => (
          <Product
            key={id}
            name={name}
            category={category}
            price={price}
            img={img}
            id={id}
            handleClick={handleClick}
          />
        ))}
      </ContainerCards>
    );
  }
  return (
    <>
      {search && inputValue.length ? (
        <section>
          <div className="resultSearch">
            <h2>
              Resultado para: <p>{inputValue}</p>
            </h2>
            <Button
              type="button"
              onClick={() => {
                setSearch(false);
                setInputValue("");
                setProducts(filteredProducts);
              }}
            >
              Fechar Busca
            </Button>
          </div>
          <ContainerCards>
            {products.map(({ name, category, price, img, id }) => (
              <Product
                key={id}
                name={name}
                category={category}
                price={price}
                img={img}
                id={id}
                handleClick={handleClick}
              />
            ))}
          </ContainerCards>
        </section>
      ) : (
        allCards()
      )}
    </>
  );
}
