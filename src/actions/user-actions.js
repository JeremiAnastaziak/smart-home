import { registerUser, loginUser } from '../api/api-user';
import { loadRecords, fetchInitialData } from './dashboard-actions';
import { showNotification } from './notification-actions';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

const extractLogin = (email) => email.slice(0, email.indexOf('@'));

export function submitRegisterUser(body) {
    return (dispatch, getState) => {
        dispatch({ type: USER_REGISTER });

        return registerUser(body)
            .then(respone => {
                console.log(respone)
                if (respone.statusText === 'Created') {
                    dispatch({
                        type: USER_REGISTER_SUCCESS
                    });
                    loadRecords()(dispatch, getState);
                    showNotification(`Witaj ${extractLogin(body.email)}! Twoje konto zostało utworzone.`)(dispatch)
                } else {
                    dispatch({ type: USER_REGISTER_ERROR })
                    showNotification(`(${respone.statusText})`)(dispatch)
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
                console.log(response)
                if (response.status === 200) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS
                    });
                    fetchInitialData()(dispatch, getState);
                    showNotification(`Witaj ${extractLogin(body.email)}! Zostałeś zalogowany.`)(dispatch)
                } else if (response.statusText === 'Unauthorized') {
                    dispatch({ type: USER_LOGIN_ERROR })
                    //loadRecords()(dispatch, getState);
                    showNotification(`Wprowadziłeś niepoprawne credentiale, chyba. (${response.statusText})`)(dispatch)
                }
            })
            .catch(error => dispatch({ type: USER_LOGIN_ERROR, error }));
    }
}
