import {apiDateFormat, api } from './helper';

export const loadGraph = (deviceType, { startDate, endDate, fieldName, deviceId }) => {
    const adjustDeviceId = deviceType === 'HANDLE' ? { handleId: deviceId} : { nodeId: deviceId };

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

    const params = Object.assign({
        startDate: startDate && apiDateFormat(startDate),
        endDate: endDate && apiDateFormat(endDate),
        fieldName: ajustFieldName(fieldName).toUpperCase(),
    }, adjustDeviceId);

    return api(`/users/graphs/${deviceType === 'HANDLE' ? 'handles' : 'nodes'}`, params);
}

