import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.handleOption} >
          {
            this.props.data.map(booger => <option key={booger} value={booger}>{booger}</option>)
          }
        </select>
        <input onChange={this.props.handleName} type="text"></input>
        <button onClick={this.props.handleClick}>Fetch Pokemon</button>
      </div>
    )
  }
}
