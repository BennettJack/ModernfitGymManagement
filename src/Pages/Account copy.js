import react, { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Login from 'Login.js';
import '../CSS/main.css';

//const username = 

const Account = () => {
    return ( 
        <div>
            <Header />
            <div>
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