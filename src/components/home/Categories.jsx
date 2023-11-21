import React from "react";
import "./Categories.css";
import CardCategory from "./CardCategory.jsx";
function Categories() {
  const ListCategories = [
    "Brasaletes",
    "Dijes",
    "Pendientes",
    "Colgantes",
    "Anillos",
  ];
  return (
    <>
      <div className="CategoriesDiv">
        <div className="text-center ">
          <p className="text-black FontLato fw-bold fs-5 tracking-wide mb-3">
            TE TENEMOS CUBIERTO
          </p>
          <h5 className="text-black FontGaramond fw-bold fs-2 	">
            Explora la Gama
          </h5>
        </div>
        <div className="row mt-5">
          {ListCategories.map((category, index) => (
            <CardCategory category={category} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
