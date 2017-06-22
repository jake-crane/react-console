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

    updateData(index, newData) {
        var data = this.state.configurations.slice();
        data[index - 1] = newData;
        this.setState({
            configurations: data
        });
        this.sendUpdate();
    }

    sendUpdate() {
        var requestData = this.getRequestData();
        console.log(requestData);
    }

    handleXMLResponse(responseXMLText) {
        var doc = new DOMParser().parseFromString(responseXMLText, 'text/html');
        var configs = [];
        var nextDisplayElement = doc.getElementById('clientConfig_display_1');
        for (var i = 1; nextDisplayElement; i++) {
            var configKeyElement = doc.getElementById('clientConfig_key_' + i);
            var valueElement = doc.getElementById('clientConfig_value_' + i);
            var descriptionElement = doc.getElementById('applicationConfig_descr_' + i);
            var idElement = doc.getElementById('applicationConfig_id_' + i);
            var config = {
                name: nextDisplayElement.value,
                keyName: configKeyElement.value,
                value: valueElement.value,
                description: descriptionElement.value,
                type: 'null',
                id: idElement.value,
                index: i,
                hidden: false
            };
            configs.push(config);
            nextDisplayElement = doc.getElementById('clientConfig_display_' + (i + 1));
        }
        this.setState({
            configurations: configs
        });
    }

    componentDidMount() {
        fetch('/data.html')
            .then((response) => {
                return response.text();
            }).then(this.handleXMLResponse.bind(this))
            .catch((ex) => {
                console.log('parsing failed', ex);
            });
    }

    escapeStuff(string) {
        return string.replace(new RegExp('\\s', 'g'), '+')
            .replace(new RegExp(',', 'g'), '%2C')
            .replace(new RegExp('\\(', 'g'), '%28')
            .replace(new RegExp('\\)', 'g'), '%29');
    }

    getRequestData() {
        var requestString = 'subScreen=divAppConfig&userID=&servlet=awdServer&applicationConfig_id_0=';
        for (var i = 0; i < this.state.configurations.length; i++) {
            var number = this.state.configurations[i].index;
            requestString += '&applicationConfig_id_' + number + '=' + this.state.configurations[i].id
                + '&applicationConfig_display_' + number + '=' + this.escapeStuff(this.state.configurations[i].name)
                + '&applicationConfig_key_' + number + '=' + this.state.configurations[i].keyName
                + '&applicationConfig_type_' + number + '=TEXT'
                + '&applicationConfig_value_' + number + '=' + this.escapeStuff(this.state.configurations[i].value)
                + '&applicationConfig_descr_' + number + '=' + this.escapeStuff(this.state.configurations[i].description);
        }
        return requestString;
    }

    filterItems(string) {
        var connfigurationsCopy = this.state.configurations.slice();
        for (var i = 0; i < connfigurationsCopy.length; i++) {
            var config = connfigurationsCopy[i];
            connfigurationsCopy[i].hidden = !(config.name.includes(string)
                || config.keyName.includes(string)
                || config.value.includes(string)
                || config.description.includes(string)
                || config.type.includes(string));
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