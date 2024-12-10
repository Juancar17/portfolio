import {
  faCode,
  faEnvelope,
  faHammer,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Manejar el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Añadir el listener al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top" // Navbar fijo en la parte superior
      className={`px-3 ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Navbar.Brand href="#">Juancar Dev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#about">
            <FontAwesomeIcon icon={faCode} className="me-1" />
            Sobre mí
          </Nav.Link>
          <Nav.Link href="#projects">
            <FontAwesomeIcon icon={faHandsHoldingCircle} className="me-1" />
            Proyectos
          </Nav.Link>
          <Nav.Link href="#skills">
            <FontAwesomeIcon icon={faHammer} className="me-1" />
            Habilidades
          </Nav.Link>
          <Nav.Link href="#contact">
            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
