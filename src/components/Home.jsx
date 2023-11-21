import ItemListContainer from "./ItemListContainer";
import Slide from "./home/Slide";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-black fs-2 flex-column bg-black text-white">
        <p className="my-5">Bienvenido a mi E-commerce</p>
        <Slide />
        <ItemListContainer />
      </div>
    </>
  );
}

export default Home;
