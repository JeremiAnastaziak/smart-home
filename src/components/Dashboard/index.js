import React from 'react';
import AlarmDashboard from '../AlarmDashboard';
import RecordsDashboard from '../RecordsDashboard';
import MeasurementsDashboard from '../MeasurementsDashboard';

const Dashboard = () => {
    return (
        <div>
            <AlarmDashboard />
            <RecordsDashboard />
            <MeasurementsDashboard />
        </div>
    );
};

export default Dashboard;
