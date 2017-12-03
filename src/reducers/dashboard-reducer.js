import dummyData from '../api/dummyApi';
import {
    DASHBOARD_PAGINATION_CHANGE_PAGE,
    DASHBOARD_LOAD_RECORDS,
    DASHBOARD_LOAD_RECORDS_SUCCESS,
    DASHBOARD_SIDEBAR_TOGGLE,
    DASHBOARD_HANDLE_FILTER
} from '../actions/dashboard-actions';

const initialState = {
    records: dummyData,
    isFetching: false,
    activePage: 1,
    showSidebar: false,
    activeHandle: ''
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
        case DASHBOARD_SIDEBAR_TOGGLE:
            return {
                ...state,
                showSidebar: !state.showSidebar
            }
        case DASHBOARD_HANDLE_FILTER:
            return {
                ...state,
                activeHandle: action.handle ? action.handle : ''
            }
        default:
            return state;
    }
}
