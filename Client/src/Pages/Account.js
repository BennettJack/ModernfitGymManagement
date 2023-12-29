import react, { useEffect, useState } from "react";
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import '../CSS/main.css';
import '../CSS/Account.css';
import '../CSS/LoginSignup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Account = () => {
    //const instances
    const navigate = useNavigate();

    //Handles the event caused when the logout button is clicked on the accounts page
    const handleLogout= ((e) => {
        localStorage.clear();
        navigate('/');
    })

    //Retrieves JSON from the local session for populating user account fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem('user'));
        const one = 1
        axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
            .then(res => {
                setFirstName(res.data.userData[0].FirstName)
                setLastName (res.data.userData[0].LastName)
                setUsername (res.data.userData[0].Username)
                setPin (res.data.userData[0].Pin)
                setEmail (res.data.userData[0].Email)
                setLocation(res.data.userData[0].Location)
            })

    }, []);

    function test() {
        const userID = JSON.parse(localStorage.getItem('user'));
        const one = 1
        axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
            .then(res => {
                console.log(res.data.userData[0])
            })
    }

    if (!(localStorage)) {
        navigate('/');
    }
    else {
    return ( 
        <div>
            <Header />
            <div className="details">
                <p2>User Details:</p2>
                <ul>
                    <li>Name: {firstName} {lastName}</li>
                    <li>Username: {username}</li>
                    <li>E-mail: {email}</li>
                    <li>Location:{location}</li>
                    <li>Pin:{pin}</li>
                    <li><button
                        onClick = {handleLogout}>Logout</button>
                    </li>
                    <button onClick={test}>test</button>
                </ul>
            </div>
            <Footer />
        </div>
        );
    }
}
 
export default Account;