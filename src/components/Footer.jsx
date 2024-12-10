import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Juan Carlos. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              <FontAwesomeIcon icon={faLinkedin} className="me-2" />
              LinkedIn
            </a>
            <a
              href="mailto:tuemail@gmail.com"
              className="text-light"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Correo
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
