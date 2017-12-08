import {
    ALARM_PAGINATION_CHANGE_PAGE,
    ALARM_LOAD_RECORDS,
    ALARM_LOAD_RECORDS_SUCCESS,
    ALARM_VIEW_CHANGE
} from '../actions/dashboard-alarm-actions';

const initialState = {
    records: null,
    isFetching: false,
    activePage: 1,
    activeAlarmView: ''
};

export default function dashboardAlarmReducer(state = initialState, action) {
    switch (action.type) {
        case ALARM_PAGINATION_CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            };
        case ALARM_LOAD_RECORDS:
            return {
                ...state,
                isFetching: true
            };
        case ALARM_LOAD_RECORDS_SUCCESS:
            return {
                ...state,
                records: {
                    ...action.records
                },
                isFetching: false
            };

        case ALARM_VIEW_CHANGE:
            return {
                ...state,
                activeAlarmView: action.alarm
            }

        default:
            return state;
    }
}
