//import SearchBar from "./SearchBar";
 
 
 const Card = ({ name, species, gender, image, onClose  }) => {
   return (
      <div className="card">
         <div className="card-header">
            <img src={image} alt={name} className="card-image"></img>
         </div>
         <div className="card-body-btn">
            <div className="card-body">
               <div className="card-titles">
                  <h2 className="title">Name: {name}</h2>
               </div>
               <div className="card-subtitles">
                  <h3 className="card-species">Specie: {species}</h3>
                  <h3 className="card-gender">Gender: {gender}</h3>
               </div>
            <button onClick={onClose} className="card-close-btn">X</button>
            </div>
         </div>
      </div>

   );
}


export default Card;