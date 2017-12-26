import { fetchRecords } from '../api/api-measurements';
import { USER_LOGIN_SUCCESS } from './user-actions';
import { showNotification } from './notification-actions';
import { selectDevice } from './device-actions';
import { massageData } from '../api/helper';

export const DASHBOARD_PAGINATION_CHANGE_PAGE = 'DASHBOARD_PAGINATION_CHANGE';
export const DASHBOARD_LOAD_RECORDS = 'DASHBOARD_LOAD_RECORDS';
export const DASHBOARD_LOAD_RECORDS_SUCCESS = 'DASHBOARD_LOAD_RECORDS_SUCCESS';
export const DASHBOARD_LOAD_RECORDS_ERROR = 'DASHBOARD_LOAD_RECORDS_ERROR';
export const DASHBOARD_SORT = 'DASHBOARD_SORT';
export const DASHBOARD_FILTER = 'DASHBOARD_FILTER';
export const DASHBOARD_LIMIT_CHANGE = 'DASHBOARD_LIMIT_CHANGE';

export function loadRecords() {
    return (dispatch, getState) => {
        const { dashboard, devices, user } = getState();
        const { limit, offset, activeSort } = dashboard;
        const { selected } = devices;
        dispatch({ type: DASHBOARD_LOAD_RECORDS });

        return fetchRecords({
            limit,
            offset,
            activeSort,
            handles: selected.id ? [selected.id] : []
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    response.json().then(data => {
                        console.log(massageData(data));
                        dispatch({
                            type: DASHBOARD_LOAD_RECORDS_SUCCESS,
                            handles: data.handles,
                            records: {
                                count: data.count,
                                measurements: data.measurements
                            }
                        });
                        if (!user.isAuth) {
                            const { dashboard } = getState();
                            dispatch({ type: USER_LOGIN_SUCCESS });
                            selectDevice(dashboard.handles[0])(dispatch, getState);
                        }
                        showNotification(`(${response.statusText})`)(dispatch);
                    });
                } else {
                    dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR });
                    showNotification(`(${response.statusText})`)(dispatch);
                }
            })
            .catch(error => {
                dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR });
                showNotification(`(${JSON.stringify(error)})`)(dispatch);
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
