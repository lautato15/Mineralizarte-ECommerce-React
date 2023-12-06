import React from "react";
import "./CartWidget.css";
import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import MainCartCanvas from "./CartWidget/MainCartCanvas";
import FooterCartCanvas from "./CartWidget/FooterCartCanvas";

function CartWidget() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    cart.length > 0
      ? setShow(true)
      : toast.error(" Debes agregar al menos un producto  al carro.");
  };

  return (
    <>
      <Button
        className="bg-dark border-0 text-white fs-5 btn btn-dark"
        onClick={handleShow}
      >
        <i className="bi bi-cart"></i>
        <span className="position-absolute   start-75 translate-middle badge rounded-pill bg-danger badge-Cart-Canvas">
          {Number(cart.reduce((total, item) => total + item.counter, 0))}
        </span>
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header
          className="bg-secondary text-white HeaderCartCanvas"
          closeButton
        >
          <Offcanvas.Title>CARRITO de COMPRAS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark BodyCartCanvas">
          <MainCartCanvas handleClose={handleClose} />
          <FooterCartCanvas
            handleClose={handleClose}
            cartLength={cart.length}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;
