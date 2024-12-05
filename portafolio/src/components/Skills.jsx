import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

function Skills() {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'];

  // Estados para controlar el modal
  const [show, setShow] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

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
        <Modal.Body>
          Aquí puedes agregar información más detallada sobre <b>{selectedSkill}</b>.
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
