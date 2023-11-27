import HeadBoard from "../partials/HeadBoard";
import SidebarShop from "../shop/SidebarShop";
import ItemListContainer from "../shop/ItemListContainer";
function Shop() {
  return (
    <>
      <div className="bg-dark">
        <HeadBoard Text={"Tienda"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-3">
              <SidebarShop />
            </div>
            <div className="col-12 col-md-9">
              <ItemListContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
