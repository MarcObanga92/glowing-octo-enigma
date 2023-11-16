// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/img/logo11.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>À propos</li>
        <li>Joueurs</li>
        <li>informations</li>
        {/* Ajoutez d'autres éléments de menu selon vos besoins */}
      </ul>
    </nav>
  );
};

export default Navbar;
