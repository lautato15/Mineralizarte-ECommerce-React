import { Link, useNavigate } from "react-router-dom";

function FooterCartCanvas({ handleClose, cartLength }) {
  const navigate = useNavigate();
  function handleGo(to) {
    
      handleClose();
      window.scrollTo(0, 0);
      navigate(`${to}`);
    
  }
  return (
    <>
      <div>
        <div className="p-4 ShaddowFooterCanvas">
          <div className="d-flex ">
            <p>SubTotal: </p> <p className="ms-auto">US$ subTotal</p>
          </div>
          <button
            onClick={() => {
              handleGo("/checkout");
            }}
            className="btn w-100 rounded-0  bg-black text-white"
          >
            Ir a Pagar !
          </button>
          <button
            onClick={() => {
              handleGo("/cart");
            }}
            className="btn w-100 rounded-0  mt-2 bg-dark-subtle"
          >
            Ver Carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default FooterCartCanvas;
