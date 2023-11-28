import HeadBoard from "../partials/HeadBoard";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const ContactClass = "text-center fs-6  ";
  return (
    <div className="d-flex justify-content-center align-items-center flex-column fs-2 bg-dark text-white  ">
      <HeadBoard BG={"BgContact"} Text={"Contactanos"} />
      <div className="d-flex  justify-content-center align-items-center flex-column  w-100 my-5">
        <p className="">
          <i className="fa-solid fa-handcuffs" style={{ color: "#ffffff" }}></i>
        </p>
        <p className="FontGaramond fw-bold">Nencesitas ayuda?</p>
        <div className="row container w-100">
          <div className="col-12 col-md-4">
            <p className={ContactClass} style={{ letterSpacing: "2px" }}>
              PHONE
            </p>
            <p className={ContactClass + " text-white-50"}>+598-091-744-651</p>
          </div>
          <div className="col-12 col-md-4">
            <p className={ContactClass} style={{ letterSpacing: "2px" }}>
              ATENCIÓN AL CLIENTE
            </p>
            <p className={ContactClass + " text-white-50"}>
              Lunes a Viernes
              <br />
              08:00am - 04:00pm La Barra, Maldonado (UTC-03:00)
              <br />
              Sábados y Domingos cerrado.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <p className={ContactClass} style={{ letterSpacing: "2px" }}>
              DEVOLUCIONES
            </p>
            <p className={ContactClass + " text-white-50"}>
              Para obtener información sobre devoluciones y reembolsos, haga
              click
              <Link to="" className="text-decoration-none text-white ms-1">
                aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="DivContactForm">
        <div className="NotInvert">
          <p className="FontGaramond text-center fs-1 text-white">
            ¡Envíanos tus preguntas!
          </p>
          <p className="FontLato text-center fs-6 text-white">
            Nos comunicaremos con usted en el correr de dos días.
          </p>
          <form action="" className="row">
            <div className="col-12 col-md-6 d-flex flex-column my-2">
              <label htmlFor="name" className="fs-6 my-2">
                Nombre *
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column my-2">
              <label htmlFor="mail" className="fs-6 my-2">
                Correo Electrónico *
              </label>
              <input type="email" id="mail" name="mail" />
            </div>
            <div className="col-12 d-flex flex-column my-2">
              <label htmlFor="msg" className="fs-6 my-2">
                Mensaje *
              </label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-dark bg-black rounded-0 w-25 ms-auto me-auto mt-4">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
