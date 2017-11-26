import dummyData from '../api/dummyApi';
import {
    LOAD_RECORDS,
    LOAD_RECORDS_SUCCESS
} from '../actions/records-actions';

const initialState = {
    ...dummyData,
    isFetching: false
}

export default function recordsReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_RECORDS:
            return {
                ...state,
                isFetching: true
            }
        case LOAD_RECORDS_SUCCESS:
            return {
                ...state,
                items: action.records,
                isFetching: false
            }
        default:
            return state;
    }
}
