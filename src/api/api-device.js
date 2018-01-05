import { api } from './helper';

export const createDevice = ({ id, name, type }) =>
    api('/users/devices', {}, {
        method: 'POST',
        body: JSON.stringify({ id, name, deviceType: type })
    });

export const editDevice = ({ id, name }) =>
    api(`/users/devices/${id}`, {}, {
        method: 'PUT',
        body: name
    });

export const getDevices = () =>
    api(`/users/devices`, {}, {});

export const removeDevice = ({ id }) =>
    api(`/users/devices/${id}`, {}, {
        method: 'DELETE'
    });
