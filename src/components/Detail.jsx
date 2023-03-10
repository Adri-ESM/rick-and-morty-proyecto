import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const { detailId }  = useParams();
    //params tiene los valores de la url que quiero guardar tener disponible
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "facab4118f48.6c103da1e2ca2ff12d51";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
        setCharacter(response.data)
        );
//ojo de axios, axios me da un arespone y hacemos setCharacter de response.data


    },[]);

    return (
        <div className="detail">
        {character.name ? (
          <>
            <h2>{character.name}</h2>  
            <h3>{character.status}</h3> 
            <h3>{character.species}</h3> 
            <h3>{character.gender}</h3> 
            <h3>{character.origin?.name}</h3> 
            <img src={character.image} alt="image" />  
          </>
        ) : (
            <h3>Loading...</h3>
        )}
          </div>
    );
};

export default Detail;

{/*axios: Hace algo muy similar a fetch el resultado es el mismo
//pregunta ? positiva : negativa TERNARIO*/}