import React from "react";
import './ConfigurationList.css';
import ConfigurationItem from "../ConfigurationItem/ConfigurationItem";

export default class ConfigurationList extends React.Component {

    render() {
        return (
            <div className="configurationList">
                {this.props.configs.map(data =>
                    <ConfigurationItem key={data.keyName}
                        name={data.name}
                        keyName={data.keyName}
                        value={data.value}
                        description={data.description}
                        id={data.id}
                        index={data.index}
                        sendUpdate={this.props.sendUpdate}
                        hidden={data.hidden}/>
                )}
            </div>
        );
    }
}