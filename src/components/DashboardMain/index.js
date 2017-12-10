import React from 'react';
import { connect } from 'react-redux';
import SectionAlarms from '../SectionAlarms';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';
import { graphsViewChange } from '../../actions/graph-actions';

const mapStateToProps = ({ dashboard }) => {
    return {
        alarms: countAlarms(dashboard.records.measurements),
        records: dashboard.records.measurements,
        chartRecords: groupMeasurements(dashboard.records.measurements),
        isFetching: dashboard.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        chartsViewClick: (field) => dispatch(graphsViewChange(field))
    }
}

const DashboardMain = ({ chartRecords, alarms, records, isFetching, chartsViewClick }) => {
    return (
        <div>
            {/* {records.length && <SectionAlarms alarms={alarms} />} */}
            <SectionRecords records={records} isFetching={isFetching} />
            <SectionCharts data={chartRecords} chartsViewClick={chartsViewClick} isFetching={isFetching}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);
