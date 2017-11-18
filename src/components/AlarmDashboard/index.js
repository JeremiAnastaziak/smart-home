import React from 'react';
import AlarmFire from '../AlarmFire';
import AlarmFreezing from '../AlarmFreezing';
import AlarmBurglary from '../AlarmBurglary';

const AlarmDashboard = () => {
    return (
        <div className="row">
            <AlarmFire />
            <AlarmFreezing />
            <AlarmBurglary />
        </div>
    );
};

export default AlarmDashboard;
