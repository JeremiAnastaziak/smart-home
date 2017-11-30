import { fetchRecords } from '../api/fake-api';
import dummyData from '../api/dummyApi';
import shuffle from 'lodash.shuffle';

export const DASHBOARD_PAGINATION_CHANGE_PAGE = 'DASHBOARD_PAGINATION_CHANGE';
export const DASHBOARD_LOAD_RECORDS = 'DASHBOARD_LOAD_RECORDS';
export const DASHBOARD_LOAD_RECORDS_SUCCESS = 'DASHBOARD_LOAD_RECORDS_SUCCESS';
export const DASHBOARD_LOAD_RECORDS_ERROR = 'DASHBOARD_LOAD_RECORDS_ERROR';

export function loadRecords() {
    return dispatch => {
        dispatch({ type: DASHBOARD_LOAD_RECORDS });

        return fetchRecords()
            .then(data =>
                dispatch({
                    type: DASHBOARD_LOAD_RECORDS_SUCCESS,
                    records: { total: data.total, items: shuffle(data.items) }
                })
            )
            .catch(error => dispatch({ type: DASHBOARD_LOAD_RECORDS_ERROR, error }));
    };
}

export function changeCurrentPage(page) {
    return (dispatch, getState) => {
        dispatch({ type: DASHBOARD_PAGINATION_CHANGE_PAGE, page });
        loadRecords()(dispatch, getState);
    };
}
