import React, { Component } from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import DetailPage from './DetailPage/DetailPage';
import Header from './Header/Header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => 
              <SearchPage {...routerProps} 
              />}
            />
            <Route 
              path="/detail/:myPokemonId"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
