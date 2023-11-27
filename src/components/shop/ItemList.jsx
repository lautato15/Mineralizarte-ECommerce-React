import React from "react";
import Item from "../partials/Item";

import HeadBoard from "../partials/HeadBoard";
import SidebarShop from "../shop/SidebarShop";

function ItemList({ products, categorySelected, categories }) {
  return (
    <>
      <HeadBoard Text={"Tienda"} />
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-3">
            <SidebarShop
              categorySelected={categorySelected}
              categories={categories}
              products={products}
            />
          </div>
          <div className="col-12 col-md-9">
            <div className="d-flex w-100 h-100  align-items-center flex-column text-white ">
              <p className="me-auto">
                Mostrando los {products.length} resultados
              </p>
              <div className="row">
                {products.length > 0 &&
                  products.map((p) => {
                    return <Item key={p.id} product={p} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
