import { Link } from "react-router-dom";

function FooterCartCanvas() {
  return (
    <>
      <div>
        <div className="p-4 ShaddowFooterCanvas">
          <div className="d-flex ">
            <p>SubTotal: </p> <p className="ms-auto">US$ subTotal</p>
          </div>
          <button
            // onClick={() => {
            //   handleProceedToCheckoutCanva();
            // }}
            className="btn w-100 rounded-0  bg-black text-white"
          >
            Ir a Pagar !
          </button>
          <Link
            to="/cart"
            // onClick={() => {
            //   handleClose();
            //   window.scrollTo(0, 0);
            // }}
            className="btn w-100 rounded-0  mt-2 bg-dark-subtle"
          >
            Ver Carrito
          </Link>
        </div>
      </div>
    </>
  );
}

export default FooterCartCanvas;
