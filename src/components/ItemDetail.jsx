import ItemCount from "./ItemCount";
function ItemDetail({ product }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={product.image} alt={"Foto de " + product.name} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-start align-items-start flex-column fs-4  px-4 h-100 ">
            <h2 className="my-5 ">{product.name}</h2>
            <p>${product.price}</p>
            <p>
              <i className="fa-solid fa-star" style={{ color: "#e9cd1c" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e9cd1c" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e9cd1c" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e9cd1c" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#e9cd1c" }}></i>
              <span className="ms-4">(3 reviews)</span>
            </p>
            <span className="border-gray border-top border-2 w-100 mb-5 mt-3"></span>
            <p className=" mb-5">{product.description}</p>

            <ItemCount stock={product.stock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
