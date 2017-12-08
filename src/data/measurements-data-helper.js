export function groupMeasurements(records){

    let massagedData = {
        temperature: [],
        sound: []
    };

    records.map(record => {
        massagedData.temperature.push({
            date: record.date,
            ...record.temperature
        });
        massagedData.sound.push({
            date: record.date,
            ...record.soundLevel,
        })
    });

    console.log(massagedData)

    return massagedData;
}
