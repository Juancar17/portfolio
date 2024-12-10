// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Projects.css";

const Projects = () => {
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
        "Una Bakery-Shop es una aplicación que permite a los clientes ordenar y pagar por sus productos de panadería. Creada solamente con HTML y CSS.",
      link: "#",
      image: "../src/assets/3.jpg",
    },
    {
      title: "Ricky & Morty - API",
      description:
        "Implementación de la API Ricky and Morty utilizando la librería jQuery de JavaScript. Ademas de Boostrap para el diseño",
      link: "#",
      image: "../src/assets/5.jpg",
    },
    {
      title: "Fake-Store API",
      description:
        "Implementación de tienda E-Commerce utilizando React y Node.js.",
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
      <h2 className="text-center mb-5">Mis Proyectos</h2>
      <Row className="g-4 justify-content-center">
        {projects.map(({ title, description, link, image }, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="project-card shadow-lg">
              <div className="project-image-wrapper">
                <img
                  src={image}
                  alt={title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-button"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
              <div className="project-content text-center p-4">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
