import React from "react";

function ProductsTicket({ product }) {
  return (
    <>
      <div className="d-flex justify-content-between pb-3 border-bottom">
        <div className="d-flex">
          <img
            src={product.image}
            alt={`Imagen de ${product.name}`}
            style={{
              width: "60px",
              height: "60px",
            }}
          />
          <div className="ps-3 ">
            <p className="FontLato fs-6 mb-0">{product.name}</p>
            <p className="FontLato SmallText my-0">
              Cantidad: {product.counter}
            </p>
            <p className="FontLato SmallText my-0">
              Precio Unitario: ${product.price}
            </p>
          </div>
        </div>
        <p className="me-2 fw-bold">${product.price * product.counter}</p>
      </div>
    </>
  );
}

export default ProductsTicket;
