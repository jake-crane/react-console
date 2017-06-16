import React from "react";
import './ConfigurationItem.css';

export default class ConfigurationItem extends React.Component {

    state = {
        editMode: false,
        tempData: {
            name: null,
            keyName: null,
            value: null,
            description: null,
            type: null,
            id: null,
            index: null
        }
    };

    handleClick(e) {
        this.setState({
            editMode: true
        });
    }

    getLargeColIndex() {
        if (this.props.index < 20) {
            return 1;
        }
        return 2;
    }

    clearTempData() {
        this.setState({
            editMode: false,
            tempData: {
                name: null,
                keyName: null,
                value: null,
                description: null,
                type: null,
                id: null,
                index: null
            }
        });
    }

    handleCancel(e) {
        this.clearTempData();
    }

    handleUpdate(e) {
        this.setState({
            editMode: false
        });
        var updatedData = {
            name: this.state.tempData.name || this.props.name,
            keyName: this.state.tempData.keyName || this.props.keyName,
            value: this.state.tempData.value || this.props.value,
            description: this.state.tempData.description || this.props.description,
            type: this.state.tempData.type || this.props.type,
            id: this.props.id,
            index: this.props.index
        };
        this.props.sendUpdate(this.props.index, updatedData);
        this.clearTempData();
    }

    handleNameChange(e) {
        var newState = {
            editMode: this.state.editMode,
            tempData: {
                name: e.target.value,
                keyName: this.state.tempData.keyName,
                value: this.state.tempData.value,
                description: this.state.tempData.description,
                type: this.state.tempData.type,
                id: this.props.id,
                index: this.props.index
            }
        };
        this.setState(newState);
    }

    handleValueChange(e) {
        var newState = {
            editMode: this.state.editMode,
            tempData: {
                name: this.state.tempData.name,
                keyName: this.state.tempData.keyName,
                value: e.target.value,
                description: this.state.tempData.description,
                type: this.state.tempData.type,
                id: this.props.id,
                index: this.props.index
            }
        };
        this.setState(newState);
    }

    handleDescriptionChange(e) {
        var newState = {
            editMode: this.state.editMode,
            tempData: {
                name: this.state.tempData.name,
                keyName: this.state.tempData.keyName,
                value: this.state.tempData.value,
                description: e.target.value,
                type: this.state.tempData.type,
                id: this.props.id,
                index: this.props.index
            }
        };
        this.setState(newState);
    }

    render() {
        return (
            <div className="configurationItem ">
                {this.state.editMode ?
                    (
                        <div>
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
                            <span className="itemName">{this.props.name}</span>
                            <div className="description">{this.props.description}</div>
                        </a>
                    )
                }
            </div>
        );
    }
}