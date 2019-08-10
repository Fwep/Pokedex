import React from 'react';
import {Provider} from 'react-redux';
import PokemonContainer from '../components/pokemon/pokemon_container';

const Root = ({store}) => (
  <Provider store={store}>
    <PokemonContainer />
  </Provider>
);


export default Root;