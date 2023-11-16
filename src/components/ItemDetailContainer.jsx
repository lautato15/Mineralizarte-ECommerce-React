import React from "react";
import { useLocation } from "react-router-dom";

function ItemDetailContainer() {
  const { state } = useLocation();
  const { product } = state;
  console.log(product);

  return (
    <div className="d-flex justify-content-center align-items-center text-black fs-2">
      {product.name}
    </div>
  );
}

export default ItemDetailContainer;
