import React from "react";
import '../CSS/Footer.css';
import logo from './images/logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer>
      <ul id="footerList">
        <li><a href="/FindUs">FindUs</a></li>
        <li><a href="/Terms">Tranning Plans</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/About">Terms</a></li>
        <li><img src={logo} alt="Logo" className="right footer-logo" /></li>
      </ul>
      
    </footer>
  );
};

export default Footer;

