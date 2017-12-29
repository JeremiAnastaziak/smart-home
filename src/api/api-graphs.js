import {apiDateFormat, api } from './helper';

export const loadGraph = ({ startDate, endDate, fieldName, handle }) => {

    const params = {
        startDate: startDate && apiDateFormat(startDate),
        endDate: endDate && apiDateFormat(endDate),
        fieldName: fieldName.toUpperCase(),
        deviceId: handle
    }

    return api('/users/graphs/handles', params);
}

