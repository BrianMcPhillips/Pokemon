import React, { Component } from 'react';
import styles from './SearchPage.module.css';
import request from 'superagent';
import PokeList from './PokeList/PokeList';
import SearchBar from './SearchBar/SearchBar';
import keyWord from '../../assets/data';

export default class SearchPage extends Component {
  state = {
    pokeState: [],
    searchBy: 'pokemon',
    term: '',
    page: 1
  }

  componentDidMount = async() => {
    const params = new URLSearchParams(this.props.location.search);
    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    console.log('searchBy', searchBy, '=>', 'page', page, '=>', 'search', search)

    if(searchBy !== null) { await this.setState({
      searchBy: searchBy,
      page: page,
      term: search
    });
    }
    await this.makeRequest();
  }
  // componentDidMount = async() => {
  //   const data = await request.get(
  //     `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=20`
  //   );
  //   this.setState({ pokeState: data.body.results });
  // }
  
  // componentDidUpdate = async(prevState) => {
  //   if(prevState.page !== this.state.page) {
  //     await this.makeRequest()
  //   }
  // }

  makeRequest = async() => {
    const data = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=20&${this.state.searchBy}=${this.state.term}`
    );
    this.setState({ pokeState: data.body.results });
  }
  handleClick = async() => {
    this.setState({ page: 1 })
    await this.makeRequest()
  }
  handleSearchBy = async(e) => {
    await this.setState({ searchBy: e.target.value })
    console.log(this.state.searchBy);
  }
  handleTerm = async(e) => {
    e.preventDefault();
    await this.setState({ term: e.target.value });
    console.log(this.state.term);
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
          handleSearchBy={this.handleSearchBy} 
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
