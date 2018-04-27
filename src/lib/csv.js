import { fetchRecords } from '../api/api-measurements';
import { apiDateFormat } from '../api/helper';
import { formatNodeData } from './csv-node';
import { showNotification } from '../actions/notification-actions';

export const saveDataToCSV = (device, deviceType, filter) => {

    const devices =
        deviceType === 'HANDLE'
            ? { handles: device.deviceId }
            : { nodes: device.deviceId };

    const minDate = new Date();
    const params = {
        activeSort: 'date_latest',
        startDate: apiDateFormat(new Date(minDate.setDate(minDate.getDate() - 1))),
        endDate: apiDateFormat(new Date(), true),
        ...devices
    };
    if (filter.startDate) params.startDate = apiDateFormat(filter.startDate);
    if (filter.endDate) params.endDate = apiDateFormat(filter.endDate, true);

    return fetchRecords(deviceType, params);
};
// call the exportCSVFile() function to process the JSON and trigger the download
// credit: https://gist.github.com/dannypule
