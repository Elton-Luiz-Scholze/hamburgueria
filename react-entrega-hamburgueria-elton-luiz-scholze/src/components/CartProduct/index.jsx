export function CartProduct({ name, category, img, id }) {
  return (
    <li>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>Quantidade: </span>
      </div>
      <button>Remover</button>
    </li>
  );
}
