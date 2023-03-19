import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImageNav from './styles/images/Rick-and-Morty.png'
import { Footer } from "./Footer";

const Nav = (props) => {
    
    const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

 
   
    return <div className="nav">
                <div>
                    <SearchBar
                        onSearch = {props.onSearch}
                    />
                    <div className="nav-links">
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
                    <button className='logout-button'onClick={props.logout}>Logout</button>
                    </div> 
                    <div>
                    <img src={ImageNav} alt='imagen nav' className="nav-image"></img>
                </div> 
                <Footer />
            </div>
           
}

export default Nav;

      /* <SearchBar onSearch={this.props.onSearch}
                //onSearch={(characterID) => window.alert(characterID)}
                />
                {/*<SearchBar onSearch = (props.onSearch)/> */