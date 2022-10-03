import { Total } from "./style";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CartTotal({ currentSale, setCurrentSale }) {
  const total = currentSale.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <ToastContainer transition={Flip} />
      <Total>
        <p>
          Total: <span>R$ {total.toFixed(2).replace(".", ",")}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            setCurrentSale([]);
            toast.success("Todos os produtos foram removidos!", {
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
          Remover Todos
        </button>
      </Total>
    </>
  );
}
