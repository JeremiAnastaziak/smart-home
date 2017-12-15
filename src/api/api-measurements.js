import { api } from './helper';

export function fetchRecords(params) {
    return api('/users/measurements', params, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
}
