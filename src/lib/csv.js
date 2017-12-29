import { fetchRecords } from '../api/api-measurements';
import { apiDateFormat } from '../api/helper';
import * as moment from 'moment';

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

export function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

export const saveDataToCSV = (device, filter) => {
    console.log(device);
    const params = {
        activeSort: 'date_latest',
        handles: '123123'
    };
    if (filter.startDate) params.startDate = apiDateFormat(filter.startDate);
    if (filter.endDate) params.endDate = apiDateFormat(filter.endDate);

    fetchRecords(params).then(data => {
        const fileTitle = `${device.handleName}-pomiary`; // or 'my-unique-title'
        const headers = {
            date: 'Data'.replace(/,/g, ''), // remove commas to avoid errors
            handleName: 'Nazwa klamki',
            handlePosition: 'Pozycja klamki',
            temperature: 'Temperatura'
        };

        const itemsFormatted = data.handleMeasurements.map(item => {
            return {
                date:
                    moment(item.date).format('l') +
                    ' ' +
                    moment(item.date).format('LT'),
                handleName: item.handleName,
                handlePosition: item.handlePosition,
                temperature: item.temperature.value
            };
        });

        exportCSVFile(headers, itemsFormatted, fileTitle);
    });
};
// call the exportCSVFile() function to process the JSON and trigger the download
// https://gist.github.com/dannypule
