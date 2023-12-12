import { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function NavBar() {
  const ClassActive =
    "navActive text-decoration-none text-white nav-link ps-3 m-1";
  const ClassInActive =
    "text-decoration-none text-white nav-link ps-3 BtnHover m-1";

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    const callCategories = async () => {
      try {
        const db = getFirestore();
        const categoriesCollection = collection(db, "categories");
        let dataCategories;
        await getDocs(categoriesCollection).then((snapshot) => {
          dataCategories = snapshot.docs.map((doc) => {
            let category = {
              ...doc.data(),
              id: Number(doc.id),
            };
            return category;
          });

          setCategories(dataCategories);
        });
      } catch (error) {
        console.error("Error al llamar a las categorias en el Navbar:", error);
      }
    };
    callCategories();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      className="bg-black Navbar-Text FontLato FixedNavbar"
      ref={ref}
    >
      <Container className="position-relative">
        <Navbar.Brand className="text-white me-0">
          <Link to="/" className="text-decoration-none text-white">
            <img
              src={Logo}
              alt=""
              className="me-2 pb-1"
              style={{ width: "45px", height: "45px" }}
            />
            MineralizArte
          </Link>
        </Navbar.Brand>
        <div className=" position-absolute end-0 top-0 d-flex  align-items-center mt-2">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="rounded-0"
            style={{
              scale: "0.7",
            }}
          />
          <Nav className="ms-auto me-4 ">
            <CartWidget />
          </Nav>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto bg-black p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
            >
              Tienda
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </NavLink>

            <NavDropdown
              title="Categorias"
              id="collasible-nav-dropdown"
              className="rounded-0 bg-black ps-1 pt-1 BtnHover"
            >
              {categories.length > 0 &&
                categories.map((c) => {
                  return (
                    <NavLink
                      key={c.id}
                      to={`/category/${c.id}`}
                      className={({ isActive }) =>
                        isActive
                          ? ClassActive
                          : "text-decoration-none text-white nav-link ps-3 BtnHover"
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {c.name}
                    </NavLink>
                  );
                })}
            </NavDropdown>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
              onClick={() => setIsOpen(false)}
            >
              Sobre Este Proyecto!
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
