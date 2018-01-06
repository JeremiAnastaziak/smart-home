import { api } from './helper';

export const registerUser = (body) =>
    api('/users', {}, {
        method: 'POST',
        body: JSON.stringify({
            ...body,
            handles: [
                'Handle 1 mock', 'Handle 2 mock'
            ]
          })
    });

export const loginUser = (body) =>
    fetch('https://limitless-spire-43906.herokuapp.com/login', {}, {
        method: 'POST',
        body: JSON.stringify(
            body
          )
    });

export const logoutUser = () =>
    api('/logout', {}, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
