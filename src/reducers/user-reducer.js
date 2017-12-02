import {
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
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

        default:
            return state;
    }
}
