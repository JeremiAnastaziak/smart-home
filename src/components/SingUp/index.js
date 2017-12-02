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
            phone: null,
            password: '',
            passwordRepeated: ''
        };
    }

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
                        onSubmit={() =>
                            this.state.password === this.state.passwordRepeated &&
                            onRegisterSubmit(this.state)}
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
                            onChange={e =>
                                this.setState({
                                    number: e.target.value
                                })}
                            fullWidth
                        />
                        <TextField
                            hintText="Wpisz swoje hasło"
                            floatingLabelText="Hasło"
                            type="password"
                            fullWidth
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
                            errorText={
                                this.state.passwordRepeated &&
                                (this.state.password !==
                                    this.state.passwordRepeated &&
                                    'Hasła są rózne')
                            }
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
