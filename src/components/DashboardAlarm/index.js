import React from 'react';
import TableCustom from '../Table';
import { connect } from 'react-redux';
import { loadRecords} from '../../actions/dashboard-alarm-actions';

const mapStateToProps = ({ dashboardAlarm }) => {
    return {
        records: null,
        isFetching: dashboardAlarm.isFetching
    };
};

const mapDispatchToProps = (dispatch, {alarmType}) => {
    //dispatch(loadRecords(alarmType))
    return {

    }
}

const DashboardAlarm = ({ alarmType, records, isFetching }) => {
    console.log(records);
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAlarm);
