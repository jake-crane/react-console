import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: '../awd/config/services/v1/console/configurations/',
  headers: {'CSRF_TOKEN': localStorage.getItem('CSRF_TOKEN')}
});

export function addConfiguration(configuration) {
    return (dispatch) => {
        axiosInstance.post('', configuration)
            .then((response) => {
                dispatch(addConfigurationFulfilled(configuration));
            })
            .catch((err) => {
                dispatch(addConfigurationRejected(err));
            });
    };
}

export function updateConfiguration(configuration) {
    return (dispatch) => {
        axiosInstance.put(configuration.id, configuration)
            .then((response) => {
                dispatch(updateConfigurationFulfilled(configuration));
            })
            .catch((err) => {
                dispatch(updateConfigurationRejected(err));
            });
    };
}

export function deleteConfiguration(configurationId) {
    return (dispatch) => {
        axiosInstance.delete(configurationId)
            .then((response) => {
                dispatch(deleteConfigurationFulfilled(configurationId));
            })
            .catch((err) => {
                dispatch(deleteConfigurationRejected(err));
            });
    };
}

export function fetchConfigurations() {
    return (dispatch) => {
        axiosInstance.get()
            .then((response) => {
                localStorage.setItem('CSRF_TOKEN', response.headers.csrf_token);
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

export function addConfigurationFulfilled(configuration) {
    return {
        type: 'ADD_CONFIGURATION_FULFILLED',
        payload: configuration
    };
}

export function updateConfigurationFulfilled(configuration) {
    return {
        type: 'UPDATE_CONFIGURATION_FULFILLED',
        payload: configuration
    };
}

export function addConfigurationRejected(err) {
    return {
        type: 'ADD_CONFIGURATION_REJECTED',
        payload: err
    };
}

export function updateConfigurationRejected(err) {
    return {
        type: 'UPDATE_CONFIGURATION_REJECTED',
        payload: err
    };
}

export function deleteConfigurationFulfilled(configurationId) {
    return {
        type: 'DELETE_CONFIGURATION_FULFILLED',
        payload: configurationId
    };
}

export function deleteConfigurationRejected(err) {
    return {
        type: 'DELETE_CONFIGURATION_REJECTED',
        payload: err
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