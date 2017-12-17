import React, { Component } from 'react';
import { CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DevicesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: ''
        };
    }

    submitForm = e => {
        e.preventDefault();
        this.props.createDeviceSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={e => this.submitForm(e)}>
                <CardHeader
                    className="devices-title"
                    title="Dodaj nowe urządzenie"
                    style={{ paddingBottom: 0, marginBottom: '-20px' }}
                />
                <CardText>
                    <TextField
                        floatingLabelText="ID urządzenia podane przez producenta"
                        required
                        onChange={e => this.setState({ id: e.target.value })}
                        fullWidth
                    />
                    <br />
                    <TextField
                        floatingLabelText="Twoja własna nazwa urządzenia"
                        required
                        onChange={e => this.setState({ name: e.target.value })}
                        style={{ margin: '-15px 0 10px' }}
                        fullWidth
                    />
                    <br />
                    <RaisedButton
                        label="Dodaj"
                        primary
                        type="submit"
                        disabled={this.props.isFetching}
                        fullWidth
                    />
                </CardText>
            </form>
        );
    }
}

export default DevicesForm;
