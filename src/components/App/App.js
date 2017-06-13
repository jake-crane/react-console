import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfigurationListContainer from "../ConfigurationListContainer/ConfigurationListContainer";

export default class App extends Component {
  static loggedIn = false;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>AWD Configuration Console</h2>
          </div>
        </div>
        <ConfigurationListContainer></ConfigurationListContainer>
        <div>
        </div>
      </div>
    );
  }
}