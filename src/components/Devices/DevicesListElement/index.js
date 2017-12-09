import React from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/action/build';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';

const Form = ({ edit, toggleEdition, id }) => {
    const editDevice = e => {
        e.preventDefault();
        edit({ id, name: this.newName });
        toggleEdition();
    };

    this.newName = '';

    return (
        <form style={{ marginTop: '-10px' }} onSubmit={e => editDevice(e)}>
            <TextField
                style={{ marginRight: '10px' }}
                hintText="Wpisz nowa nazwe"
                onChange={e => (this.newName = e.target.value)}
            />
            <RaisedButton label="Potwierdź" primary type="submit" />
        </form>
    );
};

const DevicesListElement = ({
    name,
    id,
    edit,
    toggleDialog,
    toggleEdition,
    isDuringEdition,
    disableIcon
}) => {
    this.openDialog = false;
    return (
        <div>
            <ListItem
                primaryText={
                    isDuringEdition ? (
                        <Form edit={edit} toggleEdition={toggleEdition} id={id} />
                    ) : (
                        name
                    )
                }
                secondaryText={`id: ${id}`}
                secondaryTextLines={1}
                rightIconButton={
                    <div>
                        <IconButton onClick={() => toggleEdition()} disabled={disableIcon}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => toggleDialog(id, name, true)} disabled={disableIcon}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                }
            />
            <Divider />
        </div>
    );
};

export default DevicesListElement;
