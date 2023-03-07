//import SearchBar from "./SearchBar";
 
 
 const Card = ({ name, species, gender, image, onClose  }) => {
   return (
         <div className="card">
            <div className="card-header">
               <img src={image} alt={name} className="card-image"></img>
            </div>
            <div className="card-body-btn">
               <div className="card-body">
                  <h3 className="card-title">Name: {name}</h3>
                  <p className="card-species">Specie: {species}</p>
                  <p className="card-gender">Gender: {gender}</p>
                  <button onClick={onClose} className="card-close-btn">
                     <span>X</span>
                  </button>
               </div>
            </div>
         </div>
   );
}


export default Card;