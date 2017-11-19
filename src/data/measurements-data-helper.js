import * as moment from 'moment';

export function groupMeasurements(records){
    let data = records.map(record => {
        return {
            date: moment(record.date).format("DD/MM"),
            ...record.measurements
        };
    });

    let massagedData = {
        temperature: [],
        sound: []
    };

    data.forEach((measurementSet, index) => {
        massagedData.temperature.push(measurementSet.temperature);
        massagedData.temperature[index].date = measurementSet.date;
        massagedData.sound.push(measurementSet.sound);
        massagedData.sound[index].date = measurementSet.date;
    });

    return massagedData;
}
