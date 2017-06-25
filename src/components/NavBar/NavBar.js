import React from "react";
import './NavBar.css';
import { filterConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';

class NavBar extends React.Component {

    onSearchKeypress(e) {
        this.props.filterConfigurations(e.target.value);
    }

    render() {
        return (
            <div className="navBar">
                <ul className="navList">
                    <li>
                        <a href="#" className="selected"><span className="linkContent">Configuration</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="linkContent">Actions</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="linkContent">Metrics</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="linkContent">Audit</span></a>
                    </li>
                </ul>
                <div className="searchContainer"><input type="text" className="searchBox" placeholder="Search"
                    onChange={this.onSearchKeypress.bind(this)} /></div>
            </div>
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