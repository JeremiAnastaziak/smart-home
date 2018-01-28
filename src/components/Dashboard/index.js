import React from 'react';
import { connect } from 'react-redux';
import DashboardTile from './DashboardTile';
import DashboardTileHandle from './DashboardTileHandle';
import DashboardTileNode from './DashboardTileNode';
import DashboardAlarm from './DashboardAlarm';
import { graphsViewClick } from '../../actions/graph-actions';
import { tableViewClick } from '../../actions/dashboard-actions';
import Paper from 'material-ui/Paper';
import './index.css';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const mapStateToProps = ({ dashboard }) => {
    return {
        latest: dashboard.latest,
        devicesWithAlarm: dashboard.devicesWithAlarm,
        isFetching: dashboard.isLatestFetching
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
    <Paper style={{ padding: '18px', width: '100%' }}>
        <h3>Nie znaleziono zadnych pomiarów. Sprobuj dodac nowe urządzenie.</h3>
        <Link to="/devices">
            <RaisedButton label="Dodaj nowe urządzenie" primary />
        </Link>
    </Paper>
);

const Dashboard = ({
    latest = { handles: [], nodes: [] },
    devicesWithAlarm,
    loadGraphData,
    loadTableData,
    isFetching
}) => {
    if (isFetching) {
        return (
            <CircularProgress
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        );
    }

    if (!latest.nodes.length && !latest.handles.length && !isFetching) {
        return <DashboardEmpty />;
    }

    return (
        <div>
            <DashboardAlarm devices={devicesWithAlarm} />
            <div className="devices">
                {latest.handles &&
                    latest.handles.map(handle => (
                        <DashboardTile
                            key={handle.id}
                            loadGraphData={loadGraphData}
                            loadTableData={loadTableData}
                            device={handle}
                            deviceType="HANDLE"
                        >
                            <DashboardTileHandle key={handle.id} device={handle} />
                        </DashboardTile>
                    ))}
                {latest.nodes &&
                    latest.nodes.map(node => (
                        <DashboardTile
                        key={node.id}
                        loadGraphData={loadGraphData}
                        loadTableData={loadTableData}
                        device={node}
                        deviceType="NODE"
                    >
                        <DashboardTileNode key={node.id} device={node} />
                    </DashboardTile>
                    ))}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
