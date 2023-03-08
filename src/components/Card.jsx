//import SearchBar from "./SearchBar";
 
 
 const Card = ({ name, species, gender, image, onClose  }) => {
   return (
         <div className="card">
            <div className="card-header">
               <img src={image} alt={name} className="card-image"></img>
            </div>
            <div className="card-body-btn">
               <div className="card-body">
                  <div className="card-title">
                     <h3>Name: {name}</h3>
                  </div>
                  <div className="modal is open">
                     <div className="modal-container">
                        <button onClick={onClose} className="modal-close">X</button>
                        <p>Specie: {species}</p>
                        <p>Gender: {gender}</p>
                     </div>
                  </div>
                  {/*<div>
                      <button onClick={onClose} className="card-close-btn">
                        <span>X</span>
                     </button> 
                  </div>*/}
               </div>
            </div>
         </div>
   );
}


export default Card;