import { useState } from "react";
import { useHistory } from 'react-reouter-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('Sheffield');
    const history = useHistory();

    const handleSubmit = (e) => {
        const signup = { username, email, password, location }
        fetch('https://localhost:8000', {
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
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div class="formInput">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div class="formInput">
                    <label for="emailaddress">Email Address</label>
                    <input type="email" name="emailaddress" id="emailaddress" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div class="formInput">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div class="formInput">
                    <label for="location">Location</label>
                    <select name="location" id="location">
                    <option value="Sheffield">Sheffield</option>
                    <option value="Manchester">Manchester</option>
                    <option value="London">London</option>
                    <option value="Leeds">Leeds</option>
                    </select>
                </div>
                <div class="formInput">
                    <button type="submit" name="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;