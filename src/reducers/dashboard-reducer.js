import dummyData from '../api/dummyApi';
import {
    DASHBOARD_PAGINATION_CHANGE_PAGE,
    DASHBOARD_LOAD_RECORDS,
    DASHBOARD_LOAD_RECORDS_SUCCESS
} from '../actions/dashboard-actions';

const initialState = {
    records: dummyData,
    isFetching: false,
    activePage: 1
};

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_PAGINATION_CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            };
        case DASHBOARD_LOAD_RECORDS:
            return {
                ...state,
                isFetching: true
            };
        case DASHBOARD_LOAD_RECORDS_SUCCESS:
            return {
                ...state,
                records: {
                    ...action.records
                },
                isFetching: false
            };

        default:
            return state;
    }
}
