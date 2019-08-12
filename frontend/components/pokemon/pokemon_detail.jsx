import React from 'react';
import Item from '../items/item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId != this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
  
  render() {
    const { pokemon, items } = this.props;
    
    return (!!pokemon &&
      <span>
        <img src={pokemon.image_url} />
        <h3>{`Name: ${pokemon.name}`}</h3>
        <h3>{`Type: ${pokemon.poke_type}`}</h3>
        <h3>{`Attack: ${pokemon.attack}`}</h3>
        <h3>{`Defense: ${pokemon.defense}`}</h3>
        <h4>Items</h4>
        <ul>
          {items.map(item => <Item key={item.id} item={item} />)}
        </ul>
      </span>
    )
  }
}

export default PokemonDetail;