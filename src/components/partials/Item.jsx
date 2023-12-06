import { Link } from "react-router-dom";
import "./Item.css";
import IconStar from "../../assets/img/star.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateCounterProduct } from "../../redux/cartSlice";
import { toast } from "react-hot-toast";

function Item({ product }) {
  const stars = [];

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  for (let i = 0; i < product.stars; i++) {
    stars.push(
      <img
        key={i}
        src={IconStar}
        alt="Imagen de estrella"
        style={{ width: "15px", height: "15px" }}
      />
    );
  }

  function handleAddToCart(count) {
    let existProductOnCart = cart.find((p) => p.id === product.id);
    if (existProductOnCart) {
      if (
        count >= 1 &&
        count <= Number(product.stock) - existProductOnCart.counter
      ) {
        dispatch(
          updateCounterProduct({
            newCounter: existProductOnCart.counter + count,
            id: product.id,
          })
        );
      } else
        toast.error(
          product.stock + " es el Stock con el que contamos por el momento."
        );
    } else {
      if (count >= 1 && count <= Number(product.stock)) {
        product.counter = count;
        dispatch(addItem(product));
      } else
        toast.error(product.stock + " Error de Stock vuelva a intentarlo.");
    }
  }
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 my-2">
        <div className=" BorderCard">
          <Link to={`/item/${product.id}`} className="w-100">
            <img
              src={product.image}
              alt={`Foto de ${product.name}`}
              className="img-fluid w-100"
              style={{ aspectRatio: "1/1" }}
            />
          </Link>
          <div className="mt-4 d-flex flex-column justify-content-center ">
            <Link to={`/item/${product.id}`} className="  ProductName FontLato">
              {product.name}
            </Link>
            <p className="fs-6 text-center my-0">
              {stars.length > 0 &&
                stars.map((s) => {
                  return s;
                })}
            </p>
            <button
              onClick={() => handleAddToCart(1)}
              className="mb-3 mt-2 py-2 px-2 ms-auto me-auto w-75 d-flex FontLato  text-white border-0 bg-black SmallText BtnAddToCart"
            >
              Agregar al
              <i className="bi bi-cart ms-1"></i>
              <span className="ms-auto fw-bold">${product.price}</span>
            </button>
            {/* <p className="fs-6 text-center">${product.price}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
