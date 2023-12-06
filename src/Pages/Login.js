import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'; 
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/UserSession.js';
import '../CSS/main.css';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //const history = useHistory();

    const handleSubmit = (e) => {
        const login = { username, password }
        fetch('http://localhost:8000/user-accounts', {
            method: 'GET',
            headers: { "Constent-Type": "application/json"},
            body: JSON.stringify(login)
            
        }).then(() => {
            const userData = { username };
            //<Route path='/index.tsx' element={ <Redirect to="/index.tsx" /> }/>
            //history.push('/');
            login(userData);
            navigate.push('/');
            console.log(username);
        })
    }

    return (
        <div className="form">
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="formInput">
                    <label for="usernameLogin">Username</label>
                    <input type="text" name="usernameLogin" id="usernameLogin" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="formInput">
                    <label for="password">Password</label>
                    <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="formInput">
                    <button type="Submit" id="submit" name="submit">Login</button>
                </div>
                <div className="formInput">
                    <p>No Account?</p>
                    <button type="button" name="signup">Sign Up</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Login;