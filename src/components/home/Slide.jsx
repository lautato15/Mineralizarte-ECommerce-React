import { Carousel, Button } from "react-bootstrap";
import "./Slide.css";
import slide1 from "../../assets/img/slide/slide1.jpg";
import slide2 from "../../assets/img/slide/slide2.jpg";
import slide3 from "../../assets/img/slide/slide3.jpg";

function Slide() {
  return (
    <Carousel className="w-100">
      <Carousel.Item>
        <img src={slide1} text="First slide" className="w-100" />
        <Carousel.Caption className="CaptionSlidePosition">
          <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <h3 className="SlideText mt-2 mt-md-0 mb-0 mb-md-2">
              Ahorra un 70%!
            </h3>
            <p className="SlideSubText"> VENTA DE MEDIO AÑO</p>
            <Button bsPrefix="BtnSlide" variant="outline-light" radius="none">
              MÁS VENDIDOS
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} text="Second slide" className="w-100" />
        <Carousel.Caption className="CaptionSlidePosition">
          <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <h3 className="SlideText mt-2 mt-md-0 mb-0 mb-md-2">
              Lo mejor de lo mejor!
            </h3>
            <p className="SlideSubText"> VENTA DE MEDIO AÑO</p>
            <Button bsPrefix="BtnSlide" variant="outline-light" radius="none">
              MÁS VENDIDOS
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} text="Third slide" className="w-100" />
        <Carousel.Caption className="CaptionSlidePosition">
          <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <h3 className="SlideText mt-2 mt-md-0 mb-0 mb-md-2">
              ¡Decile hola a la Novedad!
            </h3>
            <p className="SlideSubText"> VENTA DE MEDIO AÑO</p>
            <Button bsPrefix="BtnSlide" variant="outline-light" radius="none">
              MÁS VENDIDOS
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
