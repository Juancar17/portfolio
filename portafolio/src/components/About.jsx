import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../assets/1.png';

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.querySelector('#about');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);
  return (
    <Container id="about" className="my-4">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Sobre mí</h2>
          <h3>
          ¡Hola! Soy Juan Carlos, estudiante en desarrollo Full-Stack con un enfoque en el diseño y desarrollo de aplicaciones web modernas. Estoy en búsqueda de una oportunidad para realizar prácticas profesionales y adquirir experiencia en un entorno colaborativo donde pueda contribuir con mis conocimientos y seguir aprendiendo.
          </h3>
          <h3>
          Me apasiona trabajar en proyectos innovadores que integren creatividad y tecnología. Valoro el aprendizaje continuo, el trabajo en equipo, y me motiva la idea de aportar valor mientras crezco profesionalmente en el mundo del desarrollo web.
          </h3>
        </Col>
        <Col md={6}>
        <img
          src={logo1}
          alt="Logo"
          className="d-inline-block align-top"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
