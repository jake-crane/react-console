import React, { Component } from 'react';
import logo from './logo.svg';
import './Roboto.css';
import './App.css';
import ConfigurationListContainer from "../ConfigurationListContainer/ConfigurationListContainer";
import NavBar from "../NavBar/NavBar";

export default class App extends Component {

  getFilterItemsFn() {
    return this.filterItems;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="headerContentContainer">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="inlineHeader">AWD Configuration Console</div>
            <NavBar getFilterItemsFn={this.getFilterItemsFn.bind(this)} test="test" />
          </div>
        </div>
        <ConfigurationListContainer ref={(ref) => this.filterItems = ref.filterItems.bind(ref)} />
        <div>
        </div>
      </div>
    );
  }
}