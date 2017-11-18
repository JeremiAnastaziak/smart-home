import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import AlarmDetails from '../AlarmDetails';

const Router = () => {
    return (
        <HashRouter>
                <div>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Dashboard
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/alarms/:alarm"
                        component={routerParams => (
                            <AlarmDetails
                                alarmType={routerParams.match.params.alarm}
                            />
                        )}
                    />
                </div>
        </HashRouter>
    );
};

export default Router;
;
