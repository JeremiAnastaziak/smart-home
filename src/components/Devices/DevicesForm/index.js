import React, { Component } from 'react';
import { CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DevicesForm extends Component {
    render() {
        return (
            <div>
                <CardHeader title="Dodaj nowe urządzenia" style={{paddingBottom: 0, marginBottom: '-20px'}}/>
                <CardText>
                    <form>
                        <TextField
                            floatingLabelText="ID urządzenia"
                            required
                        />
                        <br/>
                        <TextField
                            floatingLabelText="Nazwa urządzenia"
                            required
                        />
                        <br/>
                        <RaisedButton label="Wyczysc" style={{marginRight: '20px'}}/>
                        <RaisedButton label="Dodaj" primary />
                    </form>
                </CardText>
            </div>
        );
    }
}

export default DevicesForm;
