import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const {
      data, 
      handleOption, 
      handleName, 
      handleClick 
    } = this.props; 

    return (
      <div>
        <select onChange={handleOption} >
          {
            data.map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
        <input onChange={handleName} type="text"></input>
        <button onClick={handleClick}>Fetch Pokemon</button>
      </div>
    )
  }
}
