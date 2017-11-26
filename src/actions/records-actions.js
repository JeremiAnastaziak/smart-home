import { fetchRecords } from '../api/fake-api';
import dummyData from '../api/dummyApi';
import shuffle from 'lodash.shuffle';

export const LOAD_RECORDS = 'LOAD_RECORDS';
export const LOAD_RECORDS_SUCCESS = 'LOAD_RECORDS_SUCCESS';
export const LOAD_RECORDS_ERROR = 'LOAD_RECORDS_ERROR';

export function loadRecords() {
    return (dispatch) => {
        dispatch({ type: LOAD_RECORDS });

        return fetchRecords()
            .then((data) => dispatch({ type: LOAD_RECORDS_SUCCESS, records: shuffle(data.items) }))
            .catch((error) => dispatch({ type: LOAD_RECORDS_ERROR, error}))
    }
}
