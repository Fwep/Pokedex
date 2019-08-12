export const selectAllPokemon = ({ entities }) => {
  return Object.values(entities.pokemon)
}

export const selectPokeItems = (state, pokemon) => {
  return (pokemon && pokemon.item_ids) ? pokemon.item_ids.map(id => state.entities.items[id]) : [];
}