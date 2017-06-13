import React from "react";
import './ConfigurationItem.css';

export default class ConfigurationItem extends React.Component {

    handleClick(e) {
        alert('edit ' + this.props.name);
    }

    getLargeColIndex() {
        if (this.props.index < 20) {
            return 1;
        }
        return 2;
    }

    render() {
        return (
            <div className="configurationItem ">
                <a href="#" onClick={this.handleClick.bind(this)}>
                    <div>
                        <span className="itemName">{this.props.name}</span>
                        <div>
                            <div className="description">{this.props.description}</div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}