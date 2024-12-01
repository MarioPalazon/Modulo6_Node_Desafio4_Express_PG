const express = require('express')
const app = express();

//Habilitar CORS
const cors = require('cors');

//Middleware
app.use(express.json());
app.use(cors());

//Importar las rutas desde carpeta routes
const likemeRoutes=require('./routes/likemeRoutes.js');

//Configuraciones Rutas
app.use('/posts',likemeRoutes);

//Instanciando servidor
app.listen(
    3000, 
    console.log("¡Servidor encendido!")
);

