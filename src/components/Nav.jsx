import React from "react";
import SearchBar from "./SearchBar";
import ImageNav from './styles/images/Rick-and-Morty.png'

const Nav = (props) => {
   
    return <div className="nav">
                <SearchBar
                    onSearch = {props.onSearch}
                />
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