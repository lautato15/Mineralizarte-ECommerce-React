import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function SidebarShop({ products, categorySelected, categories }) {
  return (
    <>
      <div>
        <h3
          className="text-white FontGaramond fs-1 fw-bold mb-4"
          style={{ letterSpacing: "1.5px" }}
        >
          Categorías
        </h3>
        {categories.length > 0 &&
          categories.map((c) => {
            return (
              c.CountProducts > 0 && (
                <Link
                  to={`/category/${c.id}`}
                  key={c.id}
                  className="text-white FontLato d-flex me-5 fs-4 text-decoration-none"
                >
                  {c.name}
                  <span className="ms-auto bg-success  px-3 py-1 my-1 fs-5 rounded-5">
                    {c.CountProducts}
                  </span>
                </Link>
              )
            );
          })}
      </div>
    </>
  );
}

export default SidebarShop;
