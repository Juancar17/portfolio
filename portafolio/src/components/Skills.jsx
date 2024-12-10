import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: faReact,
      url: "https://github.com/Juancar17",
    },
    {
      name: "JavaScript",
      icon: faJs,
      url: "https://github.com/Juancar17/",
    },
    {
      name: "HTML",
      icon: faHtml5,
      url: "https://github.com/Juancar17/",
    },
    {
      name: "CSS",
      icon: faCss3Alt,
      url: "https://github.com/Juancar17/",
    },
    {
      name: "Bootstrap",
      icon: faBootstrap,
      url: "https://github.com/Juancar17",
    },
    {
      name: "PHP",
      icon: faPhp,
      url: "https://github.com/Juancar17",
    },
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

  // Estados para controlar el modal
  const [show, setShow] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (skill) => {
    setSelectedSkill(skill);
    setShow(true);
  };

  return (
    <Container id="skills" className="my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className="text-center shadow-sm skill-card"
              onClick={() => handleShow(skill)}
            >
              <Card.Body>
                <FontAwesomeIcon
                  icon={skill.icon}
                  size="3x"
                  className="mb-3 text-primary"
                />
                <Card.Title>{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={selectedSkill.icon} className="me-2" />
            {selectedSkill.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-line" }}>
          {skillDetails[selectedSkill.name] || "No hay información disponible."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={selectedSkill.url} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
            Ver Proyecto
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Estilo personalizado */}
      <style jsx>{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .text-primary {
          color: #0d6efd !important;
        }
      `}</style>
    </Container>
  );
}

export default Skills;
