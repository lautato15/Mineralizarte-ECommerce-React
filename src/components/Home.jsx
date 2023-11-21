import ItemListContainer from "./ItemListContainer";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-black fs-2 flex-column">
        <p className="my-5">Bienvenido a mi E-commerce</p>
        <ItemListContainer />
      </div>
    </>
  );
}

export default Home;
