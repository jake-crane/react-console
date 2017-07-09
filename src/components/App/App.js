import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeConfigurationView, changeModalEdit } from '../../actions/configurationActions';
import './App.css';
import TileConfigurationContainer from "../TileConfigurationContainer/TileConfigurationContainer";
import ListConfigurationItemContainer from "../ListConfigurationItemContainer/ListConfigurationItemContainer";
import PanelConfigurationContainer from "../PanelConfigurationContainer/PanelConfigurationContainer";
import NavBar from "../NavBar/NavBar";

class App extends Component {

  handleViewSelectionChange(e) {
    this.props.changeConfigurationView(e.target.value);
  }

  handleModalEditChange(e) {
    this.props.changeModalEdit(e.target.checked);
  }

  getConfigurationContainer() {
    switch (this.props.configurationView) {

      case 'table': 
        return <ListConfigurationItemContainer />;
      case 'tile': 
        return <TileConfigurationContainer />
      case 'panel': 
        return <PanelConfigurationContainer />
      default:
        return null;
    }
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
              <option value="panel">Panel View</option>
            </select>
            <label>
              <input className="modalCheckBox" type="checkbox"
                value={this.props.editWithModal} onChange={this.handleModalEditChange.bind(this)} />
              <span>Modal Editor</span>
            </label>
          </span>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 content">
              {this.getConfigurationContainer()}
            </div>
          </div>
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
    changeConfigurationView: (newView) => dispatch(changeConfigurationView(newView)),
    changeModalEdit: (val) => dispatch(changeModalEdit(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);