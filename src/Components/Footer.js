import React from "react";
import '../CSS/Footer.css';
import logo from './images/logo.png'; // Import the logo image
import fbPic from './images/FacebookPic.jpg'; // Import the logo image
import twPic from './images/TwitterPic.jpg'; // Import the logo image

const Footer = () => {
  return (
    <footer>
      <ul id="footerList">
        <li><a href="/FindUs">FindUs</a></li>
        <li><a href="/Terms">Tranning Plans</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/About">Terms</a></li>
        <li><img src={logo} alt="Logo" className="right footer-logo" /></li>
        <img src={fbPic} alt="fbPic" className="social" width="30" height="30" />
        <img src={twPic} alt="twPic" className="social" width="30" height="30" />
      </ul>
      
    </footer>
  );
};

export default Footer;

