import "./OrderDetail.css";
import CheckList from "../../assets/img/checklist.png";
import {
  Link,
  unstable_HistoryRouter,
  useLocation,
  useParams,
} from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import LoadingOrder from "../partials/LoadingOrder";

function OrderDetail() {
  const { orderId } = useParams();
  const [flagSpinner, setFlagSpinner] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const callOrder = async () => {
      try {
        const db = getFirestore();

        let dataOrder;
        const order = doc(db, "orders", String(orderId));

        await getDoc(order).then((snapshot) => {
          if (snapshot.exists()) {
            dataOrder = snapshot.data();
            setOrderDetails(dataOrder);
          } else console.error(error, "No se encontro el producto");
        });
      } catch (error) {
        console.error("Error al traer alguna de las ordenes", error);
      }
    };
    callOrder();
  }, [orderId]);

  setTimeout(function () {
    setFlagSpinner(false);
  }, 5000);
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    orderDetails &&
    (flagSpinner ? (
      <LoadingOrder />
    ) : (
      <>
        <div className="bg-dark">
          <div className="d-flex align-items-center justify-content-center h-100 text-white py-5 container pe-4">
            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <h2 className="FontLato">Genial!</h2>
                  <h4 className="FontLato">Estamos trabajando en tu orden!</h4>
                  <img
                    src={CheckList}
                    alt="Imagen del visto bueno"
                    className="ImgCheck"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column FontLato">
                <h5 className="fs-1 text-center FontGaramond">
                  Detalles de la orden
                </h5>
                <div className="d-flex w-100 pt-4">
                  <p className="fs-5">Orden: </p>
                  <p className="ms-auto pt-1">{orderDetails.id}</p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">Tipo de envío: </p>
                  <p className="ms-auto fs-6 pt-1">
                    {orderDetails.shipping.toUpperCase()}
                  </p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">Metodo de Pago: </p>
                  <p className="ms-auto fs-6 pt-1">
                    {orderDetails.payment.toUpperCase()}
                  </p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">Fecha: </p>
                  <p className="ms-auto fs-5">{orderDetails.dateOfOrder}</p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5 ">Estado: </p>
                  <p className="ms-auto fs-5">Pendiente</p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">Dirección: </p>
                  <p className="ms-auto fs-5">{orderDetails.details.address}</p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">Contacto: </p>
                  <p className="ms-auto fs-6 pt-1">
                    {orderDetails.details.email} o {orderDetails.details.phone}
                  </p>
                </div>
                <div className="d-flex w-100 pt-2">
                  <p className="fs-5">SubTotal: </p>
                  <p className="ms-auto fs-5">${orderDetails.total}</p>
                </div>
                <div className="d-flex w-100 pt-2 border border-whiteb px-3 pt-3 pb-1">
                  <p className="fs-5 fw-bold">Total: </p>
                  <p className="ms-auto fs-5 fw-bold">${orderDetails.total}</p>
                </div>
                <Link
                  to="/shop"
                  className="BgGold border-0  p-3 ms-auto mt-4 text-black text-decoration-none"
                >
                  Volver a la tienda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    ))
  );
}

export default OrderDetail;
