import { NavLink } from "react-router-dom";
function SidebarShop({
  products,
  categorySelected,
  categories,
  totalProducts,
}) {
  const ClassActive =
    "text-warning FontLato d-flex me-5 fs-5 text-decoration-none  items-align-center  py-2 ";
  const ClassInActive =
    "text-white FontLato d-flex me-5 fs-5 text-decoration-none  content-align-center    py-2";

  const isCategorySelected = (categoryId, categorySelected) => {
    return categorySelected.id === categoryId;
  };
  console.log(categorySelected);
  return (
    <>
      <div>
        <h3
          className="text-white FontGaramond fs-3 fw-bold mb-4"
          style={{ letterSpacing: "1.5px" }}
        >
          Categorías
        </h3>
        <NavLink
          to={`/shop`}
          key={"shop"}
          className={({ isActive }) => (isActive ? ClassActive : ClassInActive)}
        >
          Todos
          {!categorySelected ? (
            <span
              className="ms-auto text-black  fs-6 rounded-5 fw-bold d-flex justify-content-center "
              style={{
                backgroundColor: "  rgb(217, 182, 23)",
                height: "25px",
                width: "25px",
              }}
            >
              {totalProducts}
            </span>
          ) : (
            <span
              className="ms-auto text-black  fs-6 rounded-5 fw-bold  d-flex justify-content-center  "
              style={{
                backgroundColor: " rgb(240, 220, 129)",
                height: "25px",
                width: "25px",
              }}
            >
              {totalProducts}
            </span>
          )}
        </NavLink>
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
                      className="ms-auto text-black  fs-6  fw-bold rounded-5 d-flex justify-content-center"
                      style={{
                        backgroundColor: "  rgb(217, 182, 23)",
                        height: "25px",
                        width: "25px",
                      }}
                    >
                      {c.CountProducts}
                    </span>
                  ) : (
                    <span
                      className="ms-auto text-black  fs-6 rounded-5 fw-bold  d-flex justify-content-center "
                      style={{
                        backgroundColor: " rgb(240, 220, 129)",
                        height: "25px",
                        width: "25px",
                      }}
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
