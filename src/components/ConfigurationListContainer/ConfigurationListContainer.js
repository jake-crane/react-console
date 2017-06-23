import React from "react";
import './ConfigurationListContainer.css'
import ConfigurationList from "../ConfigurationList/ConfigurationList";

export default class ConfigurationListContainer extends React.Component {

    state = {
        configurations: []
    };

    handleJSON(json) {
        this.setState(json);
    }

    getIndexOfConfiguration(key) {
        for (var i = 0; i < this.state.configurations.length; i++) {
            if (this.state.configurations[i].key === key) {
                return i;
            }
        }
        return -1;
    }

    updateData(newData) {
        var data = this.state.configurations.slice();
        var index = this.getIndexOfConfiguration(newData.keyName);
        data[index] = newData;
        this.setState({
            configurations: data
        });
        this.sendUpdate();
    }

    sendUpdate() {
        console.log(this.state);
    }

    handleJSONResponse(data) {
        this.setState(data);
    }

    componentDidMount() {
        fetch('./configurations.json')
            .then((response) => response.json())
            .then(this.handleJSONResponse.bind(this))
            .catch((error) => {
                console.error(error);
            });
    }

    stringContainsIgnoreCase(s1, s2) {
        return s1 === s2 
            || (s1 && s2
                && s1.toUpperCase().indexOf(s2.toUpperCase()) > -1);
    }

    filterItems(string) {
        var connfigurationsCopy = this.state.configurations.slice();
        for (var i = 0; i < connfigurationsCopy.length; i++) {
            var config = connfigurationsCopy[i];
            connfigurationsCopy[i].hidden = !(
                this.stringContainsIgnoreCase(config.name, string)
                || this.stringContainsIgnoreCase(config.key, string)
                || this.stringContainsIgnoreCase(config.value, string)
                || this.stringContainsIgnoreCase(config.description, string)
                || this.stringContainsIgnoreCase(config.type, string)
            );
        }
        this.setState({
            configurations: connfigurationsCopy
        });
    }

    render() {
        const listLength = this.state.configurations.length;
        const itemsPerContainer = listLength / 4;

        var array1 = this.state.configurations.slice((0 * itemsPerContainer), (0 * itemsPerContainer) + itemsPerContainer);
        var array2 = this.state.configurations.slice((1 * itemsPerContainer), (1 * itemsPerContainer) + itemsPerContainer);
        var array3 = this.state.configurations.slice((2 * itemsPerContainer), (2 * itemsPerContainer) + itemsPerContainer);
        var array4 = this.state.configurations.slice((3 * itemsPerContainer), (3 * itemsPerContainer) + itemsPerContainer);

        return (
            <div className="container-fluid">
                <div className="configurationListContainer row">
                    <ConfigurationList configs={array1} sendUpdate={this.updateData.bind(this)} />
                    <ConfigurationList configs={array2} sendUpdate={this.updateData.bind(this)} />
                    <ConfigurationList configs={array3} sendUpdate={this.updateData.bind(this)} />
                    <ConfigurationList configs={array4} sendUpdate={this.updateData.bind(this)} />
                </div>
            </div>
        );
    }
}