import React from 'react';
import { Route } from 'react-router-dom'
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <>
        <Route 
          path="/pokemon/:pokemonId" 
          component={PokemonDetailContainer} 
        />
        <ul>
          {this.props.pokemon.map(poke => (
            <PokemonIndexItem 
              key={poke.id}
              poke={poke}
            />
          ))}
        </ul>
    </>
    );
  }
}

export default PokemonIndex;