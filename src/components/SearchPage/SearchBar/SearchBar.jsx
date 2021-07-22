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
        <input onChange={handleName} type="text"></input>
        <select onChange={handleOption} >
          {
            data.map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
        <button onClick={handleClick}>Fetch Pokemon</button>
      </div>
    )
  }
}
