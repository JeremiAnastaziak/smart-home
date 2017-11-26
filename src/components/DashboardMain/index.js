import React from 'react';
import { connect } from 'react-redux';
import SectionAlarms from '../SectionAlarms';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';
const mapStateToProps = ({ records }) => {
    return {
        measurements: groupMeasurements(records.items),
        alarms: countAlarms(records.items),
        records: records.items,
        isFetching: records.isFetching
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
