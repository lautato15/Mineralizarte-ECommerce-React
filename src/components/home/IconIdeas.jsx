import "./IconIdeas.css";

import Warranty from "../../assets/img/iconIdeas/warranty.svg";
import Shield from "../../assets/img/iconIdeas/shield.svg";
import Return from "../../assets/img/iconIdeas/return.svg";

function IconIdeas() {
  return (
    <div className="DivIconIdeas w-100">
      <div className="text-white  container my-5 FontLato  w-100 NotInvert">
        <div className="row">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column text-center ">
            <img
              src={Warranty}
              alt="Logo de Envios a todo el mundo"
              style={{ height: "50px", width: "auto" }}
              className="mb-4"
            />
            <p style={{ letterSpacing: "3px" }} className="fs-4">
              ENVÍOS A TODO EL MUNDO
            </p>
            <p className="text-center fs-5">
              Tus Diamantes llegaran a cualquier parte del mundo en menos de 15
              días.
            </p>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column text-center my-4">
            <img
              src={Shield}
              alt="Logo de Escudo"
              style={{ height: "50px", width: "auto" }}
              className="mb-4"
            />
            <p style={{ letterSpacing: "3px" }} className="fs-4">
              PAGO SEGURO
            </p>
            <p className="text-center fs-5">
              Con la plena confianza de tus tarjetas internacionales.
            </p>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column text-center">
            <img
              src={Return}
              alt="Logo de 30 Días de Retorno"
              style={{ height: "50px", width: "auto" }}
              className="mb-4"
            />
            <p style={{ letterSpacing: "3px" }} className="fs-4">
              30 DÍAS DE DEVOLUCIÓN.
            </p>
            <p className="text-center fs-5">
              Tenes hasta un mes para devolver el producto y/o cambiarlo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconIdeas;
