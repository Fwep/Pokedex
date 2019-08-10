export const selectAllPokemon = ({ entities }) => {
  return Object.values(entities.pokemon)
}