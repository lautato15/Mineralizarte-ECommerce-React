import HeadBoard from "../partials/HeadBoard";
import BillingDetails from "../checkout/BillingDetails";
import Ticket from "../checkout/Ticket";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cleanCart } from "../../redux/cartSlice";
import { v4 as uuidv4 } from "uuid";

function Checkout() {
  const dispatch = useDispatch();
  const dateToday = new Date();
  const dateOfOrder = format(dateToday, "dd/MM/yyyy HH:mm:ss", { locale: es });
  const navigate = useNavigate();
  const { shipping } = useParams();
  const [orderId, setOrderId] = useState(null);

  const cart = useSelector((state) => state.cart);

  let subTotal = 0;
  cart.forEach((i) => {
    subTotal += i.price * i.counter;
  });

  const [billingDetails, setBillingDetails] = useState({
    firstname: "",
    lastname: "",
    company: "",
    address: "",
    ap: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    email2: "",
    note: "",
  });

  const [paymentDetails, setPaymentDetails] = useState("");
  const [shippingDetails, setShippingDetails] = useState("");

  function handleChangePayment(e) {
    setPaymentDetails(e.target.value);
  }

  const handleShipping = (e) => setShippingDetails(e.target.value);
  function validateOrder() {
    if (
      billingDetails.firstname === "" ||
      billingDetails.lastname === "" ||
      billingDetails.phone === "" ||
      billingDetails.email === "" ||
      billingDetails.email2 === "" ||
      billingDetails.address === "" ||
      billingDetails.city === "" ||
      billingDetails.zip === "" ||
      paymentDetails === "" ||
      shippingDetails === ""
    ) {
      toast.error(
        "Faltan datos esenciales para confirmar la orden, revisa los campos que estan marcados con un * rojo!"
      );
    } else {
      if (billingDetails.email != billingDetails.email2)
        toast.error("Los Correos no coinciden!");
      else return true;
    }
  }

  async function handleSendOrder() {
    if (validateOrder()) {
      let uniqueId = uuidv4();
      const Order = {
        id: uniqueId,
        details: billingDetails,
        shipping: shippingDetails,
        payment: paymentDetails,
        dateOfOrder: dateOfOrder,
        products: cart,
        total: subTotal,
      };

      try {
        const db = getFirestore();

        const itemsCollection = collection(db, "products");
        let dataProducts;
        await getDocs(itemsCollection).then((snapshot) => {
          dataProducts = snapshot.docs.map((doc) => {
            let product = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return product;
          });
          const outOfStock = dataProducts
            .filter((product) => cart.some((item) => item.id === product.id))
            .filter((product, index) => {
              return product.stock < cart[index].counter;
            });

          if (outOfStock.length > 0) {
            for (let i = 0; i < outOfStock.length; i++) {
              toast.error(
                `No hay stock suficiente para los productos seleccionados. Puedes comprar hasta ${outOfStock[i].stock} unidades de ${outOfStock[i].name}.`
              );
            }
            return;
          }
          const ordersCollection = collection(db, "orders");
          addDoc(ordersCollection, Order).then((doc) => {
            setOrderId(doc.id);
            return;
          });
        });
      } catch (error) {
        console.error("Error guardando la orden:", error);
      }
    }
  }
  useEffect(() => {
    if (orderId) {
      navigate(`/order/${orderId}`);
      dispatch(cleanCart());
    }
  }, [orderId]);
  useEffect(() => {
    cart.length === 0 && navigate("/shop");
  }, [cart]);
  useEffect(() => {
    shipping != undefined && setShippingDetails(shipping);
  }, [cart]);

  return (
    <>
      <div className="bg-dark text-white FontLato">
        <HeadBoard Text={"Confirma tu orden!"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-lg-7 ">
              <BillingDetails
                billingDetails={billingDetails}
                setBillingDetails={setBillingDetails}
              />
            </div>
            <div className="col-12 col-lg-5 ">
              <Ticket
                paymentDetails={paymentDetails}
                setPaymentDetails={setPaymentDetails}
                shippingDetails={shippingDetails}
                setShippingDetails={setShippingDetails}
                shipping={shipping}
                subTotal={subTotal}
                handleChangePayment={handleChangePayment}
                handleShipping={handleShipping}
                cart={cart}
                handleSendOrder={handleSendOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
