import { api, apiLite } from './helper';

export const registerUser = (body) =>
apiLite('/users', {
        method: 'POST',
        body: JSON.stringify({
            ...body
          })
    });

export const loginUser = (body) =>
    apiLite('/login', {
        method: 'POST',
        body: JSON.stringify(
            body
          )
    });

export const logoutUser = () =>
    apiLite('/logout', {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
