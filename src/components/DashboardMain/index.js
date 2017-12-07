import React from 'react';
import { connect } from 'react-redux';
import SectionAlarms from '../SectionAlarms';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';

const mapStateToProps = ({ dashboard }) => {
    return {
        measurements: groupMeasurements(dashboard.records.measurements),
        alarms: countAlarms(dashboard.records.measurements),
        records: dashboard.records.measurements,
        isFetching: dashboard.isFetching
    };
};

const DashboardMain = ({ measurements, alarms, records, isFetching }) => {
    return (
        <div>
            {records.length && <SectionAlarms alarms={alarms} />}
            <SectionRecords records={records} isFetching={isFetching} />
            {records.length &&  <SectionCharts data={measurements} />}
        </div>
    );
};

export default connect(mapStateToProps, null)(DashboardMain);
