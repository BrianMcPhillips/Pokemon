import React, { Component } from 'react';
import styles from './App.module.css';
import request from 'superagent';
import PokeList from './PokeList/PokeList';

export default class App extends Component {
  state = {
    pokeState: []
  }

  componentDidMount = async() => {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokeState: data.body.results });
  }
  render() {
    return (
      <div>
        <PokeList data={this.state.pokeState} />
      </div>
    )
  }
}

