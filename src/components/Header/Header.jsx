import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Pokemon</h1>
        <Link to="/detail">Detail</Link>
        <Link to="/">Home</Link>
      </header>
    )
  }
}
