import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Projects() {
  const projects = [
    {
      title: 'AeroPark24,',
      description: "Es una aplicación diseñada para facilitar la reserva y gestión de aparcamiento en el aeropuerto. Los usuarios pueden realizar reservas, gestionar sus vehículos y recibir servicios personalizados de manera eficiente y segura.",
      link: 'http://aeropark24.infy.uk/',
    },
    {
      title: 'Proyecto 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo veritatis nulla enim, dolor consequatur ipsum, voluptas quas nobis, doloribus quos nesciunt corporis tenetur at magnam quae dolores. Facere, nemo!',
      link: '#',
    },
    {
      title: 'Proyecto 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo veritatis nulla enim, dolor consequatur ipsum, voluptas quas nobis, doloribus quos nesciunt corporis tenetur at magnam quae dolores. Facere, nemo!',
      link: '#',
    },
  ];

  return (
    <Container id="projects" className="my-5">
       <h2 className="text-center mb-4">Proyectos</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
             <Card className="mb-2 text-muted" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                 variant="dark"
                 className="w-100 h-100"
                 size="lg"
                 href={project.link}>
                    Ir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
