import { fetchRecords } from '../api/api-measurements';
import { USER_LOGIN_SUCCESS } from './user-actions';
import { showNotification } from './notification-actions';
import { selectDevice, getDevicesAction } from './device-actions';
import { getSettingsAction } from './settings-actions';
import { extractDevicesFromLatestData, extractAlarmsFromLatestData } from '../api/helper';
import { initialFetch } from '../api/api-latest';

export const DASHBOARD_PAGINATION_CHANGE_PAGE = 'DASHBOARD_PAGINATION_CHANGE';
export const DASHBOARD_LOAD_RECORDS = 'DASHBOARD_LOAD_RECORDS';
export const DASHBOARD_LOAD_RECORDS_SUCCESS = 'DASHBOARD_LOAD_RECORDS_SUCCESS';
export const DASHBOARD_LOAD_RECORDS_ERROR = 'DASHBOARD_LOAD_RECORDS_ERROR';
export const DASHBOARD_SORT = 'DASHBOARD_SORT';
export const DASHBOARD_FILTER = 'DASHBOARD_FILTER';
export const DASHBOARD_LIMIT_CHANGE = 'DASHBOARD_LIMIT_CHANGE';
export const DASHBOARD_LATEST = 'DASHBOARD_LATEST';
export const DASHBOARD_LATEST_SUCCESS = 'DASHBOARD_LATEST_SUCCESS';
export const DASHBOARD_LATEST_ERROR = 'DASHBOARD_LATEST_ERROR';

export const fetchInitialData = () => {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_LATEST });

        return initialFetch()
            .then(json => {
                dispatch({
                    type: DASHBOARD_LATEST_SUCCESS,
                    latest: json,
                    devices: extractDevicesFromLatestData(json),
                    devicesWithAlarm: extractAlarmsFromLatestData(json)
                });
                const { user } = getState();
                if (!user.isAuth) {
                    dispatch({ type: USER_LOGIN_SUCCESS });
                }
                getSettingsAction()(dispatch, getState);
                getDevicesAction()(dispatch, getState);
            })
            .catch(error => dispatch({ type: DASHBOARD_LATEST_ERROR, error }));
    };
};

export function loadRecords() {
    return (dispatch, getState) => {
        const { dashboard, devices, user } = getState();
        const { limit, offset, activeSort } = dashboard;
        const { selected } = devices;
        dispatch({ type: DASHBOARD_LOAD_RECORDS });

        // wtf
        const handlesOrNodes = selected && selected.deviceType === 'HANDLE' ? {
            handles: selected && selected.id ? [selected.id] : []
        } : {
            nodes: selected && selected.id ? [selected.id] : []
        }

        return fetchRecords(selected && selected.deviceType || 'HANDLE', Object.assign({
            limit,
            offset,
            sort: activeSort
        }, handlesOrNodes))
            .then(data => {
                dispatch({
                    type: DASHBOARD_LOAD_RECORDS_SUCCESS,
                    handles: data.handles,
                    records: {
                        count: data.count,
                    measurements: data.measurements || data.measurements
                    }
                });
                if (!user.isAuth) {
                    const { dashboard } = getState();
                    dispatch({ type: USER_LOGIN_SUCCESS });
                    selectDevice(dashboard.handles[0])(dispatch, getState);
                }
                //showNotification(`(${response.statusText})`)(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR });
                //showNotification(`(${JSON.stringify(error)})`)(dispatch);
            });
    };
}

export function changeCurrentPage(page) {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_PAGINATION_CHANGE_PAGE, page });
        loadRecords()(dispatch, getState);
    };
}

export const sortRecords = sortBy => {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_SORT, sortBy });
        loadRecords()(dispatch, getState);
    };
};

export const filterRecords = filterBy => {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_FILTER, filterBy });
        loadRecords()(dispatch, getState);
    };
};

export const changeLimit = limit => {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_LIMIT_CHANGE, limit });
        loadRecords()(dispatch, getState);
    };
};

export function tableViewClick(device) {
    return (dispatch, getState) => {
        selectDevice(device)(dispatch, getState);
    };
}
