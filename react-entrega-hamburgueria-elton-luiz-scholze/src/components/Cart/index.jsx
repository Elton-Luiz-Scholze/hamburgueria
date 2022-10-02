import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { ContainerCart, EmptyCart, FullCart } from "./style";

export function Cart({ currentSale }) {
  return (
    <ContainerCart>
      <h3>Carrinho de compras</h3>

      {currentSale.length === 0 ? (
        <EmptyCart>
          <h3>Sua sacola esta vazia</h3>
          <p>Adicione itens</p>
        </EmptyCart>
      ) : (
        <>
          <FullCart>
            {currentSale.map(({ name, category, img, id }) => (
              <CartProduct
                key={id}
                currentSale={currentSale}
                name={name}
                category={category}
                img={img}
                id={id}
              />
            ))}
          </FullCart>
          <div>
            <CartTotal currentSale={currentSale} />
          </div>
        </>
      )}
    </ContainerCart>
  );
}
