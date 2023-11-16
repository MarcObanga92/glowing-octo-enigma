import React from 'react';
import PlayersList from './PlayersList';
import Navbar from './Navbar';
import Footer from './Footer'; // Importez votre composant Footer
import './Navbar.css'; // Importez le fichier de styles pour le Navbar
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <PlayersList />
      <Footer />
    </div>
  );
}

export default App;
