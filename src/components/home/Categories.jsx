import React, { useEffect, useState } from "react";
import "./Categories.css";
import CardCategory from "./CardCategory.jsx";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const callCategories = async () => {
      try {
        const db = getFirestore();
        const categoriesCollection = collection(db, "categories");
        let dataCategories;

        // Categories
        await getDocs(categoriesCollection).then((snapshot) => {
          dataCategories = snapshot.docs.map((doc) => {
            let category = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return category;
          });

          setCategories(dataCategories);
        });
      } catch (error) {
        console.error("Error al llamar Categorias en Categories.jsx :", error);
      }
    };
    callCategories();
  }, []);

  return (
    <>
      <div className="CategoriesDiv ">
        <div className="text-center mt-4">
          <p className="text-black FontLato fw-bold fs-5 tracking-wide mb-3">
            TE TENEMOS CUBIERTO
          </p>
          <h5 className="text-black FontGaramond fw-bold fs-2 	">
            Explora la Gama
          </h5>
        </div>
        <div className="row mt-3 d-flex justify-content-center py-5">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <CardCategory category={category} key={category.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
