import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:4000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensaje enviado con éxito.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Hubo un problema al enviar el mensaje.");
    }
  };

  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4">Contáctame</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Escribe tu mensaje"
            required
          />
        </Form.Group>
        <Button variant="dark" className="w-100 h-100" size="lg" type="submit">
          Enviar
        </Button>
      </Form>
      {status && <p className="mt-3 text-center">{status}</p>}
    </Container>
  );
}

export default Contact;
