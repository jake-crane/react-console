import React from "react";
import { editConfiguration, cancelConfigurationEdit, updateConfiguration } from '../../actions/configurationActions';

export default class ConfigurationItemBase extends React.Component {

    state = {
        tempData: {
            name: null,
            key: null,
            value: null,
            description: null,
            type: null,
            id: null
        }
    };

    handleClick(e) {
        this.props.editConfiguration(this.props.id);
    }

    clearTempData() {
        this.setState({
            tempData: {
                name: null,
                key: null,
                value: null,
                description: null,
                type: null,
                id: null
            }
        });
    }

    handleCancel(e) {
        this.clearTempData();
        this.props.cancelConfigurationEdit(this.props.id);
    }

    handleUpdate(e) {
        var updatedData = {
            name: this.state.tempData.name || this.props.name,
            key: this.state.tempData.key || this.props.keyName,
            value: this.state.tempData.value || this.props.value,
            description: this.state.tempData.description || this.props.description,
            type: this.state.tempData.type || this.props.type,
            id: this.props.id
        };
        this.props.updateConfiguration(updatedData);
        this.clearTempData();
    }

    handleNameChange(e) {
        var newState = {
            tempData: {
                name: e.target.value,
                key: this.state.tempData.key,
                value: this.state.tempData.value,
                description: this.state.tempData.description,
                type: this.state.tempData.type,
                id: this.props.id
            }
        };
        this.setState(newState);
    }

    handleValueChange(e) {
        var newState = {
            tempData: {
                name: this.state.tempData.name,
                key: this.state.tempData.key,
                value: e.target.value,
                description: this.state.tempData.description,
                type: this.state.tempData.type,
                id: this.props.id
            }
        };
        this.setState(newState);
    }

    handleDescriptionChange(e) {
        var newState = {
            tempData: {
                name: this.state.tempData.name,
                key: this.state.tempData.key,
                value: this.state.tempData.value,
                description: e.target.value,
                type: this.state.tempData.type,
                id: this.props.id
            }
        };
        this.setState(newState);
    }

    handleTypeChange(e) {
        var newState = {
            tempData: {
                name: this.state.tempData.name,
                key: this.state.tempData.key,
                value: this.state.tempData.value,
                description: this.state.tempData.description,
                type: e.target.value,
                id: this.props.id
            }
        };
        this.setState(newState);
    }

    static mapStateToProps(store) {
        return {
            configurations: store.configurationReducer.configurations,
        };
    }

    static mapDispatchToProps(dispatch) {
        return {
            editConfiguration: (configurationId) => dispatch(editConfiguration(configurationId)),
            cancelConfigurationEdit: (configurationId) => dispatch(cancelConfigurationEdit(configurationId)),
            updateConfiguration: (configuration) => dispatch(updateConfiguration(configuration))
        };
    };
}

