import { Link } from "react-router-dom";
import HeadBoard from "../partials/HeadBoard";
import InputCart from "../partials/CartWidget/InputCart";

function Cart() {
  const classTd = "y";
  return (
    <>
      <div className="bg-dark FontLato">
        <HeadBoard Text={"Carrito"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-8 ">
              <table class="table" cellspacing="0">
                <thead className="">
                  <tr>
                    <th className={classTd}>Producto</th>
                    <th className={classTd}>Precio</th>
                    <th className={classTd}>Cantidad</th>
                    <th className={classTd}>Subtotal</th>
                    <th className={classTd}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle bg-secondary">
                      <a href="shop-details.html">
                        <img
                          src="https://caketheme.com/html/mojuri/media/product/6.jpg"
                          class="border border-black border-2"
                          alt=""
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        />
                      </a>

                      <a
                        href="shop-details.html"
                        className="text-decoration-none text-black fw-bold ms-3"
                      >
                        Twin Hoops
                      </a>
                    </td>
                    <td className="align-middle bg-secondary">
                      <span className="m-0 ">$150.00</span>
                    </td>
                    <td className="align-middle bg-secondary">
                      <div>
                        <button
                          type="button"
                          className="bg-black border-0 text-white  px-2 h-100"
                        >
                          -
                        </button>
                        <InputCart id="{}" counter="{}" />
                        <button
                          type="button"
                          className="bg-black border-0 text-white  px-2 h-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="align-middle bg-secondary">
                      <span className="">$300.00</span>
                    </td>
                    <td className="align-middle bg-secondary">
                      <a href="#" class="text-decoration-none text-black">
                        ×
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="6" class="bg-secondary align-middle border-0">
                      <div class="d-flex align-middle">
                        <div class="cupon me-auto d-flex align-items-center">
                          <input
                            type="text"
                            name="coupon_code"
                            class="h-75 border-0 h-100 ps-2"
                            id="coupon-code"
                            value=""
                            placeholder="Codigo de Cupon"
                          />

                          <button
                            type="submit"
                            name="apply_coupon"
                            class="btn rounded-0 bg-black text-white ms-2 my-0 border-0 h-100"
                            value="Apply coupon"
                          >
                            Aplicar Cupon
                          </button>
                        </div>

                        <button
                          type="submit"
                          name="update_cart"
                          class="btn rounded-0 bg-black text-white ms-2"
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
              {/* SUBTOTAL */}
              <h2 className="fs-5 p-4 fw-bold bg-secondary">
                Total del Carrito
              </h2>
              <div className="bg-secondary p-4">
                <div className="d-flex pt-3">
                  <p className="w-50 fw-bold">SubTotal</p>
                  <p className="w-50">$ 480.00</p>
                </div>
                {/* ENVIO */}
                <div className="d-flex my-4">
                  <p className="w-50 fw-bold">Envío</p>
                  <div className="w-50">
                    <div>
                      <input
                        type="radio"
                        id="freeshipping"
                        name="freeshipping"
                        value="freeshipping"
                        className="me-2"
                      />
                      <label htmlFor="freeshipping"> Envío gratuito</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="flatrate"
                        name="flatrate"
                        value="flatrate"
                        className="me-2"
                      />
                      <label htmlFor="freeshipping"> Tarifa Plana</label>
                    </div>
                  </div>
                </div>
                {/* TOTAL */}
                <div className="d-flex">
                  <p className="w-50 fw-bold">Total</p>
                  <p className="w-50">$ 480.00</p>
                </div>
                <Link
                  to="/checkout"
                  className="text-decoration-none text-black BgYellow d-block w-100 ms-auto me-auto text-center py-2 fw-bold"
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
