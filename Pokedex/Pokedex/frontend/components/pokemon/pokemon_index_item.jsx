import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render(){
    return (
      <li  className="pokemon-data">
        <Link to={`/pokemon/:${this.props.pokemon.id}`} >
          <p>{this.props.pokemon.name}</p>
          <img src={this.props.pokemon.image_url}/>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
// key={this.pokemon.id}
