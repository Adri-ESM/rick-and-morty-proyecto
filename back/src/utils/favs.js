let favs = []; // Base de datos simulada

// Middleware para procesar JSON en el cuerpo de la solicitud
//server.use(express.json());

// Ruta para agregar un personaje a la lista de favoritos



module.exports = favs;

// Este ejemplo utiliza tres rutas para manipular el arreglo favs. 
// La ruta POST /rickandmorty/fav agrega un nuevo personaje al arreglo 
// a partir del cuerpo de la solicitud. La ruta GET /rickandmorty/fav 
// devuelve todo el arreglo de personajes favoritos. La ruta DELETE 
// /rickandmorty/fav/:id elimina un personaje del arreglo según su id 
// especificado en los parámetros de la URL.

// Nota: Este ejemplo solo es para fines educativos y no es adecuado 
// para un uso en producción real, ya que los datos se almacenan en 
// memoria y se perderán si la aplicación se reinicia. Para un uso en 
// producción, se debe usar una base de datos real.