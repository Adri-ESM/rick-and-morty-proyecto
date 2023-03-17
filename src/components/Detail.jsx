import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { validate } from "./Form";

const Detail = ({ setShowNav }) => {
    
    const { detailId }  = useParams();
    //params tiene los valores de la url que quiero guardar tener disponible
    const [character, setCharacter] = useState({});
    
   
    useEffect(() => {
        setShowNav(false);
        setShowNav(true);
      
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "facab4118f48.6c103da1e2ca2ff12d51";

        

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
        setCharacter(response.data)
        );

        
//ojo de axios, axios me da un arespone y hacemos setCharacter de response.data


    }, );
    
    
    // function handleReturn() {
    //   setShowNav(true);
    // }

    return (
        <div className="detail">
        {character.name ? (
          <>
            <div className="detail-list-img">
            <div className="detail-list">
            <h2>Name: {character.name}</h2>  
            <h3>Status: {character.status}</h3> 
            <h3>Specie: {character.species}</h3> 
            <h3>Gender: {character.gender}</h3> 
            <h3>Origin: {character.origin}</h3> 
            </div>
            <div className="detail-img">
            <img src={character.image} alt="img" />  
            </div>
            </div>
            {/* <div>
            <Link className="detail-return" to="/home">Return</Link>
            </div> */}
          </>
        ) : (
            <h3>Loading...</h3>
        )}


          </div>
    );
};

export default Detail;

