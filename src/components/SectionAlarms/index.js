import React from 'react';
import TileAlarm from '../TileAlarm';

const SectionAlarms = ({ alarms }) => {
    return (
        <div className="row">
            {Object.keys(alarms).map(key => (
                <TileAlarm
                    key={key}
                    alarmCounts={alarms[key]}
                    title={`${key} alarm`}
                />
            ))}
        </div>
    );
};

export default SectionAlarms;
