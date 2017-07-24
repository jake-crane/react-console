import React from "react";
import { editConfiguration, cancelConfigurationEdit, updateConfiguration, addConfiguration, deleteConfiguration } from '../../actions/configurationActions';
import ConfigurationEditModal from "../ConfigurationEditModal/ConfigurationEditModal";

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
            name: this.state.tempData.name || (this.state.tempData.name === '' ? '' : this.props.name),
            key: this.state.tempData.key || (this.state.tempData.key === '' ? '' : this.props.keyName),
            value: this.state.tempData.value || (this.state.tempData.value === '' ? '' : this.props.value),
            description: this.state.tempData.description || (this.state.tempData.description === '' ? '' : this.props.description),
            type: this.state.tempData.type || this.props.type,
            id: this.props.id
        };
        this.props.updateConfiguration(updatedData);
        this.clearTempData();
    }

    handleKeyChange(e) {
        var newState = {
            tempData: {
                name: this.state.tempData.name,
                key: e.target.value,
                value: this.state.tempData.value,
                description: this.state.tempData.description,
                type: this.state.tempData.type,
                id: this.props.id
            }
        };
        this.setState(newState);
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

    handleAddClick(e) {
        var updatedData = {
            name: this.state.tempData.name,
            key: this.state.tempData.key,
            value: this.state.tempData.value,
            description: this.state.tempData.description,
            type: this.state.tempData.type || this.props.type,
            id: Math.floor(Math.random() * 1000000) + 1,
            editMode: false
        };
        this.props.addConfiguration(updatedData);
        this.clearTempData();
    }

    handleRemoveClick(e) {
        this.props.deleteConfiguration(this.props.id);
    }

    getConfigurationEditModal() {
        return (<ConfigurationEditModal
            isOpen={this.props.editMode && this.props.editWithModal}
            handleCancel={this.handleCancel.bind(this)}
            handleDelete={this.handleRemoveClick.bind(this)}
            handleUpdate={this.handleUpdate.bind(this)}
            handleKeyChange={this.handleKeyChange.bind(this)}
            handleNameChange={this.handleNameChange.bind(this)}
            handleValueChange={this.handleValueChange.bind(this)}
            handleDescriptionChange={this.handleDescriptionChange.bind(this)}
            handleTypeChange={this.handleTypeChange.bind(this)}
            keyName={this.props.keyName}
            name={this.props.name}
            value={this.props.value}
            description={this.props.description}
            type={this.props.type}
            tempData={this.state.tempData}
        />);
    }

    static mapStateToProps(store) {
        return {
            configurations: store.configurationReducer.configurations,
            editWithModal: store.configurationReducer.editWithModal
        };
    }

    static mapDispatchToProps(dispatch) {
        return {
            editConfiguration: (configurationId) => dispatch(editConfiguration(configurationId)),
            cancelConfigurationEdit: (configurationId) => dispatch(cancelConfigurationEdit(configurationId)),
            updateConfiguration: (configuration) => dispatch(updateConfiguration(configuration)),
            addConfiguration: (configuration) => dispatch(addConfiguration(configuration)),
            deleteConfiguration: (configurationId) => dispatch(deleteConfiguration(configurationId))
        };
    };
}

