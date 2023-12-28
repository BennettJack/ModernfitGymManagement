import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('Sheffield');
    const history = useHistory();

    const handleSubmit = (e) => {
        const signup = { username, email, password, location }
        fetch('http://localhost:8000/user-accounts', {
            method: 'POST',
            headers: { "Constent-Type": "application/json"},
            body: JSON.stringify(signup)
        }).then(() => {
            //<Route path='/index.tsx' element={ <Redirect to="/index.tsx" /> }/>
            history.push('/');
        })
    }

    return (
        <div>
            <Header />
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="formInput">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="formInput">
                    <label for="emailaddress">Email Address</label>
                    <input type="email" name="emailaddress" id="emailaddress" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="formInput">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="formInput">
                    <label for="location">Location</label>
                    <select name="location" id="location">
                    <option value="Sheffield">Sheffield</option>
                    <option value="Manchester">Manchester</option>
                    <option value="London">London</option>
                    <option value="Leeds">Leeds</option>
                    value={location} onChange={(e) => setLocation(e.target.value)} required
                    </select>
                </div>
                <div className="formInput">
                    <button type="submit" name="submit">Create Account</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Signup;