import ItemListContainer from "./ItemListContainer";
import Categories from "./home/Categories";
import Favourites from "./home/Favourites";
import IconIdeas from "./home/IconIdeas";
import Slide from "./home/Slide";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-black fs-2 flex-column bg-black text-white">
        <Slide />
        <Categories />
        <Favourites />
        <IconIdeas />
      </div>
    </>
  );
}

export default Home;
