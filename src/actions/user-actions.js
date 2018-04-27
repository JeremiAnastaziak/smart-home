import { registerUser, loginUser, logoutUser } from '../api/api-user';
import { loadRecords, fetchInitialData } from './dashboard-actions';
import { showNotification } from './notification-actions';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

const extractLogin = email => email.slice(0, email.indexOf('@'));

export function submitRegisterUser(body) {
    return (dispatch, getState) => {
        dispatch({ type: USER_REGISTER });

        return registerUser(body)
            .then(response => {
                if(response.status === 200 || response.status === 201) {
                    dispatch({
                        type: USER_REGISTER_SUCCESS
                    });
                    //fetchInitialData()(dispatch, getState);
                    showNotification(
                        `Twoje konto zostało utworzone. Teraz możesz się zalogować.`
                    )(dispatch);
                }
                else {
                    dispatch({
                        type: USER_REGISTER_ERROR
                    });
                    showNotification(
                        `Użytkownik z tym adresem e-mail już istnieje.`, true
                    )(dispatch);
                }

            })
            .catch(error => dispatch({ type: USER_REGISTER_ERROR, error }));
    };
}

export function submitLoginUser(body) {
    return (dispatch, getState) => {
        dispatch({ type: USER_LOGIN });

        return loginUser(body)
            .then(response => {
                if(response.status === 200) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS
                    });
                    fetchInitialData()(dispatch, getState);
                    showNotification(
                        `Witaj ${extractLogin(body.email)}! Zostałeś zalogowany.`
                    )(dispatch);
                }
                else {
                    dispatch({
                        type: USER_LOGIN_ERROR
                    });
                    showNotification(
                        `Brak użytkownika lub niepoprawne hasło.`, true
                    )(dispatch);
                }

            })
            .catch(error => dispatch({ type: USER_LOGIN_ERROR, error }));
    };
}

export const submitLogoutUser = () =>
    (dispatch) => {
        dispatch({ type: USER_LOGOUT});
        return logoutUser()
            .then(() => {
                dispatch({
                    type: USER_LOGOUT_SUCCESS
                });
                dispatch({
                    type: 'RESET_STORE'
                })
            })
            .catch(() => dispatch({
                type: USER_LOGOUT_ERROR
            }))
    }
