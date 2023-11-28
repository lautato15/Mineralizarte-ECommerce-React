import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/partials/NavBar";
import AboutThisPj from "./components/pages/AboutThisPj";
import Contact from "./components/pages/Contact";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <div className="bg-dark Father">
      <NavBar />
      <div className="flex-grow-1 bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ItemListContainer />} />
          <Route path="/about" element={<AboutThisPj />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:catid" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
