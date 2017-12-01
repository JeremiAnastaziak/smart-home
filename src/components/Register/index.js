import React from 'react';
import { connect } from 'react-redux';
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
import { submitRegisterUser } from '../../actions/user-actions';
import './index.css';

const mapDispatchToProps = (dispatch) => {
    return {
        onFormSubmit: (body) => {
            dispatch(submitRegisterUser(body))
        }
    }
}

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: null,
            password: '',
            passwordRepeated: ''
        }
    }

    render() {
        return (
            <div className="register">
                <Card style={{ minWidth: '400px' }}>
                    <CardTitle title="Register" />
                    {this.props.isFetching && <CircularProgress />}
                    <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={e => e.preventDefault()}>
                            <TextField
                                hintText="Wpisz adres e-mail"
                                floatingLabelText="E-mail"
                                type="e-mail"
                                fullWidth
                                required
                                onChange={e => this.setState({ email: e.target.value })}
                                />
                            <TextField
                                hintText="Wpisz numer telefonu"
                                floatingLabelText="Numer telefonu"
                                type="number"
                                onChange={e => this.setState({ number: e.target.value })}
                                fullWidth
                            />
                            <TextField
                                hintText="Wpisz swoje hasło"
                                floatingLabelText="Hasło"
                                type="password"
                                fullWidth
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                            <TextField
                                hintText="Powtórz swoje hasło"
                                floatingLabelText="Powtórz hasło"
                                type="password"
                                fullWidth
                                onChange={e => this.setState({ passwordRepeated: e.target.value })}
                            />
                            <RaisedButton
                                label="Potwierdź"
                                primary={true}
                                style={{ marginTop: '10px' }}
                                type="submit"
                                onClick={() => this.props.onFormSubmit(this.state)}
                            />
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Register);
