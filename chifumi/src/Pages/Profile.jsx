import React from 'react';
import rockScissorsPaperRules from "../components/Rock-paper-scissors.png";

const Profile = () => {
    return (
        <div className="profile">
            <h1>Bienvenue dans le jeu !</h1>
            <p>Voici un petit récapitulatif des règles pour les petits nouveaux :</p>
            <img src={rockScissorsPaperRules} alt="Rock Paper Scissors SVG" />
            <p>Alors, prêt à te la donner ?</p>
            <button><a href="/Game">Jouer</a></button>
            <button><a href="/">Se déconnecter</a></button>
        </div>
    );
};

export default Profile;
