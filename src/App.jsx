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
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqPk_f_TsJlCxTehde-JSrFWqNOYrUhE",
  authDomain: "mineralizarte-ecommerce.firebaseapp.com",
  projectId: "mineralizarte-ecommerce",
  storageBucket: "mineralizarte-ecommerce.appspot.com",
  messagingSenderId: "831616384760",
  appId: "1:831616384760:web:f29f4a6d0c31027c78050d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
