import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import database from '../db.json';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage("Eh oh, tu peux pas laisser des champs vides");
      return;
    }

    const user = database.login.find((user) => user.username === username && user.password === password);

    if (user) {
      console.log("T'es bien connecté chacal");
      history.push('/profile');
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
    <div className="app-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Pseudo</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your Username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe super secret</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <div className="button-container">
        <button onClick={handleRedirect}>Pas de compte ? On te mets bien</button>
      </div>
    </div>
  );
}

export default App;
