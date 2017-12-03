import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import DashboardAlarm from '../DashboardAlarm';
import Header from '../Header';
import SideBar from '../SideBar';

const Router = () => {
    const handles = [
        { name: 'Pierwsza klamka'},
        { name: 'Druga klamka'}
    ]
    return (
        <div>
            <SideBar handles={handles}/>
            <HashRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={DashboardMain} />
                    <Route exact path="/alarms/:alarm" component={DashboardAlarm} />
                </div>
            </HashRouter>
        </div>
    );
};

export default Router;
