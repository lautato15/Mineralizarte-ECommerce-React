import React, { useEffect, useState } from "react";
import GlobalPrice from "../partials/GlobalPrice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsTicket from "./ProductsTicket";

function Ticket() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [shippingDetails, setShippingDetails] = useState("");

  let subtotal = 0;
  cart.forEach((i) => {
    subtotal += i.price * i.counter;
  });
  const [paymentDetails, setPaymentDetails] = useState("");
  function handleChangePayment(e) {
    setPaymentDetails(e.target.value);
  }
  useEffect(() => {
    cart.length === 0 && navigate("/shop");
  }, [cart]);
  return (
    <>
      <div className="border border-black p-4 bg-white text-black">
        <h4 className="mb-5 FontGaramond fw-bold fs-3">Productos</h4>

        {cart.length > 0 &&
          cart.map((p) => {
            return <ProductsTicket key={p.id} product={p} />;
          })}

        <GlobalPrice
          subtotal={subtotal}
          shippingDetails={shippingDetails}
          setShippingDetails={setShippingDetails}
        />

        <div className="border ">
          <ul>
            <li className=" my-3">
              <input
                checked={paymentDetails === "bank_transfer"}
                onChange={handleChangePayment}
                name="payment_method"
                value="bank_transfer"
                type="radio"
                className=" me-2"
              />
              <label htmlFor="payment_method_bacs">
                Transferencia Bancaria
              </label>
              {paymentDetails === "bank_transfer" && (
                <div className="payment-box">
                  <p className="text-secondary pe-4">
                    Realice su pago directamente en nuestra cuenta bancaria.
                    Utilice su ID de pedido como referencia de pago. Su pedido
                    no será enviado hasta que los fondos se hayan liquidado en
                    nuestra cuenta.
                  </p>
                </div>
              )}
            </li>
            <li className="payment-method my-3">
              <input
                checked={paymentDetails === "collection_networks"}
                onChange={handleChangePayment}
                name="payment_method"
                value="collection_networks"
                type="radio"
                className=" me-2"
              />
              <label>Redes de Cobranzas</label>
              {paymentDetails === "collection_networks" && (
                <div className="payment-box">
                  <p className="text-secondary">
                    Realice su pago a traves de una red de cobranzas como Abitab
                    o RedPagos. Utilice su ID de pedido como referencia de pago.
                    Su pedido no será enviado hasta que los fondos se hayan
                    liquidado en nuestra cuenta.
                  </p>
                </div>
              )}
            </li>
            <li className=" my-3">
              <input
                checked={paymentDetails === "cash"}
                onChange={handleChangePayment}
                name="payment_method"
                value="cash"
                type="radio"
                className=" me-2"
              />
              <label>Efectivo en la entrega</label>
              {paymentDetails === "cash" && (
                <div className="payment-box">
                  <p className="text-secondary">
                    Paga en efectivo al entregar el delivery.
                  </p>
                </div>
              )}
            </li>
            <li className="payment-method my-3">
              <input
                checked={paymentDetails === "paypal"}
                onChange={handleChangePayment}
                name="payment_method"
                value="paypal"
                type="radio"
                className=" me-2"
              />{" "}
              <label>PayPal</label>
              {paymentDetails === "paypal" && (
                <div className="payment-box">
                  <p className="text-secondary">
                    Paga mediante Paypal con su ID de pedido como referencia de
                    pago. Su pedido no será enviado hasta que los fondos se
                    hayan liquidado en nuestra cuenta.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <Link
          to="/checkout"
          className="text-decoration-none text-black BgGold d-block w-100 ms-auto me-auto text-center py-2 fw-bold mt-4"
        >
          Realizar Pedido!
        </Link>
      </div>
    </>
  );
}

export default Ticket;
