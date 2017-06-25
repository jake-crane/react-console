import axios from 'axios';

export function fetchConfigurations() {
    return (dispatch) => {
        axios.get('./configurations.json')
            .then((response) => {
                dispatch({ type: 'FETCH_CONFIGURATIONS_FULFILLED', payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_CONFIGURATIONS_REJECTED', payload: err });
            });
    };
}

export function addConfiguration(configuration) {
    return {
        type: 'ADD_CONFIGURATION',
        payload: {...configuration}
    };
}

export function updateConfiguration(configuration) {
    return {
        type: 'UPDATE_CONFIGURATION',
        payload: {...configuration}
    };
}

export function deleteConfiguration(configuration) {
    return {
        type: 'DELETE_CONFIGURATION',
        payload: {...configuration}
    };
}

export function filterConfigurations(text) {
    return {
        type: 'FILTER_CONFIGURATIONS',
        payload: text
    };
}