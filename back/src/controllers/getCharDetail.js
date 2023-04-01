const axios = require('axios');
const express = require('express');
const server = express();
//const { KEY } = process.env;

        const URL = "https://rickandmortyapi.com/api";
        const getCharDetail = (req, res) => {
            const { id } = req.params;

        axios.get(`${URL}/character/${id}`).then(response => {
                const { id, name, species, image, gender, origin} = response.data;
                res.status(200).json({ id, name, species, image, gender, origin });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
            
        });
};
    server.get('/character/:id', getCharDetail);


module.exports = getCharDetail;

//EXPRESS con express simplifica muchas cosas del codigo
//no le pasamos el puerto a listen, y no usamos 'Content-Type': 'text/plain'  y usamos midlewares

// res.writeHead() es un método de la respuesta HTTP que se utiliza 
//para escribir las cabeceras de la respuesta. La cabecera incluye 
//información como el tipo de contenido, la longitud del contenido, 
//la codificación, etc.

// res.write() es un método de la respuesta HTTP que se utiliza para 
//enviar datos en el cuerpo de la respuesta. Los datos se envían en 
//forma de búfer o cadena de texto.

// En conjunto, res.writeHead() y res.write() se utilizan para enviar 
//una respuesta HTTP completa al cliente. El res.writeHead() se usa 
//para establecer la información de la cabecera y res.write() se usa 
//para enviar los datos del cuerpo de la respuesta.

// Podemos convertirlo en una cadena de texto en formato JSON utilizando 
// JSON.stringify()
// De esta forma, podemos enviar el objeto como una cadena de texto en 
// formato JSON a través de una respuesta HTTP y ser procesado por el cliente.

// El método .then() se usa para manejar el resultado exitoso de una promesa. 
// Este método espera una función como argumento que será llamada cuando la 
// promesa se resuelva correctamente, y esta función recibirá el resultado de 
// la promesa como argumento.

// Por otro lado, el método .catch() se utiliza para manejar el caso en que 
// una promesa es rechazada (es decir, no se resuelve correctamente). Este 
// método espera una función como argumento que será llamada cuando la promesa 
// sea rechazada, y esta función recibirá el motivo del rechazo como argumento.

// En resumen, .then() y .catch() son métodos que permiten manejar de manera 
// adecuada el resultado de una operación asíncrona, ya sea que se resuelva 
// correctamente o no.

// En resumen, la principal diferencia entre una operación síncrona y una operación 
// asíncrona es cómo se maneja el flujo de ejecución del programa. En una operación 
// síncrona, el programa se bloquea hasta que se completa la operación, mientras 
// que en una operación asíncrona, el programa puede continuar ejecutando otras 
// líneas de código mientras espera a que se complete la operación.


// Axios es una librería JavaScript que permite realizar peticiones HTTP 
// desde el navegador o desde Node.js de manera sencilla y elegante. 
// Se puede utilizar para realizar peticiones GET, POST, PUT, DELETE, etc. 
// Además, permite trabajar con Promesas y manejar errores de forma efectiva. 
// Axios es ampliamente utilizado en el desarrollo de aplicaciones web y 
// móviles para consumir APIs.


// Los dos puntos en la sintaxis 'Content-Type': 'application/json' indican que 
// se está asignando el valor 'application/json' a la clave 'Content-Type' dentro 
// de un objeto. En otras palabras, se está estableciendo el tipo de contenido que 
// se está enviando o recibiendo en una solicitud HTTP, en este caso indicando que 
// se trata de un objeto JSON.
// La sintaxis con dos puntos se utiliza para asignar valores a propiedades dentro 
// de objetos, y es una convención común en JavaScript y otros lenguajes de 
// programación.

// La función res.end() es una función que se utiliza en Node.js para finalizar la 
// respuesta a una solicitud HTTP y enviar la respuesta al cliente. Esta función toma 
// un argumento opcional que representa los datos que se enviarán como respuesta al 
// cliente. Si se proporciona un argumento, se enviará como cuerpo de la respuesta. 
// Si no se proporciona un argumento, se enviará una respuesta vacía.
// La función res.end() también detiene la ejecución de la solicitud actual y cierra 
// la conexión con el cliente. Por lo tanto, debe ser la última función que se llame 
// al enviar una respuesta al cliente.