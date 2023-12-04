import { Link } from "react-router-dom";
import HeadBoard from "../partials/HeadBoard";

function Cart() {
  return (
    <>
      <div className="bg-dark">
        <HeadBoard Text={"Carrito"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-8">
              <table class=" table" cellspacing="0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="shop-details.html">
                        <img src="media/product/3.jpg" class="" alt="" />
                      </a>
                      <div>
                        <a href="shop-details.html">Twin Hoops</a>
                      </div>
                    </td>
                    <td>
                      <span>$150.00</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">-</button>
                        <input
                          type="number"
                          step="1"
                          min="0"
                          max=""
                          name="quantity"
                          value="2"
                          title="Qty"
                          size="4"
                          placeholder=""
                          inputmode="numeric"
                          autocomplete="off"
                        />
                        <button type="button">+</button>
                      </div>
                    </td>
                    <td>
                      <span>$300.00</span>
                    </td>
                    <td>
                      <a href="#" class="remove">
                        ×
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="shop-details.html">
                        <img src="media/product/1.jpg" class="" alt="" />
                      </a>
                      <div class="product-name">
                        <a href="shop-details.html">Medium Flat Hoops</a>
                      </div>
                    </td>
                    <td>
                      <span>$180.00</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">-</button>
                        <input
                          type="number"
                          step="1"
                          min="0"
                          max=""
                          name="quantity"
                          value="1"
                          title="Qty"
                          size="4"
                          placeholder=""
                          inputmode="numeric"
                          autocomplete="off"
                        />
                        <button type="button" class="plus">
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <span class="price">$180.00</span>
                    </td>
                    <td class="product-remove">
                      <a href="#" class="remove">
                        ×
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="6" class="actions">
                      <div class="bottom-cart">
                        <div class="coupon">
                          <input
                            type="text"
                            name="coupon_code"
                            class="input-text"
                            id="coupon-code"
                            value=""
                            placeholder="Coupon code"
                          />
                          <button
                            type="submit"
                            name="apply_coupon"
                            class="button"
                            value="Apply coupon"
                          >
                            Apply coupon
                          </button>
                        </div>
                        <h2>
                          <a href="shop-grid-left.html">Continue Shopping</a>
                        </h2>
                        <button
                          type="submit"
                          name="update_cart"
                          class="button"
                          value="Update cart"
                        >
                          Update cart
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-md-4 ">
              {/* SUBTOTAL */}
              <div className="bg-secondary p-4">
                <h2 className="fs-5 mb-5 ">Total del Carrito</h2>
                <div className="d-flex">
                  <p className="w-50">SubTotal</p>
                  <p className="w-50">$ 480.00</p>
                </div>
                {/* ENVIO */}
                <div className="d-flex my-4">
                  <p className="w-50">Envío</p>
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
                  <p className="w-50">Total</p>
                  <p className="w-50">$ 480.00</p>
                </div>
                <Link
                  to="/checkout"
                  className="text-decoration-none text-black BgYellow d-block w-100 ms-auto me-auto text-center py-2"
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
