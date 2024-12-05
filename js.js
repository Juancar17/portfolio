const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "juancadiaz17@gmail.com",
    pass: "tndo gdiu nzuk sbln",
  },
});

const mailOptions = {
  from: "juancadiaz17@gmail.com",
  to: "andres.martinez@ceacfp.es",
  subject: "Correo de prueba",
  text: "¡Hola! Este es un correo enviado desde Node.js usando Nodemailer.",
  html: `
    <h1 style="color: red;">¡Hola!</h1>
    <p>Este es un <b>correo de prueba</b> enviado desde <i>JuanC</i> usando <a href="https://nodemailer.com">Nodemailer</a>.</p>
    <footer style="margin-top: 20px; color: gray;">
      <img src="https://www.welife.es/wp-content/uploads/sites/3/2023/05/bailar-beneficios-1200x1410.jpg" alt="imagen" style="width: 300px; height: auto; border-radius: 10px;">
      <p>Atentamente,</p>
      <p>Juan Carlos</p>
      <a href="https://www.google.com/search?q=hola+andres+deja+a+juampe+irse+antes+porfavor" style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; font-size: 16px; border-radius: 5px;">
        Decir Hola
      </a>
    </footer>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error al enviar el correo:", error);
  } else {
    console.log("Correo enviado:", info.response);
  }
});
