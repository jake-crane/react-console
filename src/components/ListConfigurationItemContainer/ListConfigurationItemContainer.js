import React from "react";
import './ListConfigurationItemContainer.css'
import { fetchConfigurations } from '../../actions/configurationActions';
import { connect } from 'react-redux';
import ListConfigurationItem from "../ListConfigurationItem/ListConfigurationItem";

class ListConfigurationItemContainer extends React.Component {

    componentDidMount() {
        if (this.props.configurations.length === 0)
            this.props.fetchConfigurations();
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Description</th>
                            <th className="typeColumn">Type</th>
                            <th className="buttonColumn">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.configurations.map(data =>
                            <ListConfigurationItem key={data.key}
                                keyName={data.key}
                                name={data.name}
                                value={data.value}
                                type={data.type}
                                description={data.description}
                                id={data.id}
                                editMode={data.editMode}
                                hidden={data.hidden} />
                        )}
                    </tbody>
                </table>
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
)(ListConfigurationItemContainer);