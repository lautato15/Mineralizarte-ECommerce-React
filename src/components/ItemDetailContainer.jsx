import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();
        setProduct(data.products.find((p) => p.id === Number(id)));
      } catch (error) {
        console.error("Error call or parsing of product:", error);
      }
    };
    callData();
  }, [id]);
  return (
    <div className="d-flex justify-content-center align-items-center text-black fs-2 p-5">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
