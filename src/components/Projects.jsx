import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Projects.css";

// Importar imágenes desde 'src/assets'
import image2 from "../assets/2.png";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/5.png";

const Projects = () => {
  const projects = [
    {
      title: "AeroPark24",
      description:
        "Aplicación para la gestión de reservas de aparcamiento en el aeropuerto. Facilita reservas y ofrece servicios personalizados.",
      link: "http://aeropark24.infy.uk/",
      image: image2,
    },
    {
      title: "Bakery-Shop",
      description:
        "Una Bakery-Shop que permite a los clientes ordenar y pagar por productos de panadería. Creada con HTML y CSS.",
      link: "https://github.com/Juancar17/Bakery-Shop",
      image: image3,
    },
    {
      title: "Ricky & Morty - API",
      description:
        "Implementación de la API de Rick and Morty utilizando jQuery y Bootstrap para el diseño. Asi como el manejo de búsqueda de personajes y episodios",
      link: "https://github.com/Juancar17/Ricky-Morty",
      image: image5,
    },
    {
      title: "Fake-Store API",
      description:
        "Tienda E-Commerce utilizando React y Node.js, integrando una API para productos.",
      link: "https://fake-store1-v3am.vercel.app/",
      image: image4,
    },
    {
      title: "Kafé con K",
      description:
        "Pagina web de una cafetería, con un diseño minimalista y elegante. Creada con React y Tailwind.",
      link: "https://kafecon-k.vercel.app/",
      image: image6,
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
