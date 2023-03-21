//import SearchBar from "./SearchBar";
 import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import { connect } from "react-redux";
 import { addFavorite, removeFavorite } from "../redux/actions"

 

 const Card = (props) => {
   const [isFav, setIsFav ] = useState(false);

 
    const handleFavorite = (id) => {
      if(isFav) {
         setIsFav(false);
         props.removeFavorite(id);
      } else {
         setIsFav(true);
         props.addFavorite(props);
      }
   };

   //FOR EACH
   // useEffect(() => {
   //    props.myFavorites.forEach((fav) => {
   //       if (fav.id === props.id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, []);

   //BUCLE FOR
      useEffect(() => {
         for (let i = 0; i < props.myFavorites.length; i++){
            const fav = props.myFavorites[i];
            if(fav.id === props.id){
               setIsFav(true);
               break; // Una vez que se encuentra el favorito, se puede salir del bucle.
            }
         }
      }, []);

  
 

   return (
      <div className="card">
         <div className="card-header">
            <img src={props.image} alt={props.name} className="card-image"></img>
         </div>
         <div className="card-body-btn">
            <div className="card-body">
                  <h3 className="card-number">{props.id}</h3>
                  <h2 className="card-title">{props.name}</h2>
            
               <Link to={`/detail/${props.id}`}>
                  <p className="card-see-btn"></p>
               </Link>

               {
            isFav ? (
               <button className="add-fav-button" onClick={handleFavorite}>
                  <p className="add-fav-title">
                     Add to your Favorites
                     <br/>
                     <span className="add-fav-heart-red">❤️</span>
                  </p>
                  
                  </button>
            ) : (
               <button className="add-fav-button" onClick={handleFavorite}>
                  <p className="added-fav-title">
                     Added your Favorites
                     <br/>
                     <span className="add-fav-heart-white">🤍</span>
                  </p>
                  </button>
            )
          }
               </div>
               
            </div>
               <div>
            <button onClick={() => props.onClose(props.id)} className="card-close-btn">X</button>
            </div>
            </div>
            
   );
}

   const mapStateToProps = (props) => {
      return {
      myFavorites: props.myFavorites,
      };
   };

   const mapDispatchToProps = (dispatch) => {
      return {
         addFavorite: (props) => {
            dispatch(addFavorite(props))
         },  
         removeFavorite: (id) => {
            dispatch(removeFavorite(id))
         }
      }
   }

export default connect(mapStateToProps, mapDispatchToProps)(Card);