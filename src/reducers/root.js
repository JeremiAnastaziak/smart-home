import { combineReducers } from 'redux';

import paginationReducer from './pagination-reducer';
import recordsReducer from './records-reducer';

export default combineReducers({
    pagination: paginationReducer,
    records: recordsReducer
})
