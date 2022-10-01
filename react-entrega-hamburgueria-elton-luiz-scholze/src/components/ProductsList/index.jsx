import { Product } from "../Product/index";

export function ProductsList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
