import { combineReducers } from 'redux';

import dashboardReducer from './dashboard-reducer';
import dashboardAlarmReducer from './dashboard-alarm-reducer';
import userReducer from './user-reducer';

export default combineReducers({
    dashboard: dashboardReducer,
    dashboardAlarm: dashboardAlarmReducer,
    user: userReducer
})
