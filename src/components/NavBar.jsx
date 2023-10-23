import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container className="position-relative">
        <Navbar.Brand href="#home" className="text-white">
          <i class="fa-solid fa-gem  me-3"></i>
          Mineralizarte
        </Navbar.Brand>
        <div className=" position-absolute end-0 top-0 d-flex">
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
            <Nav.Link href="#tienda" className="text-white">
              Tienda
            </Nav.Link>
            <Nav.Link href="#sobrenos" className="text-white">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="#contacto" className="text-white">
              Contacto
            </Nav.Link>
            <NavDropdown
              title="Blog"
              id="collasible-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#Rings">Anillos</NavDropdown.Item>
              <NavDropdown.Item href="#Hoops">Aros</NavDropdown.Item>
              <NavDropdown.Item href="#Pendants">Colgantes</NavDropdown.Item>

              <NavDropdown.Item href="#Bracelets">Brazaletes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
