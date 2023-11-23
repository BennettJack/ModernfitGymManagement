//testing header
//import { Link } from 'react-router-dom';
import React from "react";

const header = () => {
    return ( 
        <header>
            <img src="logo.png" alt="Logo" class="footer-logo"></img>
            <nav className="header">
                <h1>ModernFit Gym</h1>
                <div className="links">
                    {/*<Link to="/">Home</Link>*/}
                </div>
                <div></div>
            </nav>
        </header>
     );
}
 
export default header;