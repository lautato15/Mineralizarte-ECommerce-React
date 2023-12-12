import { Link, useNavigate } from "react-router-dom";
import HeadBoard from "../partials/HeadBoard";
import InputCart from "../partials/InputCart";
import GlobalPrice from "../partials/GlobalPrice";
import { useSelector } from "react-redux";
import CartRow from "../cart/CartRow";
import { useEffect, useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [shippingDetails, setShippingDetails] = useState(null);

  let subtotal = 0;
  cart.forEach((i) => {
    subtotal += i.price * i.counter;
  });
  const [cupon, setCupon] = useState("");
  const BgTable = "bg-secondary text-white LetterSpacing";
  const handleShipping = (e) => setShippingDetails(e.target.value);
  useEffect(() => {
    cart.length === 0 && navigate("/shop");
  }, [cart]);
  return (
    <>
      <div className="bg-dark FontLato">
        <HeadBoard Text={"Carrito"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-lg-8 ">
              <table className="table" style={{ maxWidth: "100%" }}>
                <thead className="">
                  <tr>
                    <th className={BgTable}>Producto</th>
                    <th className={BgTable}>Precio</th>
                    <th className={BgTable}>Cantidad</th>
                    <th className={BgTable}>Subtotal</th>
                    <th className={BgTable}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 &&
                    cart.map((p) => {
                      return <CartRow key={p.id} product={p} />;
                    })}

                  <tr>
                    <td
                      colSpan="6"
                      className="bg-secondary align-middle border-0"
                    >
                      <div className="d-flex align-middle">
                        <div className="cupon me-auto d-flex align-items-center">
                          <input
                            type="text"
                            name="coupon_code"
                            className="h-75 border-0 h-100 ps-2"
                            id="coupon-code"
                            placeholder="Codigo de Cupon"
                            value={cupon}
                            onChange={() => setCupon}
                          />

                          <button
                            type="submit"
                            name="apply_coupon"
                            className="btn rounded-0 bg-black text-white ms-2 my-0 border-0 h-100"
                            value="Apply coupon"
                          >
                            Aplicar Cupon
                          </button>
                        </div>

                        <Link
                          to="/shop"
                          className="btn rounded-0 bg-black text-white ms-2"
                        >
                          Continuar Comprando
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-12 col-lg-4 ">
              <h2 className="fs-5 p-4 fw-bold bg-secondary text-white LetterSpacing">
                Total del Carrito
              </h2>

              <div className="bg-white  p-4">
                <div className="d-flex pt-3">
                  <p className="w-50 fw-bold FontGaramond fs-5">SubTotal</p>
                  <p className="w-50 pt-1">$ {subtotal}</p>
                </div>
                {/* ENVIO */}
                <div className="d-flex my-4">
                  <p className="w-50 fw-bold FontGaramond fs-5">Envío</p>
                  <div className="w-50 pt-1">
                    <div>
                      <input
                        checked={shippingDetails === "free_shipping"}
                        onChange={handleShipping}
                        name="shipping"
                        value="free_shipping"
                        type="radio"
                      />
                      <label htmlFor="shipping" className="ms-2">
                        Envío gratuito
                      </label>
                    </div>
                    <div>
                      <input
                        checked={shippingDetails === "flat_rate"}
                        onChange={handleShipping}
                        name="shipping"
                        value="flat_rate"
                        type="radio"
                      />
                      <label htmlFor="shipping" className="ms-2">
                        Tarifa Plana
                      </label>
                    </div>
                  </div>
                </div>
                {/* TOTAL */}
                <div className="d-flex">
                  <p className="w-50 fw-bold FontGaramond fs-5">Total</p>
                  <p className="w-50 pt-1 fw-bold">$ {subtotal}</p>
                </div>
              </div>

              {/* <GlobalPrice
                subtotal={subtotal}
                handleShipping={handleShipping}
                shippingDetails={shippingDetails}
              /> */}
              <div className="py-3">
                <Link
                  to={
                    shippingDetails != null
                      ? `/checkout/${shippingDetails} `
                      : "/checkout"
                  }
                  className="text-decoration-none text-black BgGold d-block w-100 ms-auto me-auto text-center py-2 fw-bold"
                >
                  Ir a Pagar!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
