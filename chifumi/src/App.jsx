import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

import db from './db.json';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {    
        e.preventDefault();

        const user = db.login.find((user) => user.username === username && user.password === password);

        if (user) {
            console.log("T'es bien connecté chacal");
        } else {
            if (username !== "Ptdr t ki ?") {
                setErrorMessage("Ptdr t ki ?");
            } else if (password !== "Comment ça mon reuf ?") {
                setErrorMessage("Comment ça mon reuf ?");
            }
        }
    }

    const handleRedirect = () => {
        history.push('/create-account');
    }
    
    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Your Username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="Password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={handleRedirect}>Don&apos;t have an account? Register here.</button>
        </>
    );
}

export default Login;