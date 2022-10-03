import { Total } from "./style";

export function CartTotal({ currentSale, setCurrentSale }) {
  const total = currentSale.reduce((a, b) => a + b.price, 0);

  return (
    <Total>
      <p>
        Total: <span>R$ {total.toFixed(2).replace(".", ",")}</span>
      </p>
      <button type="button" onClick={() => setCurrentSale([])}>
        Remover Todos
      </button>
    </Total>
  );
}
