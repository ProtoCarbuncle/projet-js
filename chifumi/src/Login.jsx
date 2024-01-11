import React, { useState, useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            setErrorMessage("Eh oh, tu peux pas laisser des champs vides");
            return;
        }

        if (user) {
            console.log("T'es bien connecté chacal");
            history.push("/profile");
        } else {
            if (username !== "Ptdr t ki ?") {
                setErrorMessage("Ptdr t ki ?");
            } else if (password !== "Comment ça mon reuf ?") {
                setErrorMessage("Comment ça mon reuf ?");
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessage("");
        }, 5000);

        return () => clearTimeout(timer);
    }, [errorMessage]);

    return (
        <div className="app-container">
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
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <div className="button-container">
                <button><a href="/CreateAcc" className="button">Pas de compte ? On te mets bien</a></button>
            </div>
        </div>
    );
}

export default Login;