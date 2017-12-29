import React from 'react';
import { connect } from 'react-redux';
import DashboardTile from './DashboardTile';
import { graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';

const mapStateToProps = ({ dashboard }) => {
    return {
        latest: dashboard.latest
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadGraphData: device => dispatch(graphsViewClick({name: device.handleName, id: '123123'})),
        selectDevice: device => dispatch(tableViewClick({name: device.handleName, id: '123123'}))
    };
};

const Dashboard = ({ latest, loadGraphData, selectDevice }) => {
    return (
        <div className="devices">
            {latest.handleMeasurements.map(handle => (
                <DashboardTile
                    key={handle.id}
                    device={handle}
                    loadGraphData={loadGraphData}
                    selectDevice={selectDevice}
                />
            ))}
            {latest.nodes.map(node => (
                <DashboardTile
                    key={node.id}
                    device={node}
                    loadGraphData={loadGraphData}
                    selectDevice={selectDevice}
                />
            ))}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
