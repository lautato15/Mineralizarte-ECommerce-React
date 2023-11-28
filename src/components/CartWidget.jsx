import React from "react";
import "./CartWidget.css";
import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartWidget() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="bg-dark border-0 text-white fs-5 btn btn-dark"
        onClick={handleShow}
      >
        <i className="bi bi-cart"></i>
        <span className="position-absolute   start-75 translate-middle badge rounded-pill bg-danger badge-Cart-Canvas">
          {cart.reduce((total, item) => total + item.counter, 0)}
        </span>
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header className="bg-body-secondary" closeButton>
          <Offcanvas.Title>CARRITO de COMPRAS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex h-100 align-items-center justify-content-center fw-bold">
          DATA CART
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;
