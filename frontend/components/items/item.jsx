import React from 'react';

const Item = ({ item }) => (
  <>
    <Link to={`/pokemon/${item.pokemon_id}/items/:itemId`}
    <img src={item.image_url}/>
    <h2>{item.name}</h2>
    <h3>Happiness: {item.happiness}</h3>
    <h3>Price: {item.price}</h3>
  </>
);

export default Item;