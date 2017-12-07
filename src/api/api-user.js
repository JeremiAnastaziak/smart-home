export function registerUser(body) {
    return fetch(`https://limitless-spire-43906.herokuapp.com/users`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            ...body,
            handles: [
                'Handle 1 mock', 'Handle 2 mock'
            ]
          })
    });
}

export function loginUser(body) {
    return fetch(`https://limitless-spire-43906.herokuapp.com/login`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(
            body
          )
    });
}
