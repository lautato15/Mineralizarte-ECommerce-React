import HeadBoard from "../partials/HeadBoard";
import BillingDetails from "../checkout/BillingDetails";
import Ticket from "../checkout/Ticket";

function Checkout() {
  return (
    <>
      <div className="bg-dark text-white FontLato">
        <HeadBoard Text={"Confirma tu orden!"} />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-7 ">
              <BillingDetails />
            </div>
            <div className="col-12 col-md-5 ">
              <Ticket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
