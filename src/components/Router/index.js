import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import DashboardMain from '../DashboardMain';
import DashboardAlarm from '../DashboardAlarm';
import Header from '../Header';
import SideBar from '../SideBar';
import Notification from '../Notification';
import Landing from '../Landing';
import { connect } from 'react-redux';
import { loadRecords } from '../../actions/dashboard-actions';

const mapStateToProps = ({ user }) => {
    return {
        isAuth: user.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserAuth: () => dispatch(loadRecords)
    }
}

const Router = ({ isAuth }) => {
    const handles = [{ name: 'Pierwsza klamka' }, { name: 'Druga klamka' }];
    return (
        <div>
            <SideBar handles={handles} />
            <HashRouter>
                <div>
                    <Header />
                    {!isAuth && (
                        <div class="unAuthRoutes">
                            <Route exact path="/" component={Landing} />
                        </div>
                    )}
                    {isAuth && (
                        <div class="authRoutes">
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

export default connect(mapStateToProps, )(Router);
