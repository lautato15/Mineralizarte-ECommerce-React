import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
function Item({ product }) {
  const navigate = useNavigate();
  return (
    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: "18rem", height: "100%" }}>
        <img
          className="img-fluid"
          src={product.image}
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <Card.Body className="align-items-start flex-column d-flex">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="mb-auto mt-auto fs-6">
            {product.description}
          </Card.Text>

          <Link
            className="text-decoration-none text-white bg-black btn border-black border-2 "
            to={`/item/${product.id}`}
          >
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
