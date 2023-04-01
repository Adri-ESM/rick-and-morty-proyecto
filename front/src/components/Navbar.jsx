import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImageNav from './styles/images/Rick-and-Morty.png';
import Menu from './styles/images/menu-hamburger.png'



const Nav = (props) => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    

  if (location.pathname === '/') {
    return null;
  }

    return (
        <div className="nav">
            {/* <div className={`nav-links ${showMenu ? "show-menu" : ""} ${showMenu ? "nav-links-menu" : ""}`}> */}
                <div>
                    <SearchBar
                        onSearch = {props.onSearch}
                    />
                    <div className={`nav-links ${showMenu ? "show-menu active" : ""}`}>
          <button
            className="menu-toggle"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
                    
                         <img src={Menu} alt='menu'></img>
                    </button>
                 
                        <Link className="nav-about" to="/About">
                            <h3>About</h3>
                        </Link>
                        <Link className="nav-home" to="/Home">
                            <h3>Home</h3>
                        </Link>
                        <Link className="nav-favorites" to="/Favorites">
                            <h3>Favorites</h3>
                        </Link>
                      
              
                
                        </div>
                    </div> 
                    
            {/* </div> */}
                <div className="logout-fav-button">
                            <button className="logout-button centered" onClick={props.logout}>
                                Logout
                            </button>
                </div>
                <div className="nav-image">
                        <img className="nav-image" src={ImageNav} alt='r&m-title'></img>
                </div>
        </div>
)};

export default Nav;


// {/* <div className={`nav-links ${showMenu ? "show-menu" : ""} ${showMenu ? "nav-links-menu" : ""}`}>
                   
//                     <button className="menu-toggle" 
//                         onClick={() => {
//                             setShowMenu(!showMenu);
//                             console.log(showMenu);
                            
//                     }}
//                     > */}