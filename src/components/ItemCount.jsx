import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  function handleSub() {
    count > 1
      ? setCount(count - 1)
      : toast.error("Debes tener al menos un producto.");
  }
  function handleAdd() {
    count < Number(stock)
      ? setCount(count + 1)
      : toast.error(stock + " es el Stock con el que contamos por el momento.");
  }
  return (
    <div className="d-flex ">
      <div className="border-2 border-grey w-auto d-flex">
        <button
          onClick={() => handleSub()}
          className="border-0 fs-2"
          style={{ width: "2rem" }}
        >
          -
        </button>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="text"
          value={count}
          size={3}
          className="text-center border-0"
        />
        <button
          onClick={() => handleAdd()}
          className="border-0 fs-2"
          style={{ width: "2rem" }}
        >
          +
        </button>
      </div>
      <div>
        <button className="bg-black border-0 text-white ms-4 px-3 h-100">
          ADD TO CART
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default ItemCount;
