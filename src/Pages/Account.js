import react, { useEffect, useState } from "react";
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import '../CSS/main.css';
import '../CSS/Account.css';
import '../CSS/LoginSignup.css';
import { useNavigate } from "react-router-dom";


const Account = () => {
    //const instances
    const navigate = useNavigate();

    //Handles the event caused when the logout button is clicked on the accounts page
    const handleLogout= ((e) => {
        localStorage.clear();
        navigate('/');
    })

    //Retrieves JSON from the local session for populating user account fields
    const [userdat, setUserdat] = useState([]);
    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem('user'));
        setUserdat(temp);
    }, []);

    if (!(userdat)) {
        navigate('/');
    }
    else {
    return ( 
        <div>
            <Header />
            <div className="details">
                <p2>User Details:</p2>
                <ul>
                    <li>Username: {userdat.username} </li>
                    <li>E-mail: {userdat.email} </li>
                    <li>Location: {userdat.location} </li>
                    <li>Pin: {userdat.pin}</li>
                    <li><button
                        onClick = {handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
        );
    }
}
 
export default Account;