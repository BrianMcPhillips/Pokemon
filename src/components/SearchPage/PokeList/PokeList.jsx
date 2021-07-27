import React, { Component } from 'react';
import styles from './PokeList.module.css';
import PokeItem from './PokeItem/PokeItem';

export default class PokeList extends Component {
  render() {
    const { data, prev, next, pageNum } = this.props;
    return (
      <div className={styles.body}>
        <h3>Pokemon List</h3>
        <div className={styles.list}>
          {
            data.map(poke => <PokeItem key={poke.pokemon} pokeData={poke}/>)
          }
        </div>
        {
          data.length >= 20 &&
          <div className={styles.page}>
              <h4>{pageNum}</h4>
              <p>page</p>
            <div className={styles.buttons}>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        }
      </div>
    )
  }
}
