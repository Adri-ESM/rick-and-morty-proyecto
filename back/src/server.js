const express = require("express");
//const server = express();
const PORT = process.env.PORT || 3001;
//const bodyParser = require('body-parser');
const router = require('./routes/index');
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//const getCharDetail = require('./controllers/getCharDetail.js');
//const app = express();
// /server.use(router);
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use("/", router);
app.use(morgan('dev')); //


app.listen(PORT, () => {
   console.log(`Server listening in port  + ${PORT}`);
});



//--------------CODIGO JORGE---------------------------------------
// const PORT1 = process.env.PORT1 || 3001;

// server.listen(PORT1, () => {
//   console.log(`Server raised in port  + ${PORT1}`);
// });

//-----------------------------------------------------
// //CLASE DEL PROFESOR ARIEL
// server.get("/", (req, res, next) => {
//   console.log('Server raised in port ' + PORT);
//   res.send('Server listening...');
// });
// server.listen(PORT);

// //----------------












// const server = http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   if (req.url.includes('onsearch')) {
//     const id = req.url.split('/').pop();
//     getCharById(res, id);
//   } else if (req.url.includes('detail')) {
//     const ID = req.url.split('/').pop();
//     getCharDetail(res, ID);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Route not found');
//   }
// });




// server.listen(3001, () => {
//   console.log('Servidor escuchando en el puerto 3001');
// });





//const http = require('http');
// const characters = require('./utils/data.js');


// const server = http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   if (req.url.includes('/rickandmorty/character/')) {
//     const id = req.url.split('/').pop();
//     const character = characters.filter(c => c.id == id);

   
//     if (character.length > 0) {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.write(JSON.stringify(character));
//       console.log(character);
//     } else {
//       res.writeHead(404, 'Character not found');
//     }
//   } else {
//     res.writeHead(400, 'Invalid URL');
//   }

//   res.end();
// });

// server.listen(3001, () => {
//   console.log('Servidor escuchando en el puerto 3001');
// });



// server.listen(3001, 'localhost');


// el módulo http de Node.js para crear un servidor HTTP básico. 
//El método createServer() crea una instancia del servidor y toma 
//una función callback que se ejecutará cada vez que se reciba una 
//solicitud HTTP. Dentro de esta función callback, puedes agregar 
//tu código para manejar la solicitud y generar una respuesta HTTP.

// Luego, el método listen() se utiliza para hacer que el servidor 
//escuche en un puerto específico (en este caso, el puerto 3001). 
//La función callback proporcionada se ejecutará una vez que el servidor 
//esté listo para recibir conexiones.

//-------------------------------------------------------------
// Primero, importamos el módulo http y el archivo data.js.
// Luego, creamos el servidor y establecemos el header Access-Control-Allow-Origin para permitir el acceso desde cualquier origen.
// Dentro del callback del servidor, creamos el condicional que pregunta si la url incluye el string rickandmorty/character.
// Si la url incluye ese string, obtenemos el id del personaje de la url utilizando el método split() para separar la url en partes y el índice [2] para obtener el tercer elemento de esas partes, que es el id del personaje.
// Después, utilizamos el método find() para buscar el personaje en el archivo data.js que tenga el mismo id que el que llegó por la url.
// Si encontramos el personaje, lo enviamos como respuesta en formato JSON utilizando el método JSON.stringify().
// Si no encontramos el personaje, enviamos un mensaje indicando que el personaje no fue encontrado.
// Si la url no incluye el string rickandmorty/character, enviamos un mensaje indicando que la url es inválida.
// Finalmente, llamamos al método res.end() para terminar la respuesta.