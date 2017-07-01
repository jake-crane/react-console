import React, { Component } from 'react';
import './App.css';
import ConfigurationContainer from "../ConfigurationContainer/ConfigurationContainer";
import NavBar from "../NavBar/NavBar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <div className="container-fluid">
          <ConfigurationContainer />
        </div>
      </div>
    );
  }
}