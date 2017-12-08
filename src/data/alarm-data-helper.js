import filter from 'lodash/filter';

export function countAlarms(records) {
    let counter = {
        fire: 0,
        frost: 0,
        burglary: 0
    };

    records.forEach(record => {
        if (record.alarm.fire) counter.fire++;
        if (record.alarm.frost) counter.frost++;
        if (record.alarm.burglary) counter.burglary++;
    });

    return counter;
}

export const extractSpecificAlarmInfo = (records, alarmType) =>
    filter(records, record => record.alarm[alarmType]);
