import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const {
      data, 
      handleOption, 
      handleTerm, 
      handleClick 
    } = this.props; 

    return (
      <div>
        <input onChange={handleTerm} type="text"></input>
        <select onChange={handleOption} >
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
