import { fetchRecords } from '../api/api-measurements';
import { apiDateFormat } from '../api/helper';
import { formatHandleData } from './csv-handle';
import { exportCSVFile } from './csv-export';
import { formatNodeData } from './csv-node';

export const saveDataToCSV = (device, deviceType, filter) => {
    console.log(device);

    const devices =
        deviceType === 'HANDLE'
            ? { handles: device.deviceId }
            : { nodes: device.deviceId };

    const minDate = new Date();
    const params = {
        activeSort: 'date_latest',
        startDate: apiDateFormat(new Date(minDate.setDate(minDate.getDate() - 1))),
        endDate: apiDateFormat(new Date()),
        ...devices
    };
    if (filter.startDate) params.startDate = apiDateFormat(filter.startDate);
    if (filter.endDate) params.endDate = apiDateFormat(filter.endDate);

    fetchRecords(deviceType, params).then(data => {
        if (deviceType === 'HANDLE') {
            if(!data.measurements.length) {
                return false;
            }

            const { fileTitle, headers, itemsFormatted } = formatHandleData(
                data,
                device
            );
            exportCSVFile(headers, itemsFormatted, fileTitle);
        } else if (deviceType === 'NODE') {
            if(!data.measurements.length) {
                return false;
            }

            const { fileTitle, headers, itemsFormatted } = formatNodeData(
                data,
                device
            );
            exportCSVFile(headers, itemsFormatted, fileTitle);
        } else {
            return false;
        }
    });
};
// call the exportCSVFile() function to process the JSON and trigger the download
// https://gist.github.com/dannypule
