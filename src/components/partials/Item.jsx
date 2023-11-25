import { Link } from "react-router-dom";
import "./Item.css";
import IconStar from "../../assets/img/star.png";
function Item({ product }) {
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
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <Link to={`/item/${product.id}`} className="w-100">
          <img
            src={product.image}
            alt={`Foto de ${product.name}`}
            className="img-fluid w-100"
          />
        </Link>
        <div className="mt-4  ">
          <p className="fs-6 text-center">
            {stars.length > 0 &&
              stars.map((s) => {
                return s;
              })}
          </p>
          <Link to={`/item/${product.id}`} className="  ProductName">
            {product.name}
          </Link>
          <p className="fs-6 text-center">${product.price}</p>
        </div>
      </div>
    </>
  );
}

export default Item;
