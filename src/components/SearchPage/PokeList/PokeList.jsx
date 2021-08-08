//Import Libraries and Components
import React, { Component } from 'react';
import styles from './PokeList.module.css';
import PokeItem from './PokeItem/PokeItem';

export default class PokeList extends Component {
  render() {
    //Destructure Props
    const { data, prev, next, pageNum, totalPage } = this.props;
    return (
      <div className={styles.body}>
        <h3>Pokemon List</h3>
    //Map over data to pass props to individual character components and set them to state
        <div className={styles.list}>
          {
            data.map(poke => <PokeItem key={poke.pokemon} pokeData={poke}/>)
          }
        </div>
        {
          totalPage > 1 &&
          <div className={styles.page}>
            <h4>{pageNum} of {totalPage}</h4>
            <div className={styles.buttons}>
              {
                pageNum !== 1 && <button onClick={prev}>Prev</button>
              }
              {
                pageNum !== totalPage && <button onClick={next}>Next</button>
              }
            </div>
          </div>
        }
      </div>
    )
  }
}
