import React from "react";
import './Footer.css';
import logo from './logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="/FindUs">FindUs</a></li>
        <li><a href="/Terms">Terms</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/About">About</a></li>
        <li><img src={logo} alt="Logo" className="right footer-logo" /></li>
      </ul>
      
    </footer>
  );
};

export default Footer;

