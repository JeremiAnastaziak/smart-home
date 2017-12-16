import React from 'react';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { selectDevice } from '../../actions/device-actions';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        devices: dashboard.handles,
        selectedDevice: devices.selected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deviceClick: device => dispatch(selectDevice(device))
    };
};

class HeaderSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleItemClick = device => {
        this.setState({ open: false });
        this.props.deviceClick(device.id);
    };

    render() {
        return (
            <div>
                <Paper style={{textAlign: 'center', zIndex: '1500', position: 'relative'}}>
                    <MenuItem onClick={this.handleToggle} style={{lineHeight: '34px'}}>
                        <Subheader style={{lineHeight: '14px', padding: '8px'}}>wybrane urządzenie</Subheader>
                        {this.props.selectedDevice || 'pokaz wszystkie'}
                    </MenuItem>
                </Paper>
                <Paper style={{textAlign: 'center', zIndex: '1500', position: 'relative', overflow: 'hidden', height: this.state.open ? 'auto' : '0'}}>
                {this.props.devices &&
                        this.props.devices.map(device => (
                            <MenuItem onClick={() => this.handleItemClick(device)}>
                                {device.name}
                            </MenuItem>
                        ))}
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSelect);
