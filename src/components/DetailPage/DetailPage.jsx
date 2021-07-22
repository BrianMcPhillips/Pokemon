import React, { Component } from 'react';
import request from 'superagent';
import PokeItem from '../PokeList/PokeItem/PokeItem';

export default class DetailPage extends Component {
  state = {
    pokemon: {}
  }

  componentDidMount = async() => {
    const id = this.props.match.params.myPokemonId;
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${id}`);
    console.log(data.body);
    const singlePoke = data.body.results[0];
    this.setState({ pokemon: singlePoke})
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <PokeItem pokeData={this.state.pokemon} />
      </div>
    )
  }
}
