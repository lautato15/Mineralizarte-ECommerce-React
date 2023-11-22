import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const LinkClass =
    "text-decoration-none text-white FontLato my-1 text-white-50  ";
  return (
    <>
      <div className=" bg-dark text-white my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className=" d-flex flex-column ">
                <p
                  className="FontGaramond fw-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  SERVICIO AL CLIENTE
                </p>
                <Link className={LinkClass} to="#">
                  Contáctenos
                </Link>
                <Link className={LinkClass} to="#">
                  Rastrea tu orden
                </Link>
                <Link className={LinkClass} to="#">
                  Cuidado y Reparacion del Producto
                </Link>
                <Link className={LinkClass} to="#">
                  Reserva una cita
                </Link>
                <Link className={LinkClass} to="#">
                  Preguntas Frecuentes
                </Link>
                <Link className={LinkClass} to="#">
                  Envío y Devoluciones
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className=" d-flex flex-column ">
                <p
                  className="FontGaramond fw-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  SOBRE NOSOTROS
                </p>
                <Link className={LinkClass} to="#">
                  Preguntas más frecuentes
                </Link>
                <Link className={LinkClass} to="#">
                  Nuestros Productores
                </Link>
                <Link className={LinkClass} to="#">
                  Mapa del Sitio
                </Link>
                <Link className={LinkClass} to="#">
                  Términos y condiciones
                </Link>
                <Link className={LinkClass} to="#">
                  Política de Privacidad
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className=" d-flex flex-column ">
                <p
                  className="FontGaramond fw-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  CATÁLOGO
                </p>
                <Link className={LinkClass} to="#">
                  Brasaletes
                </Link>
                <Link className={LinkClass} to="#">
                  Dijes
                </Link>
                <Link className={LinkClass} to="#">
                  Pendientes
                </Link>
                <Link className={LinkClass} to="#">
                  Colgantes
                </Link>
                <Link className={LinkClass} to="#">
                  Anillos
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className=" d-flex flex-column ">
                <p
                  className="FontGaramond fw-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  NUESTRO BOLETÍN
                </p>
                <p className={LinkClass}>
                  Regístrese para recibir las últimas ofertas y exclusivas de
                  Ice.
                </p>
                <div className="d-flex">
                  <input
                    type="email"
                    className="p-2 border-0"
                    placeholder="Correo Electrónico"
                  />
                  <button className="bg-white border-0 rounded-0">
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#000000" }}
                    ></i>
                  </button>
                </div>
                <br />
                <p>HOla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
