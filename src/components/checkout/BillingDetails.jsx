import { useState } from "react";

function BillingDetails() {
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
    note: "",
  });
  const handleChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <h4 className="mb-5 FontGaramond fw-bold fs-3">
          Detalles de la Facturación
        </h4>
        <form action="">
          <label htmlFor="firstname">
            Nombre <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="firstname"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.firstname}
          />
          <label htmlFor="lastname">
            Apellidos <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="lastname"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.lastname}
          />
          <label htmlFor="phone">
            Telefono <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="phone"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.phone}
          />
          <label htmlFor="email">
            Correo Electrónico <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="email"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.email}
          />
          <label htmlFor="email">
            Correo Electrónico (Confirme repitiendo el correo){" "}
            <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="email"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.email}
          />
          <label htmlFor="company">Companía (opcional)</label>
          <input
            type="text"
            name="company"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.company}
          />
          <label htmlFor="address">
            Direccion <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="address"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.address}
          />
          <label htmlFor="ap">Apartamento, Unidad, etc. (opcional)</label>
          <input
            type="text"
            name="ap"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.ap}
          />
          <label htmlFor="city">
            Ciudad <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="city"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.city}
          />
          <label htmlFor="zip">
            Codigo Postal <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="zip"
            className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white"
            onChange={handleChange}
            value={billingDetails.zip}
          />
          <div className="d-flex flex-column mt-5">
            <div>
              <input
                className="input-checkbox"
                type="checkbox"
                name="createaccount"
                value="1"
              />
              <label htmlFor="createaccount" className="ms-3">
                Crear una Cuenta?
              </label>
            </div>
            <div className="mt-3 mb-5">
              <input
                className="input-checkbox"
                type="checkbox"
                name="createaccount"
                value="1"
              />
              <label htmlFor="createaccount" className="ms-3">
                Enviar a otra dirección?
              </label>
            </div>
            <label htmlFor="note">Notas del pedido (opcional)</label>
            <textarea
              type="text"
              name="note"
              className="form-control-plaintext border-bottom mb-4 text-Form bg-dark text-white w-75"
              onChange={handleChange}
              value={billingDetails.note}
              placeholder="Notas sobre su pedido o especiales para la entrega."
              rows={4}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default BillingDetails;
