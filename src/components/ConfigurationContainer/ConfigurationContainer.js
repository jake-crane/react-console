import React from "react";
import './ConfigurationContainer.css'
import { fetchConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';
import ConfigurationItem from "../ConfigurationItem/ConfigurationItem";

class ConfigurationListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchConfigurations();
    }

    render() {
        return (
            <div className="configurationListContainer">
                {this.props.configurations.map(data =>
                    <ConfigurationItem key={data.key}
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