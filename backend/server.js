import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "juancadiaz17@gmail.com", // Reemplázalo con tu correo
      pass: "lqpn acgy miaa dlvc",  // Contraseña de aplicación de Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'juancadiaz17@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
