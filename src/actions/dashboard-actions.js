import { loadRecords } from './records-actions.js';

export const PAGINATION_CHANGE_PAGE = 'PAGINATION_CHANGE_PAGE';
export const PAGINATION_DEFAULT_STATE = 'PAGINATION_DEFAULT_STATE';

export function changeCurrentPage(page) {
    console.log(page)
    return (dispatch, getState) => {
        dispatch({ type: PAGINATION_CHANGE_PAGE, page })
        loadRecords()(dispatch, getState)
    }
}

export function resetTablePagination() {
    return {
        type: PAGINATION_DEFAULT_STATE
    }
}
