import * as moment from 'moment';

const url = 'https://limitless-spire-43906.herokuapp.com';

moment.locale();

export const dateFormat = (date) => {
    return moment(date).format('l') +
    ' ' +
    moment(date).format('LT')
}

export const massageData = (data = { handleMeasurements: [], nodes: [] }) => {
    return Object.assign({}, data, {
        measurements: data.handleMeasurements.map(record => {
            return {
                ...record,
                date: dateFormat(record.date)
            };
        })
    });
};

const massageCollection = (collection) =>
    collection.map(item => {
        return {
            ...item,
            date: dateFormat(item.date)

        };
    })

export const massageLatestData = data => {
    return Object.assign({}, data, {
        handleMeasurements: massageCollection(data.handleMeasurements),
        nodes: massageCollection(data.nodes)
        })
};

export const messageGraphData = ({ data = [] }) => {
    return Object.assign(
        {},
        {
            data: data.map(item => {
                return {
                    ...item,
                    date: dateFormat(item.date)
                };
            })
        }
    );
};

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

export const api = (endpoint, params, init = { method: 'GET' }) => {
    console.log(init);
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
