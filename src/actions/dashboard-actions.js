import { fetchRecords } from '../api/api-measurements';
import { USER_LOGIN_SUCCESS } from './user-actions';
import { showNotification } from './notification-actions';
import { massageData } from '../api/helper';

export const DASHBOARD_PAGINATION_CHANGE_PAGE = 'DASHBOARD_PAGINATION_CHANGE';
export const DASHBOARD_LOAD_RECORDS = 'DASHBOARD_LOAD_RECORDS';
export const DASHBOARD_LOAD_RECORDS_SUCCESS = 'DASHBOARD_LOAD_RECORDS_SUCCESS';
export const DASHBOARD_LOAD_RECORDS_ERROR = 'DASHBOARD_LOAD_RECORDS_ERROR';
export const DASHBOARD_SIDEBAR_TOGGLE = 'DASHBOARD_SIDEBAR_TOGGLE';
export const DASHBOARD_HANDLE_FILTER = 'DASHBOARD_HANDLE_FILTER';
export const DASHBOARD_SORT = 'DASHBOARD_SORT';
export const DASHBOARD_FILTER = 'DASHBOARD_FILTER';
export const DASHBOARD_LIMIT_CHANGE = 'DASHBOARD_LIMIT_CHANGE';

export function toggleSideBar() {
    return dispatch => {
        dispatch({ type: DASHBOARD_SIDEBAR_TOGGLE });
    };
}
export function loadRecords() {
    return (dispatch, getState) => {
        const { dashboard } = getState();
        const { limit, offset, activeSort } = dashboard;

        dispatch({ type: DASHBOARD_LOAD_RECORDS });

        return fetchRecords({ limit, offset, activeSort })
            .then(response => {
                if ((response.status === 200) || (response.status === 201)) {
                    response.text().then(data => {
                        data = massageData(JSON.parse(data));
                        console.log(massageData(data));
                        dispatch({
                            type: DASHBOARD_LOAD_RECORDS_SUCCESS,
                            records: { count: data.count, measurements: data.measurements }
                        })
                        dispatch({ type: USER_LOGIN_SUCCESS });
                        showNotification(`(${response.statusText})`)(dispatch)
                    })

                } else {
                    dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR })
                    showNotification(`(${response.statusText})`)(dispatch)
                }
            })
            .catch(
                error => {
                    dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR  })
                    showNotification(`(${JSON.stringify(error)})`)(dispatch)
                }

            );
    };
}

export function changeCurrentPage(page) {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_PAGINATION_CHANGE_PAGE, page });
        loadRecords()(dispatch, getState);
    };
}

export function filterHandle(name) {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_HANDLE_FILTER, handle: name });
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
}

