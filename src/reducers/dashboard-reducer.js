import dummyData from '../api/dummyApi';
import {
    DASHBOARD_PAGINATION_CHANGE_PAGE,
    DASHBOARD_LOAD_RECORDS,
    DASHBOARD_LOAD_RECORDS_SUCCESS,
    DASHBOARD_LOAD_RECORDS_ERROR,
    DASHBOARD_SORT,
    DASHBOARD_FILTER,
    DASHBOARD_LIMIT_CHANGE
} from '../actions/dashboard-actions';

const initialState = {
    records: dummyData,
    isFetching: false,
    offset: 0,
    limit: 5,
    activePage: 1,
    activeFilter: null,
    activeSort: 'date_latest'
};

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_PAGINATION_CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page,
                offset: (action.page - 1) * state.limit
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
                isFetching: false,
                handles: action.handles
            };
        case DASHBOARD_LOAD_RECORDS_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }
        case DASHBOARD_SORT:
            return {
                ...state,
                activeSort: action.sortBy,
                offset: 0,
                activePage: 1
            }
        case DASHBOARD_FILTER:
            return {
                ...state,
                activeFilter: action.filterBy,
                offset: 0,
                activePage: 1
            }
        case DASHBOARD_LIMIT_CHANGE:
            return {
                ...state,
                limit: action.limit,
                offset: 0,
                activePage: 1
            }
        default:
            return state;
    }
}
