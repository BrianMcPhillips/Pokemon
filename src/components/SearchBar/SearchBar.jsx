import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.handle} >
          {
            this.props.data.map(booger => <option key={booger} value={booger}>{booger}</option>)
          }
        </select>
      </div>
    )
  }
}
