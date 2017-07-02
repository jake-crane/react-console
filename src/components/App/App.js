import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeConfigurationView } from '../../actions/configurationActions';
import './App.css';
import TileConfigurationContainer from "../TileConfigurationContainer/TileConfigurationContainer";
import ListConfigurationItemContainer from "../ListConfigurationItemContainer/ListConfigurationItemContainer";
import NavBar from "../NavBar/NavBar";

class App extends Component {

  handleViewSelectionChange(e) {
    this.props.changeConfigurationView(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <span className="configurationOptions">
            <select value={this.props.configurationView} onChange={this.handleViewSelectionChange.bind(this)} >
              <option value="table">Table View</option>
              <option value="tile">Tile View</option>
            </select>
            <label>
              <input className="modalCheckBox" type="checkbox" />
              <span>Modal Editor</span>
            </label>
          </span>
        </div>
        <div className="container-fluid">
          {this.props.configurationView === 'table'
            ? <ListConfigurationItemContainer />
            : <TileConfigurationContainer />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    configurationView: store.configurationReducer.configurationView
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeConfigurationView: (newView) => dispatch(changeConfigurationView(newView))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);