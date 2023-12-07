import React, { useState } from "react";
import GlobalPrice from "../partials/GlobalPrice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Ticket() {
  const cart = useSelector((state) => state.cart);
  let subtotal = 0;
  cart.forEach((i) => {
    subtotal += i.price * i.counter;
  });
  const [paymentDetails, setPaymentDetails] = useState("");
  function handleChangePayment() {
    setPaymentDetails(e.target.value);
  }
  return (
    <>
      <div className="border border-black p-4 bg-white text-black">
        <h4 className="mb-5 FontGaramond fw-bold fs-3">Productos</h4>

        <div className="d-flex justify-content-between pb-3 border-bottom">
          <div className="d-flex">
            <img
              src="https://caketheme.com/html/mojuri/media/product/2-2.jpg"
              alt="Ruby Rubber Tree Image Avatar"
              style={{
                width: "55px",
                height: "55px",
              }}
            />
            <div className="ps-3 ">
              <p className="FontLato fs-6 mb-0">Las Papas</p>
              <p className="FontLato SmallText">Cantidad: 3</p>
            </div>
          </div>
          <p className="me-2">$10000</p>
        </div>

        <GlobalPrice subtotal={subtotal} />

        <div className="border ">
          <ul className="payment-methods methods custom-radio">
            <li className="payment-method my-3">
              <input
                onChange={handleChangePayment}
                value={paymentDetails}
                type="radio"
                className=" me-2"
                name="payment_method"
                checked="checked"
              />
              <label htmlFor="payment_method_bacs">
                Transferencia Bancaria
              </label>
              <div className="payment-box">
                <p className="text-secondary pe-4">
                  Realice su pago directamente en nuestra cuenta bancaria.
                  Utilice su ID de pedido como referencia de pago. Su pedido no
                  será enviado hasta que los fondos se hayan liquidado en
                  nuestra cuenta.
                </p>
              </div>
            </li>
            <li className="payment-method my-3">
              <input
                onChange={handleChangePayment}
                value={paymentDetails}
                type="radio"
                className="input-radio me-2"
                name="payment"
              />
              <label>Redes de Cobranzas</label>
              <div className="payment-box">
                <p className="text-secondary">Please send a</p>
              </div>
            </li>
            <li className="payment-method my-3">
              <input
                onChange={handleChangePayment}
                value={paymentDetails}
                type="radio"
                className="input-radio me-2"
                name="payment_method"
              />
              <label>Efectivo en la entrega</label>
              <div className="payment-box">
                <p className="text-secondary">Pay with cash upon delivery.</p>
              </div>
            </li>
            <li className="payment-method my-3">
              <input
                onChange={handleChangePayment}
                value={paymentDetails}
                type="radio"
                className="input-radio me-2"
                name="payment_method"
              />
              <label>PayPal</label>
              <div className="payment-box">
                <p className="text-secondary">Pay via PayPal;</p>
              </div>
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
