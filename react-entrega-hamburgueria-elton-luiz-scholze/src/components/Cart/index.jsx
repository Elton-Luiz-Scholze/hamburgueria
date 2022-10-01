import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export function Cart({ currentSale }) {
  return (
    <aside>
      <div>
        <h3>Carrinho de compras</h3>
      </div>
      <ul>
        {currentSale.map(({ name, category, img, id }) => (
          <CartProduct
            currentSale={currentSale}
            name={name}
            category={category}
            img={img}
            id={id}
          />
        ))}
      </ul>
      <div>
        <CartTotal currentSale={currentSale} />
      </div>
    </aside>
  );
}
