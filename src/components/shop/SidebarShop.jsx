import { NavLink } from "react-router-dom";
function SidebarShop({ products, categorySelected, categories }) {
  const ClassActive =
    "text-warning FontLato d-flex me-5 fs-4 text-decoration-none my-2 ";
  const ClassInActive =
    "text-white FontLato d-flex me-5 fs-4 text-decoration-none my-2";

  const isCategorySelected = (categoryId, categorySelected) => {
    return categorySelected.id === categoryId;
  };

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
              c.CountProducts > 0 && (
                <NavLink
                  to={`/category/${c.id}`}
                  key={c.id}
                  className={({ isActive }) =>
                    isActive ? ClassActive : ClassInActive
                  }
                >
                  {c.name}

                  {isCategorySelected(c.id, categorySelected) ? (
                    <span
                      className="ms-auto text-white  px-3 py-2 my-1 fs-6 rounded-5"
                      style={{ backgroundColor: " rgb(1, 1, 1)" }}
                    >
                      {c.CountProducts}
                    </span>
                  ) : (
                    <span
                      className="ms-auto text-black  px-3 py-2 my-1 fs-6 rounded-5"
                      style={{ backgroundColor: " rgb(240, 220, 129)" }}
                    >
                      {c.CountProducts}
                    </span>
                  )}
                </NavLink>
              )
            );
          })}
      </div>
    </>
  );
}

export default SidebarShop;
