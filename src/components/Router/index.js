import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import Header from '../Header';
import Graphs from '../Graphs';
import Landing from '../Landing';
import Devices from '../Devices';
import { connect } from 'react-redux';
import { loadRecords } from '../../actions/dashboard-actions';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle } from 'material-ui/Card';
import { withCookies, Cookies } from 'react-cookie';
import NavigationBottom from '../NavigationBottom';
import SectionRecords from '../SectionRecords';

const mapStateToProps = ({ user, dashboard, devices }) => {
    return {
        isAuth: user.isAuth,
        isCheckingAuth: dashboard.isFetching,
        device: devices.selected
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
                            <Header device={this.props.device}/>
                            {!this.props.isAuth ? (
                                <div className="unAuthRoutes">
                                    <Route exact path="/" component={Landing} />
                                </div>
                            ) : (
                                <div className="authRoutes" style={{marginBottom: '66px'}}>
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
                                    <Route
                                        exact
                                        path="/table"
                                        component={SectionRecords}
                                    />
                                    <NavigationBottom />
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
