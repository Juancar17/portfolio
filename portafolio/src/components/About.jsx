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
            ¡Hola! Soy Juancar, un desarrollador full-stack apasionado por crear soluciones eficientes y elegantes. Mi enfoque principal es el desarrollo web, pero siempre estoy explorando nuevas tecnologías y desafiándome a aprender más.
          </h3>
          <h3>
            Disfruto trabajar en proyectos innovadores que mezclen creatividad y tecnología. Cuando no estoy programando, me gusta aprender sobre diseño, colaborar en equipos dinámicos y compartir conocimientos con la comunidad.
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
