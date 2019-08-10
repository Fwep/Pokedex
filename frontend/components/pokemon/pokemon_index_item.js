import React from 'react';

const PokemonIndexItem = ({poke}) => (
  <li>
    <div>{poke.name}</div>
    <img 
      src={poke.image_url}
      alt={poke.name}
      />
  </li>
);

export default PokemonIndexItem;