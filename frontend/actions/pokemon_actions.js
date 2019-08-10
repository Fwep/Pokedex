import * as API_UTIL from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return API_UTIL.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
}