import React, { Component } from 'react';
import { CardHeader, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import DevicesListElement from '../DevicesListElement';
import DeleteDialog from '../DevicesDialog';

class DevicesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteId: '',
            editId: '',
            dialog: false
        };
    }

    toggleDeviceEdition = id => {
        this.setState({ editId: !this.state.editId ? id : '' });
    };

    toggleDeviceDialog = (id, name, show) => {
        this.setState({
            deleteId: id,
            deleteName: name,
            dialog: show
        });
    };

    render() {
        const { devices, isFetching, editDeviceSubmit, removeDeviceSubmit } = this.props;
        return (
            <div>
                <CardHeader className="devices-title"  style={{paddingBottom: 0}}title="Lista aktywnych urządzeń" />
                <DeleteDialog
                    open={this.state.dialog}
                    name={this.state.deleteName}
                    id={this.state.deleteId}
                    removeDeviceSubmit={removeDeviceSubmit}
                    toggleDeviceDialog={this.toggleDeviceDialog}
                />
                {!devices.length && <CardText>Brak urządzeń</CardText>}
                <List>
                    {devices &&
                        devices.map(device => (
                            <DevicesListElement
                                key={device.id}
                                {...device}
                                editDeviceSubmit={editDeviceSubmit}
                                toggleDeviceEdition={() => this.toggleDeviceEdition(device.id)}
                                toggleDeviceDialog={this.toggleDeviceDialog}
                                isDuringEdition={device.id === this.state.editId}
                                disableIcon={isFetching}
                            />
                        ))}
                </List>
            </div>
        );
    }
}

export default DevicesList;
