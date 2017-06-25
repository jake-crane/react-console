import React from "react";
import './ConfigurationListContainer.css'
import ConfigurationList from "../ConfigurationList/ConfigurationList";
import { fetchConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';

class ConfigurationListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchConfigurations();
    }

    render() {
        const listLength = this.props.configurations.length;
        const itemsPerContainer = listLength / 4;

        var array1 = this.props.configurations.slice((0 * itemsPerContainer), (0 * itemsPerContainer) + itemsPerContainer);
        var array2 = this.props.configurations.slice((1 * itemsPerContainer), (1 * itemsPerContainer) + itemsPerContainer);
        var array3 = this.props.configurations.slice((2 * itemsPerContainer), (2 * itemsPerContainer) + itemsPerContainer);
        var array4 = this.props.configurations.slice((3 * itemsPerContainer), (3 * itemsPerContainer) + itemsPerContainer);

        return (
            <div className="container-fluid">
                <div className="configurationListContainer row">
                    <ConfigurationList configs={array1} />
                    <ConfigurationList configs={array2} />
                    <ConfigurationList configs={array3} />
                    <ConfigurationList configs={array4} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        configurations: store.configurationReducer.configurations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchConfigurations: () => dispatch(fetchConfigurations())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationListContainer);