import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import DevicesForm from './DevicesForm';
import DevicesList from './DevicesList';
import {
    submitCreateDevice,
    submitEditDevice,
    submitRemoveDevice
} from '../../actions/device-actions';
import './index.css';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        devices: dashboard.handles,
        isFetching: dashboard.isFetching || devices.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createDeviceSubmit: body => dispatch(submitCreateDevice(body)),
        editDeviceSubmit: body => dispatch(submitEditDevice(body)),
        removeDeviceSubmit: body => dispatch(submitRemoveDevice(body))
    };
};
class Devices extends PureComponent {
    render() {
        const {
            createDeviceSubmit,
            removeDeviceSubmit,
            editDeviceSubmit,
            devices,
            isFetching
        } = this.props;
        return (
            <Card style={{ margin: '10px' }}>
                {isFetching && <CircularProgress />}
                <DevicesForm
                    isFetching={isFetching}
                    createDeviceSubmit={createDeviceSubmit}
                />
                <DevicesList
                    devices={devices}
                    isFetching={isFetching}
                    removeDeviceSubmit={removeDeviceSubmit}
                    editDeviceSubmit={editDeviceSubmit}
                />
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
