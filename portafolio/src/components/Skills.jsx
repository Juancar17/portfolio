import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

function Skills() {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP'];

  // Estados para controlar el modal
  const [show, setShow] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  // Detalles de cada habilidad
  const skillDetails = {
    React: `
      - Creé un portafolio interactivo utilizando React, dividiendo la interfaz en componentes reutilizables como 'Sobre mí', 'Skills' y 'Proyectos'.
      - Utilicé React Hooks como useState para manejar estados, y useEffect para agregar efectos dinámicos como animaciones.
      - Implementé interacción entre componentes, como botones que abren modales personalizados.
    `,
    JavaScript: `
      - Desarrollé funcionalidades dinámicas en aplicaciones web, como sistemas de interacción basados en eventos (onClick, onSubmit).
      - Construí una calculadora de gastos de viaje que valida entradas y calcula resultados en tiempo real.
      - Creé un juego estilo Tetris con lógica en JavaScript puro, manejando colisiones, movimientos y puntuación.
    `,
    HTML: `
      - Estructuré páginas web siguiendo las mejores prácticas de semántica, utilizando etiquetas como <header>, <section>, y <footer>.
      - Construí la base de mi portafolio desde cero, asegurándome de que fuera accesible y fácil de leer.
    `,
    CSS: `
      - Diseñé estilos personalizados utilizando CSS puro y combinándolo con Bootstrap para crear interfaces responsivas y modernas.
      - Implementé animaciones suaves, como transiciones en botones y hover effects para mejorar la experiencia del usuario.
      - Usé CSS Grid y Flexbox para lograr diseños perfectamente alineados en múltiples resoluciones.
    `,
    Bootstrap: `
      - Utilicé Bootstrap para acelerar el desarrollo de interfaces, como en las tarjetas de "Proyectos" y el diseño de botones en la sección "Skills".
      - Personalicé componentes de Bootstrap con clases CSS para que reflejaran un diseño único.
      - Implementé un diseño responsivo que asegura que mi portafolio se vea bien en dispositivos móviles y de escritorio.
    `,
    PHP: `
      - Diseñé aplicaciones dinámicas utilizando PHP como lenguaje de servidor.
      - Implementé formularios que envían datos al servidor para su validación y almacenamiento.
      - Conecté aplicaciones web a bases de datos MySQL para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
      - Desarrollé funcionalidades de autenticación de usuarios, como inicio de sesión y registro, asegurando la seguridad de los datos con hashes de contraseñas.
      - Creé scripts de backend para manejar interacciones personalizadas, como procesamiento de formularios de contacto.
    `,
  };

  // Funciones para abrir y cerrar el modal
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
          <Col key={index} md={2} className="mb-5">
            <Button
              variant="dark"
              className="w-100 h-100"
              size="lg"
              onClick={() => handleShow(skill)}
            >
              {skill}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSkill}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: 'pre-line' }}>
          {skillDetails[selectedSkill] || 'No hay información disponible para esta habilidad.'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Skills;
