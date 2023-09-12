const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Server is running on http://20.81.109:"+ port);
});



//example http://localhost:3000/Multiplica?numero1=2&numero2=3
app.get("/Multiplica", (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    // Realizar la suma
    const resultado = numero1 * numero2;

    // Enviar la respuesta como un objeto JSON
    res.json({ numero1, numero2, resultado });
});

