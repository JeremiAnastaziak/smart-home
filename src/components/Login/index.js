import React from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <div>
                <CardTitle title="Logowanie" style={{paddingBottom: '0'}}/>
                {this.props.isFetching && <CircularProgress />}
                <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                    <form onSubmit={e => e.preventDefault()}>
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
                            onClick={() => console.log(this.state)}
                        />
                    </form>
                </CardText>
            </div>
        );
    }
}

export default Login;
