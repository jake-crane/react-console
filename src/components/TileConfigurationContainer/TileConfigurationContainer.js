import React from "react";
import './TileConfigurationContainer.css'
import { fetchConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';
import TileConfigurationItem from "../TileConfigurationItem/TileConfigurationItem";

class ConfigurationListContainer extends React.Component {

    componentDidMount() {
        if (this.props.configurations.length === 0)
            this.props.fetchConfigurations();
    }

    render() {
        return (
            <div className="configurationListContainer">
                {this.props.configurations.map(data =>
                    <TileConfigurationItem key={data.key}
                        keyName={data.key}
                        name={data.name}
                        value={data.value}
                        type={data.type}
                        description={data.description}
                        id={data.id}
                        editMode={data.editMode}
                        hidden={data.hidden} />
                )}
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