import React from 'react';
import { connect } from 'react-redux';
import DashboardTiles from './DashboardTiles';
import { graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';

const mapStateToProps = ({ dashboard }) => {
    return {
        devices: dashboard.handles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadGraphData: device => dispatch(graphsViewClick(device)),
        selectDevice: device => dispatch(tableViewClick(device))
    };
};

const Dashboard = props => {
    return <DashboardTiles {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
