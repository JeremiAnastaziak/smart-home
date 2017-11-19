import React from 'react';
import AlarmDashboard from '../AlarmDashboard';
import RecordsDashboard from '../RecordsDashboard';
import MeasurementsDashboard from '../MeasurementsDashboard';
import { connect } from 'react-redux';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';

const mapStateToProps = ({ records }) => {
    return {
        measurements: groupMeasurements(records),
        alarms: countAlarms(records),
        records: records
    };
};

const Dashboard = ({ measurements, alarms, records }) => {
    return (
        <div>
            <AlarmDashboard alarms={alarms} />
            <RecordsDashboard records={records} />
            <MeasurementsDashboard data={measurements} />
        </div>
    );
};

export default connect(mapStateToProps, null)(Dashboard);
