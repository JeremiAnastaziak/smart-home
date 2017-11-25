import {
    PAGINATION_CHANGE_PAGE
} from '../actions/pagination-actions';

export default function paginationReducer(state, action) {
    switch(action.type) {
        case PAGINATION_CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            }

        default:
            return { activePage: 1 };
    }
}
