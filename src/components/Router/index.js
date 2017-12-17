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
import { loadRecords } from '../../actions/dashboard-actions';


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
                        <Route exact path="/" component={Landing} />
                    </div>
                ) : (
                    <div className="authRoutes" style={{ marginBottom: '66px' }}>
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
                                <div>
                                    <HeaderSelect />
                                    <Graphs />
                                </div>
                            )}
                        />
                        <Route
                            exact
                            path="/table"
                            component={() => (
                                <div>
                                    <HeaderSelect />
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
                        <NavigationBottom />
                    </div>
                )}
            </HashRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
