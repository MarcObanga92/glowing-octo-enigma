// Player.js

import React from 'react';

const Player = ({
  nom = "Nom inconnu",
  backgroundImageUrl = "/chemin/vers/votre/image/arriere_plan.jpg", // Fallback si l'URL n'est pas fournie
  equipe = "Équipe inconnue",
  nationalite = "Nationalité inconnue",
  numeroMaillot = "Maillot inconnu",
  age = "Âge inconnu",
  att = 0, // Ajoutez la statistique
  drapeauUrl = "/img/default_drapeau.png",
  clubLogoUrl = "/img/default_club_logo.png",
  imageUrl = "url_de_l_image_par_defaut.jpg"
  
  
  
}) => {
  const cardStyle = {
    width: '225px',
    height: '450px',
    margin: '10px 62px 10px 0', // Ajoutez de l'espace à droite de chaque carte
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    verticalAlign: 'top',
    background: '#e9dc74',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '20px solid #e9dc74',
    borderTop: '0px solid #d4af37',
  };

  const imageStyle = {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    opacity: 0.9, // Réglez cette valeur selon vos préférences (de 0 à 1)
  };
  

  

  const drapeauStyle = {
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '30px',
    height: 'auto',
  };

  const clubLogoStyle = {
    position: 'absolute',
    top: '50px',
    left: '10px',
    width: '30px',
    height: 'auto',
  };

  const statStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: 'white', // Changement de la couleur en rouge
    fontSize: '16px',
    fontWeight: 'bold', // Ajout du texte en gras
  };

  const contentStyle = {
    padding: '16px',
    boxSizing: 'border-box',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <div style={cardStyle}>
      <img style={imageStyle} src={imageUrl} alt={nom} />
      <img style={drapeauStyle} src={drapeauUrl} alt={`${nationalite} drapeau`} />
      <img style={clubLogoStyle} src={clubLogoUrl} alt={`${equipe} logo`} />
      <div style={statStyle}>ATT {att}</div>
      <div style={contentStyle}>
        <div>
          <h3>{nom}</h3>
          <p>Equipe : {equipe}</p>
          <p>Nationalité : {nationalite}</p>
        </div>
        <div>
          <p>Numéro de Maillot : {numeroMaillot}</p>
          <p>Âge : {age}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
