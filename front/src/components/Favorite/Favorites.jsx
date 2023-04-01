import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const Favorites = ({ favorites, goBack }) => {

   
    return (
    <div className="favorites-container">
        <h1 className='fav-title'>My Favorites Characters</h1>
            
        {favorites.map((favorite) => (
           <div key={favorite.id} className="fav-list-img">
                <div className="fav-list">
                    <img className="fav-img" src={favorite.image} alt="img" /> 
                    <div className="fav-list-items">
                        <h2>Name: {favorite.name}</h2>  
                        <h3>Status: {favorite.status}</h3> 
                        <h3>Specie: {favorite.species}</h3> 
                        <h3>Gender: {favorite.gender}</h3> 
                        <h3>Origin: {favorite.origin}</h3>  
                    </div>
                </div>
            </div>
        ))}
        <div>
            <Link to='/home'>
                <button className='goHome-fav' onClick={goBack}>Go Home</button>   
            </Link>
         </div>
    </div>  
    )
};

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavActive: (id) => dispatch({ type: 'REMOVE_FAVORITES', payload: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

