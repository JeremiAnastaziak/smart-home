import React, { Component } from 'react';
import { CardHeader } from 'material-ui/Card';
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

    toggleEdition = id => {
        this.setState({ editId: !this.state.editId ? id : '' });
    };

    toggleDialog = (id, name, show) => {
        this.setState({
            deleteId: id,
            deleteName: name,
            dialog: show
        });
    };

    render() {
        const { devices, editDevice, removeDevice, isFetching } = this.props;
        return (
            <div>
                <CardHeader className="devices-title"  style={{paddingBottom: 0}}title="Lista aktywnych urządzeń" />
                <DeleteDialog
                    toggleDialog={this.toggleDialog}
                    open={this.state.dialog}
                    name={this.state.deleteName}
                    id={this.state.deleteId}
                    remove={removeDevice}
                />
                <List>
                    {devices &&
                        devices.map(device => (
                            <DevicesListElement
                                key={device.id}
                                {...device}
                                edit={editDevice}
                                remove={removeDevice}
                                toggleEdition={() => this.toggleEdition(device.id)}
                                toggleDialog={this.toggleDialog}
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
