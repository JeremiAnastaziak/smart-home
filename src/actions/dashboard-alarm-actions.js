import dummyData from '../api/dummyApi';
import shuffle from 'lodash.shuffle';
import { fetchRecords } from '../api/fake-api';
import { extractSpecificAlarmInfo } from '../data/alarm-data-helper';

export const ALARM_PAGINATION_CHANGE_PAGE = 'ALARM_PAGINATION_CHANGE';
export const ALARM_LOAD_RECORDS = 'ALARM_LOAD_RECORDS';
export const ALARM_LOAD_RECORDS_SUCCESS = 'ALARM_LOAD_RECORDS_SUCCESS';
export const ALARM_LOAD_RECORDS_ERROR = 'ALARM_LOAD_RECORDS_ERROR';
export const ALARM_VIEW_CHANGE = 'ALARM_VIEW_CHANGE';

export function loadRecords() {
    return (dispatch, getState) => {

        const { dashboardAlarm } = getState();

        dispatch({ type: ALARM_LOAD_RECORDS });

        return fetchRecords()
            .then(data =>
                dispatch({
                    type: ALARM_LOAD_RECORDS_SUCCESS,
                    records: {
                        total: data.total,
                        items: extractSpecificAlarmInfo(shuffle(data.items), dashboardAlarm.activeAlarmView)
                    }
                })
            )
            .catch(error => dispatch({ type: ALARM_LOAD_RECORDS_ERROR, error }));
    };
}

export function changeCurrentPage(page) {
    return (dispatch, getState) => {
        dispatch({ type: ALARM_PAGINATION_CHANGE_PAGE, page });
        loadRecords()(dispatch, getState);
    };
}

export function setAlarmView(alarm) {
    return (dispatch, getState) => {
        dispatch({ type: ALARM_VIEW_CHANGE, alarm });
        loadRecords()(dispatch, getState);
    };
}
