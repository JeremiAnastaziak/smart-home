import React from 'react';
import { connect } from 'react-redux';
import SectionAlarms from '../SectionAlarms';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';

const mapStateToProps = ({ dashboard }) => {
    return {
        measurements: groupMeasurements(dashboard.records.items),
        alarms: countAlarms(dashboard.records.items),
        records: dashboard.records.items,
        isFetching: dashboard.isFetching
    };
};

const DashboardMain = ({ measurements, alarms, records, isFetching }) => {
    return (
        <div>
            <SectionAlarms alarms={alarms} />
            <SectionRecords records={records} isFetching={isFetching} />
            <SectionCharts data={measurements} />
        </div>
    );
};

export default connect(mapStateToProps, null)(DashboardMain);
