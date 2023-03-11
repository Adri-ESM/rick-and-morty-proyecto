//import SearchBar from "./SearchBar";
 import React from "react";
 import { Link } from "react-router-dom";
 
 const Card = ({ id, name, image, onClose  }) => {
   return (
      <div className="card">
         <div className="card-header">
            <img src={image} alt={name} className="card-image"></img>
         </div>
         <div className="card-body-btn">
            <div className="card-body">
                  <h3 className="card-number">{id}</h3>
                  <h2 className="card-title">{name}</h2>
               <Link to={`/detail/${id}`}>
                  <p>Ver</p>
               </Link>
               {/* <div className="card-subtitles">
                  <h3 className="card-species">Specie: {species}</h3>
                  <h3 className="card-gender">Gender: {gender}</h3>
               </div> */}
            <button onClick={() => onClose(id)} className="card-close-btn">X</button>
            </div>
         </div>
         </div>

   );
}


export default Card;