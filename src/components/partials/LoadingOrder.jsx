import "./LoadingOrder.css";
function LoadingOrder() {
  return (
    <>
      <div className="Body d-flex flex-column">
        <div className="Cont ">
          <div className="Ring"></div>
          <div className="Ring"></div>
          <div className="Ring"></div>
          <div className="Ring"></div>
        </div>
        <h2 className="FontGaramond text-white" style={{ marginTop: "150px" }}>
          Estamos procesando tu orden...
        </h2>
      </div>
    </>
  );
}

export default LoadingOrder;
