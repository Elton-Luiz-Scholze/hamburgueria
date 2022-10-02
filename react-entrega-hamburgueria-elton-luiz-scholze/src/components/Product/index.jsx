import { Button, Card, CardInfo } from "./style";

export function Product({ name, category, price, img, id, handleClick }) {
  return (
    <Card>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <CardInfo>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>R$ {price.toFixed(2).replace(".", ",")}</span>
        <Button onClick={() => handleClick(id)}>Adicionar</Button>
      </CardInfo>
    </Card>
  );
}
