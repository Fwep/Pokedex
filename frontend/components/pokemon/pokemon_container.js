import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index.jsx'

const mSP = (state) => ({
  pokemon: selectAllPokemon(state)
});

const mDP = (dispatch) => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mSP, mDP)(PokemonIndex)