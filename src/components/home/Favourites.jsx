import { useEffect, useState } from "react";
import Item from "../partials/Item";
import "./Favourites.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Favourites() {
  const [products, setProducts] = useState([]);

  const AMOUNT_OF_PRODUCTS = 4;

  useEffect(() => {
    const getTrendingProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
        let dataProducts;
        await getDocs(itemsCollection).then((snapshot) => {
          dataProducts = snapshot.docs.map((doc) => {
            let product = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return product;
          });

          let randomNumbers = [];
          while (randomNumbers.length < AMOUNT_OF_PRODUCTS) {
            let randomNumber = Math.floor(Math.random() * dataProducts.length);
            if (!randomNumbers.includes(randomNumber))
              randomNumbers.push(randomNumber);
          }

          const randomTrendingProducts = randomNumbers.map(
            (index) => dataProducts[index]
          );

          setProducts(randomTrendingProducts);
        });
      } catch (error) {
        console.error("Errpr al llamar a los Productos Favoritos:", error);
      }
      getTrendingProducts();
    };
  }, []);

  return (
    <>
      <div className="w-100">
        <div className="container my-5">
          <h5 className="FontLato text-center" style={{ fontSize: "0.8rem" }}>
            DESCUBRE LO DE ESTA SEMANA
          </h5>
          <h2 className="FontGaramond text-center">Nuestros Favoritos</h2>
          <div className="container">
            <div className="row mt-5">
              {products.length > 0 &&
                products.map((p) => {
                  return <Item key={p.id} product={p} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
