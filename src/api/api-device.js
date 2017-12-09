export const createDevice = ({ id, name }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/handles/`, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id, name })
    });

export const editDevice = ({ id, name }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/handles/${id}`, {
        method: 'PUT',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: name
    });

export const removeDevice = ({ id }) =>
    fetch(`https://limitless-spire-43906.herokuapp.com/users/handles/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id })
    });
