import React from "react";

function GlobalPrice({ subtotal }) {
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
        <p className="w-50 fw-bold FontGaramond fs-5">Total</p>
        <p className="w-50 pt-1">$ {subtotal}</p>
      </div>
    </div>
  );
}

export default GlobalPrice;
