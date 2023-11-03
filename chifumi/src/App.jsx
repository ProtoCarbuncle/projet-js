import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Info login
  const database = [
    {
      username: "Teo",
      password: "Oui"
    },
    {
      username: "Matisse",
      password: "todi"
    },
  ];

  const errors = {
    uname: "Ptdr t ki ?",
    pass: "Mauvais mdp"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    const userData = database.find((user) => user.username === uname.value);

    // comparer les entrées avec la database
    if (userData) {
      if (userData.password !== pass.value) {
        // mot de passe invalide
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // mauvais pseudo
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Message d'erreur
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Pseudos</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>MdPasse</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
        {isSubmitted ? <div>Bien joué t'es connecté</div> : renderForm}
      </div>
    </div>
  );
}

export default App;