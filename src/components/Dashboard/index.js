import React from 'react';
import { connect } from 'react-redux';
import DashboardTileHandle from './DashboardTileHandle';
import DashboardTileNode from './DashboardTileNode';
import { graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';
import Paper from 'material-ui/Paper';
import './index.css';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

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

const DashboardEmpty = () => (
    <Paper style={{padding: '18px', width: '100%'}}>
        <h3>Nie znaleziono zadnych pomiarów. Sprobuj dodac nowe urządzenie.</h3>
        <Link
            to="/devices"
        >
            <RaisedButton label="Dodaj nowe urządzenie" primary/>
        </Link>
    </Paper>
);

const Dashboard = ({
    latest = { handles: [], nodes: [] },
    loadGraphData,
    loadTableData
}) => {
    return (
        <div className="devices">
            {latest.handles && latest.handles.map(handle => (
                <DashboardTileHandle
                    key={handle.id}
                    device={handle}
                    loadGraphData={loadGraphData}
                    loadTableData={loadTableData}
                />
            ))}
            {latest.nodes && latest.nodes.map(node => (
                <DashboardTileNode
                    key={node.id}
                    device={node}
                    loadGraphData={loadGraphData}
                    loadTableData={loadTableData}
                />
            ))}
            {!latest.nodes.length && !latest.handles.length && <DashboardEmpty />}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
