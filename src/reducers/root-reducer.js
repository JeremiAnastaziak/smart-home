import { combineReducers } from 'redux';

import dashboardReducer from './dashboard-reducer';
import dashboardAlarmReducer from './dashboard-alarm-reducer';

export default combineReducers({
    dashboard: dashboardReducer,
    dashboardAlarm: dashboardAlarmReducer
})
