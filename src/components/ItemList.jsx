import React from "react";
import Item from "./Item.jsx";
function ItemList({ products }) {
  return (
    <>
      <h1>Productos</h1>
      <div className="row">
        {products.length > 0 &&
          products.map((p) => {
            return <Item key={p.id} product={p} />;
          })}
      </div>
    </>
  );
}

export default ItemList;
