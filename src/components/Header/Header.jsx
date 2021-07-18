import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Pokemon</h1>
      </div>
    )
  }
}
