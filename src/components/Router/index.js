import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import DashboardAlarm from '../DashboardAlarm';
import Header from '../Header';
import SideBar from '../SideBar';
import Landing from '../Landing';
import Devices from '../Devices';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => {
    return {
        isAuth: user.isAuth
    };
};

const Router = ({ isAuth }) => {
    return (
        <div>
            {/* <SideBar handles={handles} /> */}
            <HashRouter>
                <div>
                    <Header />
                    <Route exact path="/devices" component={Devices} />
                    {!isAuth && (
                        <div className="unAuthRoutes">
                            <Route exact path="/" component={Landing} />
                        </div>
                    )}
                    {isAuth && (
                        <div className="authRoutes">
                            <Route exact path="/" component={DashboardMain} />

                            {/* <Route
                                exact
                                path="/alarms/:alarm"
                                component={DashboardAlarm}
                            /> */}
                        </div>
                    )}
                    {/* <Route exact path="/" component={DashboardMain} />
                    <Route
                        exact
                        path="/alarms/:alarm"
                        component={DashboardAlarm}
                    /> */}
                </div>
            </HashRouter>
        </div>
    );
};

export default connect(mapStateToProps)(Router);
