import { combineReducers } from 'redux';

import dashboardReducer from './dashboard-reducer';
import recordsReducer from './records-reducer';

export default combineReducers({
    dashboard: dashboardReducer,
    records: recordsReducer
})
