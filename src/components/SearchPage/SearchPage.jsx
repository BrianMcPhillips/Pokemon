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
    currentPage: 1,
    totalPages: 1
  }

  componentDidMount = async() => {
    const params = new URLSearchParams(this.props.location.search);
    const option = params.get('searchBy');
    const page = Number(params.get('page'));
    const term = params.get('term');
    if(option !== null) { 
      await this.setState({
        searchBy: option,
        currentPage: page,
        term: term
      });
    }
    await this.makeRequest();
  }
  makeRequest = async() => {
    const data = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.term}`
    );

    this.setState({ 
      pokeState: data.body.results,
      totalPages: Math.ceil(data.body.count / 20)
    });

    const params = new URLSearchParams(this.props.location.search);
    params.set('term', this.state.term);
    params.set('searchBy', this.state.searchBy);
    params.set('page', this.state.currentPage);   
    this.props.history.push('?' + params.toString());
  }
  handleClick = () => {
    this.setState({ currentPage: 1 })
    this.makeRequest()
  }
  handleSearchBy = async(e) => {
    await this.setState({ searchBy: e.target.value })
  }
  handleTerm = async(e) => {
    e.preventDefault();
    await this.setState({ term: e.target.value });
  }
  handleNext = async() => {
    await this.setState({ currentPage: this.state.currentPage + 1 })
    await this.makeRequest()
  }
  handlePrev = async() => {
    await this.setState({ currentPage: this.state.currentPage - 1 })
    await this.makeRequest()
  }

  render() {
    const { pokeState, currentPage, totalPages, term, searchBy } = this.state;

    return (
      <div className={styles.Search}>
        <SearchBar 
          data={keyWord} 
          handleSearchBy={this.handleSearchBy} 
          handleTerm={this.handleTerm}
          handleClick={this.handleClick} 
          term={term}
          searchBy={searchBy}/>
        <PokeList 
          data={pokeState}
          next={this.handleNext}
          prev={this.handlePrev}
          pageNum={currentPage}
          totalPage={totalPages}/>
      </div>
    )
  }
}
