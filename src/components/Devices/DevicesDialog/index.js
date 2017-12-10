import React from 'react';
import FlatButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const DeleteDialog = ({ name, id, remove, open, toggleDialog }) => {
    this.open = open;
    const actions = [
        <FlatButton
            label="Anuluj"
            onClick={() => toggleDialog(id, name, false)}
        />,
        <FlatButton
            label="Usuń"
            primary
            style={{marginLeft: '20px'}}
            onClick={() => {
                toggleDialog(id, name, false);
                remove({ id });
            }}
        />
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={() => toggleDialog(id, name, false)}
        >
            Czy na pewno usunąc urządzenie o nazwie "{name}"?
        </Dialog>
    );
};

export default DeleteDialog;
