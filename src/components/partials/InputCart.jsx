import { useState } from "react";
import { inputChange } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function InputCart({ counter, id }) {
  const [countState, setCountState] = useState(counter);

  const dispatch = useDispatch();
  function handleChangeCountItem(value) {
    setCountState(value);
    dispatch(inputChange({ value, id }));
  }
  useEffect(() => {
    setCountState(counter);
  }, [counter]);

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        className="text-center fw-bold py-0 px-2"
        id="quantityBtn"
        size="3"
        onChange={(e) => {
          handleChangeCountItem(e.target.value);
        }}
        value={countState}
        readOnly
      />
    </>
  );
}

export default InputCart;
