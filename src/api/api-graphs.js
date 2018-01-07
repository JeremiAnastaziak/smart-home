import {apiDateFormat, api } from './helper';

export const loadGraph = (deviceType, { startDate, endDate, fieldName, deviceId }) => {

    const ajustFieldName = (fieldName) => {
        switch(fieldName) {
            case 'carbonDioxide':
                return 'carbon';
            case 'lightIntensity':
                return 'light_intensity';
            default:
                return fieldName;
        }
    }

    const params = {
        startDate: startDate && apiDateFormat(startDate),
        endDate: endDate && apiDateFormat(endDate),
        fieldName: ajustFieldName(fieldName).toUpperCase(),
        deviceId
    };

    return api(`/users/graphs/${deviceType === 'HANDLE' ? 'handles' : 'nodes'}`, params);
}

