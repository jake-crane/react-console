import React from "react";
import './PanelConfigurationItem.css';
import { connect } from 'react-redux';
import ConfigurationItemBase from '../ConfigurationItemBase/ConfigurationItemBase'

class PanelConfigurationItem extends ConfigurationItemBase {

    render() {
        return this.props.editMode && !this.props.editWithModal ?
            (
                <div className="panelConfigurationItem" hidden={this.props.hidden}>
                    <div>Key</div>
                    <input
                        className="keyName"
                        value={this.state.tempData.key
                            || (this.state.tempData.key === '' ? '' : this.props.keyName)}
                        onChange={this.handleKeyChange.bind(this)} />
                    <div>Name</div>
                    <input
                        className="itemName"
                        value={this.state.tempData.name
                            || (this.state.tempData.name === '' ? '' : this.props.name)}
                        onChange={this.handleNameChange.bind(this)} />
                    <div>Value</div>
                    <textarea className="value"
                        value={this.state.tempData.value
                            || (this.state.tempData.value === '' ? '' : this.props.value)}
                        onChange={this.handleValueChange.bind(this)}
                    ></textarea>
                    <div>
                        <div>Description</div>
                        <textarea className="description"
                            value={this.state.tempData.description
                                || (this.state.tempData.description === '' ? '' : this.props.description)}
                            onChange={this.handleDescriptionChange.bind(this)}
                        ></textarea>
                    </div>
                    <div className="itemType">
                        <div>Type</div>
                        <select value={this.state.tempData.type || this.props.type} onChange={this.handleTypeChange.bind(this)}>
                            <option value="TEXT">TEXT</option>
                            <option value="XML">XML</option>
                            <option value="ENC_PASSWORD">ENC_PASSWORD</option>
                        </select>
                    </div>
                    {
                        this.props.id === null ?
                            <div className="buttonContainer">
                                <button type="button"
                                    onClick={this.handleAddClick.bind(this)}
                                    className="update btn btn-success btn-sm">
                                    Add
                                </button>
                            </div>
                            :
                            <div className="buttonContainer">
                                <button type="button"
                                    onClick={this.handleCancel.bind(this)}
                                    className="cancel btn btn-default btn-sm">
                                    Cancel
                                </button>
                                <button type="button"
                                    onClick={this.handleRemoveClick.bind(this)}
                                    className="remove btn btn-danger btn-sm">
                                    Delete
                                </button>
                                <button type="button"
                                    onClick={this.handleUpdate.bind(this)}
                                    className="update btn btn-primary btn-sm">
                                    Update
                                </button>
                            </div>
                    }
                </div>
            ) :
            (
                <div className="panelConfigurationItem readonly" hidden={this.props.hidden}>
                    <a className="editLink" href="#" onClick={this.handleClick.bind(this)}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <span className="itemName" title={this.props.keyName}>{this.props.name || this.props.keyName}</span>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <div className="description">{this.props.description}</div>
                            </div>
                            {this.props.editMode && this.props.id !== null && this.props.editWithModal && this.getConfigurationEditModal()}
                        </div>
                    </a>
                </div>
            );
    }
}

export default connect(
    ConfigurationItemBase.mapStateToProps,
    ConfigurationItemBase.mapDispatchToProps
)(PanelConfigurationItem);