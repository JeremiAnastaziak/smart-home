import { changeSettings, getSettings } from '../api/api-settings';
import { showNotification } from './notification-actions';

export const SETTINGS_CHANGE = 'SETTINGS_CHANGE';
export const SETTINGS_CHANGE_SUCCESS = 'SETTINGS_CHANGE_SUCCESS';
export const SETTINGS_CHANGE_ERROR = 'SETTINGS_CHANGE_ERROR';
export const SETTINGS_GET = 'SETTINGS_GET';
export const SETTINGS_GET_SUCCESS = 'SETTINGS_GET_SUCCESS';
export const SETTINGS_GET_ERROR = 'SETTINGS_GET_ERROR';

export const changeSettingsAction = settingsChanged => (dispatch, getState) => {
    dispatch({ type: SETTINGS_CHANGE });

    const settingsNow = getState().settings;
    const settingsDesired = Object.assign(settingsNow, settingsChanged);

    changeSettings({ ...settingsDesired })
        .then(data => {
            dispatch({ type: SETTINGS_CHANGE_SUCCESS, settings: settingsDesired })
            showNotification('Ustawienia zostały zmienione')(dispatch);

        })
        .catch(
            error => dispatch({ type: SETTINGS_CHANGE_ERROR })
        );
};

export const getSettingsAction = () => (dispatch, getState) => {
    dispatch({ type: SETTINGS_GET });
    getSettings()
        .then(data => dispatch({ type: SETTINGS_GET_SUCCESS, settings: data.settings }))
        .catch(error => dispatch({ type: SETTINGS_GET_ERROR }));
};
