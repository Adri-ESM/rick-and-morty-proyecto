import React from "react";
import SearchBar from "./SearchBar";
import ImageNav from './styles/images/Rick-and-Morty.png'

const Nav = () => {
    return <div className="nav">
                <SearchBar
                onSearch={(characterID) => window.alert(characterID)}
                />
                <div>
                    <img src={ImageNav} alt='imagen nav' className="nav-image"></img>
                </div>
            </div>
            
}

export default Nav;