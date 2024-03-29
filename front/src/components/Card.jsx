import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import axios from 'axios';

 
const Card = ( { id, name, species, image, onClose } ) => {
   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
         axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            .then((res) => console.log('ok'));
      } else {
         setIsFav(true);
         addFavorite({ id, name, species, image });
         axios.post("http://localhost:3001/rickandmorty/fav", { id, name, species, image })
            .then((res) => console.log('ok'));
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <div className="card">
         <div className="card-header">
            <img src={image} alt={name} className="card-image"></img>
         </div>
         <div className="card-body-btn">
            <div className="card-body">
               <h3 className="card-number">{id}</h3>
               <h2 className="card-title">{name}</h2>
               <p>{species}</p>
               <Link to={`/detail/${id}`}>
                  <p className="card-see-btn"></p>
               </Link>

               {isFav ? (
                  <button className="add-fav-button" onClick={handleFavorite}>
                     <p className="add-fav-title">
                        Added to Favorites
                        <br/>
                        <span className="add-fav-heart-red">❤️</span>
                     </p>
                  </button>
               ) : (
                  <button className="add-fav-button" onClick={handleFavorite}>
                     <p className="added-fav-title">
                        Add to Favorites
                        <br/>
                        <span className="add-fav-heart-white">🤍</span>
                     </p>
                  </button>
               )}
            </div>
         </div>
         <div>
            <button onClick={() => onClose(id)} className="card-close-btn">X</button>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (props) => {
         dispatch(addFavorite(props));
      },  
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);



// //import SearchBar from "./SearchBar";
//  import React, { useState, useEffect } from "react";
//  import { Link } from "react-router-dom";
//  import { connect } from "react-redux";
//  import { addFavorite, removeFavorite } from "../redux/actions"
// import axios from 'axios';
 


//  const Card = (props) => {
//    const [isFav, setIsFav ] = useState(false);


//     const handleFavorite = () => {
//       if(isFav) {
//          setIsFav(false);
//          props.removeFavorite(props.id);
//       } else {
//          setIsFav(true);
//          props.addFavorite(props);
//          axios.post("http://localhost:3001/rickandmorty/fav", props)
//          .then((res) => console.log('ok'));
//       }
//    };
//       axios.delete(`http://localhost:3001/rickandmorty/fav/${props.id}`)
//       .then((res) => console.log('ok'));

//    //FOR EACH
//    useEffect(() => {
//       props.myFavorites.forEach((fav) => {
//          if (fav.id === props.id) {
//             setIsFav(true);
//          }
//       });
//    }, [props.id, props.myFavorites]);

//    //BUCLE FOR
//       // useEffect(() => {
//       //    for (let i = 0; i < props.myFavorites.length; i++){
//       //       const fav = props.myFavorites[i];
//       //       if(fav.id === props.id){
//       //          setIsFav(true);
//       //          break; // Una vez que se encuentra el favorito, se puede salir del bucle.
//       //       }
//       //    }
//       // }, []);

  
 

//    return (
//       <div className="card">
//          <div className="card-header">
//             <img src={props.image} alt={props.name} className="card-image"></img>
//          </div>
//          <div className="card-body-btn">
//             <div className="card-body">
//                   <h3 className="card-number">{props.id}</h3>
//                   <h2 className="card-title">{props.name}</h2>
//                   <p>{props.species}</p>
//                <Link to={`/detail/${props.id}`}>
//                   <p className="card-see-btn"></p>
//                </Link>

//                {
//             isFav ? (
//                <button className="add-fav-button" onClick={handleFavorite}>
//                   <p className="add-fav-title">
//                      Added to Favorites
//                      <br/>
//                      <span className="add-fav-heart-red">❤️</span>
//                   </p>
                  
//                   </button>
//             ) : (
//                <button className="add-fav-button" onClick={handleFavorite}>
//                   <p className="added-fav-title">
//                      Add to Favorites
//                      <br/>
//                      <span className="add-fav-heart-white">🤍</span>
//                   </p>
//                   </button>
//             )
//           }
//                </div>
               
//             </div>
//                <div>
//             <button onClick={() => props.onClose(props.id)} className="card-close-btn">X</button>
//             </div>
//             </div>
            
//    );
// }

//    const mapStateToProps = (props) => {
//       return {
//       myFavorites: props.myFavorites,
//       };
//    };

//    const mapDispatchToProps = (dispatch) => {
//       return {
//          addFavorite: (props) => {
//             dispatch(addFavorite(props))
//          },  
//          removeFavorite: (id) => {
//             dispatch(removeFavorite(id))
//          }
//       }
//    }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);



// const Card = (props) => {
//    const [isFav, setIsFav ] = useState(false);

//    const handleFavorite = () => {
//       if (isFav) {
//          setIsFav(false);
//          props.removeFavorite(props.id);
//          axios.delete(`http://localhost:3001/rickandmorty/fav/${props.id}`)
//             .then((res) => console.log('ok'));
//       } else {
//          setIsFav(true);
//          props.addFavorite(props.id);
//          axios.post("http://localhost:3001/rickandmorty/fav", props)
//             .then((res) => console.log('ok'));
//       }
//    };