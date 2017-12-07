import React from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Card } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
import { cyan500 } from 'material-ui/styles/colors';
import SingIn from '../SingIn';
import SingUp from '../SingUp';
import { submitRegisterUser, submitLoginUser } from '../../actions/user-actions';
import { loadRecords } from '../../actions/dashboard-actions';
import './index.css';

const mapStateToProps = ({user}) => {
    return {
        isFetching: user.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegisterSubmit: body => {
            dispatch(submitRegisterUser(body));
        },
        onLoginSubmit: body => {
            dispatch(submitLoginUser(body));
        },
        checkUserAuth: () => dispatch(loadRecords())
    };
};

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsIndex: 0
        };
    }

    componentDidMount() {
        console.log('mounted')
        this.props.checkUserAuth();
    }

    handleTabChange = value => {
        this.setState({
            tabsIndex: value
        });
    };

    render() {
        const { onRegisterSubmit, onLoginSubmit, isFetching } = this.props;
        return (
            <div className="register">
                <Card style={{ maxWidth: '500px' }}>
                    <SwipeableViews
                        index={this.state.tabsIndex}
                        onChangeIndex={this.handleTabChange}
                    >
                        <SingIn onLoginSubmit={onLoginSubmit} isFetching={isFetching}/>
                        <SingUp onRegisterSubmit={onRegisterSubmit} isFetching={isFetching}/>
                    </SwipeableViews>

                    <Tabs
                        onChange={this.handleTabChange}
                        value={this.state.tabsIndex}
                        inkBarStyle={{ backgroundColor: cyan500 }}
                    >
                        <Tab
                            style={{
                                background: '#eee',
                                color:
                                    this.state.tabsIndex === 0 ? cyan500 : '#212121'
                            }}
                            label="Logowanie"
                            value={0}
                        />
                        <Tab
                            style={{
                                background: '#eee',
                                color:
                                    this.state.tabsIndex === 1 ? cyan500 : '#212121'
                            }}
                            label="Rejestracja"
                            value={1}
                        />
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
