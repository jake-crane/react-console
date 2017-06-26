import React, { Component } from 'react';
import './App.css';
import ConfigurationListContainer from "../ConfigurationListContainer/ConfigurationListContainer";
import NavBar from "../NavBar/NavBar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ConfigurationListContainer />
      </div>
    );
  }
}