import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";

import "./css/Skills.css"; // Archivo externo para estilos

function Skills() {
  const skills = [
    { name: "React", icon: FaReact, url: "https://github.com/Juancar17" },
    { name: "JavaScript", icon: FaJs, url: "https://github.com/Juancar17/" },
    { name: "HTML", icon: FaHtml5, url: "https://github.com/Juancar17/" },
    { name: "CSS", icon: FaCss3Alt, url: "https://github.com/Juancar17/" },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      url: "https://github.com/Juancar17",
    },
    { name: "PHP", icon: FaPhp, url: "https://github.com/Juancar17" },
  ];

  const skillDetails = {
    React: `
      - Creé un portafolio interactivo utilizando React, dividiendo la interfaz en componentes reutilizables.
      - Utilicé React Hooks para manejar estados y efectos dinámicos.
    `,
    JavaScript: `
      - Desarrollé lógicas dinámicas para aplicaciones, como validaciones y juegos interactivos.
    `,
    HTML: `
      - Estructuré la base de aplicaciones web con etiquetas semánticas y accesibles.
    `,
    CSS: `
      - Diseñé estilos responsivos utilizando Flexbox y Grid, añadiendo transiciones y animaciones.
    `,
    Bootstrap: `
      - Implementé componentes de Bootstrap personalizados y responsivos para interfaces modernas.
    `,
    PHP: `
      - Creé backend dinámico para aplicaciones, incluyendo manejo de bases de datos y formularios.
    `,
  };

  const [modalInfo, setModalInfo] = useState(null);

  const handleShow = (skill) => setModalInfo(skill);
  const handleClose = () => setModalInfo(null);

  return (
    <Container id="skills" className="my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className="text-center shadow-sm skill-card"
              role="button"
              aria-label={`Más información sobre ${skill.name}`}
              onClick={() => handleShow(skill)}
            >
              <Card.Body>
                {React.createElement(skill.icon, {
                  size: "3em",
                  className: "mb-3 text-primary",
                })}
                <Card.Title className="fw-bold">{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {modalInfo && (
        <Modal show centered onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {React.createElement(modalInfo.icon, { className: "me-2" })}
              {modalInfo.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ whiteSpace: "pre-line" }}>
            {skillDetails[modalInfo.name] || "No hay información disponible."}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              href={modalInfo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
              Ver Proyecto
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Skills;
