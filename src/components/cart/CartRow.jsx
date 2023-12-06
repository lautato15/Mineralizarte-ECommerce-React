import { Link } from "react-router-dom";
import { removeItem } from "../../redux/cartSlice";

import CounterCart from "../partials/CounterCart";

function CartRow({ product }) {
  const handleDelproduct = (product) => {
    dispatch(removeItem(product));
  };
  return (
    <>
      <tr>
        <td className="align-middle bg-white">
          <Link to={`/item/${product.id}`}>
            <img
              src={product.image}
              className="border border-black border-2"
              alt={`Imagen de ${product.name}`}
              style={{
                width: "70px",
                height: "70px",
              }}
            />
          </Link>

          <Link
            to={`/item/${product.id}`}
            className="text-decoration-none text-black fw-bold ms-3"
          >
            Twin Hoops
          </Link>
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
            onClick={handleDelproduct(product)}
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
