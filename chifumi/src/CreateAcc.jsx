import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateAcc = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCreateAccount = () => {
        history.push('/login');
    };

    return (
        <div>
            <h1>Création de compte sucré au sucre</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button onClick={handleCreateAccount}>Créer mon compte</button>
        </div>
    );
};

export default CreateAcc;
