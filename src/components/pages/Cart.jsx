import HeadBoard from "../partials/HeadBoard";

function Cart() {
  return (
    <>
      <div className="bg-white">
        <HeadBoard Text={"Carrito"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-8">Hola</div>
            <div className="col-12 col-md-4">
              {/* SUBTOTAL */}
              <h2>Total del Carrito</h2>
              <div className="d-flex">
                <p className="w-50">SubTotal</p>
                <p className="w-50">$ 480.00</p>
              </div>

              {/* ENVIO */}
              <div className="d-flex">
                <p className="w-50">Envío</p>
                <div className="w-50">
                  <div>
                    <input
                      type="radio"
                      id="freeshipping"
                      name="freeshipping"
                      value="freeshipping"
                      className="me-2"
                    />
                    <label htmlFor="freeshipping"> Envío gratuito</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="flatrate"
                      name="flatrate"
                      value="flatrate"
                      className="me-2"
                    />
                    <label htmlFor="freeshipping"> Tarifa Plana</label>
                  </div>
                </div>
              </div>
              {/* TOTAL */}
              <div className="d-flex">
                <p className="w-50">SubTotal</p>
                <p className="w-50">$ 480.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
