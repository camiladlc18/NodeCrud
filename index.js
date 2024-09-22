const express = require('express');
const routes = require('./routes/users.js');
const app = express();
const PORT = 5000;

// Usar middleware para parsear JSON
app.use(express.json());
app.use("/user", routes); // Conecta el router a la ruta "/user"

// Iniciar el servidor
app.listen(PORT, () => console.log("Server is running at port " + PORT));
