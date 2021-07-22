import React, { Component } from 'react';
import styles from './PokeItem.module.css';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
  render() {
    const { 
      pokeData: {
        url_image, 
        pokemon, 
        attack, 
        defense
      } 
    } = this.props;
    return (
      <Link>
        <div className={styles.item}>
          <img src={url_image} alt={pokemon} />
          <h3>{pokemon}</h3>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
        </div>
      </Link>
    )
  }
}
