import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Pokemon</h1>
      </header>
    )
  }
}
