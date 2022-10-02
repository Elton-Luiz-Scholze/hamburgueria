import { Product } from "../Product/index";
import { ContainerCards } from "./style";

export function ProductsList({ products, handleClick }) {
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
