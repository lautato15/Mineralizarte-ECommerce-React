import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CounterCart from "../CounterCart";

function MainCartCanvas({ handleClose }) {
  const cart = useSelector((state) => state.cart);

  return cart.length > 0 ? (
    <div className="flex-grow-1 p-4">
      <div className="container">
        {cart.map((product) => (
          <div className="row mt-3" key={product.id}>
            <div className="col-4 d-flex align-items-center">
              <img
                src={product.image}
                alt="Product Image"
                className="img-fluid"
                id="productImage"
              ></img>
            </div>

            <div className="col-8 p-3">
              <div className="d-flex flex-column">
                <h5
                  className="fs-6 text-white FontGaramond text-center"
                  style={{ letterSpacing: "0.5px" }}
                >
                  {product.name}
                </h5>
                <div className="d-flex">
                  <CounterCart product={product} />
                  <div className="d-flex alig-items-center">
                    <p className="fw-bolder m-0 ms-2 SmallText text-white pt-1 FontLato">
                      $ {product.price * product.counter}
                    </p>
                  </div>
                </div>
                <button
                  className="btn border-0 rounded-0 border-bottom border-white SmallText text-white me-auto p-0 mt-2"
                  onClick={() => handleDelItem(product)}
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
        <Link to="/shop" onClick={handleClose()}>
          Ve por algunos productos!
        </Link>
      </div>
    </div>
  );
}

export default MainCartCanvas;
