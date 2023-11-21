import ItemListContainer from "./ItemListContainer";
import Categories from "./home/Categories";
import Slide from "./home/Slide";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-black fs-2 flex-column bg-black text-white">
        <Slide />
        <Categories />
        <ItemListContainer />
      </div>
    </>
  );
}

export default Home;
