import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import DashboardAlarm from '../DashboardAlarm';
import Header from '../Header';
import Graphs from '../Graphs';
import Landing from '../Landing';
import Devices from '../Devices';
import { connect } from 'react-redux';
import { loadRecords } from '../../actions/dashboard-actions';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle } from 'material-ui/Card';
import { withCookies, Cookies } from 'react-cookie';

const mapStateToProps = ({ user, dashboard }) => {
    return {
        isAuth: user.isAuth,
        isCheckingAuth: dashboard.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkUserAuth: () => dispatch(loadRecords())
    };
};

const CheckingSessionView = () => {
    return (
        <Card style={{ maxWidth: '500px' }}>
            <CardTitle
                title={
                    <span style={{ display: 'flex' }}>
                        Checking user session <CircularProgress size={30} />
                    </span>
                }
            />
        </Card>
    );
};

class Router extends Component {
    componentDidMount() {
        const sessionCookie = this.props.cookies.getAll().SESSIONID;
        console.log(this.props.cookies.getAll(), sessionCookie);
        this.props.checkUserAuth();
    }
    render() {
        return (
            <div>
                <HashRouter>
                    {(this.props.isCheckingAuth && !this.props.isAuth) ? (
                        <CheckingSessionView />
                    ) : (
                        <div>
                            {!this.props.isAuth ? (
                                <div className="unAuthRoutes">
                                    <Route exact path="/" component={Landing} />
                                </div>
                            ) : (
                                <div className="authRoutes">
                                    <Header />
                                    <Route
                                        exact
                                        path="/"
                                        component={DashboardMain}
                                    />
                                    <Route
                                        exact
                                        path="/devices"
                                        component={Devices}
                                    />
                                    <Route
                                        exact
                                        path="/graphs"
                                        component={Graphs}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </HashRouter>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Router));
