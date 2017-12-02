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
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import Login from '../Login';

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: body => {
            dispatch(submitRegisterUser(body));
        }
    };
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: null,
            password: '',
            passwordRepeated: '',
            tabsIndex: 0
        };
    }

    handleChange = value => {
        console.log(value);
        this.setState({
            tabsIndex: value
        });
    };

    render() {
        return (
            <div className="register">
                <Card style={{ maxWidth: '500px' }}>

                    <SwipeableViews
                        index={this.state.tabsIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <Login />
                        <div>
                            <CardTitle title="Rejestracja" style={{paddingBottom: '0'}}/>
                            {this.props.isFetching && <CircularProgress />}
                            <CardText
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                <form onSubmit={e => e.preventDefault()}>
                                    <TextField
                                        hintText="Wpisz adres e-mail"
                                        floatingLabelText="E-mail"
                                        type="email"
                                        fullWidth
                                        required
                                        onChange={e =>
                                            this.setState({ email: e.target.value })}
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
                                        fullWidth
                                        onClick={() =>
                                            this.props.onFormSubmit(this.state)}
                                    />
                                </form>
                            </CardText>
                        </div>
                    </SwipeableViews>
                    <Tabs onChange={this.handleChange} value={this.state.tabsIndex} inkBarStyle={{backgroundColor: '#00bcd4'}}>
                        <Tab style={{background: '#eee', color: this.state.tabsIndex === 0 ? '#00bcd4' : '#212121'}}
                            label="Logowanie"
                            value={0}
                        />
                        <Tab style={{background: '#eee', color: this.state.tabsIndex === 1 ? '#00bcd4' : '#212121'}}
                            label="Rejestracja"
                            value={1}
                        />
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Register);
