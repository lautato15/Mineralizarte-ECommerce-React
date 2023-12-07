import React, { useState } from "react";
import { useParams } from "react-router-dom";

function GlobalPrice({ subtotal, handleShipping, shippingDetails }) {
  console.log("shippingDetails");
  console.log(shippingDetails);
  function handleChangeShipping(e) {
    handleShipping(e.target.value);
  }
  const { shipping } = useParams();
  shipping != "" && handleShipping(shipping);
  return (
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
              onChange={handleChangeShipping}
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
              onChange={handleChangeShipping}
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
  );
}

export default GlobalPrice;
