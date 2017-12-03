import { url } from './settings';

export function registerUser(body) {
    return fetch(`/users`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body,
            handles: [
                'Handle 1 mock', 'Handle 2 mock'
            ]
          })
    });
}

export function loginUser(body) {
    return fetch(`/login`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            body
          )
    });
}