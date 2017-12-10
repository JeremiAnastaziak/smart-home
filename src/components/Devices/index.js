import React, { PureComponent } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Form from './DevicesForm';
import DevicesList from './DevicesList';
import { connect } from 'react-redux';
import {
    submitCreateDevice,
    submitEditDevice,
    submitRemoveDevice
} from '../../actions/device-actions';
import CircularProgress from 'material-ui/CircularProgress';
import './index.css'

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        devices: dashboard.handles,
        isFetching: dashboard.isFetching || devices.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createDevice: body => dispatch(submitCreateDevice(body)),
        editDevice: body => dispatch(submitEditDevice(body)),
        removeDevice: body => dispatch(submitRemoveDevice(body))
    };
};
class Devices extends PureComponent {
    render() {
        const { createDevice, isFetching } = this.props;
        return (
            <Card>
                <div style={{maxWidth: '600px', margin: 'auto'}}>
                    <CardTitle title="Zarzadzanie urzadzeniami" />
                    {isFetching && <CircularProgress />}
                    <Form isFetching={isFetching} createDevice={createDevice} />
                    <DevicesList {...this.props} />
                </div>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
