import { Link } from "react-router-dom";
import HeadBoard from "../partials/HeadBoard";
import InputCart from "../partials/InputCart";
import GlobalPrice from "../partials/GlobalPrice";
import { useSelector } from "react-redux";
import CartRow from "../cart/CartRow";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const BgTable = "bg-secondary";
  return (
    <>
      <div className="bg-dark FontLato">
        <HeadBoard Text={"Carrito"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-8 ">
              <table className="table">
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
                            value=""
                            placeholder="Codigo de Cupon"
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

                        <button
                          type="submit"
                          name="update_cart"
                          className="btn rounded-0 bg-black text-white ms-2"
                          value="Update cart"
                        >
                          Continuar Comprando
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-12 col-md-4 ">
              <h2 className="fs-5 p-4 fw-bold bg-secondary">
                Total del Carrito
              </h2>
              <GlobalPrice />
              <div className="py-3">
                <Link
                  to="/checkout"
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
