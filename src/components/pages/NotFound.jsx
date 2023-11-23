import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-white fs-2 pb-5">
      <p className="FontLato" style={{ fontSize: "17rem" }}>
        404
      </p>
      <p className="FontLato fs-1">¡Ups! Esa página no se puede encontrar.</p>
      <p className="FontLato fs-6">
        Lo sentimos mucho, pero parece que no podemos encontrar la página que
        estabas buscando.
      </p>
      <Link
        to="/"
        className="FontLato fs-6 mb-2 text-decoration-none btn rounded-0 bg-white fw-bold px-5 py-3 mt-4"
      >
        Volver al Inicio
        <i
          className="fa-solid fa-arrow-right ms-2"
          style={{ color: "#000000" }}
        ></i>
      </Link>
    </div>
  );
}

export default NotFound;
