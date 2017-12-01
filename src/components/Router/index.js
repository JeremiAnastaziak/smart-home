import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import DashboardAlarm from '../DashboardAlarm';
import Header from '../Header';

const Router = () => {
    return (
        <HashRouter>
            <div>
                <Route
                    exact
                    path="/"
                    component={routerParams => (

                        <div>
                            <Header showIconLeft={routerParams.match.params.alarm} />
                            <DashboardMain />
                        </div>
                    )}
                />
                {/* <Route
                    exact
                    path="/register"
                    component={() => (
                        <div>
                            <Register />
                        </div>
                    )}
                /> */}
                <Route
                    exact
                    path="/alarms/:alarm"
                    component={routerParams => (
                        <div>
                            <Header
                                showIconLeft={routerParams.match.params.alarm}
                                alarmType={routerParams.match.params.alarm}
                            />
                            <DashboardAlarm
                                alarmType={routerParams.match.params.alarm}
                            />
                        </div>
                    )}
                />
            </div>
        </HashRouter>
    );
};

export default Router;
