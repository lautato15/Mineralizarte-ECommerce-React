import React, { useEffect, useState } from "react";
import GlobalPrice from "../partials/GlobalPrice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsTicket from "./ProductsTicket";

function Ticket() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  let subtotal = 0;
  cart.forEach((i) => {
    subtotal += i.price * i.counter;
  });
  const [paymentDetails, setPaymentDetails] = useState("");
  function handleChangePayment(e) {
    setPaymentDetails(e.target.value);
  }

  const [shippingDetails, setShippingDetails] = useState(null);
  const handleShipping = (e) => setShippingDetails(e.target.value);
  const { shipping } = useParams();

  useEffect(() => {
    cart.length === 0 && navigate("/shop");
    shipping != undefined && setShippingDetails(shipping);
  }, [cart]);
  return (
    <>
      <div className="border border-black p-4 bg-white text-black">
        <h4 className="mb-5 FontGaramond fw-bold fs-3">Productos</h4>

        {cart.length > 0 &&
          cart.map((p) => {
            return <ProductsTicket key={p.id} product={p} />;
          })}

        {/* <GlobalPrice
          subtotal={subtotal}
          shippingDetails={shippingDetails}
          setShippingDetails={setShippingDetails}
        /> */}
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

        <div className="border ">
          <h5 className="FontGaramond text-center pt-4">
            Metodo de Pago <span className="text-danger">*</span>
          </h5>
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
              />
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
