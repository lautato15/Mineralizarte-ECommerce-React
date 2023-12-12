import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, subItem } from "../../redux/cartSlice";
import InputCart from "./InputCart";
import { toast } from "react-hot-toast";

function CounterCart({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddBtn = (product) => {
    if (product.counter >= 1 && product.counter < Number(product.stock)) {
      dispatch(addItem(product));
    } else
      toast.error(
        product.stock + " es el Stock con el que contamos por el momento."
      );
  };

  const handleSubBtn = (product) => {
    dispatch(subItem(product));
  };

  return (
    <ButtonGroup className="SmallText text-white FontLato">
      <Button
        variant=""
        className="rounded-0 fw-bold py-0 px-2 text-white border border-white bg-dark"
        id="quantityBtn1"
        onClick={() => handleSubBtn(product)}
      >
        -
      </Button>
      <InputCart id={product.id} counter={product.counter} />
      <Button
        variant=""
        className="rounded-0 SmallText text-white fw-bold py-0 px-2 border border-white bg-dark"
        id="quantityBtn2"
        onClick={() => handleAddBtn(product)}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default CounterCart;
