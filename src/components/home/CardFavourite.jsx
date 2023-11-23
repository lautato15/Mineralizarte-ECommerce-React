import { Link } from "react-router-dom";
import "./CardFavourite.css";
function CardFavourite() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <Link to="" className="w-100">
          <img
            src="https://caketheme.com/html/mojuri/media/product/1.jpg"
            alt="Imagen de "
            className="img-fluid w-100"
          />
        </Link>
        <div className="mt-4">
          <p className="fs-6 text-center">
            <i
              className="fa-solid fa-star mx-1"
              style={{ color: "#e6c419" }}
            ></i>
            <i
              className="fa-solid fa-star mx-1"
              style={{ color: "#e6c419" }}
            ></i>
            <i
              className="fa-solid fa-star mx-1"
              style={{ color: "#e6c419" }}
            ></i>
            <i
              className="fa-solid fa-star mx-1"
              style={{ color: "#e6c419" }}
            ></i>
            <i
              className="fa-solid fa-star me-3"
              style={{ color: "#e6c419" }}
            ></i>
            (1 reseña)
          </p>
          <p className=" text-center ProductName">Nombre del Producto</p>
          <p className="fs-6 text-center">$Precio</p>
        </div>
      </div>
    </>
  );
}

export default CardFavourite;
