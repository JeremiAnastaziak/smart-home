import { combineReducers } from 'redux';

import dashboardReducer from './dashboard-reducer';
import userReducer from './user-reducer';
import notificationReducer from './notification-reducer';
import deviceReducer from './device-reducer';
import graphReducer from './graph-reducer';
import settingsReducer from './settings-reducer';

const appReducer = combineReducers({
    dashboard: dashboardReducer,
    graphs: graphReducer,
    devices: deviceReducer,
    user: userReducer,
    settings: settingsReducer,
    notification: notificationReducer
})

export default (state, action) => {
    return appReducer(state, action)
}
