import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon}  from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>Yo</h1>, root)
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
});
