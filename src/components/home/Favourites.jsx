import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../partials/Item";
import "./Favourites.css";

function Favourites() {
  const [products, setProducts] = useState([]);

  const AMOUNT_OF_PRODUCTS = 4;

  useEffect(() => {
    const getTrendingProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `/filedata.json`,
      });
      console.log(response.data.products);
      let randomNumbers = [];
      while (randomNumbers.length < AMOUNT_OF_PRODUCTS) {
        let randomNumber = Math.floor(
          Math.random() * response.data.products.length
        );
        if (!randomNumbers.includes(randomNumber))
          randomNumbers.push(randomNumber);
      }

      const randomTrendingProducts = randomNumbers.map(
        (index) => response.data.products[index]
      );

      setProducts(randomTrendingProducts);
    };
    getTrendingProducts();
  }, []);

  return (
    <>
      <div className="w-100">
        <div className="container my-5">
          <h5 className="FontLato text-center" style={{ fontSize: "0.8rem" }}>
            DESCUBRE LO DE ESTA SEMANA
          </h5>
          <h2 className="FontGaramond text-center">Nuestros Favoritos</h2>
          <div className="row mt-5">
            {products.length > 0 &&
              products.map((p) => {
                return <Item key={p.id} product={p} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
