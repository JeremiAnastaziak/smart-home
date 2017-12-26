import {
    GRAPHS_SET_FIELD,
    GRAPHS_LOAD_DATA,
    GRAPHS_LOAD_DATA_SUCCESS,
    GRAPHS_LOAD_DATA_ERROR,
    GRAPHS_FILTER_CHANGE
} from '../actions/graph-actions';

const initialFieldData = {
    data: []
};
const initialState = {
    active: '',
    filters: {
        startDate: '',
        endDate: ''
    },
    fields: {
        temperature: initialFieldData,
        sound_level: initialFieldData
    },
    isFetching: false
};

export default function graphReducer(state = initialState, action) {
    switch (action.type) {
        case GRAPHS_SET_FIELD:
            return {
                ...state,
                active: action.name
            };
        case GRAPHS_LOAD_DATA:
            return {
                ...state,
                isFetching: true
            };

        case GRAPHS_LOAD_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fields: {
                    ...state.fields,
                    [action.fieldName]: {
                        ...state.fields[action.fieldName],
                        data: action.data
                    }
                }
            };
        case GRAPHS_LOAD_DATA_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case GRAPHS_FILTER_CHANGE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.filter
                }
            };
        default:
            return state;
    }
}
