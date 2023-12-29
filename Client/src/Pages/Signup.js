import { useState } from "react";
import { redirect, useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import '../CSS/Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = (e) => {
        axios.post("http://localhost:5000/user", {
            FirstName: firstName,
            LastName: lastName,
            Username: username,
            Password: password,
            Pin: 1234,
            Email: email,
            Location: location
        })
        navigate('/Login')
        
    }

    return (
        <div>
            <Header />
            <h2 id="signupHeader">Sign Up</h2>
            <form id="signupForm" onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lastName">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="text"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="location">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button> test</button>
            </form>
            <Footer />
        </div>
    )
}

export default Signup;