import react, { useEffect, useState } from "react";
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import '../CSS/main.css';
import '../CSS/Account.css';
import '../CSS/LoginSignup.css';

//const username = 

const Account = () => {

    const [userdat, setUserdat] = useState([]);
    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem('user'));
        setUserdat(temp);
    }, []);
    console.log("userdata: ")
    console.log(userdat);
    return ( 
        <div>
            <Header />
            <div className="details">
                <p2>User Details:</p2>
                <ul>
                    <li>Username:  </li>
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