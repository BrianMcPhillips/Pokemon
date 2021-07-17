import React, { Component } from 'react';
import styles from './PokeItem.module.css';

export default class PokeItem extends Component {
  render() {
    return (
      <div>
       <img src={this.props.pokeData.url_image} alt={this.props.pokeData.pokemon} />
      </div>
    )
  }
}
