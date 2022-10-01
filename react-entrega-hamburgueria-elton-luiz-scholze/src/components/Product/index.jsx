export function Product({ name, category, price, img, id, handleClick }) {
  return (
    <li>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
      <span>R$ {price.toFixed(2).replace(".", ",")}</span>
      <button onClick={() => handleClick(id)}>Adicionar</button>
    </li>
  );
}
