import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokeItems } from '../../reducers/selectors';

const mSP = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return {
    pokemon,
    items: selectPokeItems(state, pokemon)
  }
};

const mDP = (dispatch) => ({
  requestSinglePokemon: (id) => (dispatch(requestSinglePokemon(id)))
});

export default connect(mSP, mDP)(PokemonDetail);