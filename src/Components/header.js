//testing header
import { Link } from 'react-router-dom';
import React from "react";
import '../CSS/Header.css';
import logo from './images/logo.png';
import ProfilePic from './images/ProfilePic.png';
import { useAuth } from './UserSession.js';

const Header = () => {
    const { user } = useAuth();
  
    if (!user) {
      return (
        <header>
        <nav className="Header">
        <img src={logo} alt="Logo" className="header-logo"></img>
            <h1>ModernFit Gym</h1>
            <div className="links">
            <p>Please log in to view your profile.</p>
            <Link to="/Login">Login</Link>
            </div>
        </nav>
        </header>
      );
    }

    return ( 
        <header>
            <nav className="Header">
            <img src={logo} alt="Logo" className="header-logo"></img>
                <h1>ModernFit Gym</h1>
                <div className="links">
                    <Link to="/">My Diary</Link>
                    <Link to="/">Training Plan</Link>
                    <Link to="/FoodIndex">Food Index</Link>
                    <Link to="/Account">My Account <img src={ProfilePic} alt="Logo" width="42" height="42" className="header-logo"></img></Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;