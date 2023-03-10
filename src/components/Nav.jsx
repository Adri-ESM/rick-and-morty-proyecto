import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImageNav from './styles/images/Rick-and-Morty.png'

const Nav = (props) => {
   
    return <div className="nav">
                <SearchBar
                    onSearch = {props.onSearch}
                />
                <Link to="/About">
                    <h3>About</h3>
                </Link>
                <Link to="/Home">
                    <h3>Home</h3>
                </Link>
                <div>
                    <img src={ImageNav} alt='imagen nav' className="nav-image"></img>
                </div> 
            </div>
}

export default Nav;

      /* <SearchBar onSearch={this.props.onSearch}
                //onSearch={(characterID) => window.alert(characterID)}
                />
                {/*<SearchBar onSearch = (props.onSearch)/> */