import React, { Component } from 'react';
import styles from './SearchPage.module.css';
import request from 'superagent';
import PokeList from './PokeList/PokeList';
import SearchBar from './SearchBar/SearchBar';
import keyWord from '../../assets/data';

export default class SearchPage extends Component {
  state = {
    pokeState: [],
    option: 'All',
    name: ''
  }

  componentDidMount = async() => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=200`);
    this.setState({ pokeState: data.body.results });
  }
  handleClick = async() => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=200&pokemon=${this.state.name}`);
    this.setState({ pokeState: data.body.results });
  }
  handleOption = (e) => {
    this.setState({ option: e.target.value })
  }
  handleName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  render() {
    const { pokeState } = this.state;
    // const filteredPoke = pokeState.filter(poke => {
    //   return option === 'All' ? true : option === poke.type_1;

    // })
    return (
      <div className={styles.App}>
        <SearchBar 
          data={keyWord} 
          handleOption={this.handleOption} 
          handleName={this.handleName}
          handleClick={this.handleClick} />
        <PokeList data={pokeState}/>
      </div>
    )
  }
}
