import React from 'react';
import FlatButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const DeleteDialog = ({ name, id, open, devicesRemoveClick, devicesDialogToggle }) => {
    this.open = open;
    const actions = [
        <FlatButton
            label="Anuluj"
            onClick={() => devicesDialogToggle(id, name, false)}
        />,
        <FlatButton
            label="Usuń"
            primary
            style={{marginLeft: '20px'}}
            onClick={() => {
                devicesDialogToggle(id, name, false);
                devicesRemoveClick({ id });
            }}
        />
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={() => devicesDialogToggle(id, name, false)}
        >
            Czy na pewno usunąc urządzenie o nazwie "{name}"?
        </Dialog>
    );
};

export default DeleteDialog;
