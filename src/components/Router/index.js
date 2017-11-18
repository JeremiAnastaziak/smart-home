import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import AlarmDetails from '../AlarmDetails';
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
                            <Dashboard />
                        </div>
                    )}
                />
                <Route
                    exact
                    path="/alarms/:alarm"
                    component={routerParams => (
                        <div>
                            <Header
                                showIconLeft={routerParams.match.params.alarm}
                                alarmType={routerParams.match.params.alarm}
                            />
                            <AlarmDetails
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
