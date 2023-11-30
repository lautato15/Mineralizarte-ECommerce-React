import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../shop/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState(false);
  const [categories, setCategories] = useState([]);
  const { catid } = useParams();

  function countProductsByCategory(categoryId, products) {
    return products.filter((product) => product.category_id === categoryId)
      .length;
  }
  useEffect(() => {
    const callData = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
        const categoriesCollection = collection(db, "categories");
        let dataProducts;
        let dataCategories;
        // Products
        await getDocs(itemsCollection).then((snapshot) => {
          dataProducts = snapshot.docs.map((doc) => {
            let product = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return product;
          });
        });
        // Categories
        await getDocs(categoriesCollection).then((snapshot) => {
          dataCategories = snapshot.docs.map((doc) => {
            let category = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return category;
          });
          for (let cate of dataCategories) {
            cate.CountProducts = countProductsByCategory(
              Number(cate.id),
              dataProducts
            );
          }
          setCategories(dataCategories);
        });

        if (catid !== undefined) {
          setCategorySelected(
            dataCategories.find((cat) => cat.id === Number(catid))
          );
          setProducts(
            dataProducts.filter((p) => p.category_id === Number(catid))
          );
        } else {
          setCategorySelected(false);
          setProducts(dataProducts);
        }
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
