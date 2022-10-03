import { CardCart } from "./style";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <>
      <ToastContainer transition={Flip} />
      <CardCart>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            deleteProduct(id);
            toast.success("Produto removido com sucesso!", {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          Remover
        </button>
      </CardCart>
    </>
  );
}
