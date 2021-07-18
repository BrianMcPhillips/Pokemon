import React, { Component } from 'react';
import styles from './App.module.css';
import request from 'superagent';
import PokeList from './PokeList/PokeList';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import options from '../assets/data';

export default class App extends Component {
  state = {
    pokeState: [],
    option: 'All',
    name: ''
  }

  handleClick = async() => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=200&pokemon=${this.state.name}`);
    this.setState({ pokeState: data.body.results });
    console.log(data);
  }

  handleOption = (e) => {
    this.setState({ option: e.target.value })
  }
  handleName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  render() {
    const filteredPoke = this.state.pokeState.filter(poke => {
      return this.state.option === 'All' ? true : this.state.option === poke.type_1;

    })
    return (
      <div>
        <Header />
        <SearchBar 
          data={options} 
          handleOption={this.handleOption} 
          handleName={this.handleName}
          handleClick={this.handleClick} />
        <PokeList data={filteredPoke}/>
      </div>
    )
  }
}

