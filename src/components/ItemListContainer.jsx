import React from "react";
import "./ItemListContainer.css";
function ItemListContainer({ greeting }) {
  return (
    <>
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <h2 style={{ fontFamily: "sans-serif" }}>
          {greeting}
          <span className="shine">
            <i class="fa-solid fa-gem "></i>
          </span>
        </h2>
      </div>
    </>
  );
}

export default ItemListContainer;
