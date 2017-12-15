import React from 'react';
import { connect } from 'react-redux';
import SectionDevices from '../SectionDevices';
import SectionRecords from '../SectionRecords';
import SectionCharts from '../SectionCharts';
import { groupMeasurements } from '../../data/measurements-data-helper';
import { countAlarms } from '../../data/alarm-data-helper';
import { graphsViewChange, graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';

const mapStateToProps = ({ dashboard }) => {
    return {
        alarms: countAlarms(dashboard.records.measurements),
        records: dashboard.records.measurements,
        chartRecords: groupMeasurements(dashboard.records.measurements),
        isFetching: dashboard.isFetching,
        handles: dashboard.handles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chartsViewClick: field => dispatch(graphsViewChange(field)),
        loadGraphData: device => dispatch(graphsViewClick(device)),
        selectDevice: device => dispatch(tableViewClick(device))
    };
};

const DashboardMain = ({
    chartRecords,
    alarms,
    records,
    isFetching,
    chartsViewClick,
    handles,
    loadGraphData,
    selectDevice
}) => {
    return (
        <div>
            {/* {records.length && <SectionAlarms alarms={alarms} />} */}
            <SectionDevices
                devices={handles}
                loadGraphData={loadGraphData}
                selectDevice={selectDevice}
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);
