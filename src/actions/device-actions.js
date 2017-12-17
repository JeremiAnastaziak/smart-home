import { createDevice, editDevice, removeDevice } from '../api/api-device';
import { loadRecords } from './dashboard-actions';
import { showNotification } from './notification-actions';
export const DEVICE_CREATE = 'DEVICE_CREATE';
export const DEVICE_CREATE_SUCCESS = 'DEVICE_CREATE_SUCCESS';
export const DEVICE_CREATE_ERROR = 'DEVICE_CREATE_ERROR';
export const DEVICE_EDIT = 'DEVICE_EDIT';
export const DEVICE_EDIT_SUCCESS = 'DEVICE_EDIT_SUCCESS';
export const DEVICE_EDIT_ERROR = 'DEVICE_EDIT_ERROR';
export const DEVICE_REMOVE = 'DEVICE_REMOVE';
export const DEVICE_REMOVE_SUCCESS = 'DEVICE_REMOVE_SUCCESS';
export const DEVICE_REMOVE_ERROR = 'DEVICE_REMOVE_ERROR';
export const DEVICE_SELECT = 'DEVICE_SELECT';

export function selectDevice(device) {
    return (dispatch, getState) => {
        const { graphs, dashboard } = getState();
        dispatch({ type: DEVICE_SELECT, device });
        loadRecords()(dispatch, getState);
    };
}

export function submitCreateDevice(body) {
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_CREATE });

        return createDevice(body)
            .then(respone => {
                if (respone.status === 201) {
                    dispatch({
                        type: DEVICE_CREATE_SUCCESS
                    });
                    loadRecords()(dispatch, getState);
                    showNotification(`(${respone.statusText})`)(dispatch);
                } else {
                    dispatch({ type: DEVICE_CREATE_ERROR });
                    showNotification(`(${respone.statusText})`)(dispatch);
                }
            })
            .catch(error => dispatch({ type: DEVICE_CREATE_ERROR, error }));
    };
}

export function submitEditDevice(body) {
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_EDIT });

        return editDevice(body)
            .then(respone => {
                if (respone.status === 204) {
                    dispatch({
                        type: DEVICE_EDIT_SUCCESS
                    });
                    loadRecords()(dispatch, getState);
                    showNotification(`(${respone.statusText})`)(dispatch);
                } else {
                    dispatch({ type: DEVICE_EDIT_ERROR });
                    showNotification(`(${respone.statusText})`)(dispatch);
                }
            })
            .catch(error => dispatch({ type: DEVICE_EDIT_ERROR, error }));
    };
}

export function submitRemoveDevice(body) {
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_REMOVE });

        return removeDevice(body)
            .then(respone => {
                if (respone.status === 204) {
                    dispatch({
                        type: DEVICE_REMOVE_SUCCESS
                    });
                    loadRecords()(dispatch, getState);
                    showNotification(`(${respone.statusText})`)(dispatch);
                } else {
                    dispatch({ type: DEVICE_REMOVE_ERROR });
                    showNotification(`(${respone.statusText})`)(dispatch);
                }
            })
            .catch(error => dispatch({ type: DEVICE_REMOVE_ERROR, error }));
    };
}
