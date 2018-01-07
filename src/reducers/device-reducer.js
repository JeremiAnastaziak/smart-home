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
    DEVICE_SELECT,
    DEVICE_GET,
    DEVICE_GET_ERROR,
    DEVICE_GET_SUCCESS
} from '../actions/device-actions';

const initialState = {
    isFetching: false,
    items: [],
    selected: {
        id: '',
        name: '',
        deviceType: 'HANDLE'
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
                ...state
            };
        case DEVICE_EDIT: {
            return {
                ...state,
                isFetching: true
            }
        }
        case DEVICE_EDIT_SUCCESS:
            return {
                ...state
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
                ...state
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
        case DEVICE_GET:
            return {
                ...state,
                isFetching: true
            }
        case DEVICE_GET_SUCCESS:
            return {
                ...state,
                items: action.devices,
                isFetching: false
            }
        case DEVICE_GET_ERROR:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}
