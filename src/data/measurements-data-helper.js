export function groupMeasurements(records){

    let massagedData = {
        temperature: {
            title: 'Temperatura',
            unit: '°C',
            items: []
        },
        sound_level: {
            title: 'Dźwięk',
            unit: 'dB',
            items: []
        }
    };

    records.map(record => {
        massagedData.temperature.items.push({
            date: record.date,
            ...record.temperature
        });
        massagedData.sound_level.items.push({
            date: record.date,
            ...record.soundLevel,
        })
    });

    return massagedData;
}
