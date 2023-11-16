import React from "react";
import { useLocation } from "react-router-dom";

function ItemDetailContainer() {
  const { p } = useLocation();
  console.log(p);

  return (
    <div className="d-flex justify-content-center align-items-center text-black fs-2"></div>
  );
}

export default ItemDetailContainer;
