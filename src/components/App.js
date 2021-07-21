import React, { Component } from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => 
              <SearchPage {...routerProps} 
              />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

