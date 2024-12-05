import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHammer, faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand href="#">
        {' '} Juancar Dev 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#about"><FontAwesomeIcon icon={faCode} /> Sobre mí</Nav.Link>
          <Nav.Link href="#projects"><FontAwesomeIcon icon={faHandsHoldingCircle} />Proyectos</Nav.Link>
          <Nav.Link href="#skills"><FontAwesomeIcon icon={faHammer} />Habilidades</Nav.Link>
          <Nav.Link href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
