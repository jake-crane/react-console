import React from "react";
import './ConfigurationList.css';
import ConfigurationItem from "../ConfigurationItem/ConfigurationItem";

export default class ConfigurationList extends React.Component {

    render() {
        return (
            <div className="configurationList">
                {this.props.configs.map(data =>
                    <ConfigurationItem key={data.key}
                        keyName={data.key}
                        name={data.name}
                        value={data.value}
                        type={data.type}
                        description={data.description}
                        id={data.id}
                        editMode={data.editMode}
                        hidden={data.hidden} />
                )}
            </div>
        );
    }
}