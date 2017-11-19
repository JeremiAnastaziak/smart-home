import React from 'react';
import AlarmFire from '../AlarmFire';
import AlarmFreezing from '../AlarmFreezing';
import AlarmBurglary from '../AlarmBurglary';
import AlarmTile from '../AlarmTile';

const AlarmDashboard = ({alarms}) => {
    return (
        <div className="row">
            {
                Object.keys(alarms).map(key => <AlarmTile key={key} alarmCounts={alarms[key]} title={`${key} alarm`}/>)
            }
        </div>
    );
};

export default AlarmDashboard;
