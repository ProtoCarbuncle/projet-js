import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API/Login.js";
import rockCisorsPaperGif from "../components/rock-cisors-paper.gif";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(username, password);
            if (response.status === "success") {
                localStorage.setItem("userToken", response.token);
                localStorage.setItem("username", username);
                navigate("/Profile");
            } else if (username.trim() === "" || password.trim() === "") {
                setErrorMessage("Eh oh, tu peux pas laisser des champs vides");
                return;
            }
        } catch (error) {
            console.error("On a eu un problème derrière, on regle ça bg", error);
            setErrorMessage("On a eu un problème derrière, on regle ça bg");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessage("");
        }, 5000);

        return () => clearTimeout(timer);
    }, [errorMessage]);

    return (
        <>
            <div className="app-container">
            <img src={rockCisorsPaperGif} alt="Rock Cisors Paper Gif" />
                <h1>Le jeu le plus sucré au sucre</h1>
                <form className="form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Pseudo : </label>
                        <input value={username} onChange={handleUsername} type="text" placeholder="Ton magnifique pseudo ici" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe super secret : </label>
                        <input value={password} onChange={handlePassword} type="password" placeholder="Chuuuuuuut" name="password" />
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
                    </div>
                    {errorMessage && <p>{errorMessage}</p>}
                <div className="button-container">
                    <button><a href="/CreateAcc">Pas de compte ? On te mets bien</a></button>
                </div>
                </form>
                
            </div>
        </>
    );
}

export default Login;