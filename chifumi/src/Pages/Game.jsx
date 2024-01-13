import { useState } from 'react';

const Game = () => {
    const [choixJoueur, setChoixJoueur] = useState(null);
    const [choixAdversaire, setChoixAdversaire] = useState(null);
    const [resultat, setResultat] = useState('');

    const choixPossibles = ['pierre', 'papier', 'ciseaux'];

    const jouer = (choix) => {
        setChoixJoueur(choix);
        const choixAleatoire = choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
        setChoixAdversaire(choixAleatoire);
        determinerGagnant(choix, choixAleatoire);
    };

    const determinerGagnant = (joueur, adversaire) => {
        if (joueur === adversaire) {
            setResultat('Égalité !');
        } else if (
            (joueur === 'pierre' && adversaire === 'ciseaux') ||
            (joueur === 'ciseaux' && adversaire === 'papier') ||
            (joueur === 'papier' && adversaire === 'pierre')
        ) {
            setResultat('Tu gagnes !');
        } else {
            setResultat('Tu perds !');
        }
    };
    
                return (
            <div>
                <h1>Jeu Chi Fou Mi</h1>
                <div>
                    {choixPossibles.map(choix => (
                        <button onClick={() => jouer(choix)} key={choix}>
                            {choix}
                        </button>
                    ))}
                </div>
                <div>
                    <p>Ton choix : {choixJoueur}</p>
                    <p>Choix de l'adversaire : {choixAdversaire}</p>
                    <p>{resultat}</p>
                </div>
            </div>
        );
};

export default Game;