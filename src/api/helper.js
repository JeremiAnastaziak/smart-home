import * as moment from 'moment';

const url = 'https://limitless-spire-43906.herokuapp.com';

moment.locale();

export const massageData = (data = { handleMeasurements: [] }) => {
    return Object.assign({}, data, {
        measurements: data.handleMeasurements.map(record => {
            return {
                ...record,
                date:
                    moment(record.date).format('l') +
                    ' ' +
                    moment(record.date).format('LT'),
                temperature: {
                    ...record.temperature,
                    value: Number(parseFloat(record.temperature.value).toFixed(2))
                },
                soundLevel: {
                    ...record.soundLevel,
                    value: Number(parseFloat(record.soundLevel.value).toFixed(2))
                }
            };
        })
    });
};

export const massageLatestData = data => {
    return Object.assign({}, data, {
        handleMeasurements: data.handleMeasurements.map(handle => {
            return {
                ...handle,
                date:
                    moment(handle.date).format('l') +
                    ' ' +
                    moment(handle.date).format('LT')
            };
        })
    });
};

export const messageGraphData = ({ data = [] }) => {
    return Object.assign(
        {},
        {
            data: data.map(item => {
                return {
                    ...item,
                    date:
                        moment(item.date).format('l') +
                        ' ' +
                        moment(item.date).format('LT')
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
