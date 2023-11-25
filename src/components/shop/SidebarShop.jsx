import { useEffect, useState } from "react";
import axios from "axios";
function SidebarShop() {
  const [categories, setCategories] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `/filedata.json`,
      });
      setCategories(response.data.categories);
      setProducts(response.data.products);
    };
    getData();
  }, []);
  function countProductsByCategory(categoryId) {
    return products.filter((product) => product.category_id === categoryId)
      .length;
  }
  return (
    <>
      <div>
        <h3
          className="text-white FontGaramond fs-1 fw-bold mb-4"
          style={{ letterSpacing: "1.5px" }}
        >
          Categorías
        </h3>
        {categories.length > 0 &&
          categories.map((c) => {
            return (
              <p key={c.id} className="text-white FontLato d-flex me-5 fs-4">
                {c.name}{" "}
                <span className="ms-auto bg-success  px-3 py-1 my-1 fs-5 rounded-5">
                  {countProductsByCategory(c.id)}
                </span>
              </p>
            );
          })}
      </div>
    </>
  );
}

export default SidebarShop;
