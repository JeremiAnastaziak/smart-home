import {
    DEVICE_CREATE,
    DEVICE_CREATE_ERROR,
    DEVICE_CREATE_SUCCESS,
    DEVICE_EDIT,
    DEVICE_EDIT_ERROR,
    DEVICE_EDIT_SUCCESS,
    DEVICE_REMOVE,
    DEVICE_REMOVE_ERROR,
    DEVICE_REMOVE_SUCCESS,
    DEVICE_SELECT
} from '../actions/device-actions';

const initialState = {
    isFetching: false,
    selected: {
        id: '',
        name: ''
    }
};

export default function deviceReducer(state = initialState, action) {
    switch (action.type) {
        case DEVICE_CREATE:
            return {
                ...state,
                isFetching: true
            };
        case DEVICE_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case DEVICE_CREATE_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case DEVICE_EDIT: {
            return {
                ...state,
                isFetching: true
            }
        }
        case DEVICE_EDIT_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case DEVICE_EDIT_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case DEVICE_REMOVE:
            return {
                ...state,
                isFetching: true
            }
        case DEVICE_REMOVE_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case DEVICE_REMOVE_ERROR:
            return {
                ...state,
                isFetching: false
            }
        case DEVICE_SELECT:
            return {
                ...state,
                selected: action.device
            }
        default:
            return state;
    }
}
