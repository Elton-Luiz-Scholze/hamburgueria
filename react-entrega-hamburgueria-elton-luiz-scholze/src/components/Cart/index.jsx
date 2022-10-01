import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export function Cart({ currentSale }) {
  return (
    <>
      <CartProduct currentSale={currentSale} />
      <CartTotal currentSale={currentSale} />
    </>
  );
}
