import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { cyan500 } from 'material-ui/styles/colors';
import { selectDevice } from '../../actions/device-actions';
import DropDownMenu from 'material-ui/DropDownMenu';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        devices: dashboard.devices || [],
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
        if (this.props.selectedDevice.id) return false;
        this.props.deviceClick(this.props.devices[0]);
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleItemClick = device => {
        this.setState({ open: false });
        this.props.deviceClick(device);
    };

    render() {
        if(!this.props.devices.length) return false;
        return (
            <div className="header-select">
                <span className="header-label">aktywne urządzenie:</span>
                <DropDownMenu
                    labelStyle={{ color: '#fff' }}
                    underlineStyle={{ display: 'none' }}
                    value={
                        (this.props.selectedDevice &&
                            this.props.selectedDevice.id) ||
                        (this.props.devices && this.props.devices.length && this.props.devices[0].id)
                    }
                >
                    {this.props.devices.map(device => (
                        <MenuItem
                            key={device.id}
                            onClick={() => this.handleItemClick(device)}
                            value={device.id}
                            primaryText={device.name}
                        />
                    ))}
                </DropDownMenu>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSelect);
