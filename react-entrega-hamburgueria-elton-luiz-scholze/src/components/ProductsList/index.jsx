import { Product } from "../Product/index";

export function ProductsList({ products, handleClick }) {
  return (
    <ul>
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
    </ul>
  );
}
