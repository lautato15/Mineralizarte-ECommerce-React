import React from "react";
import { useLocation } from "react-router-dom";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  // En ves de hacer otro useEffect con una llamada, traemos los datos por navigate
  const { state } = useLocation();
  const { product } = state;
  console.log(product);

  return (
    <div className="d-flex justify-content-center align-items-center text-black fs-2 p-5">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
