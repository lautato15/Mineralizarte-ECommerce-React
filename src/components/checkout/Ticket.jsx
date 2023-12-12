import GlobalPrice from "../partials/GlobalPrice";
import { Link } from "react-router-dom";
import ProductsTicket from "./ProductsTicket";

function Ticket({
  paymentDetails,
  shippingDetails,
  subTotal,
  cart,
  handleShipping,
  handleChangePayment,
  handleSendOrder,
}) {
  return (
    <>
      <div className="border border-black p-4 bg-white text-black">
        <h4 className="mb-5 FontGaramond fw-bold fs-3">Productos</h4>

        {cart.length > 0 &&
          cart.map((p) => {
            return <ProductsTicket key={p.id} product={p} />;
          })}
        <div className="bg-white  p-4">
          <div className="d-flex pt-3">
            <p className="w-50 fw-bold FontGaramond fs-5">SubTotal</p>
            <p className="w-50 pt-1">$ {subTotal}</p>
          </div>
          {/* ENVIO */}
          <div className="d-flex my-4">
            <p className="w-50 fw-bold FontGaramond fs-5">Envío</p>
            <div className="w-50 pt-1">
              <div>
                <input
                  checked={shippingDetails === "envio_gratuito"}
                  onChange={handleShipping}
                  name="shipping"
                  value="envio_gratuito"
                  type="radio"
                />
                <label htmlFor="shipping" className="ms-2">
                  Envío gratuito
                </label>
              </div>
              <div>
                <input
                  checked={shippingDetails === "tarifa_plana"}
                  onChange={handleShipping}
                  name="shipping"
                  value="tarifa_plana"
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
            <p className="w-50 pt-1 fw-bold">$ {subTotal}</p>
          </div>
        </div>

        <div className="border ">
          <h5 className="FontGaramond text-center pt-4">
            Metodo de Pago <span className="text-danger">*</span>
          </h5>
          <ul className="list-unstyled">
            <li className=" my-3">
              <input
                checked={paymentDetails === "transferencia_bancaria"}
                onChange={handleChangePayment}
                name="payment_method"
                value="transferencia_bancaria"
                type="radio"
                className=" me-2"
              />
              <label htmlFor="payment_method_bacs">
                Transferencia Bancaria
              </label>
              {paymentDetails === "transferencia_bancaria" && (
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
                checked={paymentDetails === "redes_de_cobranza"}
                onChange={handleChangePayment}
                name="payment_method"
                value="redes_de_cobranza"
                type="radio"
                className=" me-2"
              />
              <label>Redes de Cobranzas</label>
              {paymentDetails === "redes_de_cobranza" && (
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
                checked={paymentDetails === "efectivo"}
                onChange={handleChangePayment}
                name="payment_method"
                value="efectivo"
                type="radio"
                className=" me-2"
              />
              <label>Efectivo en la entrega</label>
              {paymentDetails === "efectivo" && (
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
        <button
          onClick={() => handleSendOrder()}
          className="text-decoration-none text-black BgGold d-block w-100 ms-auto me-auto text-center py-3 fw-bold mt-4 border-0"
        >
          Realizar Pedido!
        </button>
      </div>
    </>
  );
}

export default Ticket;
