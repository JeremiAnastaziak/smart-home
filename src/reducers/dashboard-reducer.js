import {
    PAGINATION_DEFAULT_STATE,
    PAGINATION_CHANGE_PAGE
} from '../actions/dashboard-actions';

export default function dashboardReducer(state = { activePage: 1 }, action) {
    console.log(action.type, state)

    switch(action.type) {
        case PAGINATION_CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            }

        case PAGINATION_DEFAULT_STATE:
            return {
                ...state,
                activePage: 1
            }

        default:
            return state;
    }
}
