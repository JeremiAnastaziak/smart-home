import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const DevicesFormEdition = ({ editDeviceSubmit, toggleDeviceEdition, id }) => {
    const submitForm = e => {
        e.preventDefault();
        editDeviceSubmit({ id, name: this.newName });
        toggleDeviceEdition();
    };

    this.newName = '';

    return (
        <form style={{ marginTop: '-10px' }} onSubmit={e => submitForm(e)}>
            <TextField
                style={{ marginRight: '10px' }}
                hintText="Wpisz nowa nazwe"
                onChange={e => (this.newName = e.target.value)}
                required
            />
            <RaisedButton label="Potwierdź" primary type="submit" />
        </form>
    );
};

export default DevicesFormEdition;
