export const formatHandleData = (data, device) => {
    const fileTitle = `${device.handleName} pomiary`; // or 'my-unique-title'
    const headers = {
        date: 'Data'.replace(/,/g, ''), // remove commas to avoid errors
        handleName: 'Nazwa klamki',
        deviceId: 'Id klamki',
        handlePosition: 'Pozycja klamki',
        temperature: 'Temperatura [°C]',
        soundLevel: 'Moc sygnału [dB]',
        alarmFire: 'Alarm pożarowy',
        alarmFrost: 'Alarm zamrożeniowy',
        alarmBurglary: 'Alarm włamaniowy'
    };

    console.log(data);

    const itemsFormatted = data.measurements.map(item => {
        return {
            date: item.date,
            handleName: item.handleName,
            deviceId: item.deviceId,
            handlePosition: item.handlePosition,
            temperature: item.temperature.value,
            soundLevel: item.soundLevel.value,
            alarmFire: item.alarm.fire,
            alarmFrost: item.alarm.frost,
            alarmBurglary: item.alarm.burglary
        };
    });

    return { fileTitle, headers, itemsFormatted };
};
