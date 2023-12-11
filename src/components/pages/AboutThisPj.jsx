import "./AboutThisPj.css";
function AboutThisPj() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className=" text-black fs-2 text-white bg-dark h-100  Bg-Mineralizarte">
      <div className="container ">
        <div className="row CienVH">
          <div className="col-1"></div>
          <div className="col-8">
            <div className="d-flex justify-content-center align-items-start pt-5 flex-column ">
              <p className="FontGaramond fs-2 w-75 text-start">
                ¿Qué es Mineralizarte?{" "}
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                Mineralizarte es una aplicación de comercio electrónico que
                surgió como la culminación de un recorrido del Bootcamp en
                Coderhouse, una institución educativa que se especializa en
                cursos de programación entre otros. Este Bootcamp de dos meses,
                que abarca un total de 32 horas, permite a los aspirantes a
                desarrolladores acercarse a la experiencia de trabajar en un
                proyecto de mediana escala dentro de lo que es el Front End.
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                Este trabajo final tiene como objetivo mostrar la aplicación de
                las diversas tecnologías aprendidas a lo largo del Bootcamp mas
                algunas otras que ya eran de mi conocimiento por estudios
                anteriores.
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                La aplicación web fue desarrollada durante el transcurso de los
                dos meses de curso por mi persona, con un total de
                aproximadamente 50 horas de trabajo. Mineralizarte se presenta
                como una plataforma totalmente operativa, meticulosamente
                diseñada para ofrecer una experiencia de usuario intuitiva y
                fluida.
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                En esta sección, puede explorar el proceso detrás de escena de
                la creación de Mineralizarte y obtener una comprensión integral
                del proceso de desarrollo detrás de nuestra aplicación de
                comercio electrónico.
              </p>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-1"></div>
          <div className="col-8">
            <div className="d-flex justify-content-center align-items-start pt-5 flex-column ">
              <p className="FontGaramond fs-2 w-75 text-start">
                TECNOLOGÍAS Y HERRAMIENTAS
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                Durante el bootcamp de programacion, exploramos varias
                tecnologías, cubriendo gran parte del denominado Front End y
                algunas estructuras básicas de lo que sería un Back End.
                Adquirimos experiencia práctica con FireBase para almacenar
                nuestros datos y utilizamos herramientas de manera efectiva para
                optimizar nuestros procesos de trabajo.
              </p>
              <p className="FontGaramond fs-4 w-75 text-start">
                Para optimizar la productividad de este proyecto, seleccione
                cuidadosamente el siguiente conjunto de herramientas.
              </p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutThisPj;
