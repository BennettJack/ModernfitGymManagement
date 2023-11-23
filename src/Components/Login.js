import { useState } from "react";
import { Redirect } from 'react-router-dom'; 
import { useHistory } from 'react-reouter-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        const login = { username, password }
        fetch('https://localhost:8000', {
            method: 'GET',
            headers: { "Constent-Type": "application/json"},
            body: JSON.stringify(login)
        }).then(() => {
            //<Route path='/index.tsx' element={ <Redirect to="/index.tsx" /> }/>
            history.push('/');
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="formInput">
                    <label for="usernameLogin">Username</label>
                    <input type="text" name="usernameLogin" id="usernameLogin" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div class="formInput">
                    <label for="password">Password</label>
                    <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div class="formInput">
                    <button type="Submit" id="submit" name="submit">Login</button>
                </div>
                <div class="formInput">
                    <p>No Account?</p>
                    <button type="button" name="signup">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Login;