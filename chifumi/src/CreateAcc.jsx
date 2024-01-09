import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateAcc = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCreateAccount = () => {
        // Vérifier si le nom d'utilisateur existe déjà dans db.json
        fetch('../db.json')
            .then(response => response.json())
            .then(data => {
                const existingUser = data.login.find(user => user.username === username);
                if (existingUser) {
                    setErrorMessage("T'as déjà un compte chacal");
                } else {
                    // Faire une requete vers le serveur pour mettre à jour db.json
                    fetch('/api/createAccount', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username, password })
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Gérer la réponse du serveur
                        console.log(data);
                        setAccountCreated(true);
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleReturnToLogin = () => {
        history.push('/login');
    };

    return (
        <div>
            <h1>Création de compte sucré au sucre</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {accountCreated ? (
                <div>
                    <p>Compte sucré au sucre créé</p>
                    <button onClick={handleReturnToLogin}>Retour au login</button>
                </div>
            ) : (
                <div>
                    <label htmlFor="username">Pseudal :</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                    <label htmlFor="password">Mot de passe super secret :</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    <button onClick={handleCreateAccount}>Créer mon compte</button>
                </div>
            )}
        </div>
    );
};

export default CreateAcc;
