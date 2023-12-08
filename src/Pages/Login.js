//import { useHistory } from 'react-router-dom';
import '../CSS/main.css';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import data from "../data/User-Accounts.json"
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";




const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userdata, setUserdata] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        var result = data['user-accounts'].find(user => user.username === username)
        if (result.password === password) {
            setUserdata(result);
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/Account')
        }
    }

    return(
        <>
        <Header/>
                <div class="container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Sign In</button>
                    </form>
                </div>
        <Footer/>
    </>
    )
}

export default Login;