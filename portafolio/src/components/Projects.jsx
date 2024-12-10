// eslint-disable-next-line no-unused-vars
import "../css/Projects.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Projects() {
  const projects = [
    {
      title: "AeroPark24",
      description:
        "Aplicación para la gestión de reservas de aparcamiento en el aeropuerto. Facilita reservas y ofrece servicios personalizados.",
      link: "http://aeropark24.infy.uk/",
      image: "../src/assets/2.png",
    },
    {
      title: "Bakery-Shop",
      description:
        "Una calculadora interactiva que permite a los usuarios planificar y gestionar sus gastos de viaje de manera sencilla.",
      link: "#",
      image: "../src/assets/3.jpg",
    },
    {
      title: "Ricky & Morty - API ",
      description:
        "Implementación del clásico juego Tetris utilizando HTML, CSS y JavaScript puro, con lógica de colisiones y puntuación.",
      link: "#",
      image: "../src/assets/4.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-5">Proyectos</h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="project-card shadow-sm border-0">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">
                  {project.title}
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  {project.description}
                </Card.Text>
                <Button
                  variant="dark"
                  href={project.link}
                  target="_blank"
                  className="mt-auto"
                >
                  Ver Proyecto
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
