import { useState } from 'react';

const Game = () => {
    const [choixJoueur, setChoixJoueur] = useState(null);
    const [choixAdversaire, setChoixAdversaire] = useState(null);
    const [scoreJoueur, setScoreJoueur] = useState(0);
    const [scoreAdversaire, setScoreAdversaire] = useState(0);
    const [resultat, setResultat] = useState('');
    const [jeuTermine, setJeuTermine] = useState(false);

    const choixPossibles = ['pierre', 'papier', 'ciseaux'];

    const jouer = (choix) => {
        if (jeuTermine) return;

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
            setScoreJoueur(scoreJoueur + 1);
        } else {
            setResultat('Tu perds !');
            setScoreAdversaire(scoreAdversaire + 1);
        }

        if (scoreJoueur === 3 || scoreAdversaire === 3) {
            setJeuTermine(true);
            setResultat(scoreJoueur === 3 ? 'Félicitations, tu as gagné la partie !' : 'Dommage, tu as perdu la partie.');
        }
    };

    return (
        <div>
            <h1>Jeu Chi Fou Mi</h1>
            <div>
                {choixPossibles.map(choix => (
                    <button onClick={() => jouer(choix)} key={choix} disabled={jeuTermine}>
                        {choix}
                    </button>
                ))}
            </div>
            <div>
                <p>Ton choix : {choixJoueur}</p>
                <p>Choix de l'adversaire : {choixAdversaire}</p>
                <p>{resultat}</p>
                <p>Score : {scoreJoueur} - {scoreAdversaire}</p>
                <div className="button-container">
                    <button><a href="/Profile">Quitter la partie ?</a></button>
                </div>
            </div>

        </div>
    );
};

export default Game;

function recommencerJeu() {
setChoixJoueur(null);
setChoixAdversaire(null);
setScoreJoueur(0);
setScoreAdversaire(0);
setResultat('');
setJeuTermine(false);
}    