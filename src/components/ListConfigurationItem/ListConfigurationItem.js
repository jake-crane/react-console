import React from "react";
import './ListConfigurationItem.css';
import { connect } from 'react-redux';
import ConfigurationItemBase from '../ConfigurationItemBase/ConfigurationItemBase'

class ListConfigurationItem extends ConfigurationItemBase {

    render() {
        return (
            this.props.editMode ?
                (
                    <tr className="listConfigurationItem" hidden={this.props.hidden}>
                        <td>{this.props.keyName}</td>
                        <td>
                            <input
                                className="itemName"
                                value={this.state.tempData.name || this.props.name}
                                onChange={this.handleNameChange.bind(this)} />
                        </td>
                        <td>
                            <textarea className="value"
                                value={this.state.tempData.value || this.props.value}
                                onChange={this.handleValueChange.bind(this)}
                            ></textarea>
                        </td>
                        <td>
                            <textarea className="description"
                                value={this.state.tempData.description || this.props.description}
                                onChange={this.handleDescriptionChange.bind(this)}
                            ></textarea>
                        </td>
                        <td className="typeColumn">
                            <select value={this.state.tempData.type || this.props.type} onChange={this.handleTypeChange.bind(this)}>
                                <option value="TEXT">TEXT</option>
                                <option value="XML">XML</option>
                                <option value="ENC_PASSWORD">ENC_PASSWORD</option>
                            </select>
                        </td>
                        <td className="buttonColumn">
                            <button className="btn btn-danger btn-xs glyphicon glyphicon-ban-circle" onClick={this.handleCancel.bind(this)}></button>
                            <button className="btn btn-primary btn-xs glyphicon glyphicon-floppy-disk" onClick={this.handleUpdate.bind(this)}></button>
                        </td>
                    </tr>
                ) :
                (
                    <tr className="listConfigurationItem" hidden={this.props.hidden}>
                        <td>{this.props.keyName}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.value}</td>
                        <td>{this.props.description}</td>
                        <td className="typeColumn">{this.props.type}</td>
                        <td className="buttonColumn">
                            <button className="btn btn-primary btn-xs glyphicon glyphicon-pencil" onClick={this.handleClick.bind(this)}></button>
                        </td>
                    </tr>
                )
        );
    }
}

export default connect(
    ConfigurationItemBase.mapStateToProps,
    ConfigurationItemBase.mapDispatchToProps
)(ListConfigurationItem);