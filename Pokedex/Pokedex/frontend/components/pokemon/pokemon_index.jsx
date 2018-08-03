import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return(
      <ul>
        {this.props.pokemon.map((pokemon) => {
          return ( <PokemonIndexItem key={pokemon.id} pokemon={pokemon} /> );
        })}
      </ul>
    );
  }
}

export default PokemonIndex;
