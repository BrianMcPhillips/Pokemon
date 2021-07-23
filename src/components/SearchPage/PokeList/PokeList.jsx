import React, { Component } from 'react';
import styles from './PokeList.module.css';
import PokeItem from './PokeItem/PokeItem';

export default class PokeList extends Component {
  render() {
    const { data, prev, next, pageNum } = this.props;
    return (
      <div className={styles.body}>
        <h3>Pokemon List</h3>
        {
          data.length >= 20 &&
          <div>
            <h4>{pageNum}</h4>
            <p>page</p>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        }
        <div className={styles.list}>
          {
            data.map(poke => <PokeItem key={poke.pokemon} pokeData={poke}/>)
          }
        </div>

      </div>
    )
  }
}
