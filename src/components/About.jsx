// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo1 from "../assets/1.png";
import "./css/About.css"; // Archivo de estilos externo

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <Container id="about" className="my-5 about-section">
      <Row className="align-items-center">
        {/* Columna de Texto */}
        <Col md={6} className="about-text">
          <h2 className="mb-4">Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Juan Carlos</strong>, estudiante en desarrollo
            <strong> Full-Stack</strong> con un enfoque en el diseño y
            desarrollo de aplicaciones web modernas. Estoy en búsqueda de una
            oportunidad para realizar <strong>prácticas profesionales</strong> y
            adquirir experiencia en un entorno colaborativo donde pueda
            contribuir con mis conocimientos y seguir aprendiendo.
          </p>
          <p>
            Me apasiona trabajar en proyectos innovadores que integren{" "}
            <strong>creatividad</strong> y <strong>tecnología</strong>. Valoro
            el aprendizaje continuo, el trabajo en equipo, y me motiva la idea
            de aportar valor mientras crezco profesionalmente en el mundo del
            desarrollo web.
          </p>
        </Col>

        {/* Columna de Imagen */}
        <Col md={6} className="text-center about-image">
          <img
            src={logo1}
            alt="Juan Carlos - Logo"
            loading="lazy"
            className="img-fluid rounded shadow"
            aria-label="Imagen representativa de Juan Carlos"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
