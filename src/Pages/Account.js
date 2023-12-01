import react, { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import AuthProvider from '../Components/UserSession.js';
import { useAuth } from '../Components/UserSession.js';
import '../CSS/main.css';
import '../CSS/Account.css';
import '../CSS/LoginSignup.css';

//const username = 

const Account = () => {
    return ( 
        <div>
            <Header />
            <div className="details">
                <p2>User Details:</p2>
                <ul>
                    <li>Username: </li>
                    <li>E-mail: </li>
                    <li>Location: </li>
                    <li>Pin: </li>
                </ul>
            </div>
            <Footer />
        </div>
     );
}
 
export default Account;