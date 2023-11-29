import { useDispatch, useSelector } from "react-redux";
import { addItem, updateCounterProduct } from "./cartSlice";

function handleAddToCart(count) {
    const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
         return toast.error(
          product.stock + " es el Stock con el que contamos por el momento."
        );
    } else {
      if (count >= 1 && count <= Number(product.stock)) {
        product.counter = count;
        dispatch(addItem(product));
      } else
        return toast.error(product.stock + " Error de Stock vuelva a intentarlo.");
    }
  }


  export default handleAddToCart;