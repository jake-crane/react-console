import React from "react";
import './NavBar.css';
import logo from './logo.svg';
import { filterConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';

class NavBar extends React.Component {

    onSearchKeypress(e) {
        this.props.filterConfigurations(e.target.value);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src={logo} className="App-logo" alt="logo" />
                            <span>AWD Configuration Console</span>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Configuration</a></li>
                            <li><a href="#">Actions</a></li>
                            <li><a href="#">Metrics</a></li>
                            <li><a href="#">Audit</a></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <input type="text"
                                className="form-control"
                                placeholder="Search..."
                                onChange={this.onSearchKeypress.bind(this)} />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        configurations: store.configurationReducer.configurations,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterConfigurations: (text) => dispatch(filterConfigurations(text))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);