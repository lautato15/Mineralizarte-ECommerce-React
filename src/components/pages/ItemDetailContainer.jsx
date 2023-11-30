import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../Item/ItemDetail";
function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const callData = async () => {
      try {
        const db = getFirestore();

        let dataProduct;
        const oneItem = doc(db, "products", String(id));

        await getDoc(oneItem).then((snapshot) => {
          if (snapshot.exists()) {
            dataProduct = snapshot.data();
            setProduct(dataProduct);
          } else console.error(error, "No se encontro el producto");
        });
      } catch (error) {
        console.error(
          "Error call or parsing of product in ItemDetailContainer:",
          error
        );
      }
    };
    callData();
  }, [id]);
  return (
    <div className="d-flex justify-content-center align-items-center text-black fs-2 p-5 bg-dark">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
