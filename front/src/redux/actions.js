import { ADD_FAVORITES } from "./actions_types";
import { REMOVE_FAVORITES } from "./actions_types";


//const API_URL = ('http://localhost:3001/rickandmorty/fav');

export const addFavorite = (character) => {
  return { type: ADD_FAVORITES, payload: character }
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITES, payload: id }
};

// export const addFavorite = (id) => async (dispatch) => {
//   try {
//       const response = await fetch('http://localhost:3001/rickandmorty/fav', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           body: { id }
//       });

//       if (response.ok) {
//         const data = id;
//           // const data = await response.json();
//           dispatch({
//               type: ADD_FAVORITES,
//               payload: data,
//           });
//       } else {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//   } catch (error) {
//       console.log(error);
//   }
// };


// export const removeFavorite = (id) => async (dispatch) => {
//     try {
//       const response = await fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
//         method: 'DELETE',
//       });
      
//       if (response.ok){
//       // const data = await response.json();
//       const data = id;
//       dispatch({
//         type: REMOVE_FAVORITES,
//         payload: data,
//       });
//     } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     }catch (error) {
//       console.log(error);
//     }
//   };

  // export const addFavorite = (id) => {
//     return {
//         type: 'ADD_FAVORITES',
//         payload: id,
//     }
// }

// export const removeFavorite = (id) => {
//     return {
//         type: 'REMOVE_FAVORITES',
//         payload: id,
//     }
// }

//   Aquí, estamos actualizando la acción addFavorite para que acepte un 
//   objeto character que contiene los detalles del personaje que deseas 
//   agregar a la lista de favoritos. Luego, estamos utilizando la biblioteca 
//   fetch para enviar una solicitud HTTP POST al endpoint 
//   http://localhost:3001/rickandmorty/fav, incluyendo el objeto character 
//   en el cuerpo de la solicitud en formato JSON.

// Si la solicitud es exitosa, el servidor devolverá un objeto que contiene 
// un id único para el personaje que se ha agregado a la lista de favoritos. 
// Luego, estamos actualizando el estado de la aplicación llamando a la 
// acción ADD_FAVORITES y pasando el id del personaje agregado como carga útil.

// Ten en cuenta que necesitarás actualizar el código de tu componente para 
// pasar el objeto character a la acción addFavorite.

// async/await es una característica de JavaScript que permite escribir código 
// asíncrono en un estilo síncrono. async se usa para declarar una función asíncrona, 
// lo que significa que la función devuelve una promesa que puede ser resuelta en un 
// valor en el futuro. await se usa dentro de una función asíncrona para esperar que 
// una promesa se resuelva antes de continuar ejecutando el código.

// Con async/await, puedes escribir código asíncrono de una manera más fácil de 
// entender y menos propensa a errores. En lugar de encadenar varias llamadas a 
// funciones que devuelven promesas, puedes usar await para esperar a que se resuelva 
// una promesa antes de continuar con la siguiente línea de código. Además, los errores 
// se pueden capturar y manejar fácilmente con bloques try/catch.