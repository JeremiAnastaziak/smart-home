import React from 'react';
import TableCustom from '../Table';
import { connect } from 'react-redux';
import { extractSpecificAlarmInfo } from '../../data/alarm-data-helper';

const mapStateToProps = ({ records }) => {
    return {
        records: records.items
    };
};

const DashboardAlarm = ({ alarmType, records }) => {
    return (
        <div>
            <TableCustom records={extractSpecificAlarmInfo(records, alarmType)} ingoreAlarmColumn />
        </div>
    );
};

export default connect(mapStateToProps, null)(DashboardAlarm);
