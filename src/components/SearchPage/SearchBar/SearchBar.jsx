import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    const {
      data, 
      handleSearchBy, 
      handleTerm, 
      handleClick,
      term,
      searchBy 
    } = this.props; 

    return (
      <div className={styles.SearchBar}>
        <h3>Search</h3>
        <input onChange={handleTerm} type="text" value={term}></input>
        <select onChange={handleSearchBy} value={searchBy}>
          {
            data.map(option => 
              option === 'name' 
              ? <option key={'name'} value ={'pokemon'}>{'name'}</option>
              : <option key={option} value={option}>{option}</option>
            )
          }
        </select>
        <button onClick={handleClick}>Fetch Pokemon</button>
      </div>
    )
  }
}
