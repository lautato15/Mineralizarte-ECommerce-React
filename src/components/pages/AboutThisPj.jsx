import "./AboutThisPj.css";
import Boostrap from "../../assets/img/boostrap-icon.png";
import React from "../../assets/img/react-icon.png";
import Redux from "../../assets/img/redux-icon.png";
import GitHub from "../../assets/img/github-icon.png";
import Firebase from "../../assets/img/firebase-icon.png";
import Css from "../../assets/img/css-icon.png";
import Yo from "../../assets/img/lautaroLopez.jpeg";
import { Link } from "react-router-dom";
function AboutThisPj() {
  // window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className=" fs-2 text-white bg-black h-100  Bg-Mineralizarte">
      <div className="container ">
        <div className="row CienVH">
          <div className="col-1"></div>
          <div className="col-11">
            <div className="d-flex justify-content-center align-items-start pt-5 flex-column ">
              <p className="FontGaramond fs-1 w-100 text-start LS">
                ¿Qué es Mineralizarte?
              </p>
              <p className="FontLato fs-5 w-100 text-start LS LS">
                Mineralizarte es una aplicación de comercio electrónico que
                surgió como la culminación de un recorrido a traves del Bootcamp
                en Coderhouse, una institución educativa que se especializa en
                cursos de programación entre otros. Este Bootcamp de dos meses,
                que abarca un total de 32 horas, permite a los aspirantes a
                desarrolladores acercarse a la experiencia de trabajar en un
                proyecto de mediana escala dentro de lo que es el Front End.
              </p>
              <p className="FontLato fs-5 w-100 text-start LS">
                Este trabajo final tiene como objetivo mostrar la aplicación de
                las diversas tecnologías aprendidas a lo largo del Bootcamp y re
                afirmar algunas otras que ya eran de mi conocimiento por
                estudios anteriores.
              </p>
              <p className="FontLato fs-5 w-100 text-start LS">
                La aplicación web fue desarrollada durante el transcurso de los
                dos meses de curso por mi persona, con un total de
                aproximadamente 50 horas de trabajo. Mineralizarte se presenta
                como una plataforma totalmente operativa, meticulosamente
                diseñada para ofrecer una experiencia de usuario intuitiva y
                fluida.
              </p>
              <p className="FontLato fs-5 w-100 text-start LS">
                En esta sección, puede explorar el proceso detrás de escena de
                la creación de Mineralizarte y obtener una comprensión integral
                del proceso de desarrollo detrás de nuestra aplicación de
                comercio electrónico.
              </p>
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-center align-items-start pt-5 flex-column ">
              <p className="FontGaramond fs-1 text-center text-md-start">
                TECNOLOGÍAS Y HERRAMIENTAS
              </p>
              <p className="FontLato fs-5 text-center text-md-start LS">
                Durante el bootcamp de programacion, exploramos varias
                tecnologías, cubriendo gran parte del denominado Front End y
                algunas estructuras básicas de lo que sería un Back End.
                Adquirimos experiencia práctica con FireBase para almacenar
                nuestros datos y utilizamos herramientas de manera efectiva para
                optimizar nuestros procesos de trabajo.
              </p>
              <p className="FontLato fs-5 text-center text-md-start LS">
                Para optimizar la productividad de este proyecto, seleccione
                cuidadosamente el siguiente conjunto de herramientas.
              </p>

              <div className="d-flex flex-wrap justify-content-center py-5">
                <div className="m-2">
                  <img
                    src={Boostrap}
                    alt="Imagen de Boostrap"
                    className="Invert IconT"
                  />
                </div>
                <div className="m-2">
                  <img
                    src={React}
                    alt="Imagen de React"
                    className="Invert IconT"
                  />
                </div>
                <div className="m-2">
                  <img
                    src={Redux}
                    alt="Imagen de React"
                    className="Invert IconT"
                  />
                </div>
                <div className="m-2">
                  <img
                    src={GitHub}
                    alt="Imagen de React"
                    className="Invert IconT"
                  />
                </div>
                <div className="m-2">
                  <img
                    src={Firebase}
                    alt="Imagen de React"
                    className="Invert IconT"
                  />
                </div>
                <div className="m-2">
                  <img
                    src={Css}
                    alt="Imagen de React"
                    className="Invert IconT"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-1"></div>
          <div className="col-12 col-md-7">
            <div className="d-flex justify-content-center align-items-start pt-5 flex-column ">
              <p className="FontGaramond fs-2  text-start">SOBRE MI</p>
              <p className="FontLato fs-5 text-start LS">
                Soy Desarrollador Jr FullStack && Técnico en Informatica con
                varios años de experiencia en el soporte de Infraestructuras y
                me apasiona resolver problemas. Por esta misma razon decicdi
                salir de mi zona de confort y pasarme al mundo del desarrollo.
              </p>
              <p className="FontLato fs-5  text-start LS">
                Tambien soy bailarin de danzas urbanas y me apasiona el
                movimiento y la música. Actualmente me encuentro radicado en
                Montevideo - Uruguay Nomada Digital!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="CardOfMe pt-4 pb-3  border mt-4">
              <img
                src={Yo}
                className="Yo"
                alt="Foto de Lautaro Lopez, desarrollador del proyecto."
              />
              <h5 className="mt-3 text-center">Lautaro López Diaz</h5>
              <h6 className="text-center">Full Stack Developer</h6>
              <div>
                <a
                  href="https://www.linkedin.com/in/lautaro-lopez-diaz/ "
                  className="text-decoration-none text-white"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </a>
                <a
                  href="https://github.com/lautato15 "
                  className="text-decoration-none text-white"
                >
                  <i className="fa-brands fa-github pe-2 fs-3"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutThisPj;
