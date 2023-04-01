import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { validate } from "./Form";

const Detail = () => {
    
    //const { detailId }  = useParams();
    //const KEY = "facab4118f48.6c103da1e2ca2ff12d51";
    //params tiene los valores de la url que quiero guardar tener disponible
    const [character, setCharacter] = useState({});
    //const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/rickandmorty/detail');
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    };
   
    useEffect(() => {
      fetchData()    
    }, []);
        // setShowNav(false);
        // setShowNav(true);
      
        //const URL_BASE = "http://localhost:3001/rickandmorty/detail";
       


        // axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
        // setCharacter(response.data)
        // );
        

        
//ojo de axios, axios me da un arespone y hacemos setCharacter de response.data


    
    
    
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
            <h3>Origin: {character.origin.toString()}</h3> 
            </div>
            <div className="detail-img">
            <img src={character.image} alt="img" />  
            </div>
            </div>
            
          </>
        ) : (
            <h3>Loading...</h3>
        )}


          </div>
    );
};

export default Detail;


/* <div>
            <Link className="detail-return" to="/home">Return</Link>
            </div> */
