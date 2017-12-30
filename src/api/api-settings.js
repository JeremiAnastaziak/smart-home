import { api } from './helper';

export const changeSettings = (body = {}) => {
    return api('/users/settings', {}, {
        method: 'PUT',
        body: JSON.stringify(body)
    });
};

export const getSettings = () => {
    return api('/users/settings');
};
