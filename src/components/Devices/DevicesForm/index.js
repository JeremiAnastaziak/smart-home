import React, { Component } from 'react';
import { CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DevicesForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.createDevice(this.state)
    }

    render() {
        return (
            <div>
                <CardHeader className="devices-title" title="Dodaj nowe urządzenia" style={{paddingBottom: 0, marginBottom: '-20px'}}/>
                <CardText>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <TextField
                            floatingLabelText="ID urządzenia"
                            required
                            onChange={e => this.setState({ id: e.target.value })}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="Nazwa urządzenia"
                            required
                            onChange={e => this.setState({ name: e.target.value })}
                            style={{margin: '-15px 0 10px'}}
                        />
                        <br/>
                        <RaisedButton label="Dodaj" primary type="submit" disabled={this.props.isFetching}/>
                    </form>
                </CardText>
            </div>
        );
    }
}

export default DevicesForm;
