const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

//Servidor
const port = process.env.PORT || 9000;

let server = app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}/`);
});

app.use(express.static("public"));
app.use(cors());

// NodeMailer
app.post("/contact", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "max.harris44@ethereal.email",
      pass: "7j6sWh3CnWffUty5Ad",
    },
  });

  const mailOptions = {
    to: "jobs@talentscode.com",
    subject: "Test",
    text: "Prueba desde node",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).json(req.body);
      console.log("Correo Enviado");
    }
  });
});

// WebSockets
let io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // Socket connectado
  console.log(
    `${Date(Date.now()).toLocaleString()}: Socket conectado ${socket.id}`
  );

  // Socket desconectado
  socket.on("disconnect", (socket) => {
    console.log(`${Date(Date.now()).toLocaleString()} Socket desconectado`);
  });
});
