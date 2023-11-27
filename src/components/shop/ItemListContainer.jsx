import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState(false);
  const [categories, setCategories] = useState([]);

  const { catid } = useParams();
  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();

        if (catid !== undefined) {
          setCategorySelected(
            data.categories.find((cat) => cat.id === Number(catid))
          );
          setProducts(
            data.products.filter((p) => p.category_id === Number(catid))
          );
        } else setProducts(data.products);
        // console.log("ACA");
        // console.log(data.products);
        // console.log(catid);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error call or parsing of products:", error);
      }
    };
    callData();
  }, [catid]);
  return (
    products.length > 0 && (
      <>
        <div className="bg-dark">
          {categorySelected && <h2>{categorySelected.name}</h2>}
          <ItemList
            products={products}
            categorySelected={categorySelected}
            categories={categories}
          />
        </div>
      </>
    )
  );
}

export default ItemListContainer;
