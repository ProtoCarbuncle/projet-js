import { useState } from 'react';
import './App.css'
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {    
        e.preventDefault();
        console.log(username);
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
            <button>Don&apos;t have an account? Register here.</button>
        </>
    );
}

export default Login;