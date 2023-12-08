import { Link } from "react-router-dom";
import "./Footer.css";
import Payments from "../../assets/img/payments.png";

function Footer() {
  const LinkClass =
    "text-decoration-none text-white FontLato my-1 text-white-50  ";
  return (
    <>
      <div className=" bg-black text-white footer w-100">
        <div className="container  my-3">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mt-5">
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

            <div className="col-12 col-md-6 col-lg-3 mt-5">
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

            <div className="col-12 col-md-6 col-lg-3 mt-5">
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

            <div className="col-12 col-md-6 col-lg-3 mt-5">
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
                <div className="d-flex my-3">
                  <input
                    type="email"
                    className="p-2 border-0"
                    placeholder="Correo Electrónico"
                  />
                  <button className="bg-white  rounded-0 border-0 border-start border-black">
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#000000" }}
                    ></i>
                  </button>
                </div>
                <div className="d-flex">
                  <a
                    href="https://twitter.com/"
                    className="border border-light-subtle py-1 px-2 rounded-5 me-1"
                  >
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="border border-light-subtle py-1 px-2 rounded-5 mx-1"
                  >
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    className="border border-light-subtle py-1 px-2 rounded-5 mx-1"
                  >
                    <i
                      className="fa-brands fa-facebook"
                      style={{ filter: "invert(100%)", color: "#000000" }}
                    ></i>
                  </a>
                  <a
                    href="https://web.whatsapp.com/"
                    className="border border-light-subtle py-1 px-2 rounded-5 mx-1"
                  >
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-0 border-top border-white mt-4 pt-3">
            <div className="col-12 col-md-8">
              <p className="text-center text-md-start">
                Copyright © 2023.Todos los derechos reservados.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <img
                src={Payments}
                alt="Imagen de Metodos de Pago"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
