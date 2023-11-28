import { NavLink } from "react-router-dom";
function SidebarShop({ products, categorySelected, categories }) {
  const ClassActive =
    "text-success FontLato d-flex me-5 fs-4 text-decoration-none ";
  const ClassInActive =
    "text-white FontLato d-flex me-5 fs-4 text-decoration-none";

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
                    <span className="ms-auto bg-danger text-white  px-3 py-1 my-1 fs-5 rounded-5">
                      {c.CountProducts}
                    </span>
                  ) : (
                    <span className="ms-auto bg-success  px-3 py-1 my-1 fs-5 rounded-5">
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
