import { Link } from 'react-router-dom';
import React from "react";
import '../CSS/Header.css';
import logo from './images/logo.png';
import { useState, useEffect } from "react";
import ProfilePic from './images/ProfilePic.png';

// ... (imports and other code)

const Header = () => {

    const [userdat, setUserdat] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'));
        setUserdat(data);
    }, []);
    //checks if there is session data. If it returns null (user hasn't logged in), it will show the nav bar as it should.
    if (!(userdat)) {
        return (
            <header class="header_wrapper">
            <div>
                <div className="logo-container">
                    <a href= "./pages/home.tsx">
                    <img src={logo} alt="Logo" className="header-logo" />
                    </a>
                </div>
                <nav className="Header">
                    <ul>


                        <li><a href="/FindUs">Find Us</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/About">About</a></li>
                        <li className="left-login"><Link to="/Login">Login</Link></li>

                    </ul>
                    </nav>
                </div>
            </header>
        )
    }
    //if there is session data, show the user nav bar
    else {
        return (
            <header>
                <div class="header_wrapper">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="header-logo" />
                </div>
                <nav className="Header">
                    <ul>
                        <li><Link to="/">My Diary</Link></li>
                        <li><Link to="/">Training Plan</Link></li>
                        <li><Link to="/FoodIndex">Food Index</Link></li>
                        <li>
                            <Link to="/Account">
                                My Account <img src={ProfilePic} alt="Profile" width="42" height="42" className="header-logo" />
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
  }
  
  export default Header;
