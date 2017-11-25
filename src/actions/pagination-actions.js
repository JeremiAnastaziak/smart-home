export const PAGINATION_CHANGE_PAGE = 'PAGINATION_CHANGE_PAGE';

export function changeCurrentPage(page) {
    return {
        type: PAGINATION_CHANGE_PAGE,
        page
    }
}
