import React from "react";
import './ConfigurationItem.css';
import { connect } from 'react-redux';
import {editConfiguration, cancelConfigurationEdit, updateConfiguration} from '../../actions/configurationActions';

class ConfigurationItem extends React.Component {

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

    render() {
        return (
            <div className={"configurationItem" + ( this.props.hidden ? ' hidden' : '' ) + (this.props.editMode ? '' : ' readonly')}>
                {this.props.editMode ?
                    (
                        <div>
                            <span>Key: </span>
                            <span>{this.props.keyName}</span>
                            <div>Name</div>
                            <input
                                className="itemName"
                                value={this.state.tempData.name || this.props.name}
                                onChange={this.handleNameChange.bind(this)} />
                            <div>Value</div>
                            <textarea className="value"
                                value={this.state.tempData.value || this.props.value}
                                onChange={this.handleValueChange.bind(this)}
                            ></textarea>
                            <div>
                                <div>Description</div>
                                <textarea className="description"
                                    value={this.state.tempData.description || this.props.description}
                                    onChange={this.handleDescriptionChange.bind(this)}
                                ></textarea>
                            </div>
                            <div className="buttonContainer">
                                <button type="button"
                                    onClick={this.handleCancel.bind(this)}
                                    className="cancel btn btn-default btn-sm">
                                    Cancel
                                </button>
                                <button type="button"
                                    onClick={this.handleUpdate.bind(this)}
                                    className="update btn btn-primary btn-sm">
                                    Update
                                </button>
                            </div>
                        </div>
                    ) :
                    (
                        <a className="editLink" href="#" onClick={this.handleClick.bind(this)}>
                            <span className="itemName" title={this.props.keyName}>{this.props.name || this.props.keyName}</span>
                            <div className="description">{this.props.description}</div>
                        </a>
                    )
                }
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
        editConfiguration: (configurationId) => dispatch(editConfiguration(configurationId)),
        cancelConfigurationEdit: (configurationId) => dispatch(cancelConfigurationEdit(configurationId)),
        updateConfiguration: (configuration) => dispatch(updateConfiguration(configuration))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationItem);