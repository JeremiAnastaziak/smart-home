import { api } from './helper';

export const createDevice = ({ id, name, type }) =>
    api('/users/devices', {}, {
        method: 'POST',
        body: JSON.stringify({ id, name, deviceType: type })
    }, true);

export const editDevice = (body) =>
    api(`/users/devices/${body.id}`, {}, {
        method: 'PUT',
        body: JSON.stringify(body)
    }, true);

export const getDevices = () =>
    api(`/users/devices`, {}, {});

export const removeDevice = ({ id }) =>
    api(`/users/devices/${id}`, {}, {
        method: 'DELETE'
    }, true);
