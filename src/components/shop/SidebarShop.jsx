import { useEffect, useState } from "react";

function SidebarShop() {
  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();

        setCategories(data.categories);
      } catch (error) {
        console.error("Error call or parsing of categories:", error);
      }
    };
    callData();
  }, []);
  return (
    <>
      <div>
        <h3
          className="text-white FontGaramond fs-4 fw-bold"
          style={{ letterSpacing: "1.5px" }}
        >
          Categorías
        </h3>
        {categories.length > 0 &&
          categories.map((c) => {
            return (
              <p key={c.id} className="text-white FontLato">
                {c.name}
              </p>
            );
          })}
      </div>
    </>
  );
}

export default SidebarShop;
