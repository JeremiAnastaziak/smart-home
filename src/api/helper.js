import * as moment from 'moment';

const url = 'https://limitless-spire-43906.herokuapp.com';

moment.locale();

export const extractDevicesFromLatestData = (data) => {
    return data.handles.map(item => {
        return {
            id: item.deviceId,
            name: item.handleName,
            deviceType: 'HANDLE'
        }
    }).concat(data.nodes.map(item => {
        return {
            id: item.deviceId,
            name: item.nodeName,
            deviceType: 'NODE'
        }
    }))
}

export const apiDateFormat = date => {
    date = moment(date).format();
    return date.slice(0, date.indexOf('T')).concat(' 00:00');
};

export const reqParams = (params = {}) => {
    return Object.keys(params)
        .map(key => `&${key}=${params[key]}`)
        .join('')
        .replace('&', '?');
};

export const apiLite = (endpoint, init = { method: 'GET' }) => {
    return fetch(
        url + endpoint,
        Object.assign(
            {
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            },
            init
        )
    )
}

export const api = (endpoint, params = {}, init = { method: 'GET' }, withoutResponseBody) => {
    return fetch(
        url + endpoint + reqParams(params),
        Object.assign(
            {
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            },
            init
        )
    ).then(response => {
        if (response.ok) {
            if (init.method !== 'PUT') return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    });
};
