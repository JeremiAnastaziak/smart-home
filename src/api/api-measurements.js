export function fetchRecords({limit, offset, activeSort}) {
    return fetch(`https://limitless-spire-43906.herokuapp.com/users/measurements?limit=${limit}&offset=${offset}&sort=${activeSort}`, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
}
