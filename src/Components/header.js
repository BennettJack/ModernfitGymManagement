//testing header
import { Link } from 'react-router-dom';
import React from "react";
import '../CSS/Header.css';
import logo from './images/logo.png';
import ProfilePic from './images/ProfilePic.png';

const Header = () => {
    return ( 
        <header>
            <nav className="Header">
            <img src={logo} alt="Logo" className="header-logo"></img>
                <h1>ModernFit Gym</h1>
                <div className="links">
                    <Link to="/">My Diary</Link>
                    <Link to="/">Training Plan</Link>
                    <Link to="/FoodIndex.js">Food Index</Link>
                    <Link to="/Account.js">My Account <img src={ProfilePic} alt="Logo" width="42" height="42" className="header-logo"></img></Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;