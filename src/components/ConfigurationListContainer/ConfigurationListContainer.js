import React from "react";
import '../ConfigurationList/Roboto.css'
import './ConfigurationListContainer.css'
import ConfigurationList from "../ConfigurationList/ConfigurationList";

export default class ConfigurationListContainer extends React.Component {

    state = {
        configurations: []
    };

    handleJSON(json) {
        this.setState(json);
    }

    handleXMLResponse(responseXMLText) {
        var doc = new DOMParser().parseFromString(responseXMLText, 'text/html');
        var configs = [];
        var nextDisplayElement = doc.getElementById('clientConfig_display_1');
        for (var i = 1; nextDisplayElement; i++) {
            var configKeyElement = doc.getElementById('clientConfig_key_' + i);
            var valueElement = doc.getElementById('clientConfig_value_' + i);
            var descriptionElement = doc.getElementById('applicationConfig_descr_' + i);
            var config = {
                name: nextDisplayElement.value,
                keyName: configKeyElement.value,
                value: valueElement.value,
                description: descriptionElement.value,
                type: 'null',
                index: i
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
            .then(function (response) {
                return response.text();
            }).then(this.handleXMLResponse.bind(this))
            .catch(function (ex) {
                console.log('parsing failed', ex);
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
                    <ConfigurationList configs={array1} >

                    </ConfigurationList>
                    <ConfigurationList configs={array2}>

                    </ConfigurationList>
                    <ConfigurationList configs={array3}>

                    </ConfigurationList>
                    <ConfigurationList configs={array4}>

                    </ConfigurationList>
                </div>
            </div>
        );
    }
}