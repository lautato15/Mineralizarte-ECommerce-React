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
  const ClassActive = "navActive text-decoration-none text-white nav-link ps-3";
  const ClassInActive = "text-decoration-none text-white nav-link ps-3";

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("SE CIERRA");
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
      expand={isOpen}
      className="bg-black Navbar-Text FontLato FixedNavbar"
    >
      <Container className="position-relative">
        <Navbar.Brand className="text-white">
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
        <div className=" position-absolute end-0 top-0 d-flex  align-items-center">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
              scale: "0.7",
            }}
          />
          <Nav className="ms-auto me-4">
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
            {/* <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
            >
              Sobre Nosotros
            </NavLink> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? ClassActive : ClassInActive
              }
            >
              Contacto
            </NavLink>

            <NavDropdown
              title="Categorias"
              id="collasible-nav-dropdown"
              className="rounded-0 bg-black ps-3"
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
                          : "text-decoration-none text-white nav-link ps-3"
                      }
                    >
                      {c.name}
                    </NavLink>
                  );
                })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
