import React from "react";
import "./CardCategory.css";
import { Link } from "react-router-dom";
function CardCategory({ category }) {
  return (
    <>
      <div className="col-4 col-lg-2 my-4">
        <div
          className="NotInvert static shake-horizontal position-relative"
          style={{ width: "auto" }}
        >
          <img src={category.image} alt="" className="img-fluid" />
          <div className="position-absolute top-100 start-50 translate-middle Scale">
            <Link
              href="#"
              className="w-100	bg-white text-decoration-none text-black px-2 	  px-md-4 py-2 FontLato Scale"
            >
              {category.name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCategory;
