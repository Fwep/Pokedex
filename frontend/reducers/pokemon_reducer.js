import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = {};
      let {pokemon} = action;
      for (let pokeId in pokemon) {
        newState[pokeId] = pokemon[pokeId];
      }
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;