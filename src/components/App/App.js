import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConfigurationListContainer from "../ConfigurationListContainer/ConfigurationListContainer";
import NavBar from "../NavBar/NavBar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="headerContentContainer">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="inlineHeader">AWD Configuration Console</div>
            <NavBar />
          </div>
        </div>
        <ConfigurationListContainer />
        <div>
        </div>
      </div>
    );
  }
}