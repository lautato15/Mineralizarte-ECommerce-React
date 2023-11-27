import ItemCount from "./ItemCount";
import IconStar from "../assets/img/star.png";

function ItemDetail({ product }) {
  const stars = [];

  for (let i = 0; i < product.stars; i++) {
    stars.push(
      <img
        key={i}
        src={IconStar}
        alt="Imagen de estrella"
        style={{ width: "30px", height: "30px" }}
      />
    );
  }

  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={product.image} alt={"Foto de " + product.name} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-start align-items-start flex-column fs-4  px-4 h-100 text-white ">
            <h2 className="my-5 FontGaramond">{product.name}</h2>
            <p className="FontLato">${product.price}</p>
            <p className="fs-6 text-center FontLato">
              {stars.length > 0 &&
                stars.map((s) => {
                  return s;
                })}
            </p>
            <span className="border border-light-subtle border-1 w-100 mb-5 mt-3"></span>
            <p className=" mb-5 FontLato fs-6">{product.description}</p>
            <div className=" d-flex mb-4">
              <p className="fs-6">Size:</p>
              <p className="fs-6  border border-white rounded-5 px-2 ms-4">S</p>
              <p className="fs-6  border border-white rounded-5 px-1 ms-2">M</p>
              <p className="fs-6  border border-white rounded-5 px-2 ms-2">L</p>
            </div>
            <ItemCount stock={product.stock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
