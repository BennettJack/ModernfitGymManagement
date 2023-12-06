import { Link } from 'react-router-dom';
import React from "react";
import '../CSS/Header.css';
import logo from './images/logo.png';
import ProfilePic from './images/ProfilePic.png';
import { useAuth } from './UserSession.js';

// ... (imports and other code)

const Header = () => {
    const { user } = useAuth();
  
    return (
      <header>
        <div className="logo-container">
            <img src={logo} alt="Logo" className="header-logo" />
          </div>
        <nav className="Header">
          <ul>
            {user ? (
              <>
                <li><Link to="/">My Diary</Link></li>
                <li><Link to="/">Training Plan</Link></li>
                <li><Link to="/FoodIndex">Food Index</Link></li>
                <li>
                  <Link to="/Account">
                    My Account <img src={ProfilePic} alt="Profile" width="42" height="42" className="header-logo" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li><a href="/FindUs">Find Us</a></li>
                <li><a href="/Terms">Training Plans</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/About">About</a></li>
                <li className="left-login"><Link to="/Login">Login</Link></li>
              </>
            )}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  