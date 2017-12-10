import {formatDateSend} from './helper';

export const loadGraph = ({ startDate, endDate, fieldName, deviceId }) => {

    startDate = startDate && formatDateSend(startDate);
    endDate = endDate && formatDateSend(endDate);
    fieldName = fieldName.toUpperCase();

    return fetch(`https://limitless-spire-43906.herokuapp.com/graphs/measurements?handleId=klamka2&fieldName=${fieldName}${startDate ? `&startDate=${startDate}` : ''}${endDate ? `&endDate=${endDate}` : ''}`, {
        method: 'GET',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
}

