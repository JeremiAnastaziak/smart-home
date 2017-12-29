import { api } from './helper';

export const changeSettings = (params = {}) => {
    return api('/users/settings', params, {
        method: 'PUT'
    });
};

export const getSettings = () => {
    return api('/users/settings');
};
