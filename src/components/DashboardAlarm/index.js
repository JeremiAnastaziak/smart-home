import React from 'react';
import TableCustom from '../Table';
import { connect } from 'react-redux';

const mapStateToProps = ({ dashboardAlarm }) => {
    return {
        records: dashboardAlarm.records && dashboardAlarm.records.items,
        isFetching: dashboardAlarm.isFetching
    };
};

const DashboardAlarm = ({ alarmType, records, isFetching }) => {
    return (
        <div>
            <TableCustom
                alarmTable={true}
                records={records}
                isFetching={isFetching}
            />
        </div>
    );
};

export default connect(mapStateToProps, null)(DashboardAlarm);
