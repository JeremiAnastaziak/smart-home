import React from 'react';
import AlarmTile from '../AlarmTile';

const SectionAlarms = ({ alarms }) => {
    return (
        <div className="row">
            {Object.keys(alarms).map(key => (
                <AlarmTile
                    key={key}
                    alarmCounts={alarms[key]}
                    title={`${key} alarm`}
                />
            ))}
        </div>
    );
};

export default SectionAlarms;
