import React from 'react';
import { connect } from 'react-redux';
import DashboardTileHandle from './DashboardTileHandle';
import DashboardTileNode from './DashboardTileNode';
import { graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';
import './index.css';

const mapStateToProps = ({ dashboard }) => {
    return {
        latest: dashboard.latest
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadGraphData: device =>
            dispatch(
                graphsViewClick({
                    name: device.handleName || device.nodeName,
                    id: device.deviceId,
                    deviceType: device.deviceType
                })
            ),
        loadTableData: device =>
            dispatch(
                tableViewClick({
                    name: device.handleName || device.nodeName,
                    id: device.deviceId,
                    deviceType: device.deviceType
                })
            )
    };
};

const Dashboard = ({ latest, loadGraphData, loadTableData }) => {
    console.log(latest);
    return (
        <div className="devices">
            {latest.handles.map(handle => (
                <DashboardTileHandle
                    key={handle.id}
                    device={handle}
                    loadGraphData={loadGraphData}
                    loadTableData={loadTableData}
                />
            ))}
            {latest.nodes.map(node => (
                <DashboardTileNode
                    key={node.id}
                    device={node}
                    loadGraphData={loadGraphData}
                    loadTableData={loadTableData}
                />
            ))}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
