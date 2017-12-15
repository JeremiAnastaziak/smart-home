import { combineReducers } from 'redux';

import dashboardReducer from './dashboard-reducer';
import userReducer from './user-reducer';
import notificationReducer from './notification-reducer';
import deviceReducer from './device-reducer';
import graphReducer from './graph-reducer';

export default combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
    notification: notificationReducer,
    devices: deviceReducer,
    graphs: graphReducer
})
