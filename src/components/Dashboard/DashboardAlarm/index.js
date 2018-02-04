import React from 'react';
import {
    Card,
    CardTitle,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';

const DashboardAlarm = ({ devices = [] }) => {
    const translateAlarm = alarm => {
        switch (alarm) {
            case 'fire':
                return 'pożarowy';
            case 'frost':
                return 'zamrożeniowy';
            case 'burglary':
                return 'włamaniowy';
            default:
                return '';
        }
    };

    const renderAlarms = alarm =>
        'alarm' +
        ' ' +
        Object.keys(alarm)
            .filter(key => alarm[key])
            .map(alarm => translateAlarm(alarm))
            .join(', ');

    const renderDevice = device => {
        const { nodeName, handleName, alarm, deviceId } = device;
        const name = nodeName || handleName;

        return (
            <div style={{ marginBottom: '10px' }}>
                <p style={{ margin: 0 }}>
                    {`${name.toUpperCase()} o numerze id ${deviceId} wykryło: ` +
                        renderAlarms(alarm)}
                </p>
            </div>
        );
    };

    return (
        <Card style={{backgroundColor: '#FF1744', color: '#fff', marginTop: '5px'}}>
            <CardText style={{color: '#fff', paddingBottom: '8px'}}>
                {devices.length
                    ? devices.map(device => renderDevice(device))
                    : 'Brak alarmów w ostatnich pomiarach'}
            </CardText>
        </Card>
    );
};

export default DashboardAlarm;
