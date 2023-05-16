import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Oops! On est perdu?</h1>
      <p>Voici le lien de l'acceuil:</p>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFound;
