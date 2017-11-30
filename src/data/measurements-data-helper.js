import * as moment from 'moment';

export function groupMeasurements(records){
    let data = records.map(record => {
        return {
            date: moment(record.date).format("DD/MM"),
            temperature: record.temperature,
            sound: record.temperature
        };
    });

    let massagedData = {
        temperature: [],
        sound: []
    };

    data.forEach((record, index) => {
        massagedData.temperature.push(record.temperature);
        massagedData.temperature[index].date = record.date;
        massagedData.sound.push(record.sound);
        massagedData.sound[index].date = record.date;
    });

    return massagedData;
}
