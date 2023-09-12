const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on http://20.81.109:"+ port);
});

//example http://localhost:3000/Resta?numero1=2&numero2=3
app.get("/Resta", (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    // Realizar la suma
    const resultado = numero1 - numero2;

    // Enviar la respuesta como un objeto JSON
    res.json({ numero1, numero2, resultado });
});

app.get("/", (req, res) => {
    const htmlcont = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Lista de nuestras Apis</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              color: #333333;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
          }
          .header {
              background-color: #f2f2f2;
              padding: 20px;
              text-align: center;
          }
          .content {
              padding: 20px;
          }
          .footer {
              background-color: #f2f2f2;
              padding: 20px;
              text-align: center;
          }
          /* Estilos para las listas */
          ul {
              list-style: none;
              padding: 0;
              margin: 0;
          }
          li {
              padding: 10px;
              margin-bottom: 10px;
              color: #ffffff; /* Color de texto blanco */
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Lista de nuestras Apis</h1>
          </div>
          <div class="content">
              <p>Esta es la lista de nuestras apis para su uso</p>
              <ul id="colored-list">
                  <li><strong>Lista de apis: </strong>/ </li>
                  <li><strong>Suma: </strong>/Suma </li>
                  <li><strong>Restas: </strong>/Resta </li>
                  <li><strong>Multiplicaciones: </strong>/Multiplica </li>
              </ul>
          </div>
          <div class="footer">
              <p>Mensaje generado al ingresar al index</p>
          </div>
      </div>
  
      <script>
          // Colores para los elementos li
          const colors = ['#330AC7', '#605194', '#2569FA']; // Puedes agregar más colores según necesites
  
          // Obtener la lista y los elementos li
          const list = document.getElementById('colored-list');
          const liItems = list.getElementsByTagName('li');
  
          // Aplicar colores de forma alternada a los elementos li
          for (let i = 0; i < liItems.length; i++) {
              liItems[i].style.backgroundColor = colors[i % colors.length];
          }
      </script>
  </body>
  </html>
  `;

    // Enviar la respuesta como un objeto JSON
    res.setHeader('Content-Type', 'text/html');

    // Enviar la respuesta HTML
    res.send(htmlcont);
});

