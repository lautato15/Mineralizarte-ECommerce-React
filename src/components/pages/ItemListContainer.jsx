import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../shop/ItemList";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState(false);
  const [categories, setCategories] = useState([]);

  function countProductsByCategory(categoryId, products) {
    return products.filter((product) => product.category_id === categoryId)
      .length;
  }
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
        } else {
          setCategorySelected(false);
          setProducts(data.products);
        }

        for (let cate of data.categories) {
          cate.CountProducts = countProductsByCategory(cate.id, data.products);
        }

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
