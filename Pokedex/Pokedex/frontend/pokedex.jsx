import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Yeah!");
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});




// import {fetchAllPokemon} from './util/api_util';
// import {selectAllPokemon} from './reducers/selectors';
// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';

// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.fetchAllPokemon = fetchAllPokemon;
// window.selectAllPokemon = selectAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
