import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error call or parsing of products:", error);
      }
    };
    callData();
  }, []);
  return (
    products.length > 0 && (
      <>
        <div className="d-flex w-100 h-100  align-items-center flex-column">
          <ItemList products={products} />
        </div>
      </>
    )
  );
}

export default ItemListContainer;
