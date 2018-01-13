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
        isCheckingAuth: dashboard.isFetching
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
                    <div className="authRoutes" style={{ marginBottom: '66px' }}>
                        <Header />
                        <Route
                            exact
                            path="/"
                            component={() => (
                                <div>
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
                            path="/measurements"
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
