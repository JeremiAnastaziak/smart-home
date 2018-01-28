import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard';
import Header from '../Header';
import Graphs from '../Graphs';
import Landing from '../Landing';
import Devices from '../Devices';
import NavigationBottom from '../NavigationBottom';
import Measurements from '../Measurements';
import HeaderSelect from '../HeaderSelect';
import Loading from '../Loading';
import { fetchInitialData } from '../../actions/dashboard-actions';

const mapStateToProps = ({ user, dashboard }) => {
    return {
        isAuth: user.isAuth,
        isCheckingAuth: dashboard.isLatestFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkUserAuth: () => dispatch(fetchInitialData())
    };
};

class Router extends Component {
    componentDidMount() {
        this.props.checkUserAuth();
    }
    render() {
        const isCheckingAuth = this.props.isCheckingAuth && !this.props.isAuth;
        const { isAuth } = this.props;
        return (
            <HashRouter>
                {isCheckingAuth ? (
                    <Loading />
                ) : !isAuth ? (
                    <div className="unAuthRoutes">
                        <Route path="/" component={Landing} />
                    </div>
                ) : (
                    <div className="authRoutes">
                        <NavigationBottom className="bottom-nav-side"/>
                        <div class="page-content">
                            <Route
                                exact
                                path="/"
                                component={() => (
                                    <div>
                                        <Header />
                                        <Dashboard />
                                    </div>
                                )}
                            />
                            <Route
                                exact
                                path="/graphs"
                                component={() => (
                                    <div className="header-select--show">
                                        <Header />
                                        <Graphs />
                                    </div>
                                )}
                            />
                            <Route
                                exact
                                path="/measurements"
                                component={() => (
                                    <div className="header-select--show">
                                        <Header />
                                        <Measurements />
                                    </div>
                                )}
                            />
                            <Route
                                exact
                                path="/devices"
                                component={() => (
                                    <div>
                                        <Header />
                                        <Devices />
                                    </div>
                                )}
                            />
                        </div>
                        <NavigationBottom fixedBottom/>
                    </div>
                )}
            </HashRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
