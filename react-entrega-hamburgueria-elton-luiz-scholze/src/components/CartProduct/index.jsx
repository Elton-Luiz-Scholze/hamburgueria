import { CardCart } from "./style";

export function CartProduct({
  name,
  category,
  img,
  id,
  currentSale,
  setCurrentSale,
  index,
}) {
  console.log(currentSale);
  function deleteProduct(id) {
    const productFiltered = currentSale.filter((product) => product.id !== id);
    return setCurrentSale(productFiltered);
  }

  return (
    <CardCart>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>Quantidade: </span>
      </div>
      <button type="button" onClick={() => deleteProduct(id)}>
        Remover
      </button>
    </CardCart>
  );
}
