import {
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from '../actions/user-actions';

const initialState = {
    isFetching: false,
    isAuth: false
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                isFetching: true
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuth: true
            };
        case USER_REGISTER_ERROR: 
            return {
                ...state,
                isFetching: false
            }
        case USER_LOGIN: {
            return {
                ...state,
                isFetching: true
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isAuth: true
            };
        }

        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }

        default:
            return state;
    }
}
