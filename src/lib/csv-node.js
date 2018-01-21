export const formatNodeData = (data, device) => {
    const fileTitle = `${device.nodeName} pomiary`; // or 'my-unique-title'
    const headers = {
        date: 'Data'.replace(/,/g, ''), // remove commas to avoid errors
        nodeName: "Nazwa node'a",
        deviceId: "Id node'a",
        temperature: 'Temperatura [°C]',
        lightIntensity: 'Intensywność światła [lm]',
        carbonDioxide: 'Dwutlenek węgla [CO₂]',
        humidity: 'Wilgotność',
        motion: 'Czujnik ruchu'
    };

    console.log(data);

    const itemsFormatted = data.measurements.map(item => {
        return {
            date: item.date,
            nodeName: item.nodeName,
            deviceId: item.deviceId,
            temperature: item.temperature.value,
            lightIntensity: item.lightIntensity.value,
            carbonDioxide: item.carbonDioxide.value,
            humidity: item.humidity.value,
            motion: item.motion
        };
    });

    return { fileTitle, headers, itemsFormatted };
};
