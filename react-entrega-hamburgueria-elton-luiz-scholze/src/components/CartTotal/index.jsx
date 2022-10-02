import { Total } from "./style";

export function CartTotal() {
  return (
    <Total>
      <p>
        Total: <span>R$ 40,00</span>
      </p>
      <button>Remover Todos</button>
    </Total>
  );
}
