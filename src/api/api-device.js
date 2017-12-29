export const createDevice = ({ id, name, type }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/devices/`, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id, name, deviceType: type })
    });

export const editDevice = ({ id, name }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/devices/${id}`, {
        method: 'PUT',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: name
    });

export const removeDevice = ({ id }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/devices/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id })
    });
