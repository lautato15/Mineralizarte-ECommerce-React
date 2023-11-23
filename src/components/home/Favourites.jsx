import CardFavourite from "./CardFavourite";
import "./Favourites.css";

function Favourites() {
  return (
    <>
      <div className="w-100">
        <div className="container my-5">
          <h5 className="FontLato text-center" style={{ fontSize: "0.8rem" }}>
            DESCUBRE LO DE ESTA SEMANA
          </h5>
          <h2 className="FontGaramond text-center">Nuestros Favoritos</h2>
          <div className="row mt-5">
            <CardFavourite />
            <CardFavourite />
            <CardFavourite />
            <CardFavourite />
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
