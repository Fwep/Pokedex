import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => (
  <li>
    <Link to={`/pokemon/${poke.id}`}>
      <div>{poke.name}</div>
      <img 
        src={poke.image_url}
        alt={poke.name}
      />
    </Link>
  </li>
);

export default PokemonIndexItem;