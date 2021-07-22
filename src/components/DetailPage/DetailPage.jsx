import React, { Component } from 'react';
import request from 'superagent';


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
    const {
      pokemon: {
        url_image,
        pokemon,
        attack,
        defense
      }
    } = this.state;
    return (
      <div>
        <img src={url_image} alt={pokemon} />
        <h3>{pokemon}</h3>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
      </div>
    )
  }
}
