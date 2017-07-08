import axios from 'axios';

export function updateConfiguration(configuration) {
    return (dispatch) => {
        //http://linjborasp8/awdServer/awd/config/services/v1/console/configurations
        axios.put('./configurations', configuration)
            .then((response) => {
                dispatch(updateConfigurationFulfilled(configuration));
            })
            .catch((err) => {
                dispatch(updateConfigurationRejected(err));
            });
    };
}

export function fetchConfigurations() {
    return (dispatch) => {
        axios.get('./configurations.json')
            .then((response) => {
                dispatch(fetchConfigurationsFulfilled(response));
            })
            .catch((err) => {
                dispatch(fetchConfigurationsRejected(err));
            });
    };
}

export function fetchConfigurationsFulfilled(response) {
    return {
        type: 'FETCH_CONFIGURATIONS_FULFILLED', payload: response.data
    };
}

export function fetchConfigurationsRejected(err) {
    return {
        type: 'FETCH_CONFIGURATIONS_REJECTED', payload: err
    };
}

export function addConfiguration(configuration) {
    return {
        type: 'ADD_CONFIGURATION',
        payload: configuration 
    };
}

export function removeConfiguration(configurationId) {
    return {
        type: 'REMOVE_CONFIGURATION',
        payload: configurationId 
    };
}

export function editConfiguration(configurationId) {
    return {
        type: 'EDIT_CONFIGURATION',
        payload: configurationId
    };
}

export function cancelConfigurationEdit(configurationId) {
    return {
        type: 'CANCEL_CONFIGURATION_EDIT',
        payload: configurationId
    };
}

export function updateConfigurationFulfilled(configuration) {
    return {
        type: 'UPDATE_CONFIGURATION_FULFILLED',
        payload: configuration
    };
}

export function updateConfigurationRejected(err) {
    return {
        type: 'UPDATE_CONFIGURATION_REJECTED',
        payload: err
    };
}

export function deleteConfiguration(configuration) {
    return {
        type: 'DELETE_CONFIGURATION',
        payload: { ...configuration }
    };
}

export function filterConfigurations(text) {
    return {
        type: 'FILTER_CONFIGURATIONS',
        payload: text
    };
}

export function changeConfigurationView(newView) {
    return {
        type: 'CHANGE_CONFIGURATION_VIEW',
        payload: newView
    };
}

export function openModal() {
    return {
        type: 'OPEN_MODAL'
    };
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    };
}

export function changeModalEdit(val) {
    return {
        type: 'CHANGE_MODAL_EDIT',
        payload: val
    };
}