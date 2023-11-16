// PlayersList.js

import React from 'react';
import Player from './Player';
import joueurs from './joueurs';

const PlayersList = () => {
  return (
    <div>
      <h1 className="title">Bienvenue dans l'univers de Fifa</h1>
      <video autoPlay controls>
        <source src="/img/fifa.mp4" type="video/mp4" />
       
      </video>
      <br></br>
      <h1 className='somm'>Voici les cartes FUT de la semaine</h1>
      <div className="players-list">
        {joueurs.map(joueur => (
          <Player key={joueur.id} {...joueur} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
