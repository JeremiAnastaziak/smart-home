import React from 'react';
import SectionAlarms from '../SectionAlarms';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { connect } from 'react-redux';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';

const mapStateToProps = ({ records }) => {
    return {
        measurements: groupMeasurements(records.items),
        alarms: countAlarms(records.items),
        records: records.items
    };
};

const DashboardMain = ({ measurements, alarms, records }) => {
    return (
        <div>
            <SectionAlarms alarms={alarms} />
            <SectionRecords records={records} />
            <SectionCharts data={measurements} />
        </div>
    );
};

export default connect(mapStateToProps, null)(DashboardMain);
