import * as moment from 'moment';

moment.locale();

export const massageData = (data = { measurements: [] }) => {
    console.log(data);
    return Object.assign({}, data, {
        measurements: data.measurements.map(record => {
            return {
                ...record,
                date: moment(record.date).format('lll'),
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
