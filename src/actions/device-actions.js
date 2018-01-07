import { createDevice, editDevice, removeDevice, getDevices } from '../api/api-device';
import { loadRecords, fetchInitialData } from './dashboard-actions';
import { loadGraphData, graphsViewChange } from './graph-actions';
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
export const DEVICE_GET = 'DEVICE_GET';
export const DEVICE_GET_SUCCESS = 'DEVICE_GET_SUCCESS';
export const DEVICE_GET_ERROR = 'DEVICE_GET_ERROR';

export function selectDevice(device) {
    return (dispatch, getState) => {
        const { graphs, dashboard } = getState();
        if(!device) return false;
        dispatch({ type: DEVICE_SELECT, device });
        graphsViewChange('temperature')(dispatch, getState);
        loadRecords()(dispatch, getState);
        loadGraphData()(dispatch, getState);
    };
}

export function getDevicesAction(device) {
    return (dispatch, getState) => {
        dispatch({
            type: DEVICE_GET
        });
        return getDevices().then(response => {
            dispatch({
                type: DEVICE_GET_SUCCESS,
                devices: response.devices
            });
        })
        .catch(error => dispatch({ type: DEVICE_GET_ERROR, error }));
    }
}

export function submitCreateDevice(body) {
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_CREATE });

        return createDevice(body)
            .then(respone => {
                dispatch({
                    type: DEVICE_CREATE_SUCCESS
                });
                fetchInitialData()(dispatch, getState);
                //showNotification(`(${respone.statusText})`)(dispatch);
            })
            .catch(error => dispatch({ type: DEVICE_CREATE_ERROR, error }));
    };
}

export function submitEditDevice(body) {
    console.log(body);
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_EDIT });

        return editDevice(body)
            .then(respone => {
                dispatch({
                    type: DEVICE_EDIT_SUCCESS
                });
                fetchInitialData()(dispatch, getState);
                //showNotification(`(${respone.statusText})`)(dispatch);
            })
            .catch(error => dispatch({ type: DEVICE_EDIT_ERROR, error }));
    };
}

export function submitRemoveDevice(body) {
    return (dispatch, getState) => {
        dispatch({ type: DEVICE_REMOVE });

        return removeDevice(body)
            .then(respone => {
                dispatch({
                    type: DEVICE_REMOVE_SUCCESS
                });
                fetchInitialData()(dispatch, getState);
                //showNotification(`(${respone.statusText})`)(dispatch);
            })
            .catch(error => dispatch({ type: DEVICE_REMOVE_ERROR, error }));
    };
}
