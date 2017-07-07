export default function reducer(state = {
    configurations: [],
    fetching: false,
    fetched: false,
    error: null,
    configurationView: 'table',
    editWithModal: false
}, action) {
    switch (action.type) {
        case 'FILTER_CONFIGURATIONS': {
            return { ...state, configurations: filterItems(state.configurations, action.payload) };
        }
        case 'FETCH_CONFIGURATIONS': {
            return { ...state, fetching: true };
        }
        case 'FETCH_CONFIGURATIONS_REJECTED': {
            return { ...state, fetching: false, error: action.payload };
        }
        case 'FETCH_CONFIGURATIONS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                configurations: action.payload.configurations
            };
        }
        case 'ADD_CONFIGURATION': {
            return {
                ...state,
                configurations: [...state.configurations, action.payload],
            };
        }
        case 'EDIT_CONFIGURATION': {
            const newConfigurations = [...state.configurations];
            const updateIndex = newConfigurations.findIndex(configuration => configuration.id === action.payload);
            if (updateIndex > -1)
                newConfigurations[updateIndex].editMode = true;
            return { ...state, configurations: newConfigurations };
        }
        case 'CANCEL_CONFIGURATION_EDIT': {
            const newConfigurations = [...state.configurations];
            const updateIndex = newConfigurations.findIndex(configuration => configuration.id === action.payload);
            if (updateIndex > -1)
                newConfigurations[updateIndex].editMode = false;
            return { ...state, configurations: newConfigurations };
        }
        case 'UPDATE_CONFIGURATION_FULFILLED': {
            const newConfigurations = [...state.configurations];
            const updateIndex = newConfigurations.findIndex(configuration => configuration.id === action.payload.id);
            if (updateIndex > -1)
                newConfigurations[updateIndex] = action.payload;
            return { ...state, configurations: newConfigurations };
        }
        case 'DELETE_CONFIGURATION': {
            return {
                ...state,
                configurations: state.configurations.filter(configuration => configuration.id !== action.payload)
            };
        }
        case 'CHANGE_CONFIGURATION_VIEW': {
            return { ...state, configurationView: action.payload };
        }
        case 'CHANGE_MODAL_EDIT': {
            return { ...state, editWithModal: action.payload };
        }
        default:
            return state;
    }
};

function stringContainsIgnoreCase(s1, s2) {
    return s1 && (s2 || s2 === '') && s1.toUpperCase().indexOf(s2.toUpperCase()) > -1;
}

function filterItems(currentConfigurations, string) {
    return currentConfigurations.map((configuration)=> {
        configuration.hidden = !(
            stringContainsIgnoreCase(configuration.name, string)
            || stringContainsIgnoreCase(configuration.key, string)
            || stringContainsIgnoreCase(configuration.value, string)
            || stringContainsIgnoreCase(configuration.description, string)
            || stringContainsIgnoreCase(configuration.type, string)
        );
        return configuration;
    });
}