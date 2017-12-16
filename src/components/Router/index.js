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
import HeaderSelect from '../HeaderSelect';

const mapStateToProps = ({ user, dashboard, devices }) => {
    return {
        isAuth: user.isAuth,
        isCheckingAuth: dashboard.isFetching,
        device: devices.selected,
        devices: dashboard.handles

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
                                <div className="authRoutes" style={{marginBottom: '66px'}}>
                                    <Route
                                        exact
                                        path="/"
                                        component={() => <div> <Header device={this.props.device} /> <DashboardMain /> </div>}
                                    />
                                    <Route
                                        exact
                                        path="/devices"
                                        component={() => <div> <Header device={this.props.device} /> <Devices /> </div>}
                                    />
                                    <Route
                                        exact
                                        path="/graphs"
                                        component={() => <div> <HeaderSelect device={this.props.device} /> <Graphs /> </div>}
                                    />
                                    <Route
                                        exact
                                        path="/table"
                                        component={() => <div> <HeaderSelect device={this.props.device} /> <SectionRecords /> </div>}
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
