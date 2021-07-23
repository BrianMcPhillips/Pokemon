import React, { Component } from 'react';
import styles from './SearchPage.module.css';
import request from 'superagent';
import PokeList from './PokeList/PokeList';
import SearchBar from './SearchBar/SearchBar';
import keyWord from '../../assets/data';

export default class SearchPage extends Component {
  state = {
    pokeState: [],
    option: 'pokemon',
    term: '',
    page: 1
  }


  componentDidMount = async() => {
    const data = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=20`
    );
    this.setState({ pokeState: data.body.results });
  }
  
  // componentDidUpdate = async(prevState) => {
  //   if(prevState.page !== this.state.page) {
  //     await this.makeRequest()
  //   }
  // }

  makeRequest = async() => {
    const data = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=20&${this.state.option}=${this.state.term}`
    );
    this.setState({ pokeState: data.body.results });
  }
  handleClick = async() => {
    this.setState({ page: 1 })
    await this.makeRequest()
  }
  handleOption = (e) => {
    this.setState({ option: e.target.value })
  }
  handleTerm = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  }
  handleNext = async() => {
    await this.setState({ page: this.state.page + 1 })
    await this.makeRequest()
  }
  handlePrev = async() => {
    await this.setState({ page: this.state.page - 1 })
    await this.makeRequest()
  }

  render() {
    const { pokeState, page } = this.state;

    return (
      <div className={styles.Search}>
        <SearchBar 
          data={keyWord} 
          handleOption={this.handleOption} 
          handleTerm={this.handleTerm}
          handleClick={this.handleClick} />
        <PokeList 
          data={pokeState}
          next={this.handleNext}
          prev={this.handlePrev}
          pageNum={page}/>
      </div>
    )
  }
}
