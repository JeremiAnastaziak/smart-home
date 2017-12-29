import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { cyan500 } from 'material-ui/styles/colors';
import { selectDevice } from '../../actions/device-actions';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        devices: dashboard.handles || [],
        selectedDevice: devices.selected || {}
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

    componentDidMount() {
        if(this.props.selectedDevice.id) return false;
        this.props.deviceClick(this.props.devices[0]);
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleItemClick = device => {
        this.setState({ open: false });
        this.props.deviceClick(device);
    };

    render() {
        return (
            <div>
                <Paper
                    style={{
                        textAlign: 'center',
                        zIndex: '1500',
                        position: 'relative'
                    }}
                >
                    <MenuItem
                        onClick={this.handleToggle}
                        style={{ lineHeight: '34px' }}
                    >
                        <Subheader style={{ lineHeight: '14px', padding: '8px' }}>
                            wybrane urządzenie
                        </Subheader>
                        {this.props.selectedDevice.name || 'pokaz wszystkie'}
                    </MenuItem>
                </Paper>
                <Paper
                    style={{
                        textAlign: 'center',
                        zIndex: '1500',
                        position: 'relative',
                        overflow: 'hidden',
                        height: this.state.open ? 'auto' : '0'
                    }}
                >
                    {this.props.devices.map(device => (
                        <MenuItem
                            onClick={() => this.handleItemClick(device)}
                            style={{
                                color:
                                    this.props.selectedDevice.name === device.name
                                        ? cyan500
                                        : '#000'
                            }}
                        >
                            {device.name}
                        </MenuItem>
                    ))}
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSelect);
