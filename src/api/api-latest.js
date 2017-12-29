import { api } from './helper';

export const initialFetch = () => {
    return api('/users/measurements/latest', {}, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
}
