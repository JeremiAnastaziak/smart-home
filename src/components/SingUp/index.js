import React, { Component } from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            password: '',
            passwordRepeated: '',
            validate: false
        };
        this.passwordErrorMessage = '';
        this.repeatedPasswordErrorMessage = '';
        this.phoneErrorMessage = '';
    }

    fromValid = () => {
        this.setState({
            validate: true
        })
        this.passwordErrorMessage = '';
        this.repeatedPasswordErrorMessage = '';
        this.phoneErrorMessage = '';
        const { phoneNumber, password, passwordRepeated } = this.state;

        if (phoneNumber.length !== 9) {
            this.phoneErrorMessage = 'Numer telefonu powinien miec 9 cyfr';
            return false
        }

        if (password.length <= 6 ) {
            this.passwordErrorMessage = 'Wprowadzone hasło jest zbyt krótkie';
            return false
        }
        else if (password !== passwordRepeated) {
            this.repeatedPasswordErrorMessage = 'Hasła nie są takie same';
            return false
        }
        return true

    }

    submitForm = e => {
        e.preventDefault();
        if (this.fromValid()) this.props.onRegisterSubmit(this.state);
    };

    render() {
        const { onRegisterSubmit, isFetching } = this.props;
        return (
            <div>
                <CardTitle
                    title={
                        <span>
                            Rejestracja{' '}
                            {isFetching && <CircularProgress size={30} />}
                        </span>
                    }
                    style={{ paddingBottom: '0' }}
                />
                <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                    <form
                        onSubmit={(e) => this.submitForm(e)}
                    >
                        <TextField
                            hintText="Wpisz adres e-mail"
                            floatingLabelText="E-mail"
                            type="email"
                            fullWidth
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            hintText="Wpisz numer telefonu"
                            floatingLabelText="Numer telefonu"
                            type="number"
                            required
                            errorText={this.state.validate && this.phoneErrorMessage}
                            onChange={e =>
                                this.setState({
                                    phoneNumber: e.target.value
                                })}
                            fullWidth
                        />
                        <TextField
                            hintText="Wpisz swoje hasło"
                            floatingLabelText="Hasło"
                            type="password"
                            fullWidth
                            errorText={this.state.validate && this.passwordErrorMessage}
                            onChange={e =>
                                this.setState({
                                    password: e.target.value
                                })}
                            required
                        />
                        <TextField
                            hintText="Powtórz swoje hasło"
                            floatingLabelText="Powtórz hasło"
                            type="password"
                            fullWidth
                            errorText={this.state.validate && this.repeatedPasswordErrorMessage}
                            onChange={e =>
                                this.setState({
                                    passwordRepeated: e.target.value
                                })}
                            required
                        />
                        <RaisedButton
                            label="Zarejestruj się"
                            primary={true}
                            style={{ marginTop: '10px' }}
                            type="submit"
                            disabled={isFetching}
                            fullWidth
                        />
                    </form>
                </CardText>
            </div>
        );
    }
}

export default SingUp;
