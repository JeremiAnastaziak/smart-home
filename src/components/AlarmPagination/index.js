import React from 'react';
import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../actions/dashboard-alarm-actions.js';

const mapStateToProps = ({ dashboardAlarm }) => {
    return {
        ...dashboardAlarm,
        totalPages: Math.ceil(dashboardAlarm.records && dashboardAlarm.records.total / 5)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCurrentPage: (page) => {
            dispatch(changeCurrentPage(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
