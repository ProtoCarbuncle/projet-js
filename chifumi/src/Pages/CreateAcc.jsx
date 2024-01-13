import React, { useState, useEffect } from "react";
import { registerUser } from "../API/CreateAccount.js"; // Add the missing import statement

const CreateAcc = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMessage]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!username) {
      setErrorMessage("Bah alors, tu sais pas comment tu t'appelles ?");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Oulaaaaaah réécris bien ton mdp mon grand");
      return;
      
    }
    if (!password) {
      setErrorMessage("T'as oublié ton mdp avant même d'en faire un ?");
      return;
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>Création d'un compte sucré au sucre</h1>
        {errorMessage && <p>{errorMessage}</p>}
        {accountCreated ? (
          <div>
            <p>T'es rentré dans la légende</p>
            <button type="submit"><a href="/" className="button">Aller se connecter</a></button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="form">
              <div>
                <label >Pseudo : </label>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Choisi bien bg"/>
              </div>
              <div>
                <label>Mot de passe : </label>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Tu le dis à personne hein ?"/>
              </div>
              <div>
                <label>Confirme ton mot de passe : </label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="T'as déjà oublié ?"/>
              </div>
              <div className="button-container">
                <button type="submit">Entrer dans la légende</button>
              </div>
            </form>
            <div className="button-container">
              <button><a href="/" className="button">Retour à l'accueil</a></button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default CreateAcc;