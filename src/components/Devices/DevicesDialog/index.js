import React from 'react';
import FlatButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const DeleteDialog = ({ name, id, open, removeDeviceSubmit, toggleDeviceDialog }) => {
    this.open = open;
    const actions = [
        <FlatButton
            label="Anuluj"
            onClick={() => toggleDeviceDialog(id, name, false)}
        />,
        <FlatButton
            label="Usuń"
            primary
            style={{marginLeft: '20px'}}
            onClick={() => {
                toggleDeviceDialog(id, name, false);
                removeDeviceSubmit({ id });
            }}
        />
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={() => toggleDeviceDialog(id, name, false)}
        >
            Czy na pewno usunąć urządzenie o nazwie "{name}"?
        </Dialog>
    );
};

export default DeleteDialog;
