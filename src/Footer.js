import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '1%',
  };

  return (
    <div style={footerStyle}>
      <p>&copy;fifa 2024.</p>
    </div>
  );
};

export default Footer;
