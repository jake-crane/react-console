import React from "react";
import './TileConfigurationItem.css';
import { connect } from 'react-redux';
import ConfigurationItemBase from '../ConfigurationItemBase/ConfigurationItemBase'

class TileConfigurationItem extends ConfigurationItemBase {

    render() {
        return (
            <div className={"tileConfigurationItem" + (this.props.editMode ? '' : ' readonly')} hidden={this.props.hidden}>
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
                            <div className="itemType">
                                <div>Type</div>
                                <select value={this.state.tempData.type || this.props.type} onChange={this.handleTypeChange.bind(this)}>
                                    <option value="TEXT">TEXT</option>
                                    <option value="XML">XML</option>
                                    <option value="ENC_PASSWORD">ENC_PASSWORD</option>
                                </select>
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

export default connect(
    ConfigurationItemBase.mapStateToProps,
    ConfigurationItemBase.mapDispatchToProps
)(TileConfigurationItem);