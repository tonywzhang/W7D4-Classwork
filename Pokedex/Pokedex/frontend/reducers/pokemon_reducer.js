import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = function (state={},action) {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    // debugger
    return action.pokemon;

    default:
    return state;
  }
};

export default pokemonReducer;
