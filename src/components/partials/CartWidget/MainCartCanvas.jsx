import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../../redux/cartSlice";
function MainCartCanvas({ handleClose }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddBtn = (item) => {
    dispatch(addItem(item));
  };

  const handleSubBtn = (item) => {
    dispatch(subItem(item));
  };

  const handleDelItem = (item) => {
    dispatch(removeItem(item));
  };

  function handleChangeCountItem(value) {
    // setCountState(value);
    dispatch(inputChange({ value, id }));
  }

  return cart.length > 0 ? (
    <div className="flex-grow-1 p-4">
      <div className="container">
        {cart.map((item) => (
          <div className="row mt-3" key={item.id}>
            <div className="col-4 d-flex align-items-center">
              <img
                src={item.image}
                alt="Product Image"
                className="img-fluid"
                id="productImage"
              ></img>
            </div>

            <div className="col-8 p-3">
              <div className="d-flex flex-column">
                <h5 className="SmallText text-white">{item.name}</h5>
                <div className="d-flex">
                  <ButtonGroup className="SmallText text-white">
                    <Button
                      variant=""
                      className="rounded-0 fw-bold py-0 px-2 text-white"
                      id="quantityBtn"
                      onClick={() => handleSubBtn(item)}
                    >
                      -
                    </Button>
                    <input
                      type="text"
                      inputMode="numeric"
                      className="text-center fw-bold py-0 px-2"
                      id="quantityBtn"
                      size="3"
                      onChange={(e) => handleChangeCountItem(e.target.value)}
                      value={item.counter}
                    />
                    <Button
                      variant=""
                      className="rounded-0 SmallText text-white fw-bold py-0 px-2"
                      id="quantityBtn"
                      onClick={() => handleAddBtn(item)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <div className="d-flex alig-items-center">
                    <p className="fw-bolder m-0 ms-2 SmallText text-white pt-1">
                      $ {item.price * item.counter}
                    </p>
                  </div>
                </div>
                <button
                  className="btn border-0 rounded-0 border-bottom border-white SmallText text-white me-auto p-0 mt-2"
                  onClick={() => handleDelItem(item)}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className=" flex-grow-1 p-4">
      <div className="container d-flex- flex-column text-center">
        <p className="text-white text-center">Tu carrito está vacío</p>
        <Link to="/shop" onClick={handleClose}>
          Ve por algunos productos!
        </Link>
      </div>
    </div>
  );
}

export default MainCartCanvas;
