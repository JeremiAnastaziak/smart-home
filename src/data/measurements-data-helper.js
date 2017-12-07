import * as moment from 'moment';

export function groupMeasurements(records){

    let massagedData = {
        temperature: [],
        sound: []
    };

    records.map(record => {
        massagedData.temperature.push({
            date: moment(record.date).format("DD/MM"),
            ...record.temperature
        });
        massagedData.sound.push({
            date: moment(record.date).format("DD/MM"),
            ...record.soundLevel,
        })
    });

    return massagedData;
}
