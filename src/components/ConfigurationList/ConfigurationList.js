import React from "react";
import './ConfigurationList.css';
import ConfigurationItem from "../ConfigurationItem/ConfigurationItem";
import './Roboto.css'

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
                        index={data.index}></ConfigurationItem>
                )}
            </div>
        );
    }
}