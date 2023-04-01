const express = require ("express");
//const { Router } = require("express");
const getCharById = require ("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favs = require('../utils/favs');
const router = express.Router();



router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post('/rickandmorty/fav', (req, res) => {
    const { id, name, species, image, gender, origin} = req.body;
    const newChar = { id, name, species, image, gender, origin};
    favs.push(newChar);
    res.status(200).json({ message: 'Character added to favorites', favs});
});

// Ruta para obtener la lista de personajes favoritos
router.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json({ favs });
});

// Ruta para eliminar un personaje de la lista de favoritos
router.delete('/rickandmorty/fav/:id', (req, res) => {
    const id = req.params.id;
    const charIndex = favs.findIndex(character => character.id == id);
    if (charIndex == -1){
        return res.status(404).json({ message: 'Character not found in favorites'});
    }
        favs.splice(charIndex, 1);
        res.status(200).json({ message: 'Character removed from favorites', favs });
    });

    module.exports = router;

// Iniciar el servidor
// router.listen(3001, () => {
//     console.log('Servidor iniciado en el puerto 3001.')
// })


//EJERCICIO DEL PROFESOR
//router.post]("/rickandmorty/fav", (req, res) => {
// favs.push(req.body);
//res.status(200).json(status: "OK");   
//});
//router.get



//que tiene una ruta
// router.post('/loquesea', (req, res)=> { //una callback con req y res

//aqui manejamos la lógica de la ruta
//extraer la información que llega por params
//hacer un llamado a un servicio externo
//guardar información en la base de datos //NO ES RESPONSABILIDAD DEL CONTROLADOR SOLO GESTIONAR NO HACERLO
    //})