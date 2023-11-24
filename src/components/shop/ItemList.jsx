import React from "react";
import Item from "../partials/Item";
function ItemList({ products }) {
  return (
    <>
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
