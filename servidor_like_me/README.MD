## 1-iniciar el paquete json

npm init -y

## 2-instalar express

npm i express

## 3-instalar cors

npm i cors
\*Habilitar CORS
const cors = require('cors');

\*Usar CORS
app.use(cors());

## 4-instalar nodemon

npm i -D nodemon

habilitar en package.json:
"dev":"nodemon server.js",
ejecutar: npm run dev

## 5-instalar postgress

npm i pg

## Otros ajustes

app.use(express.json());
