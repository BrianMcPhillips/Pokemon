import React, { Component } from 'react';
import styles from './PokeList.module.css';
import PokeItem from './PokeItem/PokeItem';

export default class PokeList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.body}>
        <h3>Pokemon List</h3>
        <div className={styles.list}>
          {
            data.map(poke => <PokeItem key={poke.pokemon} pokeData={poke}/>)
          }
        </div>
      </div>
    )
  }
}
