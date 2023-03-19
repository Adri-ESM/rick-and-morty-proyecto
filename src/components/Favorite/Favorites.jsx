import { connect } from "react-redux";



const Favorites = ({ favorites }) => {
   
    return <div className="favorites-container">
        <h1>My Favorites Characters</h1>
        {favorites.map((favorite) => (
          <div className="detail-list-img">
          <div className="detail-list">
              <img src={favorite.image} alt="img" /> 
          <h2>Name: {favorite.name}</h2>  
          <h3>Status: {favorite.status}</h3> 
          <h3>Specie: {favorite.species}</h3> 
          <h3>Gender: {favorite.gender}</h3> 
          <h3>Origin: {favorite.origin}</h3> 
          </div>
          <div className="detail-img">
          </div>
          
          </div>
          
        ))}
    </div>
};

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites,
    };
};

export default connect(mapStateToProps)(Favorites);


