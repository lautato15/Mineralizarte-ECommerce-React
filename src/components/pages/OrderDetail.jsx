import "./OrderDetail.css";
import CheckList from "../../assets/img/checklist.png";

function OrderDetail() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center h-100 text-white py-5 container">
        <div className="row w-100">
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center justify-content-center flex-column ">
              <h2>Genial!</h2>
              <h4>Estamos trabajando en tu orden!</h4>
              <img
                src={CheckList}
                alt="Imagen del visto bueno"
                className="ImgCheck"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="fs-2 text-center">Detalles de la orden</h5>
            <div className="d-flex w-100 pt-4">
              <p className="fs-5">Tipo de envío: </p>
              <p className="ms-auto fs-5">Gratis</p>
            </div>
            <div className="d-flex w-100 pt-2">
              <p className="fs-5">Metodo de Pago: </p>
              <p className="ms-auto fs-5">Transferencia Bancaria</p>
            </div>
            <div className="d-flex w-100 pt-2">
              <p className="fs-5">Fecha: </p>
              <p className="ms-auto fs-5">11/10/2023</p>
            </div>
            <div className="d-flex w-100 pt-2">
              <p className="fs-5">Estado: </p>
              <p className="ms-auto fs-5">Pendiente</p>
            </div>
            <div className="d-flex w-100 pt-2">
              <p className="fs-5">SubTotal: </p>
              <p className="ms-auto fs-5">$25</p>
            </div>
            <div className="d-flex w-100 pt-2 border border-whiteb px-3 pt-3 pb-1">
              <p className="fs-5 fw-bold">Total: </p>
              <p className="ms-auto fs-5 fw-bold">$25</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
