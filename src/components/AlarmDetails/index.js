import React from 'react';
import TableData from '../TableData';
import { connect } from 'react-redux';
import { extractSpecificAlarmInfo } from '../../data/alarm-data-helper';

const mapStateToProps = ({ records }) => {
    return {
        records: records
    };
};

const AlarmDetails = ({ alarmType, records }) => {
    return (
        <div>
            <TableData records={extractSpecificAlarmInfo(records, alarmType)} ingoreAlarmColumn />
        </div>
    );
};

export default connect(mapStateToProps, null)(AlarmDetails);
