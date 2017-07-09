import React from "react";
import { fetchConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';
import PanelConfigurationItem from "../PanelConfigurationItem/PanelConfigurationItem";

class PanelConfigurationContainer extends React.Component {

    componentDidMount() {
        if (this.props.configurations.length === 0)
            this.props.fetchConfigurations();
    }

    render() {
        return (
            <div className="panelConfigurationContainer">
                {this.props.configurations.map(data =>
                    <PanelConfigurationItem key={data.key}
                        keyName={data.key}
                        name={data.name}
                        value={data.value}
                        type={data.type}
                        description={data.description}
                        id={data.id}
                        editMode={data.editMode}
                        hidden={data.hidden} />
                )}
                <PanelConfigurationItem key={''}
                    keyName={''}
                    name={''}
                    value={''}
                    type={'TEXT'}
                    description={''}
                    id={null}
                    editMode={true}
                    hidden={false} />
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        configurations: store.configurationReducer.configurations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchConfigurations: () => dispatch(fetchConfigurations())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelConfigurationContainer);