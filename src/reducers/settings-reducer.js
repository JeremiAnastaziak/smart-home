import {
    SETTINGS_CHANGE,
    SETTINGS_CHANGE_ERROR,
    SETTINGS_CHANGE_SUCCESS,
    SETTINGS_GET,
    SETTINGS_GET_ERROR,
    SETTINGS_GET_SUCCESS
} from '../actions/settings-actions';

const initialState = {
    alarmEnabled: false,
    minTemperature: 0
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SETTINGS_CHANGE:
            return {
                ...state
            };
        case SETTINGS_CHANGE_SUCCESS:
            return {
                ...state,
                ...action.settings
            };
        case SETTINGS_CHANGE_ERROR:
            return {
                ...state
            };
        case SETTINGS_GET:
            return {
                ...state
            };
        case SETTINGS_GET_ERROR:
            return {
                ...state
            };
        case SETTINGS_GET_SUCCESS:
            return {
                ...state,
                ...action.settings
            };
        default:
            return state;
    }
}
