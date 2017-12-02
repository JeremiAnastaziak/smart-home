import React from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class SingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const { onLoginSubmit, isFetching } = this.props;
        return (
            <div>
                <CardTitle
                    title={
                        <span>
                            Logowanie {isFetching && <CircularProgress size={30} />}
                        </span>
                    }
                    style={{ paddingBottom: '0' }}
                />

                <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                    <form
                        ref={node => (this.form = node)}
                        onSubmit={() => onLoginSubmit(this.state)}
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
                        <RaisedButton
                            label="Zaloguj się"
                            primary={true}
                            style={{ marginTop: '10px' }}
                            type="submit"
                            fullWidth
                            disabled={isFetching}
                        />
                    </form>
                </CardText>
            </div>
        );
    }
}

export default SingIn;
