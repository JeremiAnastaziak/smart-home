import { registerUser } from '../api/fake-api';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

export function submitRegisterUser(body) {
    return dispatch => {
        dispatch({ type: USER_REGISTER });

        return registerUser(body)
            .then(data => {
                dispatch({
                    type: USER_REGISTER_SUCCESS,
                    user: data
                });
            })
            .catch(error => dispatch({ type: USER_REGISTER_ERROR, error }));
    };
}
