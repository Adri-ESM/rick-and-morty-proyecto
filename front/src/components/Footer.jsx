import React from "react";
import { Link } from "react-router-dom";
import GitHub from "./styles/images/github.png";


export const Footer = () => {
    return <div className="footer">
            <p className="footer-p1">All Rights Reserved</p>
            <p className="footer-p2">Made with 💜</p>
            <Link 
            to="https://github.com/Adri-ESM" 
            target="_blank" 
            className="footer-github">
                <img src={GitHub} alt="github icon"/>
            </Link>
            
           </div>
}



