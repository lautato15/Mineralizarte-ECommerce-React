import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateCounterProduct } from "../../redux/cartSlice";

function ItemCount({ product }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);

  function handleSub() {
    count > 1
      ? setCount(count - 1)
      : toast.error("Debes tener al menos un producto.");
  }
  function handleAdd() {
    count < Number(product.stock)
      ? setCount(count + 1)
      : toast.error(
          product.stock + " es el Stock con el que contamos por el momento."
        );
  }
  function handleAddCart(count) {
    let existProductOnCart = cart.find((p) => p.id === product.id);
    if (existProductOnCart) {
      if (
        count >= 1 &&
        count <= Number(product.stock) - existProductOnCart.counter
      ) {
        dispatch(
          updateCounterProduct({
            newCounter: existProductOnCart.counter + count,
            id: product.id,
          })
        );
      } else
        toast.error(
          product.stock + " es el Stock con el que contamos por el momento."
        );
    } else {
      if (count >= 1 && count <= Number(product.stock)) {
        product.counter = count;
        dispatch(addItem(product));
      } else
        toast.error(product.stock + " Error de Stock vuelva a intentarlo.");
    }
  }
  return (
    <div>
      <div className="d-flex ">
        <div className="border-2 border-grey w-auto d-flex">
          <button
            onClick={() => handleSub()}
            className="border-0 fs-2"
            style={{ width: "2rem" }}
          >
            -
          </button>
          <input
            onChange={(e) => setCount(e.target.value)}
            type="text"
            value={count}
            size={3}
            className="text-center border-0"
            id="counterInput"
            name="counterInput"
          />
          <button
            onClick={() => handleAdd()}
            className="border-0 fs-2"
            style={{ width: "2rem" }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => handleAddCart(count)}
            className="bg-black border-0 text-white ms-4 px-3 h-100"
          >
            AGREGAR AL CARRO
          </button>
        </div>
      </div>
      <button
        className="BgGold border-0  px-3 mt-2 w-100 text-black"
        style={{ height: "38.8px" }}
      >
        COMPRAR AHORA
      </button>
    </div>
  );
}

export default ItemCount;
