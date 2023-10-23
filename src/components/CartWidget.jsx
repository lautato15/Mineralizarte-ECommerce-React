import React from "react";
import "./CartWidget.css";
import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

function CartWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="bg-dark border-0 text-white fs-4 btn-Cart-Canvas btn btn-dark"
        onClick={handleShow}
      >
        <i className="bi bi-cart"></i>
        <span className="position-absolute   start-75 translate-middle badge rounded-pill bg-danger badge-Cart-Canvas">
          8
        </span>
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header className="bg-body-secondary" closeButton>
          <Offcanvas.Title>CARRITO de COMPRAS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="main-Canvas">
            {/* <MainCartCanvas handleClose={handleClose} />
            <FooterCartCanvas
              handleClose={handleClose}
              handleOpenModal={handleOpenModal}
            /> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;
