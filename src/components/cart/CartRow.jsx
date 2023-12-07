import { Link } from "react-router-dom";
import { removeItem } from "../../redux/cartSlice";

import CounterCart from "../partials/CounterCart";
import { useDispatch } from "react-redux";

function CartRow({ product }) {
  const dispatch = useDispatch();

  const handleDelproduct = (product) => {
    dispatch(removeItem(product));
  };
  return (
    <>
      <tr>
        <td className=" bg-white d-flex">
          <Link to={`/item/${product.id}`}>
            <img
              src={product.image}
              className="border border-black border-1"
              alt={`Imagen de ${product.name}`}
              style={{
                width: "70px",
                height: "70px",
              }}
            />
          </Link>

          <div className="d-flex align-items-center">
            <Link
              to={`/item/${product.id}`}
              className="text-decoration-none text-black fw-bold ms-3 d-block"
            >
              {product.name}
            </Link>
          </div>
        </td>
        <td className="align-middle bg-white">
          <span className="m-0 ">${product.price}</span>
        </td>
        <td className="align-middle bg-white">
          <CounterCart product={product} />
        </td>
        <td className="align-middle bg-white">
          <span className="">${product.price * product.counter}</span>
        </td>
        <td className="align-middle bg-white">
          <button
            onClick={() => handleDelproduct(product)}
            className="text-decoration-none text-black border border-black rounded-5 p-1 px-2 border-2"
          >
            ×
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartRow;
