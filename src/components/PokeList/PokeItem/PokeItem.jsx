import React, { Component } from 'react';
import styles from './PokeItem.module.css';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
  render() {
    const { pokeData } = this.props;
    return (
      <Link>
        <div className={styles.item}>
          <img src={pokeData.url_image} alt={pokeData.pokemon} />
          <h3>{pokeData.pokemon}</h3>
          <p>Attack: {pokeData.attack}</p>
          <p>Defense: {pokeData.defense}</p>
        </div>
      </Link>
    )
  }
}
