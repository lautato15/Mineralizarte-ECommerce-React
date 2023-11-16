import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(false);
  const { catid } = useParams();
  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();

        if (catid !== undefined) {
          setCategory(data.categories.find((cat) => cat.id === Number(catid)));
          setProducts(
            data.products.filter((p) => p.category_id === Number(catid))
          );
        } else setProducts(data.products);
      } catch (error) {
        console.error("Error call or parsing of products:", error);
      }
    };
    callData();
  }, [catid]);
  return (
    products.length > 0 && (
      <>
        <div className="d-flex w-100 h-100  align-items-center flex-column">
          <h1>Productos</h1>
          {category && <h2>{category.name}</h2>}
          <ItemList products={products} />
        </div>
      </>
    )
  );
}

export default ItemListContainer;
