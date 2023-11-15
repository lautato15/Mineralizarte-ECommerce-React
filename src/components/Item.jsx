import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Item({ product }) {
  return (
    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem", height: "12rem" }}>
        <img
          className="img-fluid"
          src={product.imagen}
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <Card.Body className="align-items-start flex-column d-flex">
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text className="mb-auto mt-auto">
            {product.descripcion}
          </Card.Text>
          <Button className="" variant="primary">
            Ver detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
