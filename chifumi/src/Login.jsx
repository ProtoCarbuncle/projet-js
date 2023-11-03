import { useState } from 'react';
import './App.css'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {    
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button>Don&apos;t have an account? Register here.</button>
        </>
    );
}

export default Login;