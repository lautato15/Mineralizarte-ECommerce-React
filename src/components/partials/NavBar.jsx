import { useState, useEffect } from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
function NavBar() {
  const ClassActive = "navActive text-decoration-none text-white nav-link";
  const ClassInActive = "text-decoration-none text-white nav-link";

  const [categories, setCategories] = useState(false);

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("/filedata.json");
        const data = await response.json();

        setCategories(data.categories);
      } catch (error) {
        console.error("Error call or parsing of categories:", error);
      }
    };
    callData();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
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
        <div className=" position-absolute end-0 top-0 d-flex h-100 align-items-center">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ scale: "0.7" }}
          />
          <Nav className="ms-auto me-4">
            <CartWidget />
          </Nav>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
              className="rounded-0 bg-black"
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
                          : "text-decoration-none text-white nav-link"
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
