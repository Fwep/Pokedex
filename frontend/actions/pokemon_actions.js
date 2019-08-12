import * as API_UTIL from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveSinglePokemon = (payload) => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
})

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return API_UTIL.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
}

export const requestSinglePokemon = (id) => dispatch => {
  return API_UTIL.fetchPokemon(id).then(pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  });
}